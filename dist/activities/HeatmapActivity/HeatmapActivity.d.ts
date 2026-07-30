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
    onNext: (score: number, maxScore: number, responseData: {
        pin: {
            x: number;
            y: number;
        } | null;
    }, isCorrect: boolean) => void;
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
export declare function HeatmapActivity({ slide, onNext, baseUrl }: HeatmapActivityProps): import("react").JSX.Element;
