interface DraggableItemProps {
    /** ID único del ítem (debe coincidir con el ID de su zona correcta) */
    id: string | number;
    /** Texto a mostrar en el chip arrastrable */
    name: string;
    /** Si está deshabilitado (no se puede arrastrar) */
    disabled?: boolean;
}
/**
 * Elemento que el alumno puede arrastrar hacia una `DroppableZone`.
 *
 * Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
 *
 * @example
 * <DraggableItem id="item-1" name="Bisturí" />
 */
export declare function DraggableItem({ id, name, disabled }: DraggableItemProps): import("react").JSX.Element;
export {};
