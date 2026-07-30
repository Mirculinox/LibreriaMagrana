/**
 * @magrana/ui — Utilidades compartidas para componentes de actividad
 */
/**
 * Mezcla aleatoriamente los elementos de un array (Fisher-Yates shuffle).
 * Migrado desde Actimagen/frontend/src/components/activities/utils.js
 */
export declare function shuffleArray<T>(array: T[]): T[];
/**
 * Resuelve una URL de imagen que puede ser relativa o absoluta.
 * @param imageUrl - La URL guardada en base de datos
 * @param baseUrl - La URL base del servidor (ej: 'https://mi-api.com'). Por defecto ''
 */
export declare function resolveImageUrl(imageUrl: string | null | undefined, baseUrl?: string): string;
/**
 * Calcula si un pin está dentro de la zona circular correcta de un mapa de calor.
 */
export declare function isPinCorrect(pin: {
    x: number;
    y: number;
}, correct: {
    x: number;
    y: number;
    radius: number;
}): boolean;
