export interface ValueItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const coreValuesData: ValueItem[] = [
  {
    id: "inspiration",
    badge: "Leadership",
    title: "Inspiration",
    description:
      "Guiding teams with vision, expertise, and motivation to achieve outstanding results, inspire innovation, foster collaboration, and exceed business goals consistently.",
    image: "/assets/images/holographic/mission-img-01.avif",
    imageAlt: "Glossy, transparent, rounded diamond-shaped 3D object with vibrant rainbow reflections.",
  },
  {
    id: "innovation",
    badge: "Strategy",
    title: "Innovation",
    description:
      "Leveraging cutting-edge technologies to create smarter, faster, and more effective solutions that drive growth and deliver measurable results.",
    image: "/assets/images/holographic/mission-img-02.avif",
    imageAlt: "Iridescent glass lightning bolt icon with smooth, reflective surface.",
  },
  {
    id: "collaboration",
    badge: "Culture",
    title: "Collaboration",
    description:
      "Fostering teamwork and partnerships to drive creative solutions and shared success, while building trust, innovation, and long-term growth opportunities.",
    image: "/assets/images/holographic/mission-img-03.avif",
    imageAlt: "Translucent glass sphere with swirling rainbow light reflections.",
  },
  {
    id: "growth",
    badge: "Vision",
    title: "Growth",
    description:
      "Building a future-focused organization that empowers people and businesses to thrive globally with innovation, efficiency, and sustainability.",
    image: "/assets/images/holographic/mission-img-04.avif",
    imageAlt: "Transparent glass star shape with blue and orange light reflections inside a circular frame.",
  },
];
