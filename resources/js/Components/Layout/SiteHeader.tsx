import { useState } from "react";
import { Link } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import { COMPANY, telLink } from "@/Lib/contact";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b-[3px] border-brand-red bg-navy-950 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-baseline gap-1" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold uppercase tracking-tight">
            Zamsam
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-red">
            Engineering
          </span>
        </Link>

        <div className="hidden gap-8 text-xs font-semibold uppercase tracking-[0.18em] md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-brand-red">
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={telLink(COMPANY.contact.operations.phone)}
          className="hidden bg-brand-red px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-red-dark sm:inline-block"
        >
          Call Now
        </a>

        {/* Hamburger toggle — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 place-items-center text-white md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="border-t border-white/10 bg-navy-950 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 transition-colors hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={telLink(COMPANY.contact.operations.phone)}
              className="mt-3 bg-brand-red px-4 py-3 text-center font-bold text-white hover:bg-brand-red-dark"
            >
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
