import { useDroppable } from '@dnd-kit/core';

interface DroppableZoneProps {
  /** ID único de la zona (coincide con el ID del item correcto) */
  id: string;
  /** Posición X en porcentaje sobre la imagen */
  x: number;
  /** Posición Y en porcentaje sobre la imagen */
  y: number;
  /** Si hay un elemento colocado en esta zona */
  isOccupied?: boolean;
  /** Si se deben mostrar colores de resultado */
  showResults?: boolean;
  /** Si el elemento colocado es correcto (sólo relevante cuando showResults=true) */
  isCorrect?: boolean;
}

/**
 * Zona circular donde el alumno puede soltar un elemento arrastrable.
 * Se renderiza encima de una imagen con posicionamiento absoluto en %.
 *
 * Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
 *
 * @example
 * <DndContext onDragEnd={handleDragEnd}>
 *   <div style={{ position: 'relative' }}>
 *     <img src="..." style={{ width: '100%' }} />
 *     <DroppableZone id="zone-1" x={45} y={30} />
 *   </div>
 * </DndContext>
 */
export function DroppableZone({ id, x, y, isOccupied = false, showResults = false, isCorrect = false }: DroppableZoneProps) {
  const { isOver, setNodeRef } = useDroppable({ id, disabled: showResults });

  let borderColor = isOver ? '#FCD34D' : '#F59E0B';
  let bgColor     = isOver ? 'rgba(252, 211, 77, 0.75)' : (isOccupied ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.65)');
  let borderStyle = isOver ? '4px solid' : '3px dashed';
  let scale       = isOver ? 'scale(1.4)' : 'scale(1)';
  let zIndex      = isOver ? 500 : 10;

  if (showResults) {
    borderColor = isCorrect ? '#10B981' : '#EF4444';
    bgColor     = isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)';
    borderStyle = '4px solid';
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-50%, -50%) ${scale}`,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        border: `${borderStyle} ${borderColor}`,
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex,
        boxShadow: isOver
          ? '0 0 30px #FCD34D, 0 0 15px #F59E0B'
          : '0 0 15px rgba(0,0,0,0.4), inset 0 0 10px rgba(255,255,255,0.5)',
        backdropFilter: 'blur(4px)',
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.2s ease, border 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {!isOccupied && !showResults && (
        <span style={{ fontSize: '1.4rem', opacity: isOver ? 1 : 0.85, filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.5))' }}>
          🎯
        </span>
      )}
      {isOccupied && (
        <div style={{
          width: '22px',
          height: '22px',
          background: showResults ? borderColor : 'var(--magrana-primary, #FB7185)',
          borderRadius: '50%',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        }} />
      )}
    </div>
  );
}
