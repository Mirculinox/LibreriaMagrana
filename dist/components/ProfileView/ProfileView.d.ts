import React from 'react';
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
/**
 * Vista de perfil estandarizada y completa para todas las apps Magrana.
 * Muestra avatar, nombre, email, rol, enlace de gestión al Hub y soporte para borrado de datos.
 */
export declare function ProfileView({ displayName, email, role, avatarUrl, avatarGradient, accentColor, onSignOut, onDeleteAccount, isDarkMode, children, }: ProfileViewProps): React.JSX.Element;
