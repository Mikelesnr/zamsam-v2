import { LabelHTMLAttributes } from 'react';

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={
                `block text-[10px] font-bold uppercase tracking-[0.2em] text-navy-950/70 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
