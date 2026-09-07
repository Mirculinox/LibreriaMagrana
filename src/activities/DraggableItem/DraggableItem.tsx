import { useDraggable } from '@dnd-kit/core';

interface DraggableItemProps {
  /** ID único del ítem (debe coincidir con el ID de su zona correcta) */
  id: string | number;
  /** Texto a mostrar en el chip arrastrable */
  name: string;
  /** Si está deshabilitado (no se puede arrastrar) */
  disabled?: boolean;
  /** Si está seleccionado mediante toque/clic */
  isSelected?: boolean;
  /** Callback al hacer clic/tocar el elemento */
  onSelect?: (id: string) => void;
}

/**
 * Elemento que el alumno puede arrastrar hacia una `DroppableZone`.
 *
 * Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
 *
 * @example
 * <DraggableItem id="item-1" name="Bisturí" />
 */
export function DraggableItem({ id, name, disabled = false, isSelected = false, onSelect }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: String(id), disabled });

  const style: React.CSSProperties = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.04)`,
        zIndex: 9999,
        position: 'relative',
        opacity: 0.85,
        pointerEvents: 'none',
        boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
      }
    : { position: 'relative' };

  return (
    <div
      ref={setNodeRef}
      onClick={() => {
        if (disabled) return;
        onSelect?.(String(id));
      }}
      style={{
        ...style,
        padding: '0.5rem 1rem',
        borderRadius: 'var(--magrana-radius-sm, 8px)',
        background: disabled 
          ? 'rgba(255,255,255,0.05)' 
          : (isSelected ? 'var(--magrana-primary, #FB7185)' : 'var(--magrana-glass-bg, rgba(40,40,40,0.75))'),
        border: `1.5px solid ${disabled ? 'rgba(255,255,255,0.04)' : (isSelected ? '#FCD34D' : 'var(--magrana-primary, #FB7185)')}`,
        color: disabled 
          ? 'var(--magrana-text-muted, #A1A1AA)' 
          : (isSelected ? '#FFFFFF' : 'var(--magrana-text, #F8FAFC)'),
        fontWeight: 600,
        fontSize: '0.875rem',
        fontFamily: 'var(--magrana-font, Inter, sans-serif)',
        cursor: disabled ? 'default' : isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        touchAction: 'none',
        transition: 'box-shadow 0.2s ease, opacity 0.2s ease, transform 0.15s ease, background 0.2s ease',
        backdropFilter: 'blur(8px)',
        boxShadow: isSelected 
          ? '0 0 16px rgba(251, 113, 133, 0.6), 0 4px 12px rgba(0,0,0,0.3)' 
          : (isDragging ? '0 14px 28px rgba(0,0,0,0.5)' : '0 4px 10px rgba(0,0,0,0.15)'),
        transform: isSelected && !transform ? 'scale(1.04)' : style.transform,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.4rem',
      }}
      {...(disabled ? {} : listeners)}
      {...attributes}
    >
      <span>{isSelected ? '👉' : '⠿'}</span>
      <span>{name}</span>
    </div>
  );
}
