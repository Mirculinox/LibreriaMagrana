import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--magrana-primary, #FB7185)',
    color: 'white',
    border: 'none',
    boxShadow: '0 4px 15px rgba(251, 113, 133, 0.35)',
  },
  secondary: {
    background: 'var(--magrana-glass-bg, rgba(40,40,40,0.75))',
    color: 'var(--magrana-text, #F8FAFC)',
    border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
  },
  danger: {
    background: 'rgba(239, 68, 68, 0.15)',
    color: '#EF4444',
    border: '1px solid #EF4444',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--magrana-text, #F8FAFC)',
    border: '1px solid var(--magrana-glass-border, rgba(255,255,255,0.08))',
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: '0.4rem 0.9rem', fontSize: '0.8125rem', borderRadius: 'var(--magrana-radius-sm, 8px)' },
  md: { padding: '0.6rem 1.4rem', fontSize: '0.9375rem', borderRadius: 'var(--magrana-radius-md, 12px)' },
  lg: { padding: '0.9rem 2rem',   fontSize: '1.0625rem', borderRadius: 'var(--magrana-radius-md, 12px)' },
};

/**
 * Botón estándar del ecosistema Magrana.
 *
 * @example
 * <Button variant="primary" onClick={handleSave}>Guardar</Button>
 * <Button variant="danger" size="sm">Eliminar</Button>
 */
export function Button({
  variant = 'secondary',
  size = 'md',
  loading = false,
  disabled,
  children,
  style,
  ...rest
}: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.4rem',
    fontWeight: 600,
    fontFamily: 'var(--magrana-font, Inter, sans-serif)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled || loading ? 0.6 : 1,
    transition: 'all var(--magrana-transition-normal, 0.3s cubic-bezier(0.4, 0, 0.2, 1))',
    userSelect: 'none',
    letterSpacing: '-0.01em',
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  return (
    <button
      disabled={disabled || loading}
      style={baseStyle}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
          (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
      onMouseDown={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'scale(0.97)';
      }}
      onMouseUp={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
      }}
      {...rest}
    >
      {loading ? '⏳' : children}
    </button>
  );
}
