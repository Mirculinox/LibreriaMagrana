import { useState, useEffect } from 'react';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { DroppableZone } from '../DroppableZone/DroppableZone';
import { DraggableItem } from '../DraggableItem/DraggableItem';
import { resolveImageUrl } from '../utils';

// ─── Tipos ──────────────────────────────────────────────────────────────────

export interface DropZone {
  id: string | number;
  item_name: string;
  x_coord?: number;
  y_coord?: number;
  /** Alias opcionales cuando los datos vienen procesados por StudentActivity */
  x?: number;
  y?: number;
}

export interface Definition {
  id: string | number;
  number: number;
  text: string;
  /** Número de visualización tras el shuffle */
  display_number?: number;
}

export interface DragDropSlide {
  question: {
    image_url: string | null;
  };
  /** Zonas en orden original (para calcular corrección) */
  originalZones: DropZone[];
  /** Zonas en orden aleatorio (para renderizar los ítems arrastrables) */
  dropZones: DropZone[];
  /** Definiciones en orden original */
  originalDefs: Definition[];
  /** Definiciones en orden aleatorio (con display_number) */
  definitions: Definition[];
}

export interface DragDropActivityProps {
  slide: DragDropSlide;
  onNext: (
    score: number,
    maxScore: number,
    responseData: { placements: Record<string, string>; selectedDefs: Record<string, string> },
    isCorrect: boolean
  ) => void;
  /**
   * URL base del servidor para resolver imágenes relativas.
   * @example 'https://mi-api.magrana.com'
   * @default ''
   */
  baseUrl?: string;
}

// ─── Componente ──────────────────────────────────────────────────────────────

/**
 * Actividad de Arrastrar y Soltar.
 *
 * El alumno arrastra los ítems a las zonas circulares sobre la imagen.
 * Opcionalmente, si el slide tiene definiciones, el alumno también debe
 * seleccionar la definición correspondiente a cada zona.
 *
 * Migrado y generalizado desde Actimagen/frontend.
 *
 * @example
 * <DragDropActivity
 *   slide={currentSlide}
 *   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
 *   baseUrl="https://api.mi-app.com"
 * />
 */
