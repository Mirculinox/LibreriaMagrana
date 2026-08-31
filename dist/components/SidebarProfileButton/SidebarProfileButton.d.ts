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
export declare function SidebarProfileButton({ displayName, initial, avatarGradient, accentColor, isActive, onClick, }: SidebarProfileButtonProps): React.JSX.Element;
