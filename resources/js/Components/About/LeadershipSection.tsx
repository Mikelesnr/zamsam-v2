import { DIRECTORS } from "@/Lib/team";

export default function LeadershipSection(): JSX.Element {
  return (
    <div className="mt-16 border-t border-navy-950/10 pt-10">
      <h2 className="font-display text-2xl font-bold uppercase">Company Leadership</h2>
      <p className="mt-2 text-sm text-navy-950/60">
        Zamsam Engineering was founded and is jointly directed by:
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {DIRECTORS.map((d) => (
          <article key={d.slug} className="border-l-[3px] border-brand-red pl-4">
            <h3 className="font-display text-base font-bold uppercase">{d.name}</h3>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
              {d.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy-950/70">{d.bio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}