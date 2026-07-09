import { Link } from "@inertiajs/react";
import technicianImg from "@/Images/technician.jpg";
import { COMPANY } from "@/Lib/contact";

export default function TechnicianSection(): JSX.Element {
  return (
    <section className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
        <div className="p-10 md:p-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            Built on Reputation
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight">
            Meet Our Head Technician
          </h2>
          <p className="mt-6 text-lg font-light italic leading-relaxed text-white/85">
            "At Zamsam, we don't just fix machines — we protect your investments.""At Zamsam, we don't just fix machines — we protect your investments. Whether it's a home fridge or a hospital cold room, our standard for reliability stays the same."
          </p>
          <div className="mt-8 border-b-[3px] border-brand-red pb-4">
            <p className="font-display text-xl font-bold uppercase tracking-[0.15em]">
              {COMPANY.contact.operations.name}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
              Founder & Head Technician
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Refrigeration", "HVAC", "Electrical", "Cold Chain"].map((c) => (
              <span key={c} className="border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                {c}
              </span>
            ))}
          </div>
          <Link href="/about" className="mt-10 inline-block border-b-[3px] border-brand-red bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-950 hover:bg-brand-red hover:text-white">
            Meet the team
          </Link>
        </div>
        <div className="relative min-h-[500px] md:h-full">
          <img src={technicianImg} alt="M. Mwanza, Zamsam head technician" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
