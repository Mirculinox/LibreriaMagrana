import { default as default_2 } from 'react';
import { JSX } from 'react';

export declare interface AppSettingsExtraItem {
    /** Titulo de la fila extra */
    label: string;
    /** Descripcion breve */
    description: string;
    /** Icono React (cualquier elemento) */
    icon: default_2.ReactNode;
    /** Si tiene toggle: valor actual */
    toggleValue?: boolean;
    /** Si tiene toggle: callback */
    onToggle?: () => void;
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
export declare function AppSettingsModal({ isOpen, onClose, appName, appDescription, appIcon, accentColor, isDarkMode, onToggleDarkMode, extraItems, }: AppSettingsModalProps): default_2.JSX.Element | null;

export declare interface AppSettingsModalProps {
    /** Si el modal esta visible */
    isOpen: boolean;
    /** Cerrar el modal */
    onClose: () => void;
    /** Nombre de la app (ej: "Magrana Colab v1.0") */
    appName: string;
    /** Descripcion de la app */
    appDescription: string;
    /** Icono de la app (React element) */
    appIcon: default_2.ReactNode;
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
 * Chip de etiqueta para niveles educativos, categorías y estados.
 *
 * @example
 * <Badge color="emerald">Secundaria</Badge>
 * <Badge color="purple">IA</Badge>
 */
export declare function Badge({ color, children, style, ...rest }: BadgeProps): default_2.JSX.Element;

declare type BadgeColor = 'primary' | 'orange' | 'magenta' | 'emerald' | 'purple' | 'blue' | 'neutral';

declare interface BadgeProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    color?: BadgeColor;
    children: default_2.ReactNode;
}

/**
 * Botón estándar del ecosistema Magrana.
 *
 * @example
 * <Button variant="primary" onClick={handleSave}>Guardar</Button>
 * <Button variant="danger" size="sm">Eliminar</Button>
 */
export declare function Button({ variant, size, loading, disabled, children, style, ...rest }: ButtonProps): default_2.JSX.Element;

declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    children: default_2.ReactNode;
}

declare type ButtonSize = 'sm' | 'md' | 'lg';

declare type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

/**
 * Contenedor tarjeta del ecosistema Magrana.
 * Soporta efecto glassmorphism igual al `.glass-panel` de las apps existentes.
 *
 * @example
 * <Card glass padding="2rem">
 *   <h2>Título</h2>
 * </Card>
 */
export declare function Card({ glass, padding, children, style, ...rest }: CardProps): default_2.JSX.Element;

declare interface CardProps extends default_2.HTMLAttributes<HTMLDivElement> {
    /** Aplicar efecto glassmorphism completo (backdrop-blur) */
    glass?: boolean;
    /** Padding interno del card */
    padding?: string;
    children: default_2.ReactNode;
}

export declare interface Definition {
    id: string | number;
    number: number;
    text: string;
    /** Número de visualización tras el shuffle */
    display_number?: number;
}

/**
 * Actividad de Arrastrar y Soltar.
 *
 * El alumno arrastra los ítems a las zonas circulares sobre la imagen.
 * Opcionalmente, si el slide tiene definiciones, el alumno también debe
 * seleccionar la definición correspondiente a cada zona.
 *
 * Migrado y generalizado desde Actimagen/frontend.
 *
 * @example
 * <DragDropActivity
 *   slide={currentSlide}
 *   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
 *   baseUrl="https://api.mi-app.com"
 * />
 */
export declare function DragDropActivity({ slide, onNext, baseUrl }: DragDropActivityProps): JSX.Element;

export declare interface DragDropActivityProps {
    slide: DragDropSlide;
    onNext: (score: number, maxScore: number, responseData: {
        placements: Record<string, string>;
        selectedDefs: Record<string, string>;
    }, isCorrect: boolean) => void;
    /**
     * URL base del servidor para resolver imágenes relativas.
     * @example 'https://mi-api.magrana.com'
     * @default ''
     */
    baseUrl?: string;
}

export declare interface DragDropSlide {
    question: {
        image_url: string | null;
    };
    /** Zonas en orden original (para calcular corrección) */
    originalZones: DropZone[];
    /** Zonas en orden aleatorio (para renderizar los ítems arrastrables) */
    dropZones: DropZone[];
    /** Definiciones en orden original */
    originalDefs: Definition[];
    /** Definiciones en orden aleatorio (con display_number) */
    definitions: Definition[];
}

/**
 * Elemento que el alumno puede arrastrar hacia una `DroppableZone`.
 *
 * Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
 *
 * @example
 * <DraggableItem id="item-1" name="Bisturí" />
 */
export declare function DraggableItem({ id, name, disabled, isSelected, onSelect }: DraggableItemProps): JSX.Element;

