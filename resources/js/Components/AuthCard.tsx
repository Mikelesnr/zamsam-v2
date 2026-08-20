import { PropsWithChildren } from "react";
import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function AuthCard({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-12 sm:px-6">
      <div className="w-full max-w-md">
        <Link href="/" className="flex justify-center">
          <ApplicationLogo className="h-14 w-14 fill-current text-navy-950" />
        </Link>

        <div className="mt-6 border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-6 shadow-sm sm:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}