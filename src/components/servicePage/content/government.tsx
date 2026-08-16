import {
  Landmark,
  Building2,
  FileText,
  Database,
  Radar,
  Code2,
  Languages,
  Accessibility,
  ShieldCheck,
  Server,
  FileStack,
  Clock,
  Scale,
  ShieldAlert,
  DollarSign,
  CheckCircle2,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";

export const governmentHero = {
  eyebrow: "Government & Public Sector",
  heading: (
    <>
      Smarter Governance Through{" "}
      <span className="text-blue-500">Secure Digital Transformation</span>
    </>
  ),
  description:
    "Secure, citizen-centric platforms that modernize legacy systems, automate administrative processes, and strengthen public sector cybersecurity.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const governmentChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Public Sector Teams Face",
  items: [
    { icon: Server, title: "Legacy IT Infrastructure" },
    { icon: FileStack, title: "Paper-Based Workflows" },
    { icon: Clock, title: "Citizen Service Delays" },
    { icon: Scale, title: "Regulatory Compliance Requirements" },
    { icon: ShieldAlert, title: "Cybersecurity Concerns" },
    { icon: DollarSign, title: "Budget & Resource Constraints" },
  ],
};

export const governmentCapabilities = {
  eyebrow: "What's Included",
  heading: "One Government AI Practice, Every Discipline",
  items: [
    { icon: Landmark, title: "Digital Government Platforms", description: "Citizen portals and e-governance systems." },
    { icon: FileText, title: "Intelligent Document Processing", description: "Automate document-heavy workflows end-to-end." },
    { icon: Database, title: "AI Data Services", description: "Datasets that power public sector AI." },
    { icon: Radar, title: "Smart City Solutions", description: "Dashboards for transportation, utilities, safety." },
    { icon: Code2, title: "Government Software Development", description: "Secure applications built for compliance." },
    { icon: Languages, title: "Multilingual Communication", description: "Translation for diverse citizen populations." },
    { icon: Accessibility, title: "Accessibility Services", description: "Inclusive access to public information." },
    { icon: ShieldCheck, title: "Security & Compliance", description: "Governance built into every engagement." },
  ],
};

export const governmentProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess goals, regulations, and stakeholder needs." },
  { icon: PenTool, title: "Design", description: "Define secure architecture and implementation plans." },
  { icon: Code2, title: "Develop", description: "Build applications, datasets, and automation." },
  { icon: CheckCircle2, title: "Validate", description: "QA, accessibility, and security testing." },
  { icon: Rocket, title: "Deploy & Support", description: "Deploy, train users, and monitor adoption." },
];

export const governmentFaq = [
  { question: "Can you modernize legacy government applications?", answer: "Yes — through application redevelopment, cloud migration support, workflow automation, and system integration." },
  { question: "Do you support accessibility compliance?", answer: "Yes. We provide accessibility remediation, WCAG compliance support, and inclusive digital experience design." },
  { question: "Can you process large volumes of government records?", answer: "Yes. Our intelligent document processing and AI data services digitize, classify, and validate records at scale." },
  { question: "How do you protect citizen data?", answer: "Encryption at rest and in transit, role-based access controls, audit trails, and government-grade security governance." },
];

export const governmentBottomCta = {
  icon: Landmark,
  heading: "Build Smarter Public Services with AI",
  description:
    "Whether you're modernizing citizen services, digitizing records, or improving accessibility, Bigwigs Technologies delivers secure, scalable solutions.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
