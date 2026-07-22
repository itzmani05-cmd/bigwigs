export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "How does the hiring process work?",
    answer:
      "Our process starts with an application review, followed by a technical assessment, one or more interviews with the team, and a final offer. We aim to keep every stage transparent and give you feedback along the way.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Our stack spans modern frontend frameworks, cloud-native backend services, and AI/ML tooling for data annotation, computer vision, and Generative AI — the exact tools vary by team and role.",
  },
  {
    question: "Can freshers apply?",
    answer:
      "Yes. Several of our roles, especially in Data Operations and Engineering, are open to freshers with strong fundamentals and a willingness to learn. We look for potential as much as experience.",
  },
  {
    question: "Do you offer remote work?",
    answer:
      "Many of our roles support remote or hybrid work. Each job listing specifies its location and work arrangement so you know what to expect before applying.",
  },
  {
    question: "How long does recruitment take?",
    answer:
      "Most candidates move through our process within two to three weeks, though timelines can vary depending on the role and interview scheduling.",
  },
];
