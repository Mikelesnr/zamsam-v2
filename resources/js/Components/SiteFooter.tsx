import { Link } from "@inertiajs/react";
import { COMPANY } from "@/Lib/contact";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-brand-red bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-lg font-bold uppercase tracking-tight">
            {COMPANY.legalName}
          </div>
          <p className="mt-3 max-w-sm text-sm text-navy-500">{COMPANY.tagline}</p>
        </div>

        <div>
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            Location
          </h4>
          <p className="text-sm leading-relaxed text-white/80">
            {COMPANY.address.line1}
            <br />
            {COMPANY.address.line2}
            <br />
            {COMPANY.address.country}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-red">
            Navigate
          </h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/services" className="hover:text-brand-red">Services</Link></li>
            <li><Link href="/about" className="hover:text-brand-red">About</Link></li>
            <li><Link href="/contact" className="hover:text-brand-red">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} {COMPANY.legalName}</span>
          <span>Harare's Cooling Experts</span>
        </div>
      </div>
    </footer>
  );
}
