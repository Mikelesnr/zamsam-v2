// import { createFileRoute } from "@tanstack/react-router";
// import technicianImg from "@/assets/technician.jpg";
// import { COMPANY } from "@/lib/contact";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "About — Zamsam Engineering" },
//       {
//         name: "description",
//         content:
//           "Zamsam Engineering (Pvt) Ltd is a Harare-based refrigeration and air-conditioning specialist. Meet the team behind Zimbabwe's trusted cooling engineers.",
//       },
//       { property: "og:title", content: "About Zamsam Engineering" },
//       { property: "og:description", content: "Harare refrigeration & air-conditioning specialists." },
//     ],
//   }),
//   component: AboutPage,
// });

// const TEAM = [
//   {
//     name: COMPANY.contact.operations.name,
//     role: "Operations & Head Technician",
//     bio: "Fifteen-plus years engineering refrigeration and cooling systems across Zimbabwe. Runs every installation and callout from 3 Alexander Road.",
//   },
//   {
//     name: "Senior Refrigeration Tech",
//     role: "Cold Room Specialist",
//     bio: "Design, panelling and commissioning of walk-in cold rooms for retail, medical and agricultural clients.",
//   },
//   {
//     name: "HVAC Technician",
//     role: "Air Conditioning",
//     bio: "Installs, services and re-gasses split, cassette and ducted air-conditioning units across commercial and residential sites.",
//   },
//   {
//     name: "Electrical Technician",
//     role: "Electrical Installations",
//     bio: "Handles wiring, board-level diagnostics and appliance repairs for cooling and general electrical systems.",
//   },
// ];

// function AboutPage() {
//   return (
//     <div className="bg-ice">
//       <header className="border-b-[3px] border-brand-red bg-navy-950 py-20 text-white">
//         <div className="mx-auto max-w-7xl px-6">
//           <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//             About us
//           </span>
//           <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-6xl">
//             Zimbabwe's Cooling Engineers
//           </h1>
//           <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
//             {COMPANY.legalName} has spent more than a decade keeping fridges cold, cold rooms cold, and
//             buildings comfortable across Harare. We do refrigeration, air conditioning and electrical
//             installations — with the same standard whether the job is a domestic freezer or an industrial
//             cold room. <span className="text-brand-red">{COMPANY.tagline}</span>
//           </p>
//         </div>
//       </header>

//       <section className="mx-auto max-w-7xl px-6 py-20">
//         <div className="grid gap-16 md:grid-cols-3">
//           <div className="md:col-span-1">
//             <img
//               src={technicianImg}
//               alt="Zamsam head technician"
//               width={1080}
//               height={1350}
//               loading="lazy"
//               className="w-full border-b-[3px] border-brand-red object-cover"
//             />
//           </div>
//           <div className="md:col-span-2">
//             <h2 className="font-display text-3xl font-bold uppercase">The Team</h2>
//             <div className="mt-8 grid gap-6 sm:grid-cols-2">
//               {TEAM.map((m) => (
//                 <article
//                   key={m.name}
//                   className="border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-6"
//                 >
//                   <h3 className="font-display text-lg font-bold uppercase">{m.name}</h3>
//                   <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                     {m.role}
//                   </p>
//                   <p className="mt-3 text-sm leading-relaxed text-navy-950/70">{m.bio}</p>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
