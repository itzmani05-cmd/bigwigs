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
  Share2,
  FileCode,
  BookMarked,
  LayoutGrid,
  RefreshCw,
  Send,
  Search,
  ScanText,
  Sparkles,
  CheckCircle2,
  FileCheck2,
  ClipboardCheck,
  ClipboardList,
  ScanEye,
  Workflow,
  FileSignature,
  Users,
  Newspaper,
  Cog,
  ShoppingCart,
  Receipt,
  GraduationCap,
  FlaskConical,
  MonitorSmartphone,
  Briefcase,
  Landmark,
  Microscope,
  Globe2,
  Handshake,
  HeartHandshake,
  PenSquare,
} from "lucide-react";

export const publishingHero = {
  eyebrow: "Publishing & Media Solutions",
  heading: (
    <>
      Revolutionizing Digital
      <br />
      Publishing With{" "}
      <span className="text-blue-500">
        AI, Automation &amp;
        <br />
        Accessible Content
      </span>
    </>
  ),
  description:
    "The publishing and media industry is undergoing rapid digital transformation. We combine decades of traditional publishing expertise with modern AI capabilities to help organizations streamline publishing workflows, modernize legacy content, and create intelligent, accessible, multilingual digital experiences.",
  primaryCta: { label: "Schedule a Publishing Solutions Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our Publishing Technology Experts", href: "/contact" },
  trustedBy: ["Book Publishers", "Academic Publishers", "Educational Publishers", "Scientific Journals", "Digital Media Companies", "Government Publishing Offices"],
  visualIcon: BookOpen,
  badges: [
    { icon: BrainCircuit, label: "AI Content Classification", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Accessibility, label: "Accessible EPUB & PDF", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Layers, label: "XML-First Publishing", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const publishingChallenges = {
  heading: (
    <>
      The Realities Publishing & Media
      <br />
      Organizations Are Solving For
    </>
  ),
  description:
    "Publishers and media organizations are racing to modernize legacy content while managing shorter timelines and rising accessibility demands.",
  items: [
    {
      icon: FileStack,
      title: "Large-Scale Legacy Content Conversion",
      description: "Decades of legacy content need to be converted without losing structure or quality.",
    },
    { icon: Layers, title: "Multi-Format Publishing Requirements" },
    { icon: Clock, title: "Shorter Publishing Timelines" },
    { icon: Rocket, title: "Digital-First Content Strategies" },
    { icon: Accessibility, title: "Accessibility Compliance" },
    { icon: Database, title: "Metadata Management" },
    { icon: Languages, title: "Content Localization" },
    { icon: BrainCircuit, title: "AI-Assisted Content Workflows" },
    { icon: ShieldCheck, title: "Rights & Version Management" },
    { icon: Share2, title: "Omnichannel Content Distribution" },
  ],
};

export const publishingSolutions = {
  heading: "Nine Disciplines. One Publishing AI Practice.",
  items: [
    {
      icon: BookOpen,
      title: "Digital Publishing Services",
      description: "End-to-end publishing for books, journals, magazines, and corporate content.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: BrainCircuit,
      title: "AI-Assisted Publishing",
      description: "AI-enhanced classification, tagging, indexing, and content workflows.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: PenTool,
      title: "Editorial & Content Services",
      description: "Copy editing, proofreading, and publication readiness for every title.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Solutions",
      description: "Inclusive publications compliant with global accessibility standards.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Digital Asset Management",
      description: "Organized, versioned, and classified publishing assets at scale.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Language & Localization Services",
      description: "Translation and localization that expand publishing to global markets.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      description: "Automated processing of manuscripts, contracts, and editorial files.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Code2,
      title: "Publishing Software Development",
      description: "Custom CMS, DAM, and editorial platforms built for scale.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: Tags,
      title: "AI Data Services",
      description: "Publishing-specific datasets that power discoverability and automation.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const publishingServiceSteps = [
  { icon: FileCode, label: "Structure" },
  { icon: RefreshCw, label: "Convert" },
  { icon: PenTool, label: "Typeset" },
  { icon: Send, label: "Publish" },
];

export const digitalPublishingServices = {
  heading: "End-to-End Publishing, From Manuscript to Channel",
  description: "End-to-end publishing solutions for books, journals, magazines, educational content, and corporate publications.",
  steps: publishingServiceSteps,
  items: [
    { icon: FileCode, title: "XML-First Publishing" },
    { icon: BookMarked, title: "EPUB 2 & EPUB 3 Conversion" },
    { icon: Code2, title: "HTML5 Publishing" },
    { icon: FileText, title: "PDF Production" },
    { icon: Layers, title: "Print-Ready Composition" },
    { icon: PenTool, title: "Digital Typesetting" },
    { icon: LayoutGrid, title: "Layout Design" },
    { icon: Database, title: "Content Migration" },
    { icon: Share2, title: "Multi-Channel Publishing" },
  ],
};

export const aiAssistedPublishing = {
  heading: "AI-Enhanced Publishing Workflows",
  description: "Enhance publishing workflows using artificial intelligence, from classification to discoverability.",
  centerIcon: BrainCircuit,
  badges: [
    { icon: Tags, label: "AI Content Tagging", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ScanText, label: "OCR Enhancement", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Sparkles, label: "Recommendation Engine", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Tags, title: "Automated Content Classification", description: "AI models that categorize content accurately at publishing scale." },
    { icon: Database, title: "Metadata Extraction", description: "Automatic extraction of metadata that improves discoverability." },
    { icon: Search, title: "Intelligent Indexing", description: "AI-assisted indexing that speeds up search and retrieval." },
    { icon: Tags, title: "AI-Based Content Tagging", description: "Consistent tagging across large and growing content libraries." },
    { icon: ScanText, title: "OCR Enhancement", description: "Improved text recognition accuracy for scanned and legacy content." },
    { icon: FileStack, title: "Document Structuring", description: "Convert unstructured content into clean, structured formats." },
    { icon: Search, title: "Semantic Search Preparation", description: "Content prepared for accurate, meaning-based search experiences." },
    { icon: Sparkles, title: "Content Recommendation Engines", description: "Recommendation models that increase reader engagement." },
  ],
};

export const editorialSteps = [
  { icon: PenTool, label: "Draft" },
  { icon: FileText, label: "Edit" },
  { icon: Search, label: "Review" },
  { icon: CheckCircle2, label: "Approve" },
];

export const editorialContentServices = {
  heading: "Editorial Support for Every Stage of Production",
  description: "Support editorial teams with structured, quality-driven review and formatting processes.",
  steps: editorialSteps,
  checklist: [
    { icon: PenTool, label: "Copy Editing", description: "Line-level editing that sharpens clarity and consistency." },
    { icon: CheckCircle2, label: "Proofreading", description: "Final-pass review that catches errors before publication." },
    { icon: FileText, label: "Content Formatting", description: "Consistent formatting applied across every publication type." },
    { icon: FileCheck2, label: "Reference Validation", description: "Verify references and sources for accuracy and completeness." },
    { icon: BookMarked, label: "Citation Management", description: "Structured citation handling across academic and journal content." },
    { icon: ShieldCheck, label: "Quality Review", description: "Multi-pass quality checks before content moves to production." },
    { icon: ClipboardCheck, label: "Style Guide Compliance", description: "Consistent voice and formatting aligned to house style." },
    { icon: ClipboardList, label: "Publication Readiness Checks", description: "Final validation that content is ready to publish across channels." },
  ],
};

export const documentSteps = [
  { icon: FileText, label: "Intake" },
  { icon: ScanEye, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Workflow, label: "Route" },
];

export const documentProcessing = {
  heading: "Automate Publishing Document Workflows",
  description: "We extract, validate, and route publishing documents end-to-end — cutting manual effort across every stage.",
  steps: documentSteps,
  marqueeItems: [
    { icon: FileText, title: "Manuscripts" },
    { icon: FlaskConical, title: "Research Papers" },
    { icon: Newspaper, title: "Journal Articles" },
    { icon: FileSignature, title: "Contracts" },
    { icon: ShieldCheck, title: "Copyright Documentation" },
    { icon: Users, title: "Author Agreements" },
    { icon: ClipboardList, title: "Editorial Reports" },
    { icon: FileStack, title: "Production Files" },
  ],
};

export const publishingSoftware = {
  heading: "Publishing Software, Engineered for Scale",
  description: "We develop custom publishing technology solutions built for editorial teams and readers alike.",
  panelLabel: "Publishing Operations Suite",
  tiles: [
    { icon: LayoutGrid, label: "Content Management (CMS)" },
    { icon: Workflow, label: "Editorial Workflow Platforms" },
    { icon: Database, label: "Digital Asset Management (DAM)" },
    { icon: Cog, label: "Publishing Automation", hasSparkline: true },
    { icon: BookOpen, label: "Online Reading Portals" },
    { icon: ShoppingCart, label: "eCommerce Bookstores" },
    { icon: Receipt, label: "Subscription Management" },
    { icon: ShieldCheck, label: "Rights Management", hasLiveDot: true },
  ],
  pills: [
    { icon: LayoutGrid, label: "Content Management Systems" },
    { icon: Workflow, label: "Editorial Workflow Platforms" },
    { icon: Database, label: "Digital Asset Management Systems" },
    { icon: BookOpen, label: "Online Reading Portals" },
    { icon: ShoppingCart, label: "eCommerce Bookstores" },
    { icon: Users, label: "Author & Reviewer Portals" },
  ],
};

export const accessibilityLocalization = {
  heading: "Accessible and Multilingual by Design",
  description: "Deliver inclusive publications that comply with global accessibility standards and reach every market.",
  cards: [
    {
      icon: Accessibility,
      title: "Accessibility Solutions",
      description: "Deliver inclusive publications that comply with global accessibility standards.",
      items: ["PDF Accessibility Remediation", "EPUB Accessibility", "WCAG Compliance Support", "Alt Text Creation", "Screen Reader Optimization", "Accessible Tables & Forms", "Accessible Educational Materials", "Accessible Government Publications"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Languages,
      title: "Language & Localization Services",
      description: "Expand global reach with multilingual publishing across every format.",
      items: ["Book Translation", "Journal Translation", "Website Localization", "Marketing Content Localization", "Subtitling", "Captioning", "Transcription", "Multilingual Editorial Review"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const assetsAndData = {
  heading: "Assets and Data, Organized for Scale",
  description: "Manage publishing assets efficiently and power AI initiatives with publishing-specific datasets.",
  cards: [
    {
      icon: Database,
      title: "Digital Asset Management",
      description: "Organize and manage publishing assets efficiently at every stage.",
      items: ["Metadata Management", "Image Libraries", "Version Control", "Asset Classification", "Content Repository Development", "Digital Archive Management"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Tags,
      title: "AI Data Services",
      description: "Support AI initiatives with high-quality, publishing-specific datasets.",
      items: ["OCR Annotation", "Document Annotation", "NLP Dataset Preparation", "Named Entity Recognition (NER)", "Content Classification", "Image Annotation", "Layout Annotation", "AI Model Evaluation"],
      glowColor: "rgba(56,189,248,0.3)",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
  ],
};

export const publishingWhoWeServe = {
  heading: "Trusted Across Publishing & Media",
  description: "From book publishers to research organizations, we support every organization shaping the future of content.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Publishing
    </>
  ),
  items: [
    { icon: BookOpen, label: "Book Publishers" },
    { icon: GraduationCap, label: "Academic Publishers" },
    { icon: BookMarked, label: "Educational Publishers" },
    { icon: FlaskConical, label: "Scientific Journals" },
    { icon: Newspaper, label: "Newspapers" },
    { icon: PenSquare, label: "Magazines" },
    { icon: MonitorSmartphone, label: "Digital Media Companies" },
    { icon: Briefcase, label: "Corporate Publishing Teams" },
    { icon: Landmark, label: "Government Publishing Offices" },
    { icon: Microscope, label: "Research Organizations" },
  ],
};

export const publishingBusinessBenefits = {
  heading: "Measurable Impact Across the Publishing Lifecycle",
  kpis: [
    { value: 50, suffix: "%", label: "Faster Publishing Cycles" },
    { value: 40, suffix: "%", label: "Reduction in Production Costs" },
    { value: 99, suffix: "%", label: "Metadata Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Pages Digitized" },
  ],
  benefits: [
    { icon: Rocket, title: "Accelerate Publishing Cycles", description: "Faster production timelines from manuscript to multi-channel release." },
    { icon: Receipt, title: "Reduce Production Costs", description: "Automation that lowers the cost of manual conversion and formatting." },
    { icon: ShieldCheck, title: "Improve Content Quality", description: "Structured editorial and QA processes that protect every title." },
    { icon: Accessibility, title: "Deliver Accessible Publications", description: "Inclusive formats that comply with global accessibility standards." },
    { icon: Globe2, title: "Expand Into Global Markets", description: "Localization that opens new markets without sacrificing quality." },
    { icon: RefreshCw, title: "Modernize Legacy Publishing Workflows", description: "XML-first, cloud-based workflows that replace manual production." },
    { icon: Cog, title: "Increase Operational Efficiency", description: "Streamlined pipelines that free editorial teams for higher-value work." },
    { icon: BrainCircuit, title: "Leverage AI for Content Management", description: "AI-powered classification and discovery across every asset." },
  ],
};

export const publishingWhyUs = {
  heading: "Why Publishing Organizations Choose Bigwigs",
  items: [
    { icon: BookOpen, title: "Extensive Publishing Industry Expertise", description: "Decades of experience across books, journals, and digital media.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: BrainCircuit, title: "AI-Powered Content Processing Capabilities", description: "Proven AI models for classification, tagging, and discoverability.", gradient: "from-violet-500 to-purple-400" },
    { icon: Accessibility, title: "Accessibility Specialists", description: "Dedicated teams for EPUB, PDF, and publication accessibility remediation.", gradient: "from-rose-500 to-pink-400" },
    { icon: Languages, title: "Multilingual Localization Services", description: "Translation and localization expertise across global markets.", gradient: "from-orange-500 to-amber-400" },
    { icon: Code2, title: "Enterprise Software Development Experience", description: "Proven delivery of CMS, DAM, and editorial workflow platforms.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Handshake, title: "Flexible Engagement Models", description: "Scoped pilots that scale into long-term delivery partnerships.", gradient: "from-cyan-500 to-brand-blue-400" },
    { icon: CheckCircle2, title: "Strong Editorial Quality Processes", description: "Multi-layer QA built for the accuracy publishing demands.", gradient: "from-brand-blue-500 to-indigo-400" },
    { icon: HeartHandshake, title: "Scalable Global Delivery Model", description: "Distributed teams that scale with your publishing program.", gradient: "from-orange-500 to-rose-400" },
  ],
};

export const publishingUseCases = {
  heading: "AI Built for Publishing & Media Workflows",
  description: "From XML-first workflows to accessible libraries, our AI solutions help publishers move faster without losing quality.",
  items: [
    { id: "xml-first-workflow", icon: FileCode, title: "XML-First Publishing Workflow", description: "Implement structured XML workflows that enable simultaneous print, web, mobile, and eBook publishing from a single content source.", outcome: "Single-source publishing across every channel", href: "#contact" },
    { id: "ai-metadata-automation", icon: BrainCircuit, title: "AI Metadata Automation", description: "Automatically generate metadata, keywords, and classifications to improve discoverability and search engine performance.", outcome: "Improved discoverability across catalogs", href: "#contact" },
    { id: "accessible-digital-library", icon: Accessibility, title: "Accessible Digital Library", description: "Convert thousands of publications into accessible EPUB and PDF formats, ensuring compliance with international accessibility standards.", outcome: "Thousands of titles made fully accessible", href: "#contact" },
    { id: "editorial-workflow-automation", icon: Workflow, title: "Editorial Workflow Automation", description: "Develop collaborative editorial platforms that streamline manuscript submission, peer review, editing, approvals, and publication.", outcome: "Faster manuscript-to-publication turnaround", href: "#contact" },
    { id: "multilingual-content-publishing", icon: Languages, title: "Multilingual Content Publishing", description: "Translate and localize books, educational materials, journals, and marketing content for international audiences while maintaining consistency and quality.", outcome: "Content localized across new international markets", href: "#contact" },
  ],
};

export const publishingProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess publishing workflows, content types, business objectives, and technical requirements." },
  { icon: PenTool, title: "Design", description: "Create publishing architecture, editorial workflows, metadata strategies, and automation plans." },
  { icon: Code2, title: "Build", description: "Develop publishing platforms, convert content, create AI datasets, and integrate digital workflows." },
  { icon: CheckCircle2, title: "Validate", description: "Conduct editorial reviews, accessibility testing, quality assurance, and compatibility checks across devices and formats." },
  { icon: Rocket, title: "Publish & Optimize", description: "Deploy content across multiple channels, monitor performance, and continuously improve publishing workflows." },
];

export const publishingProcess = {
  heading: "From Discovery to Continuous Optimization",
  steps: publishingProcessSteps,
  desktopColumnsClassName: "grid-cols-3 xl:grid-cols-5",
};

export const publishingFaq = {
  items: [
    { question: "Can you modernize legacy publishing workflows?", answer: "Yes. We help publishers transition from traditional production models to XML-first, cloud-based, and AI-assisted publishing workflows while preserving content quality and consistency." },
    { question: "Do you provide accessibility remediation for publications?", answer: "Yes. We remediate PDFs, EPUBs, educational materials, government publications, and other digital content to improve accessibility and support compliance with recognized accessibility standards." },
    { question: "Can you develop custom publishing platforms?", answer: "Absolutely. We design and develop CMS platforms, editorial workflow systems, digital asset management solutions, online reading portals, and publishing automation tools tailored to your business needs." },
  ],
};

export const publishingBottomCta = {
  icon: BookOpen,
  heading: (
    <>
      Transform Publishing
      <br />
      with AI &amp; Digital Innovation
    </>
  ),
  description:
    "Whether you're modernizing editorial workflows, digitizing archives, creating accessible publications, or developing next-generation publishing platforms, Bigwigs Technologies delivers the expertise and technology to help you succeed.",
  primaryAction: { label: "Schedule a Publishing Solutions Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Publishing Technology Experts", href: "#contact", showArrow: true },
};
