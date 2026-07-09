import { Link } from "@inertiajs/react";
import { COMPANY, telLink } from "@/Lib/contact";

export function SiteHeader() {
  return (
    <nav className="sticky top-0 z-40 border-b-[3px] border-brand-red bg-navy-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            Zamsam
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-navy-500">
            Engineering
          </span>
        </Link>

        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
          <Link href="/" className="transition-colors hover:text-brand-red">
            Home
          </Link>
          <Link href="/services" className="transition-colors hover:text-brand-red">
            Services
          </Link>
          <Link href="/about" className="transition-colors hover:text-brand-red">
            About
          </Link>
          <Link href="/contact" className="transition-colors hover:text-brand-red">
            Contact
          </Link>
        </div>

        <a
          href={telLink(COMPANY.contact.operations.phone)}
          className="hidden bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-red-dark sm:inline-block"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
