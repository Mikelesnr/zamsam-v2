import { PropsWithChildren } from "react";
import { SiteHeader } from "@/Components/Layout/SiteHeader";
import { CtaStrip } from "@/Components/Layout/CtaStrip";
import { SiteFooter } from "@/Components/Layout/SiteFooter";
import { FloatingActions } from "@/Components/FloatingActions";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-ice">
      {/* Global site header */}
      <SiteHeader />

      {/* Logo + quick-contact call to action */}
      <CtaStrip />

      {/* Main content area */}
      <main className="w-full flex-1 overflow-hidden bg-ice">{children}</main>

      {/* Global site footer */}
      <SiteFooter />

      {/* Floating actions */}
      <FloatingActions />
    </div>
  );
}
