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
export declare function AppSettingsModal({ isOpen, onClose, appName, appDescription, appIcon, accentColor, isDarkMode, onToggleDarkMode, extraItems, }: AppSettingsModalProps): React.JSX.Element | null;
