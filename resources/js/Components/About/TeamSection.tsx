import { TECHNICIANS } from "@/Lib/team";

export default function TeamSection(): JSX.Element {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2">
      {TECHNICIANS.map((m) => (
        <article
          key={m.slug}
          className="border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-6"
        >
          <h3 className="font-display text-lg font-bold uppercase">{m.name}</h3>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            {m.role}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-950/70">{m.bio}</p>
        </article>
      ))}
    </div>
  );
}