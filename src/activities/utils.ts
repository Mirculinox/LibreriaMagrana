/**
 * @magrana/ui — Utilidades compartidas para componentes de actividad
 */

/**
 * Mezcla aleatoriamente los elementos de un array (Fisher-Yates shuffle).
 * Migrado desde Actimagen/frontend/src/components/activities/utils.js
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Resuelve una URL de imagen que puede ser relativa o absoluta.
 * @param imageUrl - La URL guardada en base de datos
 * @param baseUrl - La URL base del servidor (ej: 'https://mi-api.com'). Por defecto ''
 */
export function resolveImageUrl(imageUrl: string | null | undefined, baseUrl = ''): string {
  if (!imageUrl) return '';
  if (imageUrl.startsWith('http') || imageUrl.startsWith('blob')) return imageUrl;
  return `${baseUrl}${imageUrl}`;
}

/**
 * Calcula si un pin está dentro de la zona circular correcta de un mapa de calor.
 */
export function isPinCorrect(
  pin: { x: number; y: number },
  correct: { x: number; y: number; radius: number }
): boolean {
  const dx = pin.x - correct.x;
  const dy = pin.y - correct.y;
  return Math.sqrt(dx * dx + dy * dy) <= correct.radius;
}
