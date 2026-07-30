import {
  BookOpen,
  Tablet,
  Layers,
  Bot,
  ShieldCheck,
  FileCode,
  LayoutTemplate,
  ScanLine,
  RefreshCw,
  Accessibility,
  GraduationCap,
  FlaskConical,
  Briefcase,
  FileSearch,
  Type,
  Image,
  Tags,
  FileStack,
  ClipboardCheck,
  TableProperties,
  Ear,
  Search,
  FileCog,
  Cog,
  PackageCheck,
  Award,
  Lock,
  Clock,
  Globe2,
  FileText,
  School,
  Stethoscope,
  Building2,
  Landmark,
  Cpu,
  HeartHandshake,
} from "lucide-react";

export const digitalPublishingHero = {
  eyebrow: "Digital Publishing Services",
  heading: (
    <>
      Transform Content Into
      <br />
      <span className="text-blue-500">Digital Experiences</span>
    </>
  ),
  description:
    "Empower publishers, educational institutions, enterprises, and content creators with AI-enabled publishing solutions. Convert, manage, optimize, and distribute content across multiple digital platforms with speed, precision, and scalability.",
  primaryCta: { label: "Discuss Your Publishing Project", href: "/demo" },
  secondaryCta: { label: "Contact Our Publishing Experts", href: "/contact" },
  trustedBy: ["Book Publishers", "Universities", "Healthcare", "Technology Companies", "Government"],
  visualIcon: BookOpen,
  badges: [
    { icon: FileStack, label: "50+ Formats", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Bot, label: "AI-Assisted", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: ShieldCheck, label: "QA Validated", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const digitalPublishingSolutions = {
  eyebrow: "Our Digital Publishing Services",
  heading: "Nine Ways We Help You Publish for the Digital Era",
  items: [
    {
      icon: Tablet,
      title: "eBook Conversion",
      description: "Publications converted into EPUB, MOBI, and every reader format.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: FileCode,
      title: "XML & Structured Content",
      description: "DITA, DocBook, and JATS-compliant structured content, built to standard.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: LayoutTemplate,
      title: "Typesetting & Layout Design",
      description: "Books, journals, and reports laid out to production-ready standard.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: ScanLine,
      title: "Content Digitization",
      description: "Legacy archives scanned, OCR'd, and converted into searchable text.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: RefreshCw,
      title: "Content Conversion",
      description: "PDF, Word, XML, HTML, and EPUB converted across every format pair.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Publishing",
      description: "Tagged PDFs and EPUBs built for screen readers and compliance.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: GraduationCap,
      title: "Educational Publishing",
      description: "Textbooks, courseware, and question banks built for classrooms.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: FlaskConical,
      title: "Scientific Publishing",
      description: "Research journals and clinical publications to academic standard.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Corporate Publishing",
      description: "Annual reports, manuals, and training materials, produced at scale.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const digitalPublishingFormats = {
  eyebrow: "eBook Conversion, XML & Typesetting",
  heading: "Conversion, Structure, and Layout — In One Publishing Pipeline",
  description:
    "Manuscripts converted into responsive eBooks, content structured to standard schemas, and books, journals, and reports typeset to house style — production-ready in the tools your team already works in.",
  cards: [
    {
      icon: Tablet,
      title: "eBook Conversion",
      description:
        "Manuscripts and print files converted into responsive, reflowable eBooks — tested across readers before they ever reach your audience.",
      items: ["EPUB 2", "EPUB 3", "MOBI", "AZW", "Kindle", "PDF", "HTML5", "Metadata", "Responsive Design", "Hyperlinks", "Multimedia", "Quality Testing"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: FileCode,
      title: "XML & Structured Content",
      description:
        "Every document is tagged to standard schemas — so content flows cleanly into any downstream system, format, or platform.",
      items: ["DITA", "DocBook", "JATS", "NLM", "TEI"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: LayoutTemplate,
      title: "Typesetting & Layout",
      description:
        "Books, journals, and reports typeset to house style — production-ready in the tools your team already works in.",
      items: ["Book Layout", "Magazine", "Annual Report", "Journal", "Catalog", "Manual", "Adobe InDesign", "Illustrator", "Photoshop", "Microsoft Office"],
      glowColor: "rgba(167,139,250,0.3)",
      gradient: "from-violet-500 to-purple-500",
    },
  ],
};

export const digitalPublishingDigitizationSteps = [
  { icon: FileSearch, label: "Scan" },
  { icon: ScanLine, label: "OCR" },
  { icon: Image, label: "Enhance" },
  { icon: Tags, label: "Tag & Deliver" },
];

export const digitalPublishingDigitization = {
  eyebrow: "Content Digitization",
  heading: "Digitize Legacy Content With Precision",
  description:
    "Physical archives and out-of-print titles scanned, enhanced, and converted into searchable, structured digital assets.",
  steps: digitalPublishingDigitizationSteps,
  checklist: [
    { icon: ScanLine, label: "OCR", description: "Scanned pages converted into accurate, searchable text." },
    { icon: FileSearch, label: "Scanning", description: "Physical archives digitized at production scale." },
    { icon: Type, label: "Text Extraction", description: "Structured text pulled from complex legacy layouts." },
    { icon: Image, label: "Image Enhancement", description: "Faded and damaged pages restored before conversion." },
    { icon: Tags, label: "Metadata", description: "Every digitized asset tagged for search and retrieval." },
    { icon: FileStack, label: "Archive Digitization", description: "Full collections converted into a searchable digital archive." },
  ],
};

export const digitalPublishingConversionSteps = [
  { icon: FileText, label: "PDF" },
  { icon: FileText, label: "Word" },
  { icon: FileCode, label: "XML" },
  { icon: Globe2, label: "HTML" },
  { icon: Tablet, label: "EPUB" },
  { icon: BookOpen, label: "Digital Reader" },
];

export const digitalPublishingConversion = {
  eyebrow: "Content Conversion",
  heading: "Every Format, Converted Without Losing Structure",
  steps: digitalPublishingConversionSteps,
  marqueeItems: [
    { icon: RefreshCw, title: "PDF → Word" },
    { icon: RefreshCw, title: "Word → XML" },
    { icon: RefreshCw, title: "XML → HTML" },
    { icon: RefreshCw, title: "PDF → EPUB" },
    { icon: RefreshCw, title: "HTML → EPUB" },
    { icon: RefreshCw, title: "InDesign → EPUB" },
  ],
};

export const digitalPublishingAccessibility = {
  eyebrow: "Accessibility Publishing",
  heading: "Content Built to Reach Every Reader",
  description: "Tagged PDFs and EPUBs built for screen readers and compliance.",
  items: [
    { icon: Tags, title: "Tagged PDFs" },
    { icon: ClipboardCheck, title: "Logical Reading Order" },
    { icon: Type, title: "Alternative Text" },
    { icon: TableProperties, title: "Accessible Tables" },
    { icon: Ear, title: "Screen Reader Support" },
    { icon: Tablet, title: "EPUB Accessibility" },
  ],
};

export const digitalPublishingSpecialized = {
  eyebrow: "Specialized Publishing",
  heading: "Depth in the Domains That Need It Most",
  description:
    "Textbooks, research journals, and corporate reports — each produced to the standard their industry demands.",
  cards: [
    {
      icon: GraduationCap,
      title: "Educational Publishing",
      description: "Textbooks, courseware, and question banks built for classrooms.",
      items: ["Textbooks", "Courseware", "Question Banks", "Student Workbooks"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: FlaskConical,
      title: "Scientific & Medical",
      description: "Research journals and clinical publications to academic standard.",
      items: ["Research Journals", "Clinical Publications", "Medical Books", "Conference Proceedings"],
      glowColor: "rgba(56,189,248,0.3)",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Briefcase,
      title: "Corporate Publishing",
      description: "Annual reports, manuals, and training materials, produced at scale.",
      items: ["Annual Reports", "Policy Manuals", "Training Materials", "Marketing Collateral"],
      glowColor: "rgba(244,63,94,0.3)",
      gradient: "from-rose-500 to-pink-500",
    },
  ],
};

export const digitalPublishingWhoWeServe = {
  eyebrow: "Industries We Serve",
  heading: "Publishing Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Publishing
    </>
  ),
  items: [
    { icon: BookOpen, label: "Book Publishers" },
    { icon: School, label: "Educational Institutions" },
    { icon: GraduationCap, label: "Universities" },
    { icon: FlaskConical, label: "Scientific Publishers" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Building2, label: "Government" },
    { icon: Landmark, label: "Financial Institutions" },
    { icon: Cpu, label: "Technology Companies" },
    { icon: Briefcase, label: "Corporate Enterprises" },
    { icon: HeartHandshake, label: "Non-Profit Organizations" },
  ],
};

export const digitalPublishingBusinessBenefits = {
  eyebrow: "Why Bigwigs",
  heading: "Six Reasons Publishers Trust Our Production Teams",
  kpis: [
    { value: 10, suffix: "M+", label: "Pages Processed" },
    { value: 100, suffix: "+", label: "Publishing Projects" },
    { value: 99.5, suffix: "%", label: "Quality Accuracy" },
    { value: 40, suffix: "%", label: "Faster Publishing Cycles" },
  ],
  benefits: [
    { icon: Award, title: "Publishing Experts", description: "Teams who understand production, not just file conversion." },
    { icon: ClipboardCheck, title: "Industry Standards", description: "DITA, JATS, EPUB, and accessibility standards, built in." },
    { icon: Layers, title: "Scalable Production", description: "From a single title to a full catalog on the same pipeline." },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Every file validated before it reaches your readers." },
    { icon: Lock, title: "Secure Content Handling", description: "Confidential manuscripts and archives handled under NDA." },
    { icon: Clock, title: "On-Time Delivery", description: "Production schedules that hold, even at enterprise scale." },
  ],
};

export const digitalPublishingCaseStudy = {
  eyebrow: "Case Study",
  heading: "Helping Publishers Reach Readers Everywhere",
  description:
    "A publishing house partnered with Bigwigs to convert its full catalog into accessible digital formats — reaching readers across every major device and platform.",
  stats: [
    { value: "100+", label: "Digital Publications" },
    { value: "50+", label: "Formats Supported" },
    { value: "Millions", label: "Readers Reached" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Publishing KPIs", secondary: "Format Analytics", trend: "Readership Growth" },
};

export const digitalPublishingProcess = {
  eyebrow: "Digital Publishing Workflow",
  heading: "Five Stages Between Manuscript and Delivery",
  steps: [
    { icon: Search, title: "Content Assessment", description: "Source files and target formats reviewed before production begins." },
    { icon: FileCog, title: "Content Preparation", description: "Structure, styles, and metadata mapped to your production spec." },
    { icon: Cog, title: "Production", description: "Conversion, typesetting, and formatting completed at scale." },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Every file validated against format and accessibility standards." },
    { icon: PackageCheck, title: "Delivery", description: "Final files delivered in every platform and format you need." },
  ],
  desktopColumnsClassName: "grid-cols-3 xl:grid-cols-5",
};

export const digitalPublishingFaq = {
  items: [
    {
      question: "Do you support print and digital publishing?",
      answer:
        "Yes. We produce for both — from print-ready typesetting to EPUB, MOBI, HTML5, and every major digital reader format.",
    },
    {
      question: "Can you convert legacy documents?",
      answer:
        "Yes. Scanned archives and legacy files are digitized with OCR, text extraction, and image enhancement before conversion.",
    },
    {
      question: "Do you handle enterprise publishing projects?",
      answer:
        "Yes. Our production pipeline scales from a single title to full catalogs and ongoing enterprise publishing programs.",
    },
    {
      question: "How do you ensure publishing quality?",
      answer:
        "Every file passes structural, format, and accessibility validation before delivery — checked against your production spec.",
    },
  ],
};

export const digitalPublishingBottomCta = {
  icon: BookOpen,
  heading: <>Modernize Your Publishing for the Digital Era</>,
  description:
    "Whether you're publishing books, journals, corporate reports, educational content, or enterprise documentation, Bigwigs Technologies delivers secure, scalable, and high-quality digital publishing solutions for the modern world.",
  primaryAction: { label: "Discuss Your Publishing Project", href: "#contact" },
  secondaryAction: { label: "Contact Our Publishing Experts", href: "#contact", showArrow: true },
};
