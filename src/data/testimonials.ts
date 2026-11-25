export interface TextTestimonial {
  type: "text";
  id: string;
  badge: string;
  avatar: string;
  avatarAlt: string;
  quote: string;
  name: string;
  roleLocation: string;
}

export interface VideoTestimonial {
  type: "video";
  id: string;
  badge: string;
  avatar: string;
  avatarAlt: string;
  thumbnail: string;
  thumbnailAlt: string;
  videoUrl: string;
}

export type TestimonialSlide = TextTestimonial | VideoTestimonial;

export const homeTestimonialsData: TestimonialSlide[] = [
  {
    type: "text",
    id: "home-t1",
    badge: "Financial Advisor",
    avatar: "/assets/images/holographic/testimonial-img-02.avif",
    avatarAlt: "Liam Foster portrait",
    quote:
      "Reach out whenever you need support, with friendly assistance always readily available to help guide you.",
    name: "Liam Foster",
    roleLocation: "Financial Advisor - USA",
  },
  {
    type: "video",
    id: "home-v1",
    badge: "Operations Manager",
    avatar: "/assets/images/holographic/testimonial-img-01.avif",
    avatarAlt: "Operations Manager portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img.avif",
    thumbnailAlt: "Two colleagues wearing headphones speaking into broadcast microphones",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "home-t2",
    badge: "Account Manager",
    avatar: "/assets/images/holographic/testimonial-img-04.avif",
    avatarAlt: "Johanna Wilson portrait",
    quote:
      "Managing payments worldwide has never been easier, ensuring fast, secure, and hassle-free transactions every time.",
    name: "Johanna Wilson",
    roleLocation: "Account Manager - UK",
  },
  {
    type: "video",
    id: "home-v2",
    badge: "Executive Member",
    avatar: "/assets/images/holographic/testimonial-img-03.avif",
    avatarAlt: "Executive Member portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-02.avif",
    thumbnailAlt: "Speaker presenting into microphone in studio",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "home-t3",
    badge: "Client Relations",
    avatar: "/assets/images/holographic/testimonial-img-03.avif",
    avatarAlt: "Orion Okahoma portrait",
    quote:
      "Global payments feel seamless, and I love the smart, instant notifications that arrive every time they occur.",
    name: "Orion Okahoma",
    roleLocation: "Client Relations - Italy",
  },
  {
    type: "video",
    id: "home-v3",
    badge: "Financial Advisor",
    avatar: "/assets/images/holographic/testimonial-img-01.avif",
    avatarAlt: "Advisor portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-03.avif",
    thumbnailAlt: "Colleague speaking into studio microphone",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "home-t4",
    badge: "Operations Manager",
    avatar: "/assets/images/holographic/testimonial-img-04.avif",
    avatarAlt: "Emma Brown portrait",
    quote:
      "Every payment I make is secure and tracked in real-time without any hassle, worry, unexpected delays or stress.",
    name: "Emma Brown",
    roleLocation: "Operations Manager - Brazil",
  },
  {
    type: "video",
    id: "home-v4",
    badge: "Executive Member",
    avatar: "/assets/images/holographic/testimonial-img-02.avif",
    avatarAlt: "Executive portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-04.avif",
    thumbnailAlt: "Studio podcast conversation",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
];

export const careerTestimonialsData: TestimonialSlide[] = [
  {
    type: "text",
    id: "career-t1",
    badge: "Banking Analyst - Sydney",
    avatar: "/assets/images/holographic/testimonial-img-02.avif",
    avatarAlt: "Rylan Cortez portrait",
    quote:
      "Loving the collaborative culture here, every single day brings growth and exciting opportunities.",
    name: "Rylan Cortez",
    roleLocation: "Banking Analyst - Sydney",
  },
  {
    type: "video",
    id: "career-v1",
    badge: "Financial Advisor - Mexico",
    avatar: "/assets/images/holographic/testimonial-img-01.avif",
    avatarAlt: "Team member portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img.avif",
    thumbnailAlt: "Two people wearing headphones speaking into microphones in a recording studio",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "career-t2",
    badge: "Payment Specialist - Toronto",
    avatar: "/assets/images/holographic/testimonial-img-04.avif",
    avatarAlt: "Johanna Wilson portrait",
    quote:
      "Teamwork and innovation make this company an inspiring place to contribute and learn.",
    name: "Johanna Wilson",
    roleLocation: "Payment Specialist - Toronto",
  },
  {
    type: "video",
    id: "career-v2",
    badge: "General Manager - Texas",
    avatar: "/assets/images/holographic/testimonial-img-03.avif",
    avatarAlt: "General Manager portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-02.avif",
    thumbnailAlt: "Team speaker at event",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "career-t3",
    badge: "Operations Lead - New York",
    avatar: "/assets/images/holographic/testimonial-img-03.avif",
    avatarAlt: "Jaxon Mirel portrait",
    quote:
      "The culture encourages creativity and accountability while offering endless growth potential.",
    name: "Jaxon Mirel",
    roleLocation: "Operations Lead - New York",
  },
  {
    type: "video",
    id: "career-v3",
    badge: "Stock Trader - Bermingham",
    avatar: "/assets/images/holographic/testimonial-img-01.avif",
    avatarAlt: "Team speaker portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-03.avif",
    thumbnailAlt: "Studio interview",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
  {
    type: "text",
    id: "career-t4",
    badge: "Blockchain Engineer - Edinburgh",
    avatar: "/assets/images/holographic/testimonial-img-04.avif",
    avatarAlt: "Kaia Emberly portrait",
    quote:
      "Collaborative culture and meaningful projects create an exciting and rewarding workplace.",
    name: "Kaia Emberly",
    roleLocation: "Blockchain Engineer - Edinburgh",
  },
  {
    type: "video",
    id: "career-v4",
    badge: "Chartered Accountant - Paris",
    avatar: "/assets/images/holographic/testimonial-img-02.avif",
    avatarAlt: "Accountant portrait",
    thumbnail: "/assets/images/careers/career-testimonial-img-04.avif",
    thumbnailAlt: "Studio podcast session",
    videoUrl: "https://www.youtube.com/embed/setu9Ir1miY?autoplay=1&rel=0",
  },
];
