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
    { icon: Tag, title: "Label Noise & Inconsistency", description: "Small labeling errors compound across a dataset and quietly degrade model performance." },
    { icon: EyeOff, title: "Lack of Audit Visibility", description: "Without a clear audit trail, it's hard to know where quality issues came from or how to fix them." },
    { icon: Lock, title: "Data Security Risks", description: "QA workflows that pass data through untracked hands introduce risk before it reaches your model." },
    { icon: Gauge, title: "Slow QA Turnaround", description: "Manual review queues can bottleneck a pipeline as badly as the annotation itself." },
    { icon: Stethoscope, title: "Domain-Specific Errors", description: "Generic QA misses errors only a subject-matter reviewer would catch." },
    { icon: Bot, title: "LLM Bias & Hallucination", description: "Unvalidated training data can bake bias and factual errors directly into your model." },
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
  { question: "How quickly can QA turn around a batch?", answer: "Turnaround depends on volume and review depth, but most batches complete within days, not weeks, once a pipeline is running." },
  { question: "Can QA run alongside an active annotation pipeline?", answer: "Yes. Many clients run QA in parallel with ongoing annotation so issues surface within the same sprint, not after a large batch is delivered." },
];

export const dataQaDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for QA",
  items: [
    { icon: ClipboardCheck, title: "Multi-Level Review, Every Batch", description: "Initial review, peer check, and senior sign-off before anything is marked complete." },
    { icon: BarChart3, title: "Metrics You Can See", description: "Accuracy, precision, recall, and turnaround reported throughout delivery, not just at the end." },
    { icon: EyeOff, title: "Full Audit Visibility", description: "Every decision traceable back to the reviewer and the guideline it followed." },
    { icon: Stethoscope, title: "Domain Specialists Where It Matters", description: "Medical, legal, and technical data reviewed by people who understand the domain." },
    { icon: Bot, title: "LLM-Aware QA", description: "Bias and hallucination risk assessed specifically for generative model training data." },
    { icon: Gauge, title: "Configurable to Your Risk Tolerance", description: "Review depth and sampling rate tuned to how critical the data actually is." },
  ],
};

export const dataQaBottomCta = {
  icon: ShieldCheck,
  heading: "Build AI Models With Trusted Data",
  description:
    "From annotation validation to LLM dataset evaluation, Bigwigs Technologies helps you deliver AI-ready datasets with confidence.",
  primaryAction: { label: "Request a QA Assessment", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
