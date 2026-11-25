export type JobCategory = "Technology" | "Finance" | "Security";

export interface Job {
  id: string;
  slug: string;
  title: string;
  category: JobCategory;
  employmentType: "Full Time" | "Part Time" | "Contract";
  roleLabel: string;
  location: string;
  experience: string;
  postedOn: string;
  summary: string;
  introduction: string;
  missions: string[];
  responsibilities: string[];
  requirements: string[];
  seo: { title: string; description: string };
}

const sharedIntro =
  "Join a dynamic, innovative team at the forefront of digital banking and fintech solutions. This role empowers you to drive impactful projects, enhance financial products, and shape the future of payments. Collaborate with talented professionals, leverage cutting-edge technologies, and deliver seamless, secure, and efficient experiences for clients worldwide.";

const sharedMissions = [
  "Deliver seamless digital banking experiences that empower customers with fast and secure transactions worldwide.",
  "Drive innovation by developing cutting-edge fintech solutions that simplify payments and financial management.",
  "Enhance user satisfaction by providing intuitive, reliable, and accessible banking tools for all clients.",
];

export const jobsData: Job[] = [
  {
    id: "job-1",
    slug: "principal-lead-fintech-product-manager",
    title: "Principal Lead Fintech Product Manager",
    category: "Technology",
    employmentType: "Part Time",
    roleLabel: "Manager",
    location: "Chicago",
    experience: "4+ Years",
    postedOn: "January 16, 2026",
    summary:
      "Leading fintech product initiatives, driving innovation, and ensuring seamless, secure, and efficient financial solutions.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Define multi-quarter product roadmaps for smart card payments and digital wallet integrations.",
      "Partner with engineering, security, and design leads to ship low-latency transaction experiences.",
      "Analyze adoption metrics, user retention, and global settlement performance.",
    ],
    requirements: [
      "4+ years leading product strategy in fintech, digital payments, or banking platforms.",
      "Strong fluency in card-network workflows, KYC compliance, and mobile wallet ecosystems.",
      "Demonstrated track record shipping high-trust consumer or enterprise financial tools.",
    ],
    seo: {
      title: "Principal Lead Fintech Product Manager - FlowSwipe",
      description:
        "Leading fintech product initiatives, driving innovation, and ensuring seamless, secure, and efficient financial solutions.",
    },
  },
  {
    id: "job-2",
    slug: "lead-global-payment-solutions-specialist",
    title: "Lead Global Payment Solutions Specialist",
    category: "Technology",
    employmentType: "Full Time",
    roleLabel: "Specialist",
    location: "Melbourne",
    experience: "9+ Years",
    postedOn: "January 15, 2026",
    summary:
      "Driving innovation in payment systems, ensuring smooth, secure, and efficient transactions across platforms.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Architect cross-border payment routing and multi-currency settlement workflows.",
      "Coordinate with acquiring banks and network partners to maximize authorization rates.",
      "Resolve complex payment escalation scenarios and document integration playbooks.",
    ],
    requirements: [
      "9+ years in global payments engineering, gateway operations, or card processing.",
      "Deep understanding of ISO 8583, multi-currency FX settlement, and real-time fraud controls.",
      "Excellent cross-regional stakeholder communication skills.",
    ],
    seo: {
      title: "Lead Global Payment Solutions Specialist - FlowSwipe",
      description:
        "Driving innovation in payment systems, ensuring smooth, secure, and efficient transactions across platforms.",
    },
  },
  {
    id: "job-3",
    slug: "senior-customer-experience-strategist",
    title: "Senior Customer Experience Strategist",
    category: "Security",
    employmentType: "Full Time",
    roleLabel: "Marketing",
    location: "San Francisco",
    experience: "9+ Years",
    postedOn: "January 16, 2026",
    summary:
      "Enhancing every customer interaction by designing seamless, engaging experiences that build trust and satisfaction.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Map end-to-end cardholder onboarding, dispute resolution, and alert touchpoints.",
      "Collaborate with trust & safety teams to make security verification effortless.",
      "Lead qualitative customer interviews and translate insights into measurable NPS gains.",
    ],
    requirements: [
      "9+ years in customer experience strategy, financial UX, or digital onboarding.",
      "Proven experience designing transparent security and trust communications.",
      "Strong analytical rigor across support funnel and retention metrics.",
    ],
    seo: {
      title: "Senior Customer Experience Strategist - FlowSwipe",
      description:
        "Enhancing every customer interaction by designing seamless, engaging experiences that build trust and satisfaction.",
    },
  },
  {
    id: "job-4",
    slug: "chief-blockchain-integration-engineer",
    title: "Chief Blockchain Integration Engineer",
    category: "Security",
    employmentType: "Full Time",
    roleLabel: "Secretary",
    location: "Toronto",
    experience: "5+ Years",
    postedOn: "January 14, 2026",
    summary:
      "Driving the development of blockchain systems that ensure secure, seamless, and scalable digital transactions.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Design cryptographic audit trails and tamper-evident ledger verification services.",
      "Lead security reviews for key-management infrastructure and hardware-backed signing.",
      "Mentor distributed systems engineers on resilient consensus and settlement reliability.",
    ],
    requirements: [
      "5+ years building production cryptographic or distributed settlement infrastructure.",
      "Expertise in applied cryptography, HSM integration, and zero-trust system design.",
      "Experience working within regulated financial security standards.",
    ],
    seo: {
      title: "Chief Blockchain Integration Engineer - FlowSwipe",
      description:
        "Driving the development of blockchain systems that ensure secure, seamless, and scalable digital transactions.",
    },
  },
  {
    id: "job-5",
    slug: "senior-financial-technology-advisor",
    title: "Senior Financial Technology Advisor",
    category: "Finance",
    employmentType: "Part Time",
    roleLabel: "Consulting",
    location: "New York",
    experience: "3+ Years",
    postedOn: "January 9, 2026",
    summary:
      "Providing expert guidance on financial technology strategies to deliver secure, innovative, and efficient solutions.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Advise leadership on treasury optimization, interchange economics, and regional compliance.",
      "Evaluate emerging payment rails and card program partnerships.",
      "Support executive financial modeling for international market launches.",
    ],
    requirements: [
      "3+ years in fintech advisory, corporate treasury, or banking strategy.",
      "Strong command of card-issuing unit economics and regulatory frameworks.",
      "Clear executive presentation and financial modeling skills.",
    ],
    seo: {
      title: "Senior Financial Technology Advisor - FlowSwipe",
      description:
        "Providing expert guidance on financial technology strategies to deliver secure, innovative, and efficient solutions.",
    },
  },
  {
    id: "job-6",
    slug: "head-lead-global-payments-coordinator",
    title: "Head Lead Global Payments Coordinator",
    category: "Finance",
    employmentType: "Contract",
    roleLabel: "Accountant",
    location: "London",
    experience: "8+ Years",
    postedOn: "January 9, 2026",
    summary:
      "Overseeing worldwide payment operations to ensure fast, secure, and seamless financial transactions across platforms.",
    introduction: sharedIntro,
    missions: sharedMissions,
    responsibilities: [
      "Coordinate daily global clearing, reconciliation, and liquidity operations across hubs.",
      "Establish automated exception-handling workflows with regional banking partners.",
      "Ensure accurate multi-currency financial reporting and audit readiness.",
    ],
    requirements: [
      "8+ years in international payment operations, treasury reconciliation, or fintech finance.",
      "Deep familiarity with SEPA, Faster Payments, SWIFT, and card settlement cycles.",
      "Track record managing high-volume operational teams across time zones.",
    ],
    seo: {
      title: "Head Lead Global Payments Coordinator - FlowSwipe",
      description:
        "Overseeing worldwide payment operations to ensure fast, secure, and seamless financial transactions across platforms.",
    },
  },
];
