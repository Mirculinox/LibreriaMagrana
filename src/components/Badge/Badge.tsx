import React from 'react';

type BadgeColor = 'primary' | 'orange' | 'magenta' | 'emerald' | 'purple' | 'blue' | 'neutral';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  children: React.ReactNode;
}

const colorMap: Record<BadgeColor, { bg: string; text: string }> = {
  primary:  { bg: 'rgba(251, 113, 133, 0.18)', text: '#FB7185' },
  orange:   { bg: 'rgba(249, 115, 22, 0.18)',  text: '#f97316' },
  magenta:  { bg: 'rgba(217, 70, 239, 0.18)',  text: '#d946ef' },
  emerald:  { bg: 'rgba(16, 185, 129, 0.18)',  text: '#10b981' },
  purple:   { bg: 'rgba(139, 92, 246, 0.18)',  text: '#8b5cf6' },
  blue:     { bg: 'rgba(14, 165, 233, 0.18)',  text: '#0ea5e9' },
  neutral:  { bg: 'rgba(161, 161, 170, 0.18)', text: '#A1A1AA' },
};

/**
 * Chip de etiqueta para niveles educativos, categorías y estados.
 *
 * @example
 * <Badge color="emerald">Secundaria</Badge>
 * <Badge color="purple">IA</Badge>
 */
export function Badge({ color = 'neutral', children, style, ...rest }: BadgeProps) {
  const { bg, text } = colorMap[color];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '0.2rem 0.65rem',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 600,
        fontFamily: 'var(--magrana-font, Inter, sans-serif)',
        letterSpacing: '0.01em',
        background: bg,
        color: text,
        border: `1px solid ${text}33`,
        userSelect: 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
