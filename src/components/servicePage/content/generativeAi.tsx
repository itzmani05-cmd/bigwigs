import {
  Brain,
  Sparkles,
  MessagesSquare,
  Bot,
  Search,
  FileSearch,
  Workflow,
  Puzzle,
  Database,
  ShieldAlert,
  Lock,
  Clock,
  Compass,
  ClipboardList,
  FlaskConical,
  Rocket,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export const genAiHero = {
  eyebrow: "Generative AI Services",
  heading: (
    <>
      Build Smarter Businesses With{" "}
      <span className="text-blue-500">Generative AI</span>
    </>
  ),
  description:
    "LLMs, AI agents, RAG, and intelligent automation — deployed to accelerate operations and deliver better customer experiences.",
  primaryCta: { label: "Request a Consultation", href: "/demo" },
  secondaryCta: { label: "Talk to Our AI Experts", href: "/contact" },
};

export const genAiChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Enterprises Face",
  items: [
    { icon: Database, title: "Fragmented Enterprise Knowledge" },
    { icon: Workflow, title: "Manual, Repetitive Workflows" },
    { icon: ShieldAlert, title: "AI Hallucination Risk" },
    { icon: FileSearch, title: "Slow Document Processing" },
    { icon: Lock, title: "Data Privacy & Model Security" },
    { icon: Clock, title: "Slow AI Adoption Timelines" },
  ],
};

export const genAiCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Ways We Put Generative AI to Work",
  items: [
    { icon: Brain, title: "Large Language Models", description: "Enterprise LLMs fine-tuned on your own data." },
    { icon: Sparkles, title: "Prompt Engineering", description: "Prompts designed and tested for reliable output." },
    { icon: MessagesSquare, title: "AI Chatbots", description: "Conversational assistants across every channel." },
    { icon: Bot, title: "AI Agents", description: "Autonomous agents that execute tasks end-to-end." },
    { icon: Search, title: "Retrieval-Augmented Generation", description: "Grounded answers from your own knowledge." },
    { icon: FileSearch, title: "Document Intelligence", description: "Contracts and forms understood, not just scanned." },
    { icon: Workflow, title: "Workflow Automation", description: "Repetitive processes automated with AI." },
    { icon: Puzzle, title: "Enterprise Integrations", description: "AI connected to the tools you run on." },
  ],
};

export const genAiProcessSteps = [
  { icon: Compass, title: "Discover", description: "Goals, workflows, and success metrics defined." },
  { icon: ClipboardList, title: "Design", description: "Architecture scoped to your use case." },
  { icon: FlaskConical, title: "Prototype", description: "A working proof of concept, validated early." },
  { icon: Rocket, title: "Build", description: "The full solution built and integrated." },
  { icon: ShieldCheck, title: "Test", description: "Accuracy and safety verified before launch." },
  { icon: PackageCheck, title: "Deploy", description: "Live in production, monitored at scale." },
];

export const genAiFaq = [
  { question: "Can you build custom AI chatbots?", answer: "Yes. Chatbots are built on your knowledge base and deployed across web, mobile, Slack, Teams, WhatsApp, and Messenger." },
  { question: "Do you support private enterprise data?", answer: "Yes. RAG pipelines and fine-tuning run against your own documents — nothing trains public models." },
  { question: "Can you integrate AI with existing applications?", answer: "Yes. We integrate with CRMs, ticketing systems, and ERPs via API, so AI fits into workflows you already run." },
  { question: "How secure are enterprise AI solutions?", answer: "Every deployment includes encrypted data handling, access controls, and audit logging for enterprise compliance." },
];

export const genAiBottomCta = {
  icon: Brain,
  heading: "Transform Every Workflow With Enterprise AI",
  description:
    "Whether you're building intelligent assistants or automating operations, Bigwigs Technologies delivers secure, production-ready Generative AI.",
  primaryAction: { label: "Request a Consultation", href: "/demo" },
  secondaryAction: { label: "Talk to Our AI Experts", href: "/contact", showArrow: true },
};
