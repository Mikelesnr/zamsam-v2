export type Service = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  eta: string;
};

export const SERVICES: Service[] = [
  {
    slug: "cold-rooms",
    number: "01",
    category: "Industrial",
    title: "Cold Room Installation",
    description:
      "Custom design, panelling and installation of walk-in freezers, chillers and cooling plants for wholesalers, butcheries, farms, restaurants and medical facilities. Full commissioning and handover included.",
    eta: "2 – 6 weeks (project scope)",
  },
  {
    slug: "air-conditioning-install",
    number: "02",
    category: "Climate Control",
    title: "Air Conditioning Installation",
    description:
      "Supply and installation of split, cassette and ducted air-conditioning systems for homes, offices, shops and commercial premises, sized correctly for the space and commissioned on-site.",
    eta: "Same-day install for splits",
  },
  {
    slug: "air-conditioning-service",
    number: "03",
    category: "Climate Control",
    title: "Air Conditioning Servicing",
    description:
      "Routine and reactive servicing of existing air-conditioning systems — filter and coil cleaning, gas top-up, drainage checks and fault diagnosis to keep units running efficiently.",
    eta: "Same day on-site",
  },
  {
    slug: "domestic-fridges",
    number: "04",
    category: "Domestic",
    title: "Domestic Fridge & Freezer Servicing",
    description:
      "Repair and servicing of household fridges, freezers and display cabinets across all major brands — using genuine parts, with diagnostics for cooling faults, compressor issues and door seals.",
    eta: "24 – 48 hours",
  },
  {
    slug: "industrial-refrigeration",
    number: "05",
    category: "Industrial",
    title: "Industrial Refrigeration Servicing",
    description:
      "Servicing and repair of commercial and industrial refrigeration equipment — bottle coolers, display fridges, cold storage units and processing-line cooling for shops, bars and food producers.",
    eta: "Same day – 48 hours",
  },
  {
    slug: "repairs-servicing",
    number: "06",
    category: "Maintenance",
    title: "General Repairs & Scheduled Servicing",
    description:
      "Scheduled maintenance contracts and reactive callouts for all refrigeration and cooling equipment, domestic or industrial — diagnostics, cleaning, part replacement and performance testing.",
    eta: "Same day on-site",
  },
  {
    slug: "re-gassing",
    number: "07",
    category: "Refrigerant",
    title: "Re-gassing",
    description:
      "Refrigerant recovery, evacuation and recharge for domestic fridges, freezers, cold rooms and AC systems. R134a, R410a, R404a and more.",
    eta: "1 – 3 hours per unit",
  },
  {
    slug: "leak-repair",
    number: "08",
    category: "Diagnostics",
    title: "Leak Detection & Repair",
    description:
      "Electronic and UV leak detection, pressure testing and brazing repairs on copper lines and coils for both domestic and industrial systems.",
    eta: "2 – 6 hours",
  },
  {
    slug: "electrical",
    number: "09",
    category: "Electrical",
    title: "Electrical Installations",
    description:
      "Wiring, board-level diagnostics and restoration for cooling equipment and general electrical appliances, domestic and commercial.",
    eta: "Same day – 2 days",
  },
  {
    slug: "emergency",
    number: "10",
    category: "24/7",
    title: "Emergency Call-Outs",
    description:
      "After-hours response to protect perishable stock, whether it's a home freezer or a full cold room. Cold-chain failures triaged and stabilised on arrival.",
    eta: "Within 2 hours in Harare",
  },
];