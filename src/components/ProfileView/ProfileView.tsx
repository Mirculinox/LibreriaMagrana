import React, { useState } from 'react';

export interface ProfileViewProps {
  /** Nombre completo del docente */
  displayName: string;
  /** Correo electronico del docente */
  email?: string;
  /** Rol del usuario (por defecto 'Docente') */
  role?: string;
  /** URL del avatar si existe */
  avatarUrl?: string;
  /** CSS gradient string para el avatar grande */
  avatarGradient?: string;
  /** Color del acento (boton, badges) */
  accentColor?: string;
  /** Callback al pulsar Cerrar Sesion */
  onSignOut?: () => void;
  /** Callback opcional al eliminar todos los datos de la cuenta */
  onDeleteAccount?: () => Promise<void> | void;
  /** Si esta en modo oscuro */
  isDarkMode?: boolean;
  /** Contenido extra especifico de la app */
  children?: React.ReactNode;
}

const defaultSignOut = () => {
  try {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'MAGRANA_LOGOUT' }, '*');
      window.parent.postMessage({ type: 'MAGRANA_CLOSE_APP' }, '*');
    }
  } catch (e) {
    // Ignore cross-origin warnings
  }

  const targetUrl = 'https://magranaedu.com/#acceso';
  if (window.top && window.top !== window) {
    window.top.location.href = targetUrl;
  } else {
    window.location.href = targetUrl;
  }
};


/**
 * Vista de perfil estandarizada y completa para todas las apps Magrana.
 * Muestra avatar, nombre, email, rol, enlace de gestión al Hub y soporte para borrado de datos.
 */
