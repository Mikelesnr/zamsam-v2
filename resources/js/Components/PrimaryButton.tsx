import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-sm border border-transparent bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-brand-red-dark focus:outline-none focus:ring-2 focus:ring-brand-red/40 focus:ring-offset-2 active:bg-brand-red-dark ${
                    disabled && 'opacity-40'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
