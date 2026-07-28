import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src="/images/android-chrome-512x512.png"
            alt="Application Logo"
            {...props}
        />
    );
}