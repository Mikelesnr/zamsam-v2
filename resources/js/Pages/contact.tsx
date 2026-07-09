// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { z } from "zod";
// import { COMPANY, telLink, waLink } from "@/lib/contact";
// import { SERVICES } from "@/lib/services";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Zamsam Engineering, Harare" },
//       {
//         name: "description",
//         content:
//           "Call, WhatsApp or email Zamsam Engineering. Workshop at 3 Alexander Road, Highlands, Harare. Request a quote or emergency call-out.",
//       },
//       { property: "og:title", content: "Contact Zamsam Engineering" },
//       { property: "og:description", content: "3 Alexander Road, Highlands, Harare — cooling engineers on call." },
//     ],
//   }),
//   component: ContactPage,
// });

// const contactSchema = z.object({
//   name: z.string().trim().min(1, "Name is required").max(80),
//   phone: z.string().trim().min(6, "Phone is required").max(30),
//   email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
//   service: z.string().max(80),
//   message: z.string().trim().min(5, "Please describe the issue").max(1000),
// });

// function ContactPage() {
//   const [state, setState] = useState<"idle" | "sent">("idle");
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
//     const parsed = contactSchema.safeParse(data);
//     if (!parsed.success) {
//       const errs: Record<string, string> = {};
//       for (const iss of parsed.error.issues) errs[iss.path[0] as string] = iss.message;
//       setErrors(errs);
//       return;
//     }
//     setErrors({});
//     // Backend hookup point — replace with your API / server function.
//     const wa = waLink(
//       COMPANY.contact.operations.phoneRaw,
//       `New enquiry from ${parsed.data.name} (${parsed.data.phone})\nService: ${parsed.data.service}\n\n${parsed.data.message}`,
//     );
//     window.open(wa, "_blank", "noreferrer");
//     setState("sent");
//     e.currentTarget.reset();
//   };

//   return (
//     <div className="bg-ice">
//       <header className="border-b-[3px] border-brand-red bg-navy-950 py-20 text-white">
//         <div className="mx-auto max-w-7xl px-6">
//           <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//             Get in touch
//           </span>
//           <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-tight md:text-6xl">
//             Contact
//           </h1>
//           <p className="mt-4 max-w-xl text-white/75">
//             Call, WhatsApp, email or send us a message. Emergency call-outs available across Harare.
//           </p>
//         </div>
//       </header>

//       <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2">
//         <div>
//           <h2 className="font-display text-2xl font-bold uppercase">Workshop</h2>
//           <div className="mt-2 h-1 w-16 bg-brand-red" />
//           <p className="mt-6 font-display text-2xl">
//             {COMPANY.address.line1}
//             <br />
//             {COMPANY.address.line2}
//             <br />
//             {COMPANY.address.country}
//           </p>

//           <div className="mt-10 space-y-6">
//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 {COMPANY.contact.operations.name} · {COMPANY.contact.operations.role}
//               </h4>
//               <div className="mt-2 flex flex-wrap gap-3">
//                 <a
//                   href={telLink(COMPANY.contact.operations.phone)}
//                   className="border-b-[3px] border-brand-red bg-white px-4 py-2 text-sm font-bold"
//                 >
//                   {COMPANY.contact.operations.phone}
//                 </a>
//                 <a
//                   href={waLink(COMPANY.contact.operations.phoneRaw)}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-whatsapp px-4 py-2 text-sm font-bold text-white"
//                 >
//                   WhatsApp
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 Cell
//               </h4>
//               <div className="mt-2 flex flex-wrap gap-3">
//                 <a
//                   href={telLink(COMPANY.contact.cell.phone)}
//                   className="border-b-[3px] border-brand-red bg-white px-4 py-2 text-sm font-bold"
//                 >
//                   {COMPANY.contact.cell.phone}
//                 </a>
//                 <a
//                   href={waLink(COMPANY.contact.cell.phoneRaw)}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-whatsapp px-4 py-2 text-sm font-bold text-white"
//                 >
//                   WhatsApp
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 Email
//               </h4>
//               {COMPANY.contact.emails.map((e) => (
//                 <a key={e} href={`mailto:${e}`} className="mt-1 block break-all text-sm">
//                   {e}
//                 </a>
//               ))}
//             </div>

//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
//                 Hours
//               </h4>
//               <ul className="mt-2 space-y-1 text-sm">
//                 {COMPANY.hours.map((h) => (
//                   <li key={h.day} className="flex justify-between border-b border-navy-950/10 py-1">
//                     <span>{h.day}</span>
//                     <span className="font-bold">{h.time}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         <form
//           onSubmit={onSubmit}
//           className="border border-navy-950/10 border-b-[3px] border-b-brand-red bg-white p-8 shadow-sm"
//           noValidate
//         >
//           <h2 className="font-display text-2xl font-bold uppercase">Request a Quote</h2>
//           <div className="mt-2 h-1 w-16 bg-brand-red" />

//           {state === "sent" && (
//             <p className="mt-6 border border-whatsapp/30 bg-whatsapp/10 p-3 text-sm">
//               Thanks — WhatsApp opened with your message. We'll respond shortly.
//             </p>
//           )}

//           <div className="mt-6 grid gap-4">
//             <Field label="Name" name="name" error={errors.name} />
//             <div className="grid gap-4 sm:grid-cols-2">
//               <Field label="Phone" name="phone" type="tel" error={errors.phone} />
//               <Field label="Email" name="email" type="email" error={errors.email} required={false} />
//             </div>
//             <label className="block">
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy-950/60">
//                 Service
//               </span>
//               <select
//                 name="service"
//                 defaultValue={SERVICES[0].title}
//                 className="mt-2 w-full border border-navy-950/15 bg-ice px-3 py-3 text-sm focus:border-brand-red focus:outline-none"
//               >
//                 {SERVICES.map((s) => (
//                   <option key={s.slug}>{s.title}</option>
//                 ))}
//               </select>
//             </label>
//             <label className="block">
//               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy-950/60">
//                 Describe the issue
//               </span>
//               <textarea
//                 name="message"
//                 rows={5}
//                 maxLength={1000}
//                 className="mt-2 w-full border border-navy-950/15 bg-ice px-3 py-3 text-sm focus:border-brand-red focus:outline-none"
//               />
//               {errors.message && <p className="mt-1 text-xs text-brand-red">{errors.message}</p>}
//             </label>

//             <button
//               type="submit"
//               className="mt-2 border-b-[3px] border-brand-red-dark bg-brand-red py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-brand-red-dark"
//             >
//               Send via WhatsApp
//             </button>
//           </div>
//         </form>
//       </section>
//     </div>
//   );
// }

// function Field({
//   label,
//   name,
//   type = "text",
//   error,
//   required = true,
// }: {
//   label: string;
//   name: string;
//   type?: string;
//   error?: string;
//   required?: boolean;
// }) {
//   return (
//     <label className="block">
//       <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy-950/60">
//         {label}
//         {!required && <span className="normal-case text-navy-950/40"> (optional)</span>}
//       </span>
//       <input
//         name={name}
//         type={type}
//         maxLength={type === "email" ? 120 : 80}
//         className="mt-2 w-full border border-navy-950/15 bg-ice px-3 py-3 text-sm focus:border-brand-red focus:outline-none"
//       />
//       {error && <p className="mt-1 text-xs text-brand-red">{error}</p>}
//     </label>
//   );
// }
