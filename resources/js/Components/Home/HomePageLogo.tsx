import { HTMLAttributes } from 'react';

export default function ApplicationLogo({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={`flex items-center gap-2.5 py-1 whitespace-nowrap ${className}`} {...props}>
            {/* Logo Icon */}
            <img
                src="/images/android-chrome-512x512.png"
                alt="Zamsam Logo Icon"
                className="h-10 w-auto shrink-0 object-contain md:h-12"
            />

            {/* Typography */}
            <div className="flex flex-col justify-center leading-tight">
                {/* Single line with red color on Engineering (Pvt) Ltd */}
                <div className="text-base font-black tracking-tight md:text-lg">
                    <span className="text-white">Zamsam </span>
                    <span className="text-red-600">Engineering (Pvt) Ltd</span>
                </div>

                {/* Subtitle */}
                <span className="text-[9px] font-extrabold tracking-wider text-slate-300 uppercase md:text-[10px]">
                    REFRIGERATION &amp; AIR CONDITIONING
                </span>
            </div>
        </div>
    );
}