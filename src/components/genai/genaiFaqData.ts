import type { FaqItem } from "@/components/servicePage/FAQAccordion";

export const genaiFaqItems: FaqItem[] = [
  {
    question: "Can you build custom AI chatbots?",
    answer:
      "Yes. Chatbots are built on your knowledge base and deployed across web, mobile, Slack, Teams, WhatsApp, and Messenger.",
  },
  {
    question: "Do you support private enterprise data?",
    answer:
      "Yes. RAG pipelines and fine-tuning run against your own documents and data stores — nothing is sent to train public models.",
  },
  {
    question: "Can you integrate AI with existing applications?",
    answer:
      "Yes. We integrate with CRMs, ticketing systems, ERPs, and internal tools via API, so AI fits into workflows you already run.",
  },
  {
    question: "How secure are enterprise AI solutions?",
    answer:
      "Every deployment includes encrypted data handling, access controls, and audit logging appropriate to enterprise compliance requirements.",
  },
];
