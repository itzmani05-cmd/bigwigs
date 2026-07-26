import type { FaqItem } from "@/components/servicePage/FAQAccordion";

export const annotationFaqItems: FaqItem[] = [
  {
    question: "Which annotation formats do you support?",
    answer:
      "We deliver in COCO, YOLO, Pascal VOC, KITTI, and any custom JSON or XML schema your training pipeline expects.",
  },
  {
    question: "Can you scale large annotation projects?",
    answer:
      "Yes. Our teams scale from a pilot batch to millions of objects a month without changing your delivery format or quality bar.",
  },
  {
    question: "How do you ensure annotation quality?",
    answer:
      "Every batch passes multi-level review — initial annotation, peer check, and senior QA sign-off — before delivery.",
  },
  {
    question: "Can you handle confidential datasets?",
    answer:
      "Yes. Confidential and regulated datasets are handled under signed NDAs with encrypted storage and controlled access.",
  },
];
