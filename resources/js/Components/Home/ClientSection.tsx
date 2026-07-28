import { useState } from "react";
import { CLIENTS_PARTNERS } from "@/Lib/clients";

/**
 * Logos are served from Laravel's public/images/clients/ folder,
 * named to match each client's `slug` in Lib/clients.ts
 * (e.g. slug "defy-zimbabwe" -> public/images/clients/defy-zimbabwe.jpg).
 * Since public-folder files aren't known at build time, we just try
 * loading the image and fall back to a letter badge if it 404s.
 */
function ClientBadge({ slug, name }: { slug: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <div className="grid size-14 shrink-0 place-items-center overflow-hidden border border-navy-950/15 bg-white">
        <img
          src={`/images/clients/${slug}.jpg`}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-1"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div className="grid size-14 shrink-0 place-items-center border border-navy-950/15 bg-ice font-display text-xl font-bold text-navy-900">
      {initial}
    </div>
  );
}

export default function ClientsSection(): JSX.Element {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
          Trusted By
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-navy-950 md:text-4xl">
          Companies We've Worked With
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy-950/70">
          From contracted appliance-brand partnerships to ongoing servicing for schools and
          businesses across Harare.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CLIENTS_PARTNERS.map((c) => (
            <article
              key={c.slug}
              className="flex gap-4 border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-6"
            >
              <ClientBadge slug={c.slug} name={c.name} />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
                  {c.kind}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold uppercase text-navy-950">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-950/70">{c.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}