import React from 'react';

export interface AppSettingsExtraItem {
  /** Titulo de la fila extra */
  label: string;
  /** Descripcion breve */
  description: string;
  /** Icono React (cualquier elemento) */
  icon: React.ReactNode;
  /** Si tiene toggle: valor actual */
  toggleValue?: boolean;
  /** Si tiene toggle: callback */
  onToggle?: () => void;
}

export interface AppSettingsModalProps {
  /** Si el modal esta visible */
  isOpen: boolean;
  /** Cerrar el modal */
  onClose: () => void;
  /** Nombre de la app (ej: "Magrana Colab v1.0") */
  appName: string;
  /** Descripcion de la app */
  appDescription: string;
  /** Icono de la app (React element) */
  appIcon: React.ReactNode;
  /** Color de acento de la app (boton cerrar, iconos) */
  accentColor?: string;
  /** Si el modo oscuro esta activo */
  isDarkMode: boolean;
  /** Callback para alternar modo oscuro */
  onToggleDarkMode: () => void;
  /** Filas extra de configuracion especificas de la app */
  extraItems?: AppSettingsExtraItem[];
}

/**
 * Modal de Configuracion Global estandarizado para todas las apps Magrana.
 * Incluye toggle de tema y filas de configuracion opcionales por app.
 *
 * @example
 * <AppSettingsModal
 *   isOpen={isSettingsOpen}
 *   onClose={() => setIsSettingsOpen(false)}
 *   appName="Magrana Colab v1.0"
 *   appDescription="Mapas conceptuales colaborativos."
 *   appIcon={<Share2 size={20} />}
 *   accentColor="#0284c7"
 *   isDarkMode={isDarkMode}
 *   onToggleDarkMode={toggleDarkMode}
 * />
 */
export function AppSettingsModal({
  isOpen,
  onClose,
  appName,
  appDescription,
  appIcon,
  accentColor = '#6366f1',
  isDarkMode,
  onToggleDarkMode,
  extraItems = [],
}: AppSettingsModalProps) {
  if (!isOpen) return null;

  const s = {
    // Light-responsive variables via CSS vars set on body
    modal: {
      background: 'var(--magrana-settings-bg, #ffffff)',
      border: '1px solid var(--magrana-settings-border, rgba(30,41,59,0.15))',
      color: 'var(--magrana-settings-text, #0f172a)',
    } as React.CSSProperties,
    header: {
      background: 'var(--magrana-settings-header-bg, #f8fafc)',
      borderBottom: '1px solid var(--magrana-settings-border, rgba(30,41,59,0.12))',
    } as React.CSSProperties,
    row: {
      background: 'var(--magrana-settings-row-bg, rgba(30,41,59,0.04))',
      border: '1px solid var(--magrana-settings-border, rgba(30,41,59,0.1))',
    } as React.CSSProperties,
    footer: {
      background: 'var(--magrana-settings-footer-bg, #f8fafc)',
      borderTop: '1px solid var(--magrana-settings-border, rgba(30,41,59,0.12))',
    } as React.CSSProperties,
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
        padding: '1rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          ...s.modal,
          borderRadius: '1.5rem',
          maxWidth: '480px', width: '100%',
          boxShadow: '8px 8px 0px #1E293B',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'var(--magrana-font, Inter, sans-serif)',
        }}
      >
        {/* Header */}
        <div style={{ ...s.header, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ color: accentColor }}>⚙</span>
            Configuración Global
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(30,41,59,0.08)', border: '1px solid rgba(30,41,59,0.12)',
              borderRadius: '8px', width: '32px', height: '32px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '1rem', color: 'var(--magrana-settings-text, #0f172a)',
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
          {/* Toggle Tema */}
          <div style={{ ...s.row, borderRadius: '0.875rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>{isDarkMode ? '🌙' : '☀️'}</span> Tema Visual
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '0.2rem', opacity: 0.7 }}>
                {isDarkMode ? 'Modo Noche (Oscuro)' : 'Modo Luz (Claro)'}
              </div>
            </div>
            <button
              onClick={onToggleDarkMode}
              style={{
                width: '48px', height: '26px', borderRadius: '9999px',
                border: 'none', padding: '3px',
                background: isDarkMode ? accentColor : '#CBD5E1',
                cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0,
              }}
            >
              <div style={{
                width: '20px', height: '20px', borderRadius: '50%', background: 'white',
                transform: isDarkMode ? 'translateX(22px)' : 'translateX(0)',
                transition: 'transform 0.2s',
              }} />
            </button>
          </div>

          {/* Info de la app */}
          <div style={{ ...s.row, borderRadius: '0.875rem', padding: '0.875rem 1rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: accentColor }}>{appIcon}</span> {appName}
            </div>
            <div style={{ fontSize: '0.75rem', marginTop: '0.35rem', opacity: 0.7, lineHeight: 1.5 }}>
              {appDescription}
            </div>
          </div>

          {/* Filas extra (especificas de la app) */}
          {extraItems.map((item, i) => (
            <div key={i} style={{ ...s.row, borderRadius: '0.875rem', padding: '0.875rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: accentColor }}>{item.icon}</span> {item.label}
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '0.2rem', opacity: 0.7 }}>{item.description}</div>
              </div>
              {item.onToggle !== undefined && (
                <button
                  onClick={item.onToggle}
                  style={{
                    width: '48px', height: '26px', borderRadius: '9999px',
                    border: 'none', padding: '3px',
                    background: item.toggleValue ? accentColor : '#CBD5E1',
                    cursor: 'pointer', transition: 'background 0.2s', flexShrink: 0,
                  }}
                >
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', background: 'white',
                    transform: item.toggleValue ? 'translateX(22px)' : 'translateX(0)',
                    transition: 'transform 0.2s',
                  }} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ ...s.footer, padding: '1rem 1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              background: accentColor, color: 'white', border: 'none',
              borderRadius: '10px', padding: '0.6rem 1.5rem',
              fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
