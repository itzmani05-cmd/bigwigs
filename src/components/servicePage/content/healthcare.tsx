import {
  Database,
  FileText,
  ScanEye,
  Users,
  Share2,
  Cpu,
  MessageSquareText,
  Brain,
  Code2,
  FileStack,
  Accessibility,
  Languages,
  Search,
  Tags,
  CheckCircle2,
  Rocket,
  LifeBuoy,
  HeartPulse,
} from "lucide-react";

export const healthcareHero = {
  eyebrow: "Healthcare & Life Sciences",
  heading: (
    <>
      Healthcare, Powered by{" "}
      <span className="text-blue-500">AI &amp; Digital Innovation</span>
    </>
  ),
  description:
    "Enterprise AI, intelligent automation, and healthcare data solutions for hospitals, pharma companies, and research institutions.",
  primaryCta: { label: "Talk to Our Healthcare AI Experts", href: "/demo" },
  secondaryCta: { label: "Start Your Transformation", href: "/contact" },
};

export const healthcareChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Healthcare Teams Face",
  items: [
    { icon: Database, title: "Growing Clinical Data" },
    { icon: FileText, title: "Manual Documentation" },
    { icon: ScanEye, title: "Medical Imaging Complexity" },
    { icon: Users, title: "Healthcare Workforce Shortage" },
    { icon: Share2, title: "Interoperability Issues" },
    { icon: Cpu, title: "AI Adoption Challenges" },
  ],
};

export const healthcareCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Ways We Support Healthcare AI",
  items: [
    { icon: ScanEye, title: "Medical Image Annotation", description: "Pixel-accurate labeling across X-ray, CT, MRI." },
    { icon: MessageSquareText, title: "Clinical NLP", description: "Structured insight from clinical notes at scale." },
    { icon: Brain, title: "Healthcare AI Solutions", description: "Diagnostic and clinical decision-support models." },
    { icon: Code2, title: "Healthcare Software", description: "HIPAA-aware platforms and patient portals." },
    { icon: Database, title: "Medical Data Services", description: "Cleansing and structuring clinical datasets." },
    { icon: FileStack, title: "Document Processing", description: "Automated extraction from records and claims." },
    { icon: Accessibility, title: "Healthcare Accessibility", description: "WCAG-compliant patient portals and forms." },
    { icon: Languages, title: "Language Services", description: "Medical translation and transcription worldwide." },
  ],
};

export const healthcareProcessSteps = [
  { icon: Search, title: "Assess", description: "Understand clinical goals and data landscape." },
  { icon: Database, title: "Collect", description: "Source compliant clinical and imaging data." },
  { icon: Tags, title: "Annotate", description: "Expert-reviewed labeling across modalities." },
  { icon: CheckCircle2, title: "Validate", description: "Cross-check against clinical guidelines." },
  { icon: Rocket, title: "Deploy", description: "Integrate into your care workflows." },
  { icon: LifeBuoy, title: "Support", description: "Ongoing monitoring and iteration." },
];

export const healthcareFaq = [
  { question: "How do you support healthcare AI?", answer: "We annotate medical imaging and clinical text, then build and deploy diagnostic, documentation, and operational AI models tailored to your care setting." },
  { question: "Can you build EHR systems?", answer: "Yes — we design custom EHR and clinical workflow systems, and can integrate AI features into existing hospital platforms." },
  { question: "Are your services HIPAA compliant?", answer: "Yes. Our healthcare engagements follow HIPAA-aligned data handling, with compliance built into our pipelines and team training." },
  { question: "What's a typical engagement timeline?", answer: "Most healthcare engagements start with a scoped pilot within 2-4 weeks, then scale into ongoing partnerships." },
];

export const healthcareBottomCta = {
  icon: HeartPulse,
  heading: "Transform Healthcare With Intelligent AI",
  description:
    "Whether you're building diagnostic AI, modernizing hospital platforms, or automating clinical documentation, Bigwigs Technologies delivers secure, scalable healthcare technology.",
  primaryAction: { label: "Talk to Our Healthcare AI Experts", href: "/demo" },
  secondaryAction: { label: "Start Your Transformation", href: "/contact", showArrow: true },
};
