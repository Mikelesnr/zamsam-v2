import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/HeroSection';
import ServicesSection from '@/Components/ServicesSection';
import ClientsSection from '@/Components/Home/ClientSection';
import TechnicianSection from '@/Components/TechnicianSection';
import ContactStrip from '@/Components/ContactStrip';
import GuestLayout from '@/Layouts/GuestLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Welcome({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    if (auth.user) {
        return (
            <AuthenticatedLayout>
                <Head title="Zamsam Engineering — Refrigeration & Air Conditioning in Zimbabwe" />

                <div className="bg-ice text-navy-950">
                    <HeroSection />
                    <ServicesSection />
                    <ClientsSection />
                    <TechnicianSection />
                    <ContactStrip />
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <GuestLayout>
            <Head title="Zamsam Engineering — Refrigeration & Air Conditioning in Zimbabwe" />

            <div className="bg-ice text-navy-950">
                <HeroSection />
                <ServicesSection />
                <ClientsSection />
                <TechnicianSection />
                <ContactStrip />
            </div>
        </GuestLayout>
    );
}