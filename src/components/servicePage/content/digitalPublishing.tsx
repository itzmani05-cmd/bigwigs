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
    { icon: ScanLine, title: "Legacy Archive Digitization", description: "Decades of print archives sit unsearchable and unusable until someone digitizes them properly." },
    { icon: FileCode, title: "Non-Standard Content Structure", description: "Content without consistent structure is expensive to repurpose across formats and platforms." },
    { icon: Accessibility, title: "Accessibility Compliance Gaps", description: "Untagged PDFs and EPUBs lock out screen-reader users and risk non-compliance." },
    { icon: Tablet, title: "Cross-Format Fragmentation", description: "Publishing to print, web, and every e-reader format separately multiplies production effort." },
    { icon: Clock, title: "Slow Production Cycles", description: "Manual typesetting and conversion can't keep pace with modern publishing schedules." },
    { icon: ShieldCheck, title: "Inconsistent Quality Control", description: "Formatting errors that slip through erode reader trust and cost rework later." },
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
  { question: "Can you handle large-scale archive digitization?", answer: "Yes. We regularly process full backlists and archives, not just single titles." },
  { question: "Do you support ongoing publishing programs?", answer: "Yes. Many clients run continuous production pipelines tied to regular release schedules, not one-off projects." },
];

export const publishingDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Publishers Choose Us",
  items: [
    { icon: FileCode, title: "Every Standard Format", description: "EPUB, MOBI, XML, DITA, JATS — output built to the spec your systems expect." },
    { icon: Accessibility, title: "Accessibility Built In", description: "Tagged PDFs and EPUBs that work with screen readers from the first delivery." },
    { icon: ScanLine, title: "Legacy Archives Made Usable", description: "Decades of print content digitized, OCR'd, and made searchable." },
    { icon: LayoutTemplate, title: "Production-Ready Typesetting", description: "Books, journals, and reports formatted to publish, not just to preview." },
    { icon: ShieldCheck, title: "Structural QA on Every File", description: "Format and accessibility validation before anything ships." },
    { icon: Clock, title: "Built for Ongoing Programs", description: "Pipelines that keep pace with regular release schedules, not just single titles." },
  ],
};

export const publishingBottomCta = {
  icon: BookOpen,
  heading: "Modernize Your Publishing for the Digital Era",
  description:
    "Whether it's books, journals, or enterprise documentation, Bigwigs Technologies delivers secure, scalable digital publishing.",
  primaryAction: { label: "Discuss Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
