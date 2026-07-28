import { PropsWithChildren } from "react";
import { SiteHeader } from "@/Components/Layout/SiteHeader";
import { CtaStrip } from "@/Components/Layout/CtaStrip";
import { SiteFooter } from "@/Components/Layout/SiteFooter";
import { FloatingActions } from "@/Components/FloatingActions";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
      {/* Global site header */}
      <SiteHeader />

      {/* Logo + quick-contact call to action */}
      <CtaStrip />

      {/* Main content area */}
      <main className="flex-1 w-full overflow-hidden bg-white dark:bg-gray-800">
        {children}
      </main>

      {/* Global site footer */}
      <SiteFooter />

      {/* Floating actions */}
      <FloatingActions />
    </div>
  );
}