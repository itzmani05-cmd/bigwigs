export interface FaqItem {
  question: string;
  answer: string;
}

export const industriesFaqItems: FaqItem[] = [
  {
    question: "Which industries do you specialize in?",
    answer:
      "We deliver AI data services and solutions across healthcare, automotive, retail, banking & finance, manufacturing, agriculture, smart cities, and logistics — with domain specialists for each vertical.",
  },
  {
    question: "Can you build custom AI solutions?",
    answer:
      "Yes. Beyond data services, we design and build custom computer vision, Generative AI, and analytics solutions tailored to your industry's workflows and compliance requirements.",
  },
  {
    question: "Do you support enterprise deployments?",
    answer:
      "We support enterprise-scale deployments end-to-end — from pilot to production — with dedicated project teams, SLAs, and integration into your existing infrastructure.",
  },
  {
    question: "How do you ensure security?",
    answer:
      "We follow strict data governance, access controls, and audit workflows, with secure delivery models designed for regulated industries such as healthcare and finance.",
  },
  {
    question: "Can you handle large AI datasets?",
    answer:
      "Yes. Our operations scale from pilot projects to tens of millions of annotated tasks, backed by elastic global teams and multi-layer quality assurance.",
  },
];
