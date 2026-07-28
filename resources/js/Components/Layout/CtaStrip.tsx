import { Link } from "@inertiajs/react";
import { Phone, Mail } from "lucide-react";
import ApplicationLogo from "@/Components/Home/HomePageLogo";
import { COMPANY, telLink, waLink } from "@/Lib/contact";

/**
 * Sits directly under the main nav. Logo pinned to the top-left on small screens, 
 * with quick-contact actions flexing underneath. Reverts to side-by-side on tablet/desktop.
 */
export function CtaStrip() {
  return (
    <div className="border-b-[3px] border-brand-red bg-white">
      <div className="mx-auto flex flex-col items-start justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center">
        {/* Logo Section - stuck left */}
        <Link href="/" aria-label="Zamsam Engineering home" className="shrink-0">
          <ApplicationLogo className="h-14 w-auto fill-current text-navy-950" />
        </Link>

        {/* Contact Actions Section */}
        <div className="flex w-full flex-wrap items-center justify-start gap-2.5 sm:w-auto sm:justify-end sm:gap-4">
          <a
            href={telLink(COMPANY.contact.operations.phone)}
            className="flex items-center gap-1.5 border border-navy-950/15 px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 hover:border-brand-red hover:text-brand-red sm:px-4 sm:tracking-widest"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span>Call Us</span>
          </a>

          <a
            href={`mailto:${COMPANY.contact.emails[0]}`}
            className="flex items-center gap-1.5 border border-navy-950/15 px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-navy-950 hover:border-brand-red hover:text-brand-red sm:px-4 sm:tracking-widest"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span>Email</span>
          </a>

          <a
            href={waLink(COMPANY.contact.operations.phoneRaw)}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-whatsapp px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 sm:px-4 sm:tracking-widest"
          >
            <svg viewBox="0 0 32 32" className="size-4" fill="currentColor" aria-hidden="true">
              <path d="M19.11 17.24c-.29-.15-1.71-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.51-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.66.61.7.22 1.33.19 1.83.12.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34zM16.04 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.49 3.72 1.43 5.34L5 26.67l5.44-1.42a10.68 10.68 0 0 0 5.6 1.58h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.63 10.63 0 0 0-7.58-3.13zm0 19.53h-.01c-1.76 0-3.48-.47-4.99-1.36l-.36-.21-3.23.84.86-3.15-.23-.37a8.86 8.86 0 0 1-1.36-4.72c0-4.9 3.99-8.89 8.9-8.89 2.38 0 4.61.93 6.29 2.61a8.83 8.83 0 0 1 2.61 6.29c0 4.91-4 8.89-8.89 8.96z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}