import { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({
    type = 'button',
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center rounded-sm border border-navy-950/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-navy-950 shadow-sm transition duration-150 ease-in-out hover:border-brand-red hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:ring-offset-2 disabled:opacity-40 ${
                    disabled && 'opacity-40'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
