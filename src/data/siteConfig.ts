export type DefaultRouteMode = "/" | "/home";

const envDefault = (import.meta.env.VITE_DEFAULT_ROUTE as string | undefined) || "/";

export const siteConfig = {
  brandName: "FlowSwipe",
  tagline:
    "Secure and convenient smart card payments enabling fast transactions, enhanced safety, and seamless user experience across devices.",
  defaultRoute: (envDefault === "/home" ? "/home" : "/") as DefaultRouteMode,
  supportEmail: (import.meta.env.VITE_SUPPORT_EMAIL as string | undefined) || "support@flowswipe.com",
  loginUrl: (import.meta.env.VITE_LOGIN_URL as string | undefined) || "/contact",
  appDownloadUrl: (import.meta.env.VITE_APP_DOWNLOAD_URL as string | undefined) || "/features",
  youtubeVideoId: "setu9Ir1miY",
  youtubeVideoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  endpoints: {
    contact: (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) || "",
    cardAlert: (import.meta.env.VITE_CARD_ALERT_ENDPOINT as string | undefined) || "",
    careerApply: (import.meta.env.VITE_CAREER_APPLY_ENDPOINT as string | undefined) || "",
  },
  stats: {
    growthLabel: "89M",
    growthCaption: "Our business achieved remarkable growth.",
    communityLabel: "473+",
    communityCaption: "Join a growing circle of engaged professionals.",
  },
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/", icon: "/assets/icons/fb.svg" },
    { name: "Instagram", href: "https://www.instagram.com/", icon: "/assets/icons/insta.svg" },
    { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "/assets/icons/linkedin.svg" },
    { name: "X", href: "https://x.com/", icon: "/assets/icons/x.svg" },
  ],
  copyright: "Copyright © FlowSwipe",
  attribution: "Designed by VictorFlow | Independent React Reconstruction",
} as const;
