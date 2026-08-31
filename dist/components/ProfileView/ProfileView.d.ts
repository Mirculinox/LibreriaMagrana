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
export declare function ProfileView({ displayName, email, avatarGradient, accentColor, onSignOut, children, }: ProfileViewProps): React.JSX.Element;
