import {
  Factory,
  ScanEye,
  Wrench,
  Code2,
  FileText,
  Database,
  BarChart3,
  HardHat,
  Accessibility,
  Clock,
  ShieldAlert,
  Eye,
  Truck,
  Server,
  Search,
  PenTool,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export const manufacturingHero = {
  eyebrow: "Manufacturing & Industrial",
  heading: (
    <>
      Smart Manufacturing, Powered by{" "}
      <span className="text-blue-500">AI & Automation</span>
    </>
  ),
  description:
    "AI-driven quality inspection, predictive maintenance, and factory software that keep production running smarter and safer.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our Experts", href: "/contact" },
};

export const manufacturingChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Manufacturers Face",
  items: [
    { icon: Clock, title: "Unplanned Equipment Downtime" },
    { icon: ShieldAlert, title: "Quality Control Inconsistencies" },
    { icon: Eye, title: "Manual Inspection Processes" },
    { icon: Truck, title: "Supply Chain Disruptions" },
    { icon: HardHat, title: "Worker Safety Concerns" },
    { icon: Server, title: "Legacy Manufacturing Systems" },
  ],
};

export const manufacturingCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Disciplines, One Manufacturing AI Practice",
  items: [
    { icon: ScanEye, title: "Computer Vision Inspection", description: "Catches defects across every production stage." },
    { icon: Wrench, title: "Predictive Maintenance", description: "Flags failures before they halt production." },
    { icon: Code2, title: "Industrial Software", description: "Custom MES, inventory, and analytics apps." },
    { icon: FileText, title: "Document Processing", description: "Automates manufacturing documentation end-to-end." },
    { icon: Database, title: "AI Data Collection", description: "Labeled datasets for industrial AI models." },
    { icon: BarChart3, title: "Industrial Analytics", description: "AI-driven insight into yield and performance." },
    { icon: HardHat, title: "Worker Safety Solutions", description: "AI monitoring that improves floor safety." },
    { icon: Accessibility, title: "Accessibility & Docs", description: "Accessible manuals for every team member." },
  ],
};

export const manufacturingProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess operations, goals, and requirements." },
  { icon: PenTool, title: "Design", description: "Architecture, AI workflows, and roadmap." },
  { icon: Code2, title: "Build", description: "Develop software and prepare AI datasets." },
  { icon: CheckCircle2, title: "Validate", description: "QA, UAT, and performance testing." },
  { icon: Rocket, title: "Deploy & Optimize", description: "Launch, train users, monitor KPIs." },
];

export const manufacturingFaq = [
  { question: "Can you integrate with our existing ERP or MES systems?", answer: "Yes — we build integrations that work with your existing ERP, MES, and inventory systems with minimal disruption." },
  { question: "Do you support AI-powered quality inspection?", answer: "Yes. We provide annotation, computer vision datasets, and software for automated visual inspection." },
  { question: "Can you build custom manufacturing dashboards?", answer: "Yes — real-time dashboards covering production, quality, maintenance, and inventory KPIs." },
  { question: "How long does a typical deployment take?", answer: "It depends on scope — a focused pilot can launch in weeks, a full factory rollout in a few months." },
];

export const manufacturingBottomCta = {
  icon: Factory,
  heading: "Build the Factory of the Future",
  description:
    "Whether you're deploying Industry 4.0 initiatives or AI-powered quality inspection, Bigwigs Technologies delivers scalable manufacturing solutions.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Speak with Our Experts", href: "/contact", showArrow: true },
};
