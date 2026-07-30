import { default as React } from 'react';
type BadgeColor = 'primary' | 'orange' | 'magenta' | 'emerald' | 'purple' | 'blue' | 'neutral';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    color?: BadgeColor;
    children: React.ReactNode;
}
/**
 * Chip de etiqueta para niveles educativos, categorías y estados.
 *
 * @example
 * <Badge color="emerald">Secundaria</Badge>
 * <Badge color="purple">IA</Badge>
 */
export declare function Badge({ color, children, style, ...rest }: BadgeProps): React.JSX.Element;
export {};
