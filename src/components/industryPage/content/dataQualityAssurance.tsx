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
  Square,
  Shapes,
  Layers,
  Boxes,
  Crosshair,
  ScanText,
  Database,
  Tag,
  MessageSquare,
  BookOpen,
  BarChart3,
  Wrench,
  Share2,
  TrendingUp,
  Lock,
  History,
  GitBranch,
  KeyRound,
  Save,
  EyeOff,
  Workflow,
  Cpu,
  Car,
  Landmark,
  Umbrella,
  ShoppingCart,
  Factory,
  Building2,
  GraduationCap,
  Radio,
  Newspaper,
  Truck,
  SlidersHorizontal,
} from "lucide-react";

export const dataQaHero = {
  eyebrow: "Data Validation & Quality Assurance",
  heading: (
    <>
      Trusted Data.
      <br />
      <span className="text-blue-500">Reliable AI.</span>
    </>
  ),
  description:
    "Ensure every dataset meets enterprise-grade quality standards before AI model training. Bigwigs Technologies provides comprehensive validation, multi-level quality assurance, and continuous quality monitoring for Computer Vision, NLP, Speech AI, and LLM datasets.",
  primaryCta: { label: "Request a Data Quality Assessment", href: "/demo" },
  secondaryCta: { label: "Speak With Our QA Specialist", href: "/contact" },
  trustedBy: ["Healthcare", "Automotive", "Finance", "Retail", "AI Companies", "Government"],
  visualIcon: ShieldCheck,
  badges: [
    { icon: ShieldCheck, label: "Multi-Level QA", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Gauge, label: "98% Annotation Accuracy", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: ClipboardCheck, label: "Audit-Ready Reporting", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const dataQaSolutions = {
  eyebrow: "Our QA Services",
  heading: "Eight Ways We Validate Your Data Before It Trains a Model",
  items: [
    {
      icon: ClipboardCheck,
      title: "Annotation Quality Review",
      description: "Bounding boxes, segmentation, and labels checked against guideline.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Image,
      title: "Image Quality Validation",
      description: "Resolution, lighting, noise, and duplicates flagged before delivery.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Video,
      title: "Video Quality Assurance",
      description: "Frame integrity, continuity, and tracking verified end-to-end.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Mic,
      title: "Audio Validation",
      description: "Clarity, speaker identity, and language confirmed on every file.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Text Validation",
      description: "Grammar, entities, and classification checked for accuracy.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Stethoscope,
      title: "Medical Data Validation",
      description: "Clinical labels and coding reviewed against domain standards.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Bot,
      title: "LLM Dataset Evaluation",
      description: "Prompt-response quality, bias, and hallucination risk assessed.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: ShieldCheck,
      title: "Security & Data Integrity",
      description: "Encrypted handling, audit trails, and controlled access throughout.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const dataQaAnnotationSteps = [
  { icon: Search, label: "Level 1 · Initial Review" },
  { icon: Users2, label: "Level 2 · Peer Review" },
  { icon: Award, label: "Level 3 · Senior QA Review" },
  { icon: ClipboardCheck, label: "Level 4 · Final Audit" },
];

export const dataQaAnnotationQuality = {
  eyebrow: "Annotation Quality Review",
  heading: "Validate Every Annotation With Precision",
  description:
    "Every box, mask, and polygon is checked against your guideline before it ever reaches your model — so label noise never becomes model noise.",
  steps: dataQaAnnotationSteps,
  items: [
    { icon: Square, title: "Bounding Boxes" },
    { icon: Shapes, title: "Polygon Validation" },
    { icon: Layers, title: "Semantic Segmentation" },
    { icon: Boxes, title: "Instance Segmentation" },
    { icon: Crosshair, title: "Keypoints" },
    { icon: ScanText, title: "OCR Validation" },
    { icon: Database, title: "Metadata Accuracy" },
    { icon: Tag, title: "Label Consistency" },
    { icon: ClipboardCheck, title: "Guideline Compliance" },
  ],
};

export const dataQaMediaValidation = {
  eyebrow: "Multi-Format Validation",
  heading: "Every Media Type, Checked Against Its Own Standard",
  description:
    "From raw pixels to raw language, every format is validated against criteria built for that data type — not a one-size-fits-all checklist.",
  cards: [
    {
      icon: Image,
      title: "Image, Video & Audio Validation",
      description: "Resolution, continuity, and clarity confirmed before any frame or clip reaches your pipeline.",
      items: [
        "Image Resolution & Lighting",
        "Noise & Duplicate Detection",
        "Frame Quality & Rate",
        "Scene Continuity & Object Tracking",
        "Audio Clarity & Noise Analysis",
        "Speaker Verification",
        "Language & Accent Detection",
      ],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Text, Medical & LLM Validation",
      description: "Specialized review for specialized data — from grammar checks to clinical coding to hallucination detection.",
      items: [
        "Grammar & Entity Accuracy",
        "Classification & Translation Quality",
        "Clinical Labels & Medical Coding",
        "Radiology & Imaging Review",
        "Prompt & Response Quality",
        "Hallucination & Bias Detection",
        "Safety & Alignment Review",
      ],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const dataQaWorkflowSteps = [
  { icon: Search, title: "Level 1 · Initial Review", description: "Every annotation checked against the project guideline." },
  { icon: Users2, title: "Level 2 · Peer Review", description: "A second reviewer independently verifies the batch." },
  { icon: Award, title: "Level 3 · Senior QA Review", description: "Senior reviewers resolve disputes and edge cases." },
  { icon: ClipboardCheck, title: "Level 4 · Final Audit", description: "A final sample audit confirms delivery-ready quality." },
];

export const dataQaWorkflow = {
  eyebrow: "Multi-Level QA Workflow",
  heading: "Four Review Levels Stand Between Annotation and Delivery",
  steps: dataQaWorkflowSteps,
  desktopColumnsClassName: "grid-cols-4",
};

export const dataQaImprovementSteps = [
  { icon: MessageSquare, label: "Reviewer Feedback" },
  { icon: Search, label: "Root Cause Analysis" },
  { icon: Wrench, label: "Corrective Actions" },
  { icon: TrendingUp, label: "Process Optimization" },
];

export const dataQaContinuousImprovement = {
  eyebrow: "Continuous Improvement",
  heading: "Quality That Compounds, Project After Project",
  steps: dataQaImprovementSteps,
  marqueeItems: [
    { icon: MessageSquare, title: "Reviewer Feedback" },
    { icon: Users2, title: "Calibration Sessions" },
    { icon: BookOpen, title: "Guideline Updates" },
    { icon: Search, title: "Root Cause Analysis" },
    { icon: BarChart3, title: "Performance Dashboards" },
    { icon: Wrench, title: "Corrective Actions" },
    { icon: Share2, title: "Knowledge Sharing" },
    { icon: TrendingUp, title: "Process Optimization" },
  ],
};

export const dataQaSecuritySteps = [
  { icon: Lock, label: "Encryption" },
  { icon: KeyRound, label: "Secure Access" },
  { icon: History, label: "Audit Logs" },
  { icon: Workflow, label: "Controlled Workflows" },
];

export const dataQaSecurityIntegrity = {
  eyebrow: "Security & Data Integrity",
  heading: "Built to Handle Data That Can't Be Handled Carelessly",
  steps: dataQaSecuritySteps,
  checklist: [
    { icon: Lock, label: "Encryption", description: "Data encrypted at rest and in transit across every stage of review." },
    { icon: History, label: "Audit Logs", description: "Every review action logged and fully traceable." },
    { icon: GitBranch, label: "Version Control", description: "Full history of guideline changes and label revisions." },
    { icon: KeyRound, label: "Secure Access", description: "Role-based access keeps sensitive datasets need-to-know only." },
    { icon: Save, label: "Backup", description: "Redundant backups protect against data loss." },
    { icon: EyeOff, label: "Confidentiality", description: "NDAs and confidentiality enforced across every reviewer and project." },
    { icon: Workflow, label: "Controlled Workflows", description: "Review and approval steps gated by role and permission." },
  ],
};

export const dataQaWhoWeServe = {
  eyebrow: "Industries We Support",
  heading: "Quality Assurance Across Every Sector",
  description: "From AI labs to healthcare systems, every sector gets the same rigorous, multi-level review.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      QA
    </>
  ),
  items: [
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Car, label: "Automotive" },
    { icon: Landmark, label: "Finance" },
    { icon: Umbrella, label: "Insurance" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Building2, label: "Government" },
    { icon: GraduationCap, label: "Education" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Newspaper, label: "Media" },
    { icon: Truck, label: "Logistics" },
  ],
};

export const dataQaBusinessBenefits = {
  eyebrow: "Business Benefits",
  heading: "Measurable Impact Across Every QA Engagement",
  kpis: [
    { value: 98, suffix: "%", label: "Annotation Accuracy" },
    { value: 97, suffix: "%", label: "Precision" },
    { value: 96, suffix: "%", label: "Recall" },
    { value: 95, suffix: "%", label: "Inter-Annotator Agreement" },
    { value: 99, suffix: "%", label: "Acceptance Rate" },
    { value: 2, suffix: "%", label: "Error Rate" },
    { value: 4, suffix: "%", label: "Rework Rate" },
    { value: 0, label: "Turnaround Time", isStatic: true, staticText: "24h" },
    { value: 0, label: "Client Satisfaction", isStatic: true, staticText: "4.9/5" },
  ],
  benefits: [
    { icon: Users2, title: "Dedicated QA Specialists", description: "Reviewers trained on your guideline, not a generic checklist." },
    { icon: Layers, title: "Multi-Level Review", description: "Four review levels stand between annotation and delivery." },
    { icon: Award, title: "Domain Expertise", description: "Medical, legal, and technical reviewers for specialized data." },
    { icon: SlidersHorizontal, title: "Configurable QA", description: "Review depth and sampling tuned to your risk tolerance." },
    { icon: Building2, title: "Enterprise Scale", description: "The same rigor from a pilot batch to millions of records." },
    { icon: BarChart3, title: "Transparent Reporting", description: "Metrics and audit trails visible at every stage of delivery." },
  ],
};

export const dataQaCaseStudy = {
  eyebrow: "Case Study",
  heading: "Improving AI Accuracy Through Enterprise QA",
  description:
    "An enterprise AI team partnered with Bigwigs to run multi-level validation across its annotation pipeline — cutting rework and raising model accuracy in the same quarter, one of more than 100 enterprise QA engagements that have helped AI teams deploy up to 40% faster.",
  stats: [
    { value: "99.5%", label: "Accuracy" },
    { value: "60%", label: "Less Rework" },
    { value: "Millions", label: "Validated Data Points" },
  ],
  ctaHref: "/case-studies",
  ctaLabel: "Read Case Study",
  chartLabels: { primary: "Quality Metrics", secondary: "Review Analytics", trend: "Accuracy Trend" },
};

export const dataQaFaq = {
  items: [
    {
      question: "Can your QA workflow be customized?",
      answer:
        "Yes. Review depth, sampling rate, and escalation rules are configured to your project's risk tolerance and existing guideline.",
    },
    {
      question: "Do you provide quality reports?",
      answer:
        "Every project includes metrics reporting — accuracy, precision, recall, error rate, and turnaround — visible throughout delivery, not just at the end.",
    },
    {
      question: "Can you validate third-party datasets?",
      answer:
        "Yes. We run the same multi-level QA workflow on datasets collected or annotated outside Bigwigs, with full audit reporting.",
    },
    {
      question: "How do you measure annotation quality?",
      answer:
        "We track inter-annotator agreement, precision and recall against gold-standard samples, and acceptance rate across every batch.",
    },
  ],
};

export const dataQaBottomCta = {
  icon: ShieldCheck,
  heading: <>Build AI Models With Trusted Data</>,
  description:
    "From annotation validation and medical data review to LLM dataset evaluation and enterprise quality assurance, Bigwigs Technologies helps organizations deliver AI-ready datasets with confidence.",
  primaryAction: { label: "Request a Data Quality Assessment", href: "#contact" },
  secondaryAction: { label: "Speak With Our QA Specialist", href: "#contact", showArrow: true },
};