export function ProfileView({
  displayName,
  email,
  role = 'Docente',
  avatarUrl,
  avatarGradient = 'linear-gradient(135deg, #1E293B, #334155)',
  accentColor = '#6366f1',
  onSignOut,
  onDeleteAccount,
  isDarkMode = true,
  children,
}: ProfileViewProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const initial = displayName.charAt(0).toUpperCase() || 'D';
  const handleSignOut = onSignOut ?? defaultSignOut;

  const bgCard = isDarkMode ? '#0f172a' : '#ffffff';
  const borderCard = isDarkMode ? '#334155' : '#e2e8f0';
  const textPrimary = isDarkMode ? '#f8fafc' : '#0f172a';
  const textSecondary = isDarkMode ? '#94a3b8' : '#64748b';
  const bgSubcard = isDarkMode ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc';

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '680px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: textPrimary,
      }}
    >
      {/* Tarjeta principal de perfil */}
      <div
        style={{
          backgroundColor: bgCard,
          border: `1px solid ${borderCard}`,
          borderRadius: '1.5rem',
          padding: '2rem',
          boxShadow: isDarkMode
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
            : '5px 5px 0px #1E293B, 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Glow de acento */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '180px',
            height: '180px',
            backgroundColor: `${accentColor}15`,
            borderRadius: '50%',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        {/* Avatar grande */}
        <div
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: avatarUrl ? `url(${avatarUrl}) center/cover no-repeat` : avatarGradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 800,
            fontSize: '2.2rem',
            boxShadow: `0 8px 24px ${accentColor}44`,
            border: `3px solid ${isDarkMode ? '#1e293b' : '#ffffff'}`,
            flexShrink: 0,
          }}
        >
          {!avatarUrl && initial}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: textPrimary,
            }}
          >
            {displayName}
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            {email && (
              <span
                style={{
                  fontSize: '0.85rem',
                  color: textSecondary,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  backgroundColor: bgSubcard,
                  border: `1px solid ${borderCard}`,
                }}
              >
                ✉ {email}
              </span>
            )}
            <span
              style={{
                fontSize: '0.8rem',
                color: accentColor,
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                backgroundColor: `${accentColor}18`,
                border: `1px solid ${accentColor}33`,
              }}
            >
              ✦ {role}
            </span>
          </div>
        </div>

        {/* Acciones principales */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            width: '100%',
            borderTop: `1px solid ${borderCard}`,
            paddingTop: '1.25rem',
            marginTop: '0.25rem',
          }}
        >
          <button
            onClick={handleSignOut}
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#ef4444',
              borderRadius: '12px',
              padding: '0.65rem 1.4rem',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '#ef4444';
              (e.currentTarget as HTMLElement).style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
              (e.currentTarget as HTMLElement).style.color = '#ef4444';
            }}
          >
            🚪 Cerrar Sesión
          </button>

          {onDeleteAccount && (
            <button
              onClick={() => setIsDeleteModalOpen(true)}
              style={{
                backgroundColor: bgSubcard,
                border: `1px solid ${borderCard}`,
                color: textSecondary,
                borderRadius: '12px',
                padding: '0.65rem 1.4rem',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
                (e.currentTarget as HTMLElement).style.color = '#ef4444';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239, 68, 68, 0.3)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = bgSubcard;
                (e.currentTarget as HTMLElement).style.color = textSecondary;
                (e.currentTarget as HTMLElement).style.borderColor = borderCard;
              }}
            >
              🗑 Eliminar Perfil y Datos
            </button>
          )}
        </div>
      </div>

      {/* Tarjeta de ajustes de cuenta en Magrana Hub */}
      <div
        style={{
          backgroundColor: bgCard,
          border: `1px solid ${borderCard}`,
          borderRadius: '1.25rem',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          boxShadow: isDarkMode ? 'none' : '0 2px 4px rgba(0,0,0,0.04)',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: '1.1rem',
            fontWeight: 700,
            color: textPrimary,
          }}
        >
          ⚙ Ajustes Globales de Cuenta
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: '0.85rem',
            color: textSecondary,
            lineHeight: 1.5,
          }}
        >
          Para modificar tu nombre, contraseña o foto de perfil de todas las aplicaciones de Magrana, dirígete al Hub Principal.
        </p>
        <div>
          <a
            href="https://magranaedu.com/#acceso"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: bgSubcard,
              border: `1px solid ${borderCard}`,
              borderRadius: '10px',
              padding: '0.5rem 1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: textPrimary,
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = accentColor;
              (e.currentTarget as HTMLElement).style.color = accentColor;
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = borderCard;
              (e.currentTarget as HTMLElement).style.color = textPrimary;
            }}
          >
            Ir a Gestión de Perfil en Magrana ↗
          </a>
        </div>
      </div>

      {/* Contenido extra especifico de cada app */}
      {children}

      {/* Modal de confirmacion de eliminacion si aplica */}
      {isDeleteModalOpen && onDeleteAccount && (
        <div
          onClick={() => setIsDeleteModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: bgCard,
              border: `1px solid ${borderCard}`,
              borderRadius: '1.5rem',
              maxWidth: '440px',
              width: '100%',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              textAlign: 'center',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                fontSize: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto',
              }}
            >
              ⚠
            </div>

            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: textPrimary }}>
                ¿Eliminar perfil y datos?
              </h3>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', color: textSecondary, lineHeight: 1.5 }}>
                Esta acción es irreversible y borrará tus datos creados en esta app.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: '10px',
                padding: '0.75rem',
                textAlign: 'left',
              }}
            >
              <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#ef4444', display: 'block', marginBottom: '0.35rem' }}>
                ESCRIBE "ELIMINAR" PARA CONFIRMAR:
              </label>
              <input
                type="text"
                value={deleteConfirmation}
                onChange={e => setDeleteConfirmation(e.target.value)}
                placeholder="ELIMINAR"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: `1px solid ${borderCard}`,
                  backgroundColor: bgSubcard,
                  color: textPrimary,
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setDeleteConfirmation('');
                }}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '10px',
                  border: `1px solid ${borderCard}`,
                  backgroundColor: bgSubcard,
                  color: textPrimary,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Cancelar
              </button>
              <button
                disabled={deleteConfirmation !== 'ELIMINAR' || isDeleting}
                onClick={async () => {
                  if (deleteConfirmation === 'ELIMINAR') {
                    setIsDeleting(true);
                    try {
                      await onDeleteAccount();
                    } finally {
                      setIsDeleting(false);
                    }
                  }
                }}
                style={{
                  flex: 1,
                  padding: '0.65rem',
                  borderRadius: '10px',
                  border: 'none',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  fontWeight: 700,
                  cursor: deleteConfirmation === 'ELIMINAR' && !isDeleting ? 'pointer' : 'not-allowed',
                  opacity: deleteConfirmation === 'ELIMINAR' && !isDeleting ? 1 : 0.5,
                }}
              >
                {isDeleting ? 'Borrando...' : 'Borrar todo'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

