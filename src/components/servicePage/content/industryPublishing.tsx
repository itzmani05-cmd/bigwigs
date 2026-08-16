import {
  BookOpen,
  BrainCircuit,
  PenTool,
  Accessibility,
  Database,
  Languages,
  FileText,
  Code2,
  Tags,
  FileStack,
  Layers,
  Clock,
  Rocket,
  ShieldCheck,
  Search,
  CheckCircle2,
} from "lucide-react";

export const industryPublishingHero = {
  eyebrow: "Publishing & Media Solutions",
  heading: (
    <>
      Digital Publishing, Powered by{" "}
      <span className="text-blue-500">AI &amp; Automation</span>
    </>
  ),
  description:
    "Modernize legacy content, streamline editorial workflows, and deliver accessible, multilingual digital publications at scale.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Speak With Our Team", href: "/contact" },
};

export const industryPublishingChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Publishers Face",
  items: [
    { icon: FileStack, title: "Large-Scale Legacy Content Conversion" },
    { icon: Layers, title: "Multi-Format Publishing Requirements" },
    { icon: Clock, title: "Shorter Publishing Timelines" },
    { icon: Accessibility, title: "Accessibility Compliance" },
    { icon: Database, title: "Metadata Management" },
    { icon: Languages, title: "Content Localization" },
  ],
};

export const industryPublishingCapabilities = {
  eyebrow: "What's Included",
  heading: "One Publishing AI Practice, Every Discipline",
  items: [
    { icon: BookOpen, title: "Digital Publishing Services", description: "End-to-end publishing for books and journals." },
    { icon: BrainCircuit, title: "AI-Assisted Publishing", description: "Classification, tagging, and indexing at scale." },
    { icon: PenTool, title: "Editorial & Content Services", description: "Copy editing and publication readiness." },
    { icon: Accessibility, title: "Accessibility Solutions", description: "Compliant EPUB, PDF, and web publications." },
    { icon: Database, title: "Digital Asset Management", description: "Organized, versioned publishing assets." },
    { icon: Languages, title: "Language & Localization", description: "Translation for global markets." },
    { icon: FileText, title: "Document Processing", description: "Automated manuscript and contract workflows." },
    { icon: Code2, title: "Publishing Software", description: "Custom CMS, DAM, and editorial platforms." },
  ],
};

export const industryPublishingProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess workflows, content types, and objectives." },
  { icon: PenTool, title: "Design", description: "Publishing architecture and metadata strategy." },
  { icon: Code2, title: "Build", description: "Convert content and build AI datasets." },
  { icon: CheckCircle2, title: "Validate", description: "Editorial, accessibility, and QA review." },
  { icon: Rocket, title: "Publish", description: "Deploy across channels and optimize." },
];

export const industryPublishingFaq = [
  { question: "Can you modernize legacy publishing workflows?", answer: "Yes — we help publishers transition to XML-first, cloud-based, AI-assisted workflows while preserving content quality and consistency." },
  { question: "Do you provide accessibility remediation?", answer: "Yes. We remediate PDFs, EPUBs, and educational materials to improve accessibility and support compliance with recognized standards." },
  { question: "Can you develop custom publishing platforms?", answer: "Yes — CMS platforms, editorial workflow systems, digital asset management, and publishing automation tailored to your needs." },
  { question: "Do you support multilingual publishing?", answer: "Yes. Translation and localization for books, journals, and educational materials across international markets." },
];

export const industryPublishingBottomCta = {
  icon: BookOpen,
  heading: "Transform Publishing With AI & Digital Innovation",
  description:
    "Whether you're modernizing editorial workflows or building accessible publications, Bigwigs Technologies delivers the expertise to help you succeed.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Speak With Our Team", href: "/contact", showArrow: true },
};
