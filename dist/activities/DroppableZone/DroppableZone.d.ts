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
export declare function DroppableZone({ id, x, y, isOccupied, showResults, isCorrect }: DroppableZoneProps): import("react").JSX.Element;
export {};
