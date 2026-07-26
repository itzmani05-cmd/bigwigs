import type { FaqItem } from "@/components/servicePage/FAQAccordion";

export const agentFaqItems: FaqItem[] = [
  {
    question: "Can AI Agents integrate with CRM and ERP?",
    answer:
      "Yes. Agents connect to Salesforce, HubSpot, SAP, and other CRM/ERP systems via API, acting on records directly rather than just reading them.",
  },
  {
    question: "Are AI Agents secure?",
    answer:
      "Yes. Every agent runs under enterprise access controls, encrypted data handling, and audit logging appropriate to your compliance requirements.",
  },
  {
    question: "Can AI Agents work with employees?",
    answer:
      "Yes. Agents are designed to hand off to a human at the right moment — for approvals, exceptions, or anything outside their scope.",
  },
  {
    question: "How do AI Agents use enterprise knowledge?",
    answer:
      "Agents retrieve grounded answers from your documents and systems via RAG, so responses reflect your actual policies and data.",
  },
];
