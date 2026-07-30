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
    onNext: (score: number, maxScore: number, responseData: {
        placements: Record<string, string>;
        selectedDefs: Record<string, string>;
    }, isCorrect: boolean) => void;
    /**
     * URL base del servidor para resolver imágenes relativas.
     * @example 'https://mi-api.magrana.com'
     * @default ''
     */
    baseUrl?: string;
}
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
export declare function DragDropActivity({ slide, onNext, baseUrl }: DragDropActivityProps): import("react").JSX.Element;
