import { InputHTMLAttributes } from 'react';

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded-sm border-navy-950/25 text-brand-red shadow-sm focus:ring-2 focus:ring-brand-red/40 ' +
                className
            }
        />
    );
}
