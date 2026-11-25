export type BlogCategory = "Technology" | "Security" | "Finance";

export interface Article {
  id: string;
  slug: string;
  category: BlogCategory;
  title: string;
  publicationDate: string;
  detailDate: string;
  author: {
    name: string;
    slug: string;
    avatar: string;
  };
  thumbnailImage: string;
  heroImage: string;
  excerpt: string;
  seo: { title: string; description: string };
}

export const articlesData: Article[] = [
  {
    id: "blog-1",
    slug: "smart-spending-habits-for-a-more-balanced-and-secure-financial-life",
    category: "Technology",
    title: "Smart Spending Habits for a More Balanced and Secure Financial Life",
    publicationDate: "14 - Jan - 2026",
    detailDate: "14 Jan 26",
    author: {
      name: "Peggy Carter",
      slug: "peggy-carter",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/holographic/how-to-enabling-global-spending-with-ease-and-growing-confidence-thumbnail.avif",
    heroImage:
      "/assets/images/holographic/how-to-enabling-global-spending-with-ease-and-growing-confidence-thumbnail.avif",
    excerpt:
      "Build intentional daily spending routines with real-time card controls, category alerts, and transparent analytics.",
    seo: {
      title: "Smart Spending Habits for a More Balanced and Secure Financial Life - FlowSwipe",
      description: "Smart spending strategies powered by modern smart card controls and real-time analytics.",
    },
  },
  {
    id: "blog-2",
    slug: "a-practical-guide-to-effortless-expense-reporting-made-simple-and-smart",
    category: "Security",
    title: "A Practical Guide to effortless expense reporting made simple and smart",
    publicationDate: "14 - Jan - 2026",
    detailDate: "14 Jan 26",
    author: {
      name: "Nova Kingsley",
      slug: "nova-kingsley",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/holographic/a-practical-guide-to-effortless-expense-reporting-made-simple-and-smart-thumbnail.avif",
    heroImage:
      "/assets/images/holographic/a-practical-guide-to-effortless-expense-reporting-made-simple-and-smart-thumbnail.avif",
    excerpt:
      "Streamline corporate and personal expense tracking with automated receipt capture and instant transaction categorization.",
    seo: {
      title: "A Practical Guide to effortless expense reporting made simple and smart - FlowSwipe",
      description: "How modern smart cards simplify expense reporting with instant alerts and secure logs.",
    },
  },
  {
    id: "blog-3",
    slug: "smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable",
    category: "Finance",
    title: "Smart Collector Tips for global currency coins timeless, diverse, and valuable",
    publicationDate: "14 - Jan - 2026",
    detailDate: "14 Jan 26",
    author: {
      name: "Peggy Carter",
      slug: "peggy-carter",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/holographic/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable-thumbnail.avif",
    heroImage:
      "/assets/images/holographic/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable.avif",
    excerpt:
      "Explore global multi-currency value preservation and frictionless borderless spending with modern digital cards.",
    seo: {
      title: "Smart Collector Tips for global currency coins timeless, diverse, and valuable - FlowSwipe",
      description: "Discover universal currency perspectives and global smart payment card insights.",
    },
  },
  {
    id: "blog-4",
    slug: "your-essential-guide-to-secured-global-transactions-built-on-trust-and-speed",
    category: "Technology",
    title: "Your Essential Guide to secure and global transactions built on trust and speed",
    publicationDate: "14 - Jan - 2026",
    detailDate: "14 Jan 26",
    author: {
      name: "Chris Pratt",
      slug: "chris-pratt",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/holographic/your-essential-guide-to-secure-and-global-transactions-built-on-trust-and-speed-thumbnail.avif",
    heroImage:
      "/assets/images/holographic/your-essential-guide-to-secure-and-global-transactions-built-on-trust-and-speed-thumbnail.avif",
    excerpt:
      "Learn how tamper-resistant microchips and end-to-end encryption keep cross-border transactions fast and safe.",
    seo: {
      title: "Your Essential Guide to secure and global transactions built on trust and speed - FlowSwipe",
      description: "Security architecture behind fast global smart card transactions.",
    },
  },
  {
    id: "blog-5",
    slug: "essential-learning-guide-for-workplace-conversations-made-open-honest-and-meaningful",
    category: "Security",
    title: "Essential Learning Guide for workplace conversations made open, honest, and meaningful",
    publicationDate: "14 - Jan - 2026",
    detailDate: "14 Jan 26",
    author: {
      name: "Nova Kingsley",
      slug: "nova-kingsley",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/holographic/essential-learning-guide-for-workplace-conversations-made-open-honest-and-meaningful-thumbnail.jpg",
    heroImage:
      "/assets/images/holographic/essential-learning-guide-for-workplace-conversations-made-open-honest-and-meaningful-thumbnail.jpg",
    excerpt:
      "How high-trust fintech teams foster transparent communication and collaborative decision-making.",
    seo: {
      title: "Essential Learning Guide for workplace conversations made open, honest, and meaningful - FlowSwipe",
      description: "Building open, honest, and meaningful team communication in modern fintech.",
    },
  },
  {
    id: "blog-6",
    slug: "advanced-analytics-guide-to-transaction-performance",
    category: "Finance",
    title: "Advanced Analytics Guide to transaction performance optimization and insights",
    publicationDate: "13 - Jan - 2026",
    detailDate: "13 Jan 26",
    author: {
      name: "Chris Pratt",
      slug: "chris-pratt",
      avatar: "/assets/images/team/peggy.webp",
    },
    thumbnailImage:
      "/assets/images/cards/advanced-analytics-guide-to-transaction-performance-optimization-and-insights-thumbnail.avif",
    heroImage:
      "/assets/images/cards/advanced-analytics-guide-to-transaction-performance-optimization-and-insights-thumbnail.avif",
    excerpt:
      "Unlock actionable spending visibility with real-time transaction metrics and visual performance dashboards.",
    seo: {
      title: "Advanced Analytics Guide to transaction performance optimization and insights - FlowSwipe",
      description: "Optimize payment performance and financial insights using smart analytics.",
    },
  },
];
