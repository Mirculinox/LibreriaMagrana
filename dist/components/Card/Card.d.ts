import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Aplicar efecto glassmorphism completo (backdrop-blur) */
    glass?: boolean;
    /** Padding interno del card */
    padding?: string;
    children: React.ReactNode;
}
/**
 * Contenedor tarjeta del ecosistema Magrana.
 * Soporta efecto glassmorphism igual al `.glass-panel` de las apps existentes.
 *
 * @example
 * <Card glass padding="2rem">
 *   <h2>Título</h2>
 * </Card>
 */
export declare function Card({ glass, padding, children, style, ...rest }: CardProps): React.JSX.Element;
export {};
