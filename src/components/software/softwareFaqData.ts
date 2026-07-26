export interface SoftwareFaqItem {
  question: string;
  answer: string;
}

export const softwareFaqItems: SoftwareFaqItem[] = [
  {
    question: "Do you build software from scratch?",
    answer:
      "Yes. Most engagements start with a clean architecture designed around your specific workflows, rather than adapting a generic template.",
  },
  {
    question: "Can you modernize legacy systems?",
    answer:
      "We regularly re-platform legacy applications — migrating outdated stacks to modern, cloud-native architecture without disrupting day-to-day operations.",
  },
  {
    question: "Do you integrate AI?",
    answer:
      "Where it adds real value. From AI-assisted workflows to embedded generative AI features, our engineering and AI teams work from the same roadmap.",
  },
  {
    question: "How long does development take?",
    answer:
      "It depends on scope — a focused module can ship in weeks, while a full enterprise platform typically runs a few months. We give you a concrete timeline after discovery, not a guess.",
  },
];
