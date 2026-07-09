import { PropsWithChildren } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { SiteHeader } from "@/Components/SiteHeader";
import { SiteFooter } from "@/Components/SiteFooter";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      {/* Global site header */}
      <SiteHeader />

      {/* Optional logo strip (keep if you want Breeze logo above auth forms) */}
      <div className="p-6">
        <Link href="/">
          <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
        </Link>
      </div>

      {/* Main content area */}
      <main className="flex-1 w-full overflow-hidden bg-white dark:bg-gray-800">
        {children}
      </main>

      {/* Global site footer */}
      <SiteFooter />
    </div>
  );
}
