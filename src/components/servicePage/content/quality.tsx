import {
  Users2,
  ClipboardList,
  Layers,
  RefreshCw,
  Search,
  PenTool,
  CheckCircle2,
  ClipboardCheck,
  PackageCheck,
  FileEdit,
  SearchCheck,
  ShieldCheck,
  Target,
  BadgeCheck,
  Activity,
  ScanEye,
  Brain,
  Stethoscope,
  Code2,
  Languages,
  Mic,
  Image,
  Scan,
  Shapes,
  FileText,
  BarChart3,
  Lock,
  TrendingUp,
  Wallet,
  Rocket,
  Network,
  Database,
  Bot,
  UserCheck,
} from "lucide-react";

export const qualityHero = {
  eyebrow: "Quality Is Built Into Every Dataset",
  heading: (
    <>
      Precision That <span className="text-blue-500">Powers Better AI</span>
    </>
  ),
  description:
    "At Bigwigs Technologies, quality is not a final checkpoint — it is built into every stage of our data annotation and AI workflow. From initial guidelines to final validation, we combine human expertise, intelligent tools, and multi-level quality checks to deliver reliable, production-ready data.",
  primaryCta: { label: "Talk to Our Experts", href: "/contact" },
};

export const qualityFlowStages = [
  { icon: Database, label: "Raw Data" },
  { icon: PenTool, label: "Annotation" },
  { icon: Bot, label: "AI Validation" },
  { icon: UserCheck, label: "Human Review" },
  { icon: BadgeCheck, label: "Verified Dataset" },
];

export const qualityFlowBadges = [
  { icon: Target, label: "High Annotation Accuracy", position: "left-[-6%] top-[6%]" },
  { icon: Layers, label: "Multi-Level Review", position: "right-[-8%] top-[26%]" },
  { icon: Bot, label: "AI-Assisted QA", position: "left-[-8%] bottom-[22%]" },
  { icon: PackageCheck, label: "Production-Ready Data", position: "right-[-6%] bottom-[4%]" },
];

export const qualityDifferentiators = {
  eyebrow: "What Makes Our Quality Different?",
  heading: "Quality Designed for AI at Scale",
  items: [
    {
      icon: Users2,
      title: "Expert Annotation Teams",
      description: "Specialized teams trained to handle complex image, video, text, audio, and healthcare datasets with domain-specific guidelines.",
    },
    {
      icon: ClipboardList,
      title: "Defined Quality Standards",
      description: "Every project begins with clear annotation guidelines, examples, edge cases, and measurable quality benchmarks.",
    },
    {
      icon: Layers,
      title: "Multi-Level Validation",
      description: "Annotations pass through multiple levels of review to identify inconsistencies, missed labels, and classification errors.",
    },
    {
      icon: RefreshCw,
      title: "Continuous Improvement",
      description: "Quality metrics are continuously monitored so workflows can be refined as project requirements and datasets evolve.",
    },
  ],
};

export const qualityWorkflowSteps = [
  { icon: Search, title: "Understand", description: "Project requirements, use cases, annotation guidelines and quality expectations are analyzed." },
  { icon: PenTool, title: "Annotate", description: "Trained specialists annotate datasets according to defined project guidelines." },
  { icon: CheckCircle2, title: "Validate", description: "Quality reviewers inspect annotations for accuracy, consistency and guideline compliance." },
  { icon: ClipboardCheck, title: "Audit", description: "Senior quality teams perform additional sampling and dataset-level checks." },
  { icon: RefreshCw, title: "Improve", description: "Errors and recurring issues are analyzed and workflows are refined." },
  { icon: PackageCheck, title: "Deliver", description: "Validated, structured and production-ready datasets are delivered." },
];

export const qualityLayers = [
  { icon: FileEdit, title: "Annotation Review", description: "Our annotation teams follow project-specific guidelines and validate their work during the annotation process." },
  { icon: SearchCheck, title: "Quality Review", description: "Dedicated reviewers inspect annotated data and identify errors, inconsistencies and guideline violations." },
  { icon: ShieldCheck, title: "Quality Audit", description: "Senior quality teams conduct sample-based and dataset-level audits to ensure the final output meets the agreed quality threshold." },
];

