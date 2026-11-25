import { mediaAssets } from "./media";

export interface GlobalPaymentFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const globalPaymentFeatures: GlobalPaymentFeature[] = [
  {
    id: "money-stream",
    title: "Money Stream",
    description: "Secure Money Transfers",
    icon: mediaAssets.paymentFeatureIcons.moneyStream,
  },
  {
    id: "cultural-homogenization",
    title: "Cultural Homogenization",
    description: "Impact on local traditions",
    icon: mediaAssets.paymentFeatureIcons.cultural,
  },
  {
    id: "global-connect",
    title: "Global Connect",
    description: "Fast Global Transfers",
    icon: mediaAssets.paymentFeatureIcons.globalConnect,
  },
];

export interface GlobalOfficeLocation {
  id: string;
  classModifier: "canada" | "chad" | "mumbai" | "australia";
  title: string;
  description: string;
  badgeImage: string;
  badgeAlt: string;
}

export const globalPresenceLocations: GlobalOfficeLocation[] = [
  {
    id: "canada",
    classModifier: "canada",
    title: "US & Canada",
    description: "Central hub coordinating global services and connections.",
    badgeImage: "/assets/images/about/1923605393ea970767e7509daf0da743_globe-img-05.avif",
    badgeAlt: "North America regional hub marker",
  },
  {
    id: "chad",
    classModifier: "chad",
    title: "Chad",
    description: "Regional operations center serving Africa and EMEA partners.",
    badgeImage: "/assets/images/about/globe-img-03.avif",
    badgeAlt: "Chad regional hub marker",
  },
  {
    id: "mumbai",
    classModifier: "mumbai",
    title: "Mumbai",
    description: "South Asia engineering and payment clearing hub.",
    badgeImage: "/assets/images/about/globe-img-02.avif",
    badgeAlt: "Mumbai regional hub marker",
  },
  {
    id: "australia",
    classModifier: "australia",
    title: "Australia",
    description: "APAC financial partner operations and support center.",
    badgeImage: "/assets/images/about/globe-img-01.avif",
    badgeAlt: "Australia regional hub marker",
  },
];
