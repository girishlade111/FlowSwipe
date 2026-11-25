export interface PolicySection {
  heading: string;
  paragraphs: string[];
  bullets?: { label?: string; text: string }[];
}

export interface PolicyTab {
  id: "privacy" | "terms" | "user";
  label: string;
  sections: PolicySection[];
}

export const policiesData: PolicyTab[] = [
  {
    id: "privacy",
    label: "Privacy Policy",
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Your privacy matters to us. This Privacy Policy explains how we collect, protect, and manage your personal information when you use our website, mobile app, and digital banking services.",
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["We collect necessary information to provide secure and seamless financial services."],
        bullets: [
          {
            label: "Personal Details",
            text: "Name, email, phone number, and identification details for verification and compliance.",
          },
          {
            label: "Usage Data",
            text: "Device information, IP address, app activity, and browsing behavior to improve performance.",
          },
        ],
      },
      {
        heading: "How We Use Your Information",
        paragraphs: ["Your information helps us deliver better services and maintain platform security."],
        bullets: [
          { text: "Process transactions, verify identity, provide support, and ensure smooth account management operations efficiently." },
          { text: "Detect fraud, prevent unauthorized access, and comply with legal and regulatory requirements effectively and consistently." },
          { text: "Analyze usage patterns to enhance features, personalize experiences, and optimize system performance." },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "We are committed to safeguarding your data with advanced security measures, encryption technologies, and strict access controls. Your information is never sold to third parties; we only share data when required for service delivery or legal compliance.",
        ],
      },
    ],
  },
  {
    id: "terms",
    label: "Terms & Conditions",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing or using our website and services, you agree to comply with these Terms & Conditions. Please read them carefully before creating an account or using our platform.",
        ],
      },
      {
        heading: "Use of Services",
        paragraphs: ["Users must use our services responsibly and in compliance with all applicable laws."],
        bullets: [
          {
            label: "Account Responsibility",
            text: "You are responsible for maintaining the confidentiality of your login credentials and account activity.",
          },
          {
            label: "Prohibited Activities",
            text: "Unauthorized access, fraud, or illegal activities are strictly prohibited on our platform.",
          },
        ],
      },
      {
        heading: "Payments & Transactions",
        paragraphs: ["All transactions must follow our operational guidelines and regulatory standards."],
        bullets: [
          { text: "Applicable fees, if any, will be clearly disclosed before completing transactions or subscriptions in advance." },
          { text: "Users must verify transaction details carefully, as completed transactions may not be reversible under policy." },
          { text: "We reserve the right to update, suspend, or modify services at any time with reasonable prior notice." },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "These Terms & Conditions govern your use of our services and ensure a safe and transparent experience for all users. We may update these terms periodically to reflect regulatory changes, feature updates, or operational improvements.",
        ],
      },
    ],
  },
  {
    id: "user",
    label: "User Policy",
    sections: [
      {
        heading: "Purpose of Guidelines",
        paragraphs: [
          "These User Guidelines outline the standards and expectations for using our platform responsibly. They help ensure a safe, respectful, and secure experience for every user.",
        ],
      },
      {
        heading: "Responsible Usage",
        paragraphs: ["Users must engage with the platform ethically and in accordance with applicable laws."],
        bullets: [
          {
            label: "Accurate Information",
            text: "Provide truthful and complete details during registration and account updates.",
          },
          {
            label: "Secure Access",
            text: "Keep login credentials private and report any suspicious activity immediately.",
          },
        ],
      },
      {
        heading: "Community Standards",
        paragraphs: ["We expect all users to maintain professionalism and respect while using our services."],
        bullets: [
          { text: "Harassment, abusive language, or harmful behavior will not be tolerated under any circumstances." },
          { text: "Follow all financial regulations, digital policies, and platform-specific operational rules at all times without exception or delay." },
          { text: "Attempting fraud, exploiting system vulnerabilities, or misusing services may result in immediate suspension." },
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Our User Guidelines are designed to protect both individuals and the broader community. By following these standards, you contribute to a secure and trustworthy digital environment. Violations may lead to temporary suspension or permanent account termination.",
        ],
      },
    ],
  },
];
