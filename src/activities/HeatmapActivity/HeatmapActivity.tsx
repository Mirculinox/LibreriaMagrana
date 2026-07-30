import { useState, useEffect, useRef } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { resolveImageUrl, isPinCorrect } from '../utils';

export interface HeatmapSlide {
  question: {
    image_url: string | null;
    correct_x: number | null;
    correct_y: number | null;
    radius?: number;
  };
}

export interface HeatmapActivityProps {
  slide: HeatmapSlide;
  onNext: (
    score: number,
    maxScore: number,
    responseData: { pin: { x: number; y: number } | null },
    isCorrect: boolean
  ) => void;
  /**
   * URL base del servidor para resolver imágenes relativas.
   * @example 'https://api.mi-app.com'
   * @default ''
   */
  baseUrl?: string;
}

/**
 * Actividad de Mapa de Calor.
 *
 * El alumno puede hacer zoom en la imagen y luego colocar un pin
 * en la zona que considera correcta.
 *
 * Migrado y generalizado desde Actimagen/frontend.
 *
 * @example
 * <HeatmapActivity
 *   slide={currentSlide}
 *   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
 *   baseUrl="https://api.mi-app.com"
 * />
 */
export function HeatmapActivity({ slide, onNext, baseUrl = '' }: HeatmapActivityProps) {
  const [pin, setPin]               = useState<{ x: number; y: number } | null>(null);
  const [mode, setMode]             = useState<'zoom' | 'pin'>('zoom');
  const [showResults, setShowResults] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setPin(null);
    setMode('zoom');
    setShowResults(false);
  }, [slide]);

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current || showResults) return;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPin({ x, y });
  };

  const targetRadius = slide.question.radius ?? 10;
  const isCorrect = !!(
    showResults &&
    pin &&
    slide.question.correct_x !== null &&
    slide.question.correct_y !== null &&
    isPinCorrect(pin, { x: slide.question.correct_x, y: slide.question.correct_y, radius: targetRadius })
  );

  const imageUrl = resolveImageUrl(slide.question.image_url, baseUrl);

  const panelStyle: React.CSSProperties = {
    background: 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
    backdropFilter: 'blur(16px)',
    border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
    borderRadius: '20px',
    boxShadow: 'var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))',
    padding: '1rem',
    width: '100%',
    maxWidth: '800px',
  };

  const modeButtonStyle = (active: boolean, activeColor: string): React.CSSProperties => ({
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: 'none',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: active ? activeColor : 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
    color: active ? 'white' : 'var(--magrana-text, #F8FAFC)',
    boxShadow: active ? `0 4px 12px ${activeColor}55` : 'none',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
      <div style={panelStyle}>
        {/* Selector de modo */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center' }}>
          <button onClick={() => setMode('zoom')} style={modeButtonStyle(mode === 'zoom', '#8b5cf6')}>
            🔍 Zoom
          </button>
          <button onClick={() => setMode('pin')} style={modeButtonStyle(mode === 'pin', '#EF4444')}>
            📍 Poner Pin
          </button>
        </div>

        {/* Área de imagen */}
        <div style={{
          position: 'relative',
          width: '100%',
          background: '#111',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {mode === 'zoom' ? (
            <TransformWrapper minScale={1} maxScale={6} centerZoomedOut wheel={{ step: 0.1 }}>
              <TransformComponent
                wrapperStyle={{ width: '100%', height: '100%' }}
                contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt="Mapa de calor"
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    draggable={false}
                  />
                )}
              </TransformComponent>
            </TransformWrapper>
          ) : (
            <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {imageUrl && (
                <img
                  ref={imageRef}
                  src={imageUrl}
                  alt="Mapa de calor — modo pin"
                  onClick={handleImageClick}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    cursor: showResults ? 'default' : 'crosshair',
                  }}
                  draggable={false}
                />
              )}

              {/* Pin del alumno */}
              {pin && (
                <div style={{
                  position: 'absolute',
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  background: showResults
                    ? (isCorrect ? '#10B981' : '#EF4444')
                    : 'rgba(255,255,255,0.8)',
                  borderRadius: '50%',
                  border: '3px solid white',
                  boxShadow: '0 0 0 2px rgba(0,0,0,0.5)',
                  pointerEvents: 'none',
                  transition: 'background 0.3s ease',
                }} />
              )}

              {/* Zona correcta (solo en resultados) */}
              {showResults && slide.question.correct_x !== null && slide.question.correct_y !== null && (
                <div style={{
                  position: 'absolute',
                  left: `${slide.question.correct_x}%`,
                  top: `${slide.question.correct_y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: `${targetRadius * 2}%`,
                  height: `${targetRadius * 2}%`,
                  aspectRatio: '1 / 1',
                  borderRadius: '50%',
                  border: '3px dashed #10B981',
                  backgroundColor: 'rgba(16, 185, 129, 0.25)',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
                  pointerEvents: 'none',
                }} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Botón / Resultado */}
      {!showResults ? (
        <button
          onClick={() => setShowResults(true)}
          style={{
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            borderRadius: '12px',
            border: 'none',
            background: 'var(--magrana-primary, #FB7185)',
            color: 'white',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(251,113,133,0.35)',
            transition: 'all 0.2s ease',
          }}
        >
          Comprobar / Saltar
        </button>
      ) : (
        <div style={{
          padding: '1.5rem',
          textAlign: 'center',
          background: isCorrect ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
          border: `1px solid ${isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`,
          borderRadius: '20px',
          backdropFilter: 'blur(16px)',
          maxWidth: '500px',
          width: '100%',
        }}>
          <h2 style={{ color: isCorrect ? '#10B981' : '#EF4444', marginBottom: '1rem' }}>
            {isCorrect ? '¡Correcto! ✅' : 'Incorrecto ❌'}
          </h2>
          <button
            onClick={() => onNext(isCorrect ? 1 : 0, 1, { pin }, isCorrect)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '12px',
              border: 'none',
              background: 'var(--magrana-primary, #FB7185)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Siguiente Diapositiva ➡️
          </button>
        </div>
      )}
    </div>
  );
}
