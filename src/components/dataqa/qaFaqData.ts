import type { FaqItem } from "@/components/servicePage/FAQAccordion";

export const qaFaqItems: FaqItem[] = [
  {
    question: "Can your QA workflow be customized?",
    answer:
      "Yes. Review depth, sampling rate, and escalation rules are configured to your project's risk tolerance and existing guideline.",
  },
  {
    question: "Do you provide quality reports?",
    answer:
      "Every project includes metrics reporting — accuracy, precision, recall, error rate, and turnaround — visible throughout delivery, not just at the end.",
  },
  {
    question: "Can you validate third-party datasets?",
    answer:
      "Yes. We run the same multi-level QA workflow on datasets collected or annotated outside Bigwigs, with full audit reporting.",
  },
  {
    question: "How do you measure annotation quality?",
    answer:
      "We track inter-annotator agreement, precision and recall against gold-standard samples, and acceptance rate across every batch.",
  },
];
