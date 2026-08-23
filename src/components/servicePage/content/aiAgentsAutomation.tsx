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
  Puzzle,
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
    { icon: Clock, title: "Slow, Manual Request Handling", description: "Every request stuck in a queue is time a process could have handled instantly." },
    { icon: Headset, title: "Overloaded Support Teams", description: "Repetitive tier-one requests crowd out the complex issues that actually need a human." },
    { icon: Database, title: "Fragmented Enterprise Knowledge", description: "Agents are only as good as the knowledge they can retrieve — scattered systems slow them down." },
    { icon: Workflow, title: "Disconnected Business Workflows", description: "Manual handoffs between tools and teams introduce delay and error at every step." },
    { icon: ShieldAlert, title: "AI Hallucination Risk", description: "An agent that acts on wrong information can cause real business damage, not just a bad reply." },
    { icon: Lock, title: "Data Privacy & Access Control", description: "Agents that touch business systems need the same access discipline as any employee." },
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
  { question: "Can agents take real actions, not just answer questions?", answer: "Yes. Agents can create tickets, update records, and trigger workflows directly in your systems, not just respond conversationally." },
  { question: "How do you prevent agents from making costly mistakes?", answer: "Every agent is scoped with guardrails and human-in-the-loop checkpoints for high-stakes actions before it goes live." },
];

export const agentsDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Enterprises Choose Us for AI Agents",
  items: [
    { icon: Bot, title: "Agents That Take Real Action", description: "Agents update records and trigger workflows directly, not just answer questions." },
    { icon: ShieldAlert, title: "Guardrails on High-Stakes Actions", description: "Human-in-the-loop checkpoints built in before an agent acts on anything critical." },
    { icon: Database, title: "Grounded in Your Knowledge", description: "Agents retrieve answers from your actual documents and systems via RAG." },
    { icon: Puzzle, title: "Connected to Systems You Run", description: "Integrates with Salesforce, HubSpot, SAP, and similar platforms via API." },
    { icon: Users2, title: "Built to Work Alongside People", description: "Agents hand off to a human at the right moment, not just when they fail." },
    { icon: Lock, title: "Enterprise Access Controls", description: "Every agent operates under the same access discipline as your employees." },
  ],
};

export const agentsBottomCta = {
  icon: Bot,
  heading: "Build Your Digital Workforce With Enterprise AI Agents",
  description:
    "Whether you're automating support, operations, HR, or finance, Bigwigs Technologies delivers secure, scalable AI Agent solutions.",
  primaryAction: { label: "Schedule a Strategy Session", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