declare interface DraggableItemProps {
    /** ID único del ítem (debe coincidir con el ID de su zona correcta) */
    id: string | number;
    /** Texto a mostrar en el chip arrastrable */
    name: string;
    /** Si está deshabilitado (no se puede arrastrar) */
    disabled?: boolean;
    /** Si está seleccionado mediante toque/clic */
    isSelected?: boolean;
    /** Callback al hacer clic/tocar el elemento */
    onSelect?: (id: string) => void;
}

/**
 * Zona circular donde el alumno puede soltar un elemento arrastrable.
 * Se renderiza encima de una imagen con posicionamiento absoluto en %.
 *
 * Requiere estar dentro de un `<DndContext>` de @dnd-kit/core.
 *
 * @example
 * <DndContext onDragEnd={handleDragEnd}>
 *   <div style={{ position: 'relative' }}>
 *     <img src="..." style={{ width: '100%' }} />
 *     <DroppableZone id="zone-1" x={45} y={30} />
 *   </div>
 * </DndContext>
 */
export declare function DroppableZone({ id, x, y, isOccupied, showResults, isCorrect, onClick, isTarget }: DroppableZoneProps): JSX.Element;

declare interface DroppableZoneProps {
    /** ID único de la zona (coincide con el ID del item correcto) */
    id: string;
    /** Posición X en porcentaje sobre la imagen */
    x: number;
    /** Posición Y en porcentaje sobre la imagen */
    y: number;
    /** Si hay un elemento colocado en esta zona */
    isOccupied?: boolean;
    /** Si se deben mostrar colores de resultado */
    showResults?: boolean;
    /** Si el elemento colocado es correcto (sólo relevante cuando showResults=true) */
    isCorrect?: boolean;
    /** Callback al pulsar/tocar la zona */
    onClick?: (id: string) => void;
    /** Si la zona es un objetivo potencial al haber un elemento seleccionado */
    isTarget?: boolean;
}

export declare interface DropZone {
    id: string | number;
    item_name: string;
    x_coord?: number;
    y_coord?: number;
    /** Alias opcionales cuando los datos vienen procesados por StudentActivity */
    x?: number;
    y?: number;
}

/**
 * Actividad de Mapa de Calor.
 *
 * El alumno puede hacer zoom en la imagen y luego colocar un pin
 * en la zona que considera correcta.
 *
 * Migrado y generalizado desde Actimagen/frontend.
 *
 * @example
 * <HeatmapActivity
 *   slide={currentSlide}
 *   onNext={(score, max, data, correct) => handleNext(score, max, data, correct)}
 *   baseUrl="https://api.mi-app.com"
 * />
 */
export declare function HeatmapActivity({ slide, onNext, baseUrl }: HeatmapActivityProps): JSX.Element;

export declare interface HeatmapActivityProps {
    slide: HeatmapSlide;
    onNext: (score: number, maxScore: number, responseData: {
        pin: {
            x: number;
            y: number;
        } | null;
    }, isCorrect: boolean) => void;
    /**
     * URL base del servidor para resolver imágenes relativas.
     * @example 'https://api.mi-app.com'
     * @default ''
     */
    baseUrl?: string;
}

export declare interface HeatmapSlide {
    question: {
        image_url: string | null;
        correct_x: number | null;
        correct_y: number | null;
        radius?: number;
    };
}

/**
 * Calcula si un pin está dentro de la zona circular correcta de un mapa de calor.
 */
export declare function isPinCorrect(pin: {
    x: number;
    y: number;
}, correct: {
    x: number;
    y: number;
    radius: number;
}): boolean;

/**
 * Vista de perfil estandarizada y completa para todas las apps Magrana.
 * Muestra avatar, nombre, email, rol, enlace de gestión al Hub y soporte para borrado de datos.
 */
export declare function ProfileView({ displayName, email, role, avatarUrl, avatarGradient, accentColor, onSignOut, onDeleteAccount, isDarkMode, children, }: ProfileViewProps): default_2.JSX.Element;

export declare interface ProfileViewProps {
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
    children?: default_2.ReactNode;
}

/**
 * Resuelve una URL de imagen que puede ser relativa o absoluta.
 * @param imageUrl - La URL guardada en base de datos
 * @param baseUrl - La URL base del servidor (ej: 'https://mi-api.com'). Por defecto ''
 */
export declare function resolveImageUrl(imageUrl: string | null | undefined, baseUrl?: string): string;

/**
 * @magrana/ui — Utilidades compartidas para componentes de actividad
 */
/**
 * Mezcla aleatoriamente los elementos de un array (Fisher-Yates shuffle).
 * Migrado desde Actimagen/frontend/src/components/activities/utils.js
 */
export declare function shuffleArray<T>(array: T[]): T[];

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
export declare function SidebarProfileButton({ displayName, initial, avatarGradient, accentColor, isActive, onClick, }: SidebarProfileButtonProps): default_2.JSX.Element;

export declare interface SidebarProfileButtonProps {
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

export { }
