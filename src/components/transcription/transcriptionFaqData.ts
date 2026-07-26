import type { FaqItem } from "@/components/servicePage/FAQAccordion";

export const transcriptionFaqItems: FaqItem[] = [
  {
    question: "Can you transcribe multiple speakers?",
    answer:
      "Yes. Every transcript includes speaker identification and labeling, even for files with several overlapping speakers, so you always know who said what.",
  },
  {
    question: "Do you provide timestamps?",
    answer:
      "Timestamps are included by default at intervals you choose — per speaker turn, per paragraph, or at fixed time codes — for easy navigation and reference.",
  },
  {
    question: "Can you deliver subtitles?",
    answer:
      "Yes. We deliver closed and open captions, subtitle translation, and files in SRT, VTT, SCC, TXT, or any custom format your platform requires.",
  },
  {
    question: "How is confidential data protected?",
    answer:
      "All files are handled under signed NDAs with restricted access, encrypted storage and transfer, and secure disposal once delivery is confirmed.",
  },
];
