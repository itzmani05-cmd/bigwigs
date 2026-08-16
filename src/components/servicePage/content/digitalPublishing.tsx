import {
  BookOpen,
  Tablet,
  ShieldCheck,
  FileCode,
  LayoutTemplate,
  ScanLine,
  Accessibility,
  GraduationCap,
  FlaskConical,
  Briefcase,
  Clock,
  Search,
  FileCog,
  Cog,
  PackageCheck,
} from "lucide-react";

export const publishingHero = {
  eyebrow: "Digital Publishing Services",
  heading: (
    <>
      Content, Converted Into{" "}
      <span className="text-blue-500">Digital Experiences</span>
    </>
  ),
  description:
    "AI-enabled publishing solutions to convert, structure, and distribute content across every digital platform.",
  primaryCta: { label: "Discuss Your Project", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const publishingChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Publishers Face",
  items: [
    { icon: ScanLine, title: "Legacy Archive Digitization" },
    { icon: FileCode, title: "Non-Standard Content Structure" },
    { icon: Accessibility, title: "Accessibility Compliance Gaps" },
    { icon: Tablet, title: "Cross-Format Fragmentation" },
    { icon: Clock, title: "Slow Production Cycles" },
    { icon: ShieldCheck, title: "Inconsistent Quality Control" },
  ],
};

export const publishingCapabilities = {
  eyebrow: "What's Included",
  heading: "One Publishing Pipeline, Every Format",
  items: [
    { icon: Tablet, title: "eBook Conversion", description: "EPUB, MOBI, and every reader format." },
    { icon: FileCode, title: "XML & Structured Content", description: "DITA, DocBook, and JATS-compliant tagging." },
    { icon: LayoutTemplate, title: "Typesetting & Layout", description: "Books, journals, and reports, production-ready." },
    { icon: ScanLine, title: "Content Digitization", description: "Legacy archives scanned, OCR'd, and searchable." },
    { icon: Accessibility, title: "Accessibility Publishing", description: "Tagged PDFs and EPUBs for screen readers." },
    { icon: GraduationCap, title: "Educational Publishing", description: "Textbooks and courseware built for classrooms." },
    { icon: FlaskConical, title: "Scientific Publishing", description: "Research journals to academic standard." },
    { icon: Briefcase, title: "Corporate Publishing", description: "Reports and manuals, produced at scale." },
  ],
};

export const publishingProcessSteps = [
  { icon: Search, title: "Assess", description: "Source files and target formats reviewed." },
  { icon: FileCog, title: "Prepare", description: "Structure and metadata mapped to spec." },
  { icon: Cog, title: "Produce", description: "Conversion and typesetting at scale." },
  { icon: ShieldCheck, title: "Validate", description: "Every file checked against format standards." },
  { icon: PackageCheck, title: "Deliver", description: "Final files in every format you need." },
];

export const publishingFaq = [
  { question: "Do you support print and digital publishing?", answer: "Yes. We produce for both — from print-ready typesetting to EPUB, MOBI, and every major digital reader format." },
  { question: "Can you convert legacy documents?", answer: "Yes. Scanned archives are digitized with OCR, text extraction, and image enhancement before conversion." },
  { question: "Do you handle enterprise publishing projects?", answer: "Yes. Our pipeline scales from a single title to full catalogs and ongoing publishing programs." },
  { question: "How do you ensure publishing quality?", answer: "Every file passes structural, format, and accessibility validation before delivery." },
];

export const publishingBottomCta = {
  icon: BookOpen,
  heading: "Modernize Your Publishing for the Digital Era",
  description:
    "Whether it's books, journals, or enterprise documentation, Bigwigs Technologies delivers secure, scalable digital publishing.",
  primaryAction: { label: "Discuss Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
