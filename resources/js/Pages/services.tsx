// import { createFileRoute, Link } from "@tanstack/react-router";
// import { SERVICES } from "@/Lib/services";
// import { COMPANY, waLink } from "@/lib/contact";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       { title: "Services — Zamsam Engineering" },
//       {
//         name: "description",
//         content:
//           "Full service list: cold rooms, air conditioning, fridge repair, re-gassing, leak detection, electrical installations and 24/7 emergency call-outs in Harare.",
//       },
//       { property: "og:title", content: "Services — Zamsam Engineering" },
//       { property: "og:description", content: "Refrigeration, AC, re-gassing, leak repair and electrical services in Harare." },
//     ],
//   }),
//   component: ServicesPage,
// });

// function ServicesPage() {
//   return (
//     <div className="bg-ice">
//       <header className="border-b-[3px] border-brand-red bg-navy-950 py-20 text-white">
//         <div className="mx-auto max-w-7xl px-6">
//           <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//             Full catalogue
//           </span>
//           <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-6xl">
//             Our Services
//           </h1>
//           <p className="mt-4 max-w-2xl text-white/75">
//             Every job comes with an estimated repair time so you can plan around it. Need something not
//             listed? <a href={waLink(COMPANY.contact.operations.phoneRaw)} target="_blank" rel="noreferrer" className="text-brand-red underline">Ask on WhatsApp</a>.
//           </p>
//         </div>
//       </header>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {SERVICES.map((s) => (
//             <article
//               key={s.slug}
//               className="border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-8"
//             >
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 {s.number}. {s.category}
//               </span>
//               <h3 className="mt-4 font-display text-xl font-bold uppercase">{s.title}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-navy-950/70">{s.description}</p>
//               <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-navy-950/10 pt-4 text-[11px] uppercase tracking-widest">
//                 <div className="col-span-1">
//                   <dt className="text-navy-950/50">ETA</dt>
//                   <dd className="mt-1 text-navy-900 font-bold normal-case tracking-normal text-sm">
//                     {s.eta}
//                   </dd>
//                 </div>
//                 <div className="col-span-2 flex items-end justify-end gap-2">
//                   <a
//                     href={waLink(
//                       COMPANY.contact.operations.phoneRaw,
//                       `Hi Zamsam, I'd like to book: ${s.title}.`,
//                     )}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="bg-whatsapp px-3 py-2 text-[10px] font-bold text-white hover:opacity-90"
//                   >
//                     WhatsApp
//                   </a>
//                   <Link
//                     to="/contact"
//                     className="bg-navy-950 px-3 py-2 text-[10px] font-bold text-white hover:bg-navy-900"
//                   >
//                     Quote
//                   </Link>
//                 </div>
//               </dl>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
