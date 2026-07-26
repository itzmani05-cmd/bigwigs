export interface HealthcareFaqItem {
  question: string;
  answer: string;
}

export const healthcareFaqItems: HealthcareFaqItem[] = [
  {
    question: "Can you annotate medical images?",
    answer:
      "Yes — MRI, CT, X-ray, ultrasound, retinal, and histopathology imaging, annotated against clinical taxonomy and reviewed through a multi-tier QA process.",
  },
  {
    question: "Do you build healthcare software?",
    answer:
      "We build hospital dashboards, patient portals, EHR/EMR systems, telemedicine platforms, and healthcare mobile apps — engineered around real clinical workflows.",
  },
  {
    question: "Can you support international healthcare organizations?",
    answer:
      "Yes. Our delivery model works across time zones, and our workflows adapt to region-specific regulatory and data-handling requirements.",
  },
  {
    question: "How do you protect sensitive healthcare data?",
    answer:
      "Encryption at rest and in transit, role-based access, full audit logging, and de-identification built into every workflow that touches patient data.",
  },
];
