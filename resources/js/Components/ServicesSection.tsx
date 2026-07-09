import { Link } from "@inertiajs/react";
import { SERVICES } from "@/Lib/services";

export default function ServicesSection(): JSX.Element {
  const highlighted = SERVICES.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24" id="services">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
            Core Capabilities
          </h2>
          <div className="mt-4 h-1 w-24 bg-brand-red" />
        </div>
        <p className="max-w-sm text-sm text-navy-950/60">
          From massive industrial chillers to domestic refrigerator repairs — every job includes an
          up-front <span className="font-bold text-navy-950">estimated repair time</span>.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {highlighted.map((s) => (
          <article key={s.slug} className="group border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-8 transition-transform hover:-translate-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
              {s.number}. {s.category}
            </span>
            <h3 className="mt-4 font-display text-xl font-bold uppercase">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-950/70">{s.description}</p>
            <div className="mt-6 flex items-center justify-between border-t border-navy-950/10 pt-4 text-xs">
              <span className="text-navy-950/50 uppercase tracking-widest">ETA</span>
              <span className="font-bold text-navy-900">{s.eta}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/services" className="border-b-[3px] border-brand-red bg-navy-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-navy-900">
          View all services
        </Link>
      </div>
    </section>
  );
}