export function DragDropActivity({ slide, onNext, baseUrl = '' }: DragDropActivityProps) {
  const [placements, setPlacements]     = useState<Record<string, string>>({});
  const [selectedDefs, setSelectedDefs] = useState<Record<string, string>>({});
  const [showResults, setShowResults]   = useState(false);

  // Resetear estado al cambiar de diapositiva
  useEffect(() => {
    setPlacements({});
    setSelectedDefs({});
    setShowResults(false);
  }, [slide]);

  const handleDragEnd = (event: DragEndEvent) => {
    if (showResults) return;
    const { active, over } = event;
    if (over && !placements[over.id]) {
      setPlacements({ ...placements, [over.id]: String(active.id) });
    }
  };

  const placedItemIds  = Object.values(placements);
  const availableItems = slide.dropZones.filter(z => !placedItemIds.includes(String(z.id)));
  const requireDefs    = slide.definitions.length > 0;
  const allPlaced      = placedItemIds.length === slide.dropZones.length;
  const allDefsSelected = !requireDefs || Object.keys(selectedDefs).length === slide.dropZones.length;

  // Cálculo de puntuación
  let slideScore = 0;
  const slideTotal = slide.dropZones.length * (requireDefs ? 2 : 1);

  if (showResults) {
    Object.entries(placements).forEach(([zoneId, itemId]) => {
      const itemCorrect = itemId === zoneId;
      if (itemCorrect) slideScore++;

      if (requireDefs) {
        const origIdx = slide.originalZones.findIndex(z => String(z.id) === zoneId);
        const correctDef = slide.originalDefs[origIdx];
        const defCorrect = correctDef
          ? selectedDefs[zoneId] === String(correctDef.id)
          : true;
        if (defCorrect) slideScore++;
      }
    });
  }

  const imageUrl = resolveImageUrl(slide.question.image_url, baseUrl);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>

        {/* Imagen con zonas encima */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
          <div style={{
            position: 'relative',
            display: 'inline-block',
            padding: 0,
            borderRadius: '16px',
            overflow: 'hidden',
            background: 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
            boxShadow: 'var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))',
            maxWidth: '100%',
          }}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Actividad"
                style={{ maxHeight: '70vh', maxWidth: '100%', width: 'auto', display: 'block', borderRadius: '16px' }}
                draggable={false}
              />
            )}

            {/* Zonas droppables */}
            {slide.originalZones.map(zone => {
              const isOccupied = !!placements[String(zone.id)];
              const isCorrect  = showResults && isOccupied && placements[String(zone.id)] === String(zone.id);
              const x = zone.x_coord !== undefined ? zone.x_coord : (zone.x ?? 0);
              const y = zone.y_coord !== undefined ? zone.y_coord : (zone.y ?? 0);
              return (
                <DroppableZone
                  key={zone.id}
                  id={String(zone.id)}
                  x={x}
                  y={y}
                  isOccupied={isOccupied}
                  showResults={showResults}
                  isCorrect={isCorrect}
                />
              );
            })}

            {/* Ítems ya colocados */}
            {Object.entries(placements).map(([zoneId, itemId]) => {
              const zone = slide.originalZones.find(z => String(z.id) === zoneId);
              const item = slide.originalZones.find(z => String(z.id) === itemId);
              if (!zone || !item) return null;

              const itemCorrect = showResults && itemId === zoneId;
              const origIdx     = slide.originalZones.findIndex(z => String(z.id) === zoneId);
              const defCorrect  = showResults && requireDefs
                ? (slide.originalDefs[origIdx]
                    ? selectedDefs[zoneId] === String(slide.originalDefs[origIdx].id)
                    : true)
                : false;
              const isFullyCorrect = requireDefs ? (itemCorrect && defCorrect) : itemCorrect;

              const zx = zone.x_coord !== undefined ? zone.x_coord : (zone.x ?? 0);
              const zy = zone.y_coord !== undefined ? zone.y_coord : (zone.y ?? 0);

              return (
                <div
                  key={`placed-${zoneId}`}
                  style={{
                    position: 'absolute',
                    left: `${zx}%`,
                    top: `${zy}%`,
                    transform: 'translate(-50%, calc(-100% - 25px))',
                    background: 'var(--magrana-card, #141414)',
                    borderRadius: '8px',
                    border: `2px solid ${showResults ? (isFullyCorrect ? '#10B981' : '#EF4444') : 'var(--magrana-primary, #FB7185)'}`,
                    zIndex: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    alignItems: 'center',
                    padding: '0.5rem',
                    minWidth: '100px',
                  }}
                >
                  <span style={{ fontWeight: 'bold', fontSize: '0.875rem', color: showResults && !itemCorrect ? '#EF4444' : 'var(--magrana-text, #F8FAFC)' }}>
                    {item.item_name}
                  </span>

                  {requireDefs && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                      <select
                        value={selectedDefs[zoneId] || ''}
                        onChange={(e) => !showResults && setSelectedDefs({ ...selectedDefs, [zoneId]: e.target.value })}
                        disabled={showResults}
                        style={{
                          flex: 1,
                          padding: '0.25rem',
                          background: 'var(--magrana-surface, #0A0A0A)',
                          color: 'var(--magrana-text, #F8FAFC)',
                          border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
                          borderRadius: '4px',
                          fontSize: '0.8rem',
                        }}
                      >
                        <option value="" disabled>Definición...</option>
                        {slide.definitions.map(def => (
                          <option key={def.id} value={String(def.id)}>
                            {def.display_number ?? def.number}
                          </option>
                        ))}
                      </select>
                      {showResults && <span>{defCorrect ? '✅' : '❌'}</span>}
                    </div>
                  )}

                  {!showResults && (
                    <button
                      onClick={() => {
                        const np = { ...placements }; delete np[zoneId]; setPlacements(np);
                        const nd = { ...selectedDefs }; delete nd[zoneId]; setSelectedDefs(nd);
                      }}
                      style={{
                        width: '100%', padding: '0.2rem',
                        background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444',
                        border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.75rem',
                      }}
                    >
                      Quitar
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Panel lateral: ítems + definiciones + botón */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Ítems disponibles */}
          <div style={{
            padding: '1.5rem',
            background: 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
            borderRadius: '20px',
          }}>
            <h3 style={{ margin: 0, marginBottom: '1rem', color: 'var(--magrana-text, #F8FAFC)', fontSize: '1rem' }}>
              Elementos a arrastrar
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {availableItems.map(item => (
                <DraggableItem key={item.id} id={String(item.id)} name={item.item_name} disabled={showResults} />
              ))}
              {availableItems.length === 0 && (
                <p style={{ color: 'var(--magrana-text-muted, #A1A1AA)', fontSize: '0.875rem' }}>
                  Todos los elementos están colocados.
                </p>
              )}
            </div>
          </div>

          {/* Definiciones (opcional) */}
          {requireDefs && (
            <div style={{
              padding: '1.5rem',
              background: 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
              backdropFilter: 'blur(16px)',
              border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
              borderRadius: '20px',
              flex: 1,
              overflowY: 'auto',
            }}>
              <h3 style={{ margin: 0, marginBottom: '1rem', color: 'var(--magrana-text, #F8FAFC)', fontSize: '1rem' }}>
                Definiciones
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {slide.definitions.map(def => (
                  <li key={def.id} style={{ marginBottom: '0.75rem', fontSize: '0.875rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <span style={{
                      background: 'var(--magrana-primary, #FB7185)',
                      color: 'white',
                      padding: '0.1rem 0.45rem',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      flexShrink: 0,
                    }}>
                      {def.display_number ?? def.number}
                    </span>
                    <span style={{ color: 'var(--magrana-text, #F8FAFC)' }}>{def.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Botón de acción */}
          {!showResults ? (
            <button
              onClick={() => setShowResults(true)}
              disabled={!allPlaced || !allDefsSelected}
              style={{
                padding: '0.9rem 2rem',
                borderRadius: '12px',
                border: 'none',
                background: allPlaced && allDefsSelected
                  ? 'var(--magrana-primary, #FB7185)'
                  : 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
                color: allPlaced && allDefsSelected ? 'white' : 'var(--magrana-text-muted, #A1A1AA)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: allPlaced && allDefsSelected ? 'pointer' : 'not-allowed',
                transition: 'all 0.3s ease',
                boxShadow: allPlaced && allDefsSelected ? '0 4px 15px rgba(251,113,133,0.35)' : 'none',
              }}
            >
              Comprobar Resultados / Saltar
            </button>
          ) : (
            <div style={{
              padding: '1.5rem',
              textAlign: 'center',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '20px',
            }}>
              <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#10B981' }}>
                Puntuación: {slideScore} / {slideTotal}
              </p>
              <button
                onClick={() => onNext(slideScore, slideTotal, { placements, selectedDefs }, slideScore === slideTotal)}
                style={{
                  width: '100%', padding: '0.75rem',
                  borderRadius: '12px', border: 'none',
                  background: 'var(--magrana-primary, #FB7185)', color: 'white',
                  fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
                }}
              >
                Siguiente Diapositiva ➡️
              </button>
            </div>
          )}
        </div>
      </div>
    </DndContext>
  );
}
