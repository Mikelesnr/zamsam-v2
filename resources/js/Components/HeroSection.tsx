import { Link } from "@inertiajs/react";
import heroImg from "@/Images/hero-coldroom.jpg";
import { COMPANY, telLink, waLink } from "@/Lib/contact";

export default function HeroSection(): JSX.Element {
  return (
    <header className="relative overflow-hidden bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:items-center md:pt-28">
        <div>
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
            Precision <br /> Cooling for <br />
            <span className="text-brand-red">Harare</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
            Cold rooms, industrial & domestic refrigeration, air conditioning, re-gassing and leak repair.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="border-b-[3px] border-brand-red bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-navy-950 hover:bg-brand-red hover:text-white">
              Request a Quote
            </Link>
            <a href={waLink(COMPANY.contact.operations.phoneRaw)} target="_blank" rel="noreferrer" className="border-b-[3px] border-brand-red px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white ring-1 ring-white/20 hover:bg-white/5">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-xs sm:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-brand-red">Emergency 24/7</p>
              <a href={telLink(COMPANY.contact.cell.phone)} className="mt-1 block font-display text-lg">
                {COMPANY.contact.cell.phone}
              </a>
            </div>
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-brand-red">Workshop</p>
              <p className="mt-1 font-display text-lg">
                {COMPANY.address.line1}, {COMPANY.address.line2}
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={heroImg} alt="Zamsam industrial cold-room installation in Harare" className="aspect-square w-full border-b-[3px] border-brand-red object-cover" />
        </div>
      </div>
    </header>
  );
}
