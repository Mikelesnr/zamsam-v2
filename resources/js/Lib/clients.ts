export type ClientPartner = {
  slug: string;
  name: string;
  kind: "Contracted Partner" | "Client";
  description: string;
};

export const CLIENTS_PARTNERS: ClientPartner[] = [
  {
    slug: "defy-zimbabwe",
    name: "Defy Zimbabwe",
    kind: "Contracted Partner",
    description:
      "Authorised service partner for Defy — installation, servicing and repair of Defy appliances. One of several Defy partners, but handles the bulk of Defy's Harare-area jobs, with occasional out-of-town callouts.",
  },
  {
    slug: "heritage",
    name: "Heritage School",
    kind: "Client",
    description:
      "Refrigeration and air conditioning servicing and installation for Heritage School.",
  },
];