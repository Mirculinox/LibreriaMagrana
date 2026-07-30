/**
 * @magrana/ui — Librería de componentes compartidos del ecosistema Magrana Edu
 *
 * ─── Uso básico ─────────────────────────────────────────────────────────────
 *
 * 1. Instalar en tu app (package.json):
 *    "@magrana/ui": "file:../../packages/magrana-ui"
 *
 * 2. (Opcional) Importar los tokens CSS en tu entry point:
 *    import '@magrana/ui/tokens';
 *    // O si no tienes el export configurado:
 *    import '../../packages/magrana-ui/src/tokens/index.css';
 *
 * 3. Usar los componentes:
 *    import { Button, Card, HeatmapActivity } from '@magrana/ui';
 *
 * ────────────────────────────────────────────────────────────────────────────
 */

// ─── Componentes UI Básicos ──────────────────────────────────────────────────
export { Button }                  from './components/Button/Button';
export { Card }                    from './components/Card/Card';
export { Badge }                   from './components/Badge/Badge';

// ─── Componentes de Actividad ────────────────────────────────────────────────
export { DroppableZone }           from './activities/DroppableZone/DroppableZone';
export { DraggableItem }           from './activities/DraggableItem/DraggableItem';
export { DragDropActivity }        from './activities/DragDropActivity/DragDropActivity';
export { HeatmapActivity }         from './activities/HeatmapActivity/HeatmapActivity';

// ─── Utilidades ──────────────────────────────────────────────────────────────
export { shuffleArray, resolveImageUrl, isPinCorrect } from './activities/utils';

// ─── Tipos exportados ────────────────────────────────────────────────────────
export type { DropZone, Definition, DragDropSlide, DragDropActivityProps } from './activities/DragDropActivity/DragDropActivity';
export type { HeatmapSlide, HeatmapActivityProps }                         from './activities/HeatmapActivity/HeatmapActivity';
