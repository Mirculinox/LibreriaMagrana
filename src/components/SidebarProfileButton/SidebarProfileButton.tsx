import React from 'react';

export interface SidebarProfileButtonProps {
  /** Nombre completo del docente */
  displayName: string;
  /** Inicial del avatar */
  initial?: string;
  /** CSS gradient string para el avatar */
  avatarGradient?: string;
  /** Color del acento (label "Docente" y borde activo) */
  accentColor?: string;
  /** Si esta pestaña esta activa */
  isActive?: boolean;
  /** Handler al pulsar */
  onClick?: () => void;
}

/**
 * Boton de perfil de docente para la barra lateral de cualquier app Magrana.
 * 
 * @example
 * <SidebarProfileButton
 *   displayName="Miguel Garcia"
 *   avatarGradient="linear-gradient(135deg, #0284c7, #38bdf8)"
 *   accentColor="#38bdf8"
 *   isActive={activeTab === 'profile'}
 *   onClick={() => setActiveTab('profile')}
 * />
 */
export function SidebarProfileButton({
  displayName,
  initial,
  avatarGradient = 'linear-gradient(135deg, #1E293B, #334155)',
  accentColor = '#94a3b8',
  isActive = false,
  onClick,
}: SidebarProfileButtonProps) {
  const resolvedInitial = initial || displayName.charAt(0).toUpperCase() || 'D';

  const baseStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.6rem 1rem',
    borderRadius: '12px',
    border: isActive ? `1px solid ${accentColor}55` : '1px solid rgba(255,255,255,0.08)',
    background: isActive ? `${accentColor}22` : 'rgba(255,255,255,0.04)',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'left',
    transition: 'background 0.2s, border-color 0.2s',
    fontFamily: 'var(--magrana-font, Inter, sans-serif)',
  };

  return (
    <button style={baseStyle} onClick={onClick} title={`Mi Perfil — ${displayName}`}
      onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'; }}
      onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
    >
      <div style={{
        width: '36px', height: '36px', borderRadius: '50%',
        background: avatarGradient,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: 'white', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0,
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
      }}>
        {resolvedInitial}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontWeight: 700, fontSize: '0.875rem', color: '#F8FAFC',
          margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', lineHeight: 1.3,
        }}>
          {displayName}
        </p>
        <p style={{
          fontSize: '0.7rem', color: accentColor, fontWeight: 600,
          margin: 0, marginTop: '0.1rem',
        }}>
          Docente
        </p>
      </div>
    </button>
  );
}
