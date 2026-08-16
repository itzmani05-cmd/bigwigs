import {
  ShieldCheck,
  Gauge,
  ClipboardCheck,
  Image,
  Video,
  Mic,
  FileText,
  Stethoscope,
  Bot,
  Search,
  Users2,
  Award,
  Tag,
  EyeOff,
  Lock,
  BarChart3,
} from "lucide-react";

export const dataQaHero = {
  eyebrow: "Data Validation & Quality Assurance",
  heading: (
    <>
      Trusted Data. <span className="text-blue-500">Reliable AI.</span>
    </>
  ),
  description:
    "Multi-level validation and quality assurance for Computer Vision, NLP, Speech AI, and LLM datasets — before they ever reach your model.",
  primaryCta: { label: "Request a QA Assessment", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const dataQaChallenges = {
  eyebrow: "What We Solve",
  heading: "The Risks Hiding in Unvalidated Data",
  items: [
    { icon: Tag, title: "Label Noise & Inconsistency" },
    { icon: EyeOff, title: "Lack of Audit Visibility" },
    { icon: Lock, title: "Data Security Risks" },
    { icon: Gauge, title: "Slow QA Turnaround" },
    { icon: Stethoscope, title: "Domain-Specific Errors" },
    { icon: Bot, title: "LLM Bias & Hallucination" },
  ],
};

export const dataQaCapabilities = {
  eyebrow: "What's Included",
  heading: "Every Data Type, Validated to Its Own Standard",
  items: [
    { icon: ClipboardCheck, title: "Annotation Quality Review", description: "Boxes, masks, and labels checked against guideline." },
    { icon: Image, title: "Image Quality Validation", description: "Resolution, noise, and duplicates flagged." },
    { icon: Video, title: "Video Quality Assurance", description: "Frame integrity and continuity verified." },
    { icon: Mic, title: "Audio Validation", description: "Clarity, speaker identity, and language confirmed." },
    { icon: FileText, title: "Text Validation", description: "Grammar, entities, and classification checked." },
    { icon: Stethoscope, title: "Medical Data Validation", description: "Clinical labels reviewed against domain standards." },
    { icon: Bot, title: "LLM Dataset Evaluation", description: "Bias and hallucination risk assessed." },
    { icon: ShieldCheck, title: "Security & Data Integrity", description: "Encrypted handling with full audit trails." },
  ],
};

export const dataQaProcessSteps = [
  { icon: Search, title: "Initial Review", description: "Every annotation checked against the guideline." },
  { icon: Users2, title: "Peer Review", description: "A second reviewer verifies the batch." },
  { icon: Award, title: "Senior QA Review", description: "Senior reviewers resolve disputes and edge cases." },
  { icon: ClipboardCheck, title: "Final Audit", description: "A sample audit confirms delivery-ready quality." },
  { icon: BarChart3, title: "Reporting", description: "Accuracy and error metrics delivered with the data." },
];

export const dataQaFaq = [
  { question: "Can your QA workflow be customized?", answer: "Yes. Review depth, sampling rate, and escalation rules are configured to your project's risk tolerance and existing guideline." },
  { question: "Do you provide quality reports?", answer: "Every project includes metrics reporting — accuracy, precision, recall, and turnaround — visible throughout delivery." },
  { question: "Can you validate third-party datasets?", answer: "Yes. We run the same multi-level QA workflow on datasets collected or annotated outside Bigwigs, with full audit reporting." },
  { question: "How do you measure annotation quality?", answer: "We track inter-annotator agreement, precision and recall against gold-standard samples, and acceptance rate across every batch." },
];

export const dataQaBottomCta = {
  icon: ShieldCheck,
  heading: "Build AI Models With Trusted Data",
  description:
    "From annotation validation to LLM dataset evaluation, Bigwigs Technologies helps you deliver AI-ready datasets with confidence.",
  primaryAction: { label: "Request a QA Assessment", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
