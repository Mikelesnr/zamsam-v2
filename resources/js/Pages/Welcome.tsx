import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import HeroSection from '@/Components/HeroSection';
import ServicesSection from '@/Components/ServicesSection';
import TechnicianSection from '@/Components/TechnicianSection';
import ContactStrip from '@/Components/ContactStrip';
import GuestLayout from '@/Layouts/GuestLayout';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <GuestLayout>
            <Head title="Zamsam Engineering — Refrigeration & Air Conditioning in Harare" />

            <div className="bg-ice text-navy-950">
                <HeroSection />
                <ServicesSection />
                <TechnicianSection />
                <ContactStrip />
            </div>
        </GuestLayout>
    );
}
