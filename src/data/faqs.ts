export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "pre-book",
    question: "How to pre-book my card?",
    answer:
      "Pre-booking your card is simple and fast. Just fill out the online form, provide necessary details, and you’ll receive instant confirmation and notifications immediately.",
  },
  {
    id: "manage-transactions",
    question: "How to manage transactions?",
    answer:
      "Track and manage all payments via the app or dashboard easily. You can view spending, receive alerts, and control your card settings anytime, anywhere securely.",
  },
  {
    id: "data-security",
    question: "Is my data secure?",
    answer:
      "Yes, all personal and financial data is fully encrypted with advanced security measures, guaranteeing complete privacy and safe transactions across all platforms.",
  },
  {
    id: "global-use",
    question: "Can I use globally?",
    answer:
      "Absolutely! The card works worldwide, accepted at major merchants, ATMs, and online platforms, making international payments smooth and hassle-free.",
  },
];
