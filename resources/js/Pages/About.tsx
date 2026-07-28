import { Head } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import { COMPANY } from "@/Lib/contact";
import TeamSection from "@/Components/About/TeamSection";
import LeadershipSection from "@/Components/About/LeadershipSection";
import GallerySection from "@/Components/About/GallerySection";

export default function About() {
  return (
    <Guest>
      <Head title="About — Zamsam Engineering" />

      {/* Hero */}
      <header className="border-b-[3px] border-brand-red bg-navy-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            About us
          </span>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-6xl">
            Zimbabwe's Cooling Engineers
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {COMPANY.legalName} has spent more than a decade keeping fridges cold, cold rooms cold, and
            buildings comfortable across Harare. We do refrigeration, air conditioning and electrical
            installations — with the same standard whether the job is a domestic freezer or an industrial
            cold room. <span className="text-brand-red">{COMPANY.tagline}</span>
          </p>
        </div>
      </header>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src="/images/technician.jpg"
              alt="Zamsam head technician"
              width={1080}
              height={1350}
              loading="lazy"
              className="w-full border-b-[3px] border-brand-red object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl font-bold uppercase">The Team</h2>
            <TeamSection />
          </div>
        </div>
        <LeadershipSection />
        <GallerySection />
      </section>
    </Guest>
  );
}