// import { createFileRoute, Link } from "@tanstack/react-router";
// import heroImg from "@/assets/hero-coldroom.jpg";
// import technicianImg from "@/assets/technician.jpg";
// import { SERVICES } from "@/lib/services";
// import { COMPANY, telLink, waLink } from "@/lib/contact";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Zamsam Engineering — Refrigeration & Air Conditioning in Harare" },
//       {
//         name: "description",
//         content:
//           "Harare's refrigeration and cooling specialists. Cold rooms, industrial & domestic fridges, air conditioning, re-gassing, leak detection, electrical installations.",
//       },
//     ],
//   }),
//   component: Home,
// });

// function Home() {
//   const highlighted = SERVICES.slice(0, 6);

//   return (
//     <div className="bg-ice text-navy-950">
//       {/* Hero */}
//       <header className="relative overflow-hidden bg-navy-950 text-white">
//         <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:items-center md:pt-28">
//           <div>
//             <div className="mb-6 inline-flex items-center gap-3 border-b-[3px] border-brand-red pb-2">
//               <span className="size-2 rounded-full bg-brand-red" />
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
//                 Harare · Since inception
//               </span>
//             </div>
//             <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
//               Precision <br /> Cooling for <br />
//               <span className="text-brand-red">Harare</span>
//             </h1>
//             <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 md:text-lg">
//               Cold rooms, industrial & domestic refrigeration, air conditioning, re-gassing and leak repair.
//               Certified engineers keeping Zimbabwe's cold chain running.
//             </p>

//             <div className="mt-10 flex flex-wrap items-center gap-4">
//               <Link
//                 to="/contact"
//                 className="border-b-[3px] border-brand-red bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-navy-950 transition-colors hover:bg-brand-red hover:text-white"
//               >
//                 Request a Quote
//               </Link>
//               <a
//                 href={waLink(COMPANY.contact.operations.phoneRaw)}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="border-b-[3px] border-brand-red bg-transparent px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white ring-1 ring-white/20 transition-colors hover:bg-white/5"
//               >
//                 WhatsApp Us
//               </a>
//             </div>

//             <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-xs sm:grid-cols-2">
//               <div>
//                 <p className="font-bold uppercase tracking-[0.2em] text-brand-red">Emergency 24/7</p>
//                 <a href={telLink(COMPANY.contact.cell.phone)} className="mt-1 block font-display text-lg">
//                   {COMPANY.contact.cell.phone}
//                 </a>
//               </div>
//               <div>
//                 <p className="font-bold uppercase tracking-[0.2em] text-brand-red">Workshop</p>
//                 <p className="mt-1 font-display text-lg">
//                   {COMPANY.address.line1}, {COMPANY.address.line2}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <img
//               src={heroImg}
//               alt="Zamsam industrial cold-room installation in Harare"
//               width={1600}
//               height={1200}
//               className="aspect-square w-full border-b-[3px] border-brand-red object-cover"
//             />
//             <div className="absolute -bottom-6 -left-6 hidden border-b-[3px] border-brand-red bg-white p-6 text-navy-950 shadow-xl md:block">
//               <p className="font-display text-3xl font-bold tracking-tight">15+ Years</p>
//               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-700">
//                 Local Expertise
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Services */}
//       <section className="mx-auto max-w-7xl px-6 py-24" id="services">
//         <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <h2 className="font-display text-4xl font-bold uppercase tracking-tight">
//               Core Capabilities
//             </h2>
//             <div className="mt-4 h-1 w-24 bg-brand-red" />
//           </div>
//           <p className="max-w-sm text-sm text-navy-950/60">
//             From massive industrial chillers to domestic refrigerator repairs — every job includes an
//             up-front <span className="font-bold text-navy-950">estimated repair time</span>.
//           </p>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {highlighted.map((s) => (
//             <article
//               key={s.slug}
//               className="group border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-8 transition-transform hover:-translate-y-1"
//             >
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 {s.number}. {s.category}
//               </span>
//               <h3 className="mt-4 font-display text-xl font-bold uppercase">{s.title}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-navy-950/70">{s.description}</p>
//               <div className="mt-6 flex items-center justify-between border-t border-navy-950/10 pt-4 text-xs">
//                 <span className="text-navy-950/50 uppercase tracking-widest">ETA</span>
//                 <span className="font-bold text-navy-900">{s.eta}</span>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="mt-10 flex justify-center">
//           <Link
//             to="/services"
//             className="border-b-[3px] border-brand-red bg-navy-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-navy-900"
//           >
//             View all services
//           </Link>
//         </div>
//       </section>

//       {/* Head technician */}
//       <section className="bg-navy-950 text-white">
//         <div className="mx-auto grid max-w-7xl items-center md:grid-cols-2">
//           <div className="p-10 md:p-16">
//             <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//               Built on Reputation
//             </span>
//             <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight">
//               Meet Our Head Technician
//             </h2>
//             <p className="mt-6 text-lg font-light italic leading-relaxed text-white/85">
//               "At Zamsam, we don't just fix machines — we protect your investments. Whether it's a home
//               fridge or a hospital cold room, our standard for reliability stays the same."
//             </p>
//             <div className="mt-8 border-b-[3px] border-brand-red pb-4">
//               <p className="font-display text-xl font-bold uppercase tracking-[0.15em]">
//                 {COMPANY.contact.operations.name}
//               </p>
//               <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 Operations & Head Technician
//               </p>
//             </div>
//             <div className="mt-8 flex flex-wrap gap-3">
//               {["Refrigeration", "HVAC", "Electrical", "Cold Chain"].map((c) => (
//                 <span
//                   key={c}
//                   className="border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
//                 >
//                   {c}
//                 </span>
//               ))}
//             </div>
//             <Link
//               to="/about"
//               className="mt-10 inline-block border-b-[3px] border-brand-red bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-navy-950 hover:bg-brand-red hover:text-white"
//             >
//               Meet the team
//             </Link>
//           </div>
//           <div className="relative min-h-[500px] md:h-full">
//             <img
//               src={technicianImg}
//               alt="M. Mwanza, Zamsam head technician"
//               width={1080}
//               height={1350}
//               className="absolute inset-0 h-full w-full object-cover"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA strip */}
//       <section className="border-b-[3px] border-brand-red bg-white">
//         <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-3">
//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//               Workshop
//             </h4>
//             <p className="mt-2 font-display text-xl">
//               {COMPANY.address.line1}
//               <br />
//               {COMPANY.address.line2}
//             </p>
//           </div>
//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//               Call / WhatsApp
//             </h4>
//             <a
//               href={telLink(COMPANY.contact.operations.phone)}
//               className="mt-2 block font-display text-xl hover:text-brand-red"
//             >
//               {COMPANY.contact.operations.phone}
//             </a>
//             <a
//               href={telLink(COMPANY.contact.cell.phone)}
//               className="mt-1 block font-display text-xl hover:text-brand-red"
//             >
//               {COMPANY.contact.cell.phone}
//             </a>
//           </div>
//           <div>
//             <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//               Email
//             </h4>
//             {COMPANY.contact.emails.map((e) => (
//               <a key={e} href={`mailto:${e}`} className="mt-2 block break-all font-display text-base hover:text-brand-red">
//                 {e}
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
