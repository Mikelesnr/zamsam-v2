import { COMPANY, telLink } from "@/Lib/contact";

export default function ContactStrip(): JSX.Element {
  return (
    <section className="border-b-[3px] border-brand-red bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
        {/* Workshop */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            Workshop
          </h4>
          <p className="mt-2 font-display text-xl">
            {COMPANY.address.line1}
            <br />
            {COMPANY.address.line2}
          </p>
        </div>

        {/* Call / WhatsApp */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            Call / WhatsApp
          </h4>
          <a
            href={telLink(COMPANY.contact.operations.phone)}
            className="mt-2 block font-display text-xl hover:text-brand-red"
          >
            {COMPANY.contact.operations.phone}
          </a>
          <a
            href={telLink(COMPANY.contact.cell.phone)}
            className="mt-1 block font-display text-xl hover:text-brand-red"
          >
            {COMPANY.contact.cell.phone}
          </a>
        </div>

        {/* Email */}
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
            Email
          </h4>
          {COMPANY.contact.emails.map((e: string) => (
            <a
              key={e}
              href={`mailto:${e}`}
              className="mt-2 block break-all font-display text-base hover:text-brand-red"
            >
              {e}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
