// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
//   Outlet,
//   Link,
//   createRootRouteWithContext,
//   useRouter,
//   HeadContent,
//   Scripts,
// } from "@tanstack/react-router";
// import { useEffect, type ReactNode } from "react";

// import appCss from "../styles.css?url";
// import { reportLovableError } from "../lib/lovable-error-reporting";
// import { SiteHeader } from "@/components/SiteHeader";
// import { SiteFooter } from "@/components/SiteFooter";
// import { FloatingActions } from "@/components/FloatingActions";

// function NotFoundComponent() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="font-display text-7xl font-bold text-navy-950">404</h1>
//         <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
//         <p className="mt-2 text-sm text-muted-foreground">
//           The page you're looking for doesn't exist or has been moved.
//         </p>
//         <div className="mt-6">
//           <Link
//             to="/"
//             className="inline-flex items-center justify-center bg-navy-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-navy-700"
//           >
//             Go home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
//   console.error(error);
//   const router = useRouter();
//   useEffect(() => {
//     reportLovableError(error, { boundary: "tanstack_root_error_component" });
//   }, [error]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-background px-4">
//       <div className="max-w-md text-center">
//         <h1 className="text-xl font-semibold tracking-tight">This page didn't load</h1>
//         <p className="mt-2 text-sm text-muted-foreground">
//           Something went wrong on our end. You can try refreshing or head back home.
//         </p>
//         <div className="mt-6 flex flex-wrap justify-center gap-2">
//           <button
//             onClick={() => {
//               router.invalidate();
//               reset();
//             }}
//             className="inline-flex items-center justify-center bg-navy-900 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-navy-700"
//           >
//             Try again
//           </button>
//           <a
//             href="/"
//             className="inline-flex items-center justify-center border border-navy-900/20 bg-background px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] hover:bg-ice"
//           >
//             Go home
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
//   head: () => ({
//     meta: [
//       { charSet: "utf-8" },
//       { name: "viewport", content: "width=device-width, initial-scale=1" },
//       { title: "Zamsam Engineering — Refrigeration & Air Conditioning in Harare" },
//       {
//         name: "description",
//         content:
//           "Zamsam Engineering delivers cold rooms, industrial & domestic refrigeration, air conditioning, re-gassing, leak repair and electrical installations across Harare, Zimbabwe.",
//       },
//       { name: "author", content: "Zamsam Engineering (Pvt) Ltd" },
//       { property: "og:title", content: "Zamsam Engineering — Refrigeration & Air Conditioning" },
//       {
//         property: "og:description",
//         content:
//           "Certified cooling engineers in Harare. Cold rooms, industrial fridges, AC, re-gassing, leak repair, electrical installations.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//     links: [
//       { rel: "stylesheet", href: appCss },
//       { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
//     ],
//   }),
//   shellComponent: RootShell,
//   component: RootComponent,
//   notFoundComponent: NotFoundComponent,
//   errorComponent: ErrorComponent,
// });

// function RootShell({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <head>
//         <HeadContent />
//       </head>
//       <body>
//         {children}
//         <Scripts />
//       </body>
//     </html>
//   );
// }

// function RootComponent() {
//   const { queryClient } = Route.useRouteContext();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <div className="flex min-h-screen flex-col">
//         <SiteHeader />
//         <main className="flex-1">
//           <Outlet />
//         </main>
//         <SiteFooter />
//         <FloatingActions />
//       </div>
//     </QueryClientProvider>
//   );
// }
