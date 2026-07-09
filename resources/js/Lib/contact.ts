// Extracted from the Zamsam business card.
export const COMPANY = {
  legalName: "Zamsam Engineering (Pvt) Ltd",
  shortName: "Zamsam",
  tagline: "No job is too big or too small for us.",
  address: {
    line1: "3 Alexander Road",
    line2: "Highlands, Harare",
    country: "Zimbabwe",
  },
  hours: [
    { day: "Mon – Fri", time: "08:00 – 17:30" },
    { day: "Saturday", time: "08:00 – 13:00" },
    { day: "Sunday", time: "Emergency call-outs only" },
  ],
  contact: {
    operations: {
      name: "M. Mwanza",
      role: "Operations",
      phone: "+263 773 296 227",
      phoneRaw: "263773296227",
    },
    cell: {
      phone: "+263 712 793 798",
      phoneRaw: "263712793798",
    },
    emails: [
      "michaelmwanza@rocketmail.com",
      "zamsamrefrigeration@gmail.com",
    ],
  },
} as const;

export const waLink = (phoneRaw: string, message = "Hello Zamsam, I'd like to enquire about your services.") =>
  `https://wa.me/${phoneRaw}?text=${encodeURIComponent(message)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;
