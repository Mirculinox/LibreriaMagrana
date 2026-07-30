import React from 'react';
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    loading?: boolean;
    children: React.ReactNode;
}
/**
 * Botón estándar del ecosistema Magrana.
 *
 * @example
 * <Button variant="primary" onClick={handleSave}>Guardar</Button>
 * <Button variant="danger" size="sm">Eliminar</Button>
 */
export declare function Button({ variant, size, loading, disabled, children, style, ...rest }: ButtonProps): React.JSX.Element;
export {};