export const qualityMetrics = {
  eyebrow: "Quality Metrics",
  heading: "Quality You Can Measure",
  items: [
    { icon: Target, title: "High Accuracy", description: "Annotation output measured against gold-standard samples on every project." },
    { icon: Layers, title: "Multi-Level Validation", description: "No dataset ships on a single reviewer's judgment." },
    { icon: BadgeCheck, title: "Consistent Quality", description: "The same guideline, the same standard, across every batch." },
    { icon: Activity, title: "Continuous Monitoring", description: "Quality metrics tracked throughout delivery, not just at the end." },
  ],
};

export const qualityAcrossServices = {
  eyebrow: "Quality Across Every Service",
  heading: "Quality Across the AI Lifecycle",
  items: [
    { icon: ScanEye, title: "AI Data Annotation", description: "Precise image, video, text, audio and sensor data annotation." },
    { icon: Brain, title: "Generative AI & LLM Services", description: "Human evaluation, response quality assessment, data preparation and model evaluation." },
    { icon: Stethoscope, title: "Healthcare AI", description: "Structured and carefully reviewed medical datasets for AI and computer vision applications." },
    { icon: Code2, title: "Software Development", description: "Code quality, testing, security and performance validation throughout development." },
    { icon: Languages, title: "Language & Content Services", description: "Linguistic accuracy, consistency and contextual validation." },
    { icon: Mic, title: "Transcription Services", description: "Accurate transcription with quality review and validation." },
  ],
};

export const qualityHealthcare = {
  eyebrow: "Healthcare Quality",
  heading: "Precision Matters When Data Impacts Healthcare",
  description:
    "Healthcare AI requires more than basic annotation. Our workflows focus on consistency, structured guidelines, careful review, and secure handling of sensitive datasets.",
  items: [
    { icon: Image, title: "Medical Image Annotation" },
    { icon: Scan, title: "Radiology Annotation" },
    { icon: Shapes, title: "Anatomical Segmentation" },
    { icon: ClipboardCheck, title: "Clinical Data Annotation" },
    { icon: FileText, title: "Medical NLP" },
    { icon: BarChart3, title: "Healthcare AI Evaluation" },
  ],
};

export const qualitySecurity = {
  eyebrow: "Quality + Security",
  heading: "Quality You Can Trust. Data You Can Protect.",
  quality: {
    title: "Quality",
    icon: ShieldCheck,
    items: [
      "Defined annotation guidelines",
      "Multi-level validation",
      "Human-in-the-loop review",
      "Error tracking",
      "Continuous improvement",
    ],
  },
  security: {
    title: "Security",
    icon: Lock,
    items: [
      "Controlled data access",
      "Role-based permissions",
      "Secure infrastructure",
      "Confidentiality protocols",
      "Secure data handling",
    ],
  },
};

export const qualityBenchmarks = {
  eyebrow: "Client-Specific Quality Benchmarks",
  heading: "Your Standards. Our Quality Commitment.",
  body: "Every AI project is different. That's why Bigwigs works with your project-specific requirements, annotation guidelines, acceptance criteria, and quality thresholds.",
  closingLine: "You define the standard. We build the process to consistently meet it.",
};

export const qualityDashboard = {
  eyebrow: "Quality Dashboard",
  heading: "Complete Visibility Into Your Data Quality",
  description: "An illustrative sample of the kind of quality report shared with clients throughout delivery — actual figures vary by project.",
  metrics: [
    { label: "Annotation Accuracy", value: 97 },
    { label: "Consistency", value: 95 },
    { label: "Review Completion", value: 100 },
    { label: "Guideline Compliance", value: 96 },
  ],
  cta: { label: "Talk to Our Team", href: "/contact" },
};

export const qualityWhyItMatters = {
  eyebrow: "Why Quality Matters",
  heading: "Better Data. Better Models. Better Outcomes.",
  items: [
    { icon: TrendingUp, title: "Higher Model Accuracy", description: "Clean and accurately labeled training data helps AI models learn from reliable signals." },
    { icon: Wallet, title: "Reduced Rework", description: "Early quality validation catches errors before they reach downstream AI workflows." },
    { icon: Rocket, title: "Faster Deployment", description: "Consistent datasets help teams move from experimentation toward production faster." },
    { icon: Network, title: "Scalable AI Operations", description: "A structured quality framework allows annotation projects to scale without sacrificing consistency." },
  ],
};

export const qualityBottomCta = {
  icon: ShieldCheck,
  heading: "Let's Build AI on Data You Can Trust",
  description:
    "Whether you're building computer vision models, healthcare AI, LLM applications, or intelligent automation, Bigwigs can help transform raw data into high-quality AI-ready datasets.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to an AI Expert", href: "/contact", showArrow: true },
};
