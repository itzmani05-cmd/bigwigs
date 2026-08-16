import {
  Bot,
  Headset,
  TrendingUp,
  Users2,
  Landmark,
  Layers,
  Search,
  Workflow,
  Database,
  Lock,
  Clock,
  ShieldAlert,
  Compass,
  PenTool,
  FlaskConical,
  Rocket,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export const agentsHero = {
  eyebrow: "AI Agents & Automation",
  heading: (
    <>
      Autonomous AI That Works{" "}
      <span className="text-blue-500">Like Your Best Employee</span>
    </>
  ),
  description:
    "AI agents that understand, reason, retrieve enterprise knowledge, and execute business operations with minimal human intervention.",
  primaryCta: { label: "Schedule a Strategy Session", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const agentsChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Enterprises Are Automating Away",
  items: [
    { icon: Clock, title: "Slow, Manual Request Handling" },
    { icon: Headset, title: "Overloaded Support Teams" },
    { icon: Database, title: "Fragmented Enterprise Knowledge" },
    { icon: Workflow, title: "Disconnected Business Workflows" },
    { icon: ShieldAlert, title: "AI Hallucination Risk" },
    { icon: Lock, title: "Data Privacy & Access Control" },
  ],
};

export const agentsCapabilities = {
  eyebrow: "What's Included",
  heading: "A Digital Workforce, Built Around Your Business",
  items: [
    { icon: Bot, title: "Enterprise AI Assistants", description: "Knowledge assistants across every department." },
    { icon: Headset, title: "Customer Service Agents", description: "24×7 support that resolves and escalates." },
    { icon: TrendingUp, title: "Sales & Marketing Agents", description: "Lead qualification and CRM updates." },
    { icon: Users2, title: "HR & Recruitment Agents", description: "Screening, scheduling, onboarding." },
    { icon: Landmark, title: "Finance & Operations Agents", description: "Invoices and compliance monitored." },
    { icon: Layers, title: "Multi-Agent Systems", description: "Specialized agents, one orchestrator." },
    { icon: Search, title: "Retrieval-Augmented Generation", description: "Agents grounded in your own data." },
    { icon: Workflow, title: "Workflow Automation", description: "Multi-step processes automated end-to-end." },
  ],
};

export const agentsProcessSteps = [
  { icon: Compass, title: "Discover", description: "Goals, workflows, and success metrics defined." },
  { icon: PenTool, title: "Design", description: "Agent architecture scoped to your use case." },
  { icon: FlaskConical, title: "Prototype", description: "A working agent validated against real requests." },
  { icon: Rocket, title: "Build", description: "The full agent workforce built and integrated." },
  { icon: ShieldCheck, title: "Test", description: "Accuracy, safety, and performance verified." },
  { icon: PackageCheck, title: "Deploy", description: "Live in production, monitored and supported." },
];

export const agentsFaq = [
  { question: "Can AI Agents integrate with CRM and ERP?", answer: "Yes. Agents connect to Salesforce, HubSpot, SAP, and similar systems via API, acting on records directly rather than just reading them." },
  { question: "Are AI Agents secure?", answer: "Every agent runs under enterprise access controls, encrypted data handling, and audit logging appropriate to your compliance requirements." },
  { question: "Can AI Agents work alongside employees?", answer: "Yes. Agents hand off to a human at the right moment — for approvals, exceptions, or anything outside their scope." },
  { question: "How do AI Agents use enterprise knowledge?", answer: "Agents retrieve grounded answers from your documents and systems via RAG, so responses reflect your actual policies and data." },
];

export const agentsBottomCta = {
  icon: Bot,
  heading: "Build Your Digital Workforce With Enterprise AI Agents",
  description:
    "Whether you're automating support, operations, HR, or finance, Bigwigs Technologies delivers secure, scalable AI Agent solutions.",
  primaryAction: { label: "Schedule a Strategy Session", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
