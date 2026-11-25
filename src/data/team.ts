export interface SocialLink {
  platform: "LinkedIn" | "Threads" | "X";
  url: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  location: string;
  experienceYears: string;
  portrait: string;
  biography: string;
  expertise: { title: string; description: string }[];
  metrics: { value: string; label: string }[];
  tools: string[];
  socialLinks: SocialLink[];
  seo: { title: string; description: string };
}

const defaultTools = [
  "/assets/icons/tools-1.svg",
  "/assets/icons/tools-2.svg",
  "/assets/icons/tools-3.svg",
  "/assets/icons/tools-4.svg",
];

export const teamMembersData: TeamMember[] = [
  {
    id: "team-mark",
    slug: "mark",
    name: "Mark",
    role: "Banking Analyst",
    location: "San Francisco",
    experienceYears: "7+",
    portrait: "/assets/images/team/team-img-3.avif",
    biography:
      "Analyzing financial data to drive smarter decisions, optimize processes, and support efficient banking operations.",
    expertise: [
      {
        title: "Data Analysis",
        description:
          "Mark evaluates financial data, identifies key patterns, and supports strategic banking decisions.",
      },
      {
        title: "Market Insights",
        description:
          "He monitors industry trends and provides insights to enhance financial performance and risk management.",
      },
    ],
    metrics: [
      { value: "7+", label: "Experience Yrs" },
      { value: "250+", label: "Mentorship Hours" },
      { value: "120+", label: "Projects" },
      { value: "09", label: "Awards" },
      { value: "85", label: "Workshops" },
    ],
    tools: defaultTools,
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/", icon: "/assets/icons/linkedin.svg" },
      { platform: "Threads", url: "https://www.threads.net/", icon: "/assets/icons/threads.svg" },
      { platform: "X", url: "https://x.com/", icon: "/assets/icons/x.svg" },
    ],
    seo: {
      title: "Mark - FlowSwipe",
      description: "Meet Mark, Banking Analyst at FlowSwipe driving financial insights and payment intelligence.",
    },
  },
  {
    id: "team-jacob",
    slug: "jacob",
    name: "Jacob",
    role: "Project Manager",
    location: "San Francisco",
    experienceYears: "5+",
    portrait: "/assets/images/team/jacob.avif",
    biography:
      "Leading technology initiatives to drive innovation, streamline operations, and deliver secure, efficient digital solutions.",
    expertise: [
      {
        title: "Project Planning",
        description:
          "Jacob structures project timelines, allocates resources, and ensures clear execution strategies.",
      },
      {
        title: "Team Coordination",
        description:
          "He aligns teams, manages communication, and keeps projects on track for timely delivery.",
      },
    ],
    metrics: [
      { value: "5+", label: "Experience Yrs" },
      { value: "165+", label: "Mentorship Hours" },
      { value: "86+", label: "Projects" },
      { value: "06", label: "Awards" },
      { value: "50", label: "Workshops" },
    ],
    tools: defaultTools,
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/", icon: "/assets/icons/linkedin.svg" },
      { platform: "Threads", url: "https://www.threads.net/", icon: "/assets/icons/threads.svg" },
      { platform: "X", url: "https://x.com/", icon: "/assets/icons/x.svg" },
    ],
    seo: {
      title: "Jacob - FlowSwipe",
      description: "Meet Jacob, Project Manager at FlowSwipe leading cross-functional fintech execution.",
    },
  },
  {
    id: "team-rodriguez",
    slug: "rodriguez",
    name: "Rodriguez",
    role: "Operations Lead",
    location: "San Francisco",
    experienceYears: "3+",
    portrait: "/assets/images/team/rodriguez.avif",
    biography:
      "Overseeing operational strategies to ensure smooth, efficient workflows and seamless performance across all teams.",
    expertise: [
      {
        title: "Process Optimization",
        description:
          "Rodriguez improves workflows to increase efficiency and reduce operational bottlenecks.",
      },
      {
        title: "Operational Oversight",
        description:
          "He manages daily operations, ensuring consistency, productivity, and seamless execution.",
      },
    ],
    metrics: [
      { value: "3+", label: "Experience Yrs" },
      { value: "80+", label: "Mentorship Hours" },
      { value: "60+", label: "Projects" },
      { value: "03", label: "Awards" },
      { value: "34", label: "Workshops" },
    ],
    tools: defaultTools,
    socialLinks: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/", icon: "/assets/icons/linkedin.svg" },
      { platform: "Threads", url: "https://www.threads.net/", icon: "/assets/icons/threads.svg" },
      { platform: "X", url: "https://x.com/", icon: "/assets/icons/x.svg" },
    ],
    seo: {
      title: "Rodriguez - FlowSwipe",
      description: "Meet Rodriguez, Operations Lead at FlowSwipe streamlining global operational excellence.",
    },
  },
];
