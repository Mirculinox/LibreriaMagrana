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

  const bgModal = isDarkMode ? '#0f172a' : '#ffffff';
  const borderModal = isDarkMode ? '#334155' : '#e2e8f0';
  const textPrimary = isDarkMode ? '#f8fafc' : '#0f172a';
  const textSecondary = isDarkMode ? '#94a3b8' : '#64748b';
  const bgHeader = isDarkMode ? '#1e293b' : '#f8fafc';
  const bgRow = isDarkMode ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc';
  const borderRow = isDarkMode ? '#334155' : '#e2e8f0';
  const bgFooter = isDarkMode ? '#1e293b' : '#f8fafc';
  const closeBtnBg = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0';
  const closeBtnText = isDarkMode ? '#f8fafc' : '#334155';

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        padding: '1rem',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: bgModal,
          border: `1px solid ${borderModal}`,
          borderRadius: '1.5rem',
          maxWidth: '480px',
          width: '100%',
          boxShadow: isDarkMode 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
            : '8px 8px 0px #1E293B, 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          color: textPrimary,
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: bgHeader,
            borderBottom: `1px solid ${borderModal}`,
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: '1.25rem',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: textPrimary,
            }}
          >
            <span style={{ color: accentColor }}>⚙</span>
            Configuración Global
          </h2>
          <button
            onClick={onClose}
            style={{
              backgroundColor: closeBtnBg,
              border: 'none',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1rem',
              color: closeBtnText,
              fontWeight: 'bold',
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.875rem',
            backgroundColor: bgModal,
          }}
        >
          {/* Toggle Tema */}
          <div
            style={{
              backgroundColor: bgRow,
              border: `1px solid ${borderRow}`,
              borderRadius: '0.875rem',
              padding: '0.875rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: textPrimary,
                }}
              >
                <span>{isDarkMode ? '🌙' : '☀️'}</span> Tema Visual
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  marginTop: '0.2rem',
                  color: textSecondary,
                }}
              >
                {isDarkMode ? 'Modo Noche (Oscuro)' : 'Modo Luz (Claro)'}
              </div>
            </div>
            <button
              onClick={onToggleDarkMode}
              style={{
                width: '48px',
                height: '26px',
                borderRadius: '9999px',
                border: 'none',
                padding: '3px',
                backgroundColor: isDarkMode ? accentColor : '#cbd5e1',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  transform: isDarkMode ? 'translateX(22px)' : 'translateX(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>
          </div>

          {/* Info de la app */}
          <div
            style={{
              backgroundColor: bgRow,
              border: `1px solid ${borderRow}`,
              borderRadius: '0.875rem',
              padding: '0.875rem 1rem',
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: textPrimary,
              }}
            >
              <span style={{ color: accentColor, display: 'flex', alignItems: 'center' }}>{appIcon}</span> {appName}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                marginTop: '0.35rem',
                color: textSecondary,
                lineHeight: 1.5,
              }}
            >
              {appDescription}
            </div>
          </div>

          {/* Filas extra (especificas de la app) */}
          {extraItems.map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: bgRow,
                border: `1px solid ${borderRow}`,
                borderRadius: '0.875rem',
                padding: '0.875rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: textPrimary,
                  }}
                >
                  <span style={{ color: accentColor, display: 'flex', alignItems: 'center' }}>{item.icon}</span> {item.label}
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    marginTop: '0.2rem',
                    color: textSecondary,
                  }}
                >
                  {item.description}
                </div>
              </div>
              {item.onToggle !== undefined && (
                <button
                  onClick={item.onToggle}
                  style={{
                    width: '48px',
                    height: '26px',
                    borderRadius: '9999px',
                    border: 'none',
                    padding: '3px',
                    backgroundColor: item.toggleValue ? accentColor : '#cbd5e1',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      transform: item.toggleValue ? 'translateX(22px)' : 'translateX(0)',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: bgFooter,
            borderTop: `1px solid ${borderModal}`,
            padding: '1rem 1.5rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={onClose}
            style={{
              backgroundColor: accentColor,
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              padding: '0.6rem 1.5rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '0.9rem',
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

