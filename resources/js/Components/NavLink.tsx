import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-semibold uppercase tracking-wide transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-brand-red text-white'
                    : 'border-transparent text-white/60 hover:border-white/30 hover:text-white focus:border-white/30 focus:text-white') +
                className
            }
        >
            {children}
        </Link>
    );
}
