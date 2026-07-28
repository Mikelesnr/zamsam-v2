export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  active: boolean;
};

// Active field team — technicians and the head technician.
export const TECHNICIANS: TeamMember[] = [
  {
    slug: "michael-mwanza-snr",
    name: "Michael Mwanza Snr",
    role: "Founder, Director & Head Technician",
    bio: "Founded Zamsam Engineering and leads every installation and callout from the front. Oversees domestic and industrial refrigeration, cold room builds, and air conditioning work across Harare.",
    active: true,
  },
  {
    slug: "thomas-manyange",
    name: "Thomas Manyange",
    role: "Technician",
    bio: "Field technician handling refrigeration servicing, air conditioning installs, and repairs across domestic and commercial sites.",
    active: true,
  },
  {
    slug: "lissa-chidhumo",
    name: "Lissa Chidhumo",
    role: "Technician",
    bio: "Zamsam's newest team member, fully kitted and ready to join callouts across Harare.",
    active: true,
  },
];

// Directors — company leadership, not necessarily field-active.
export const DIRECTORS: TeamMember[] = [
  {
    slug: "michael-mwanza-snr-director",
    name: "Michael Mwanza Snr",
    role: "Founder & Director",
    bio: "Co-founded Zamsam Engineering and leads operations and technical work day to day.",
    active: true,
  },
  {
    slug: "monica-mwanza",
    name: "Monica Mwanza",
    role: "Co-Founder & Director",
    bio: "Co-founded Zamsam Engineering alongside her husband. Serves as a non-active director on the company's leadership.",
    active: false,
  },
];