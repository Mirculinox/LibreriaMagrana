import React from 'react';

export interface ProfileViewProps {
  /** Nombre completo del docente */
  displayName: string;
  /** Correo electronico del docente */
  email?: string;
  /** CSS gradient string para el avatar grande */
  avatarGradient?: string;
  /** Color del acento (boton, badges) */
  accentColor?: string;
  /** Callback al pulsar Cerrar Sesion */
  onSignOut?: () => void;
  /** Contenido extra especifico de la app */
  children?: React.ReactNode;
}

const defaultSignOut = () => {
  if (window.top) {
    window.top.location.href = 'https://magranaedu.com/#acceso';
  } else {
    window.location.href = 'https://magranaedu.com/#acceso';
  }
};

/**
 * Vista de perfil estandarizada para todas las apps Magrana.
 * Muestra informacion del docente y boton de Cerrar Sesion.
 *
 * @example
 * <ProfileView
 *   displayName="Miguel Garcia"
 *   email="miguel@magranaedu.com"
 *   avatarGradient="linear-gradient(135deg, #0284c7, #38bdf8)"
 *   accentColor="#0284c7"
 * />
 */
export function ProfileView({
  displayName,
  email,
  avatarGradient = 'linear-gradient(135deg, #1E293B, #334155)',
  accentColor = '#6366f1',
  onSignOut,
  children,
}: ProfileViewProps) {
  const initial = displayName.charAt(0).toUpperCase() || 'D';
  const handleSignOut = onSignOut ?? defaultSignOut;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '640px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        fontFamily: 'var(--magrana-font, Inter, sans-serif)',
      }}
    >
      {/* Tarjeta principal */}
      <div
        style={{
          background: 'var(--magrana-profile-card-bg, rgba(255,255,255,0.06))',
          border: '1px solid var(--magrana-profile-card-border, rgba(255,255,255,0.12))',
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: '5px 5px 0px rgba(30,41,59,0.15)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}
      >
        {/* Avatar grande */}
        <div
          style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: avatarGradient,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 800, fontSize: '2rem',
            boxShadow: `0 4px 20px ${accentColor}55`,
          }}
        >
          {initial}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '1.4rem',
              fontWeight: 800,
              color: 'var(--magrana-profile-text, inherit)',
            }}
          >
            {displayName}
          </h2>

          {email && (
            <p
              style={{
                margin: '0.35rem 0 0',
                fontSize: '0.85rem',
                opacity: 0.65,
                color: 'var(--magrana-profile-text, inherit)',
              }}
            >
              {email}
            </p>
          )}

          {/* Badge de rol */}
          <span
            style={{
              display: 'inline-flex', alignItems: 'center',
              marginTop: '0.75rem',
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              background: `${accentColor}22`,
              color: accentColor,
              border: `1px solid ${accentColor}44`,
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.02em',
            }}
          >
            ✦ Docente
          </span>
        </div>
      </div>

      {/* Contenido extra de la app */}
      {children}

      {/* Boton Cerrar Sesion */}
      <button
        onClick={handleSignOut}
        style={{
          background: 'transparent',
          border: '2px solid #ef4444',
          color: '#ef4444',
          borderRadius: '12px',
          padding: '0.75rem 1.5rem',
          fontWeight: 700,
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background 0.2s, color 0.2s',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.background = '#ef4444';
          (e.currentTarget as HTMLElement).style.color = 'white';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.background = 'transparent';
          (e.currentTarget as HTMLElement).style.color = '#ef4444';
        }}
      >
        🚪 Cerrar Sesion
      </button>
    </div>
  );
}
