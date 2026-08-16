import {
  Landmark,
  ShieldAlert,
  DollarSign,
  FileText,
  Scale,
  Clock,
  Database,
  Smartphone,
  Tags,
  BrainCircuit,
  Code2,
  Headset,
  Languages,
  ShieldCheck,
  Search,
  PenTool,
  CheckCircle2,
  Rocket,
  Gauge,
} from "lucide-react";

export const bfsiHero = {
  eyebrow: "Banking, Financial Services & Insurance",
  heading: (
    <>
      Financial Innovation, Powered by{" "}
      <span className="text-blue-500">AI</span>
    </>
  ),
  description:
    "AI-powered solutions and secure data services that accelerate digital transformation for banks, insurers, and fintechs.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our Experts", href: "/contact" },
};

export const bfsiChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Financial Institutions Face",
  items: [
    { icon: ShieldAlert, title: "Fraud & Cyber Threats" },
    { icon: DollarSign, title: "High Operational Costs" },
    { icon: FileText, title: "Manual Document Processes" },
    { icon: Scale, title: "Regulatory & Compliance Demands" },
    { icon: Clock, title: "Slow Customer Onboarding" },
    { icon: Database, title: "Unstructured Financial Data" },
  ],
};

export const bfsiCapabilities = {
  eyebrow: "What's Included",
  heading: "One Financial AI Practice, Every Discipline",
  items: [
    { icon: FileText, title: "Intelligent Document Processing", description: "Automated loan, KYC, and claims extraction." },
    { icon: Tags, title: "AI Data Annotation", description: "Labeled datasets for fraud and risk models." },
    { icon: BrainCircuit, title: "AI & Machine Learning", description: "Fraud detection and credit risk models." },
    { icon: Code2, title: "Software Development", description: "Secure banking and insurance platforms." },
    { icon: Headset, title: "Customer Experience", description: "AI chatbots and virtual banking assistants." },
    { icon: Database, title: "Financial Data Services", description: "Collection, validation, and dataset prep." },
    { icon: Languages, title: "Language Services", description: "Multilingual translation and transcription." },
    { icon: ShieldCheck, title: "Security & Governance", description: "Access controls and audit trails built in." },
  ],
};

export const bfsiProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand goals and regulatory requirements." },
  { icon: PenTool, title: "Design", description: "Define architecture and delivery roadmap." },
  { icon: Code2, title: "Develop", description: "Build, integrate, and validate against scope." },
  { icon: CheckCircle2, title: "Test", description: "Comprehensive QA and functional validation." },
  { icon: Rocket, title: "Deploy", description: "Implementation, onboarding, and handoff." },
  { icon: Gauge, title: "Optimize", description: "Monitor and refine for continuous improvement." },
];

export const bfsiFaq = [
  { question: "Can you develop secure financial applications?", answer: "Yes. We build enterprise-grade financial applications with strong security practices and scalable architecture." },
  { question: "Do you support AI projects in banking and insurance?", answer: "Yes — AI data preparation, annotation, model evaluation support, and workflow automation." },
  { question: "Can you work with existing financial systems?", answer: "Yes. We integrate with existing platforms and collaborate with internal technology teams." },
  { question: "Do you comply with financial industry regulations?", answer: "Yes. Our BFSI engagements follow role-based access, confidentiality agreements, and audit trails throughout." },
];

export const bfsiBottomCta = {
  icon: Landmark,
  heading: "Accelerate Financial Innovation with AI",
  description:
    "Whether you're modernizing banking systems or automating insurance workflows, Bigwigs Technologies delivers scalable, secure solutions.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Speak with Our Experts", href: "/contact", showArrow: true },
};
