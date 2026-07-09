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
    title: "Cold Room Construction",
    description:
      "Custom design and installation of walk-in freezers, chillers and cooling plants for wholesalers, farms and medical facilities.",
    eta: "2 – 6 weeks (project scope)",
  },
  {
    slug: "air-conditioning",
    number: "02",
    category: "Climate Control",
    title: "Air Conditioning",
    description:
      "Commercial and residential HVAC design, split-unit installation, and full-system commissioning with energy-efficiency focus.",
    eta: "Same-day install for splits",
  },
  {
    slug: "domestic-fridges",
    number: "03",
    category: "Domestic",
    title: "Fridge & Freezer Repair",
    description:
      "Expert restoration of domestic fridges, freezers and display cabinets using genuine parts across all major brands.",
    eta: "24 – 48 hours",
  },
  {
    slug: "repairs-servicing",
    number: "04",
    category: "Maintenance",
    title: "Repairs & Servicing",
    description:
      "Scheduled and reactive servicing for all refrigeration and cooling equipment — diagnostics, cleaning, part replacement, testing.",
    eta: "Same day on-site",
  },
  {
    slug: "re-gassing",
    number: "05",
    category: "Refrigerant",
    title: "Re-gassing",
    description:
      "Refrigerant recovery, evacuation and recharge for fridges, freezers, cold rooms and AC systems. R134a, R410a, R404a and more.",
    eta: "1 – 3 hours per unit",
  },
  {
    slug: "leak-repair",
    number: "06",
    category: "Diagnostics",
    title: "Leak Detection & Repair",
    description:
      "Electronic and UV leak detection, pressure testing and brazing repairs on copper lines and coils.",
    eta: "2 – 6 hours",
  },
  {
    slug: "electrical",
    number: "07",
    category: "Electrical",
    title: "Electrical Installations",
    description:
      "Wiring, board-level diagnostics and restoration for cooling equipment and general electrical appliances.",
    eta: "Same day – 2 days",
  },
  {
    slug: "emergency",
    number: "08",
    category: "24/7",
    title: "Emergency Call-Outs",
    description:
      "After-hours response to protect perishable stock. Cold-chain failures triaged and stabilised on arrival.",
    eta: "Within 2 hours in Harare",
  },
];
