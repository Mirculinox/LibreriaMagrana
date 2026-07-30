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
export function Card({ glass = true, padding = '1.5rem', children, style, ...rest }: CardProps) {
  const cardStyle: React.CSSProperties = {
    background: glass
      ? 'var(--magrana-glass-bg, rgba(40,40,40,0.75))'
      : 'var(--magrana-card, #141414)',
    backdropFilter: glass ? 'blur(16px)' : undefined,
    WebkitBackdropFilter: glass ? 'blur(16px)' : undefined,
    border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
    borderRadius: 'var(--magrana-radius-lg, 20px)',
    boxShadow: 'var(--magrana-shadow-card, 0 10px 30px rgba(0,0,0,0.4))',
    padding,
    ...style,
  };

  return (
    <div style={cardStyle} {...rest}>
      {children}
    </div>
  );
}
