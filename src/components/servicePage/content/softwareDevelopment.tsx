import {
  Code2,
  Globe,
  Smartphone,
  Building2,
  Plug,
  Cloud,
  Workflow,
  PenTool,
  ShieldCheck,
  LifeBuoy,
  Gauge,
  Lock,
  Search,
  ClipboardList,
  FlaskConical,
  Rocket,
} from "lucide-react";

export const softwareHero = {
  eyebrow: "Software Development",
  heading: (
    <>
      Digital Products That{" "}
      <span className="text-blue-500">Scale With You</span>
    </>
  ),
  description:
    "Secure, scalable, cloud-native software — from custom enterprise applications to AI-powered platforms, engineered for long-term growth.",
  primaryCta: { label: "Start Your Project", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const softwareChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Engineering Teams Face",
  items: [
    { icon: Gauge, title: "Slow Time-to-Market" },
    { icon: Building2, title: "Legacy System Constraints" },
    { icon: ShieldCheck, title: "Security & Compliance Gaps" },
    { icon: Smartphone, title: "Cross-Platform Fragmentation" },
    { icon: Lock, title: "Vendor Lock-In" },
    { icon: Workflow, title: "Scaling Bottlenecks" },
  ],
};

export const softwareCapabilities = {
  eyebrow: "What's Included",
  heading: "One Engineering Practice, Every Discipline",
  items: [
    { icon: Code2, title: "Custom Software Development", description: "Systems built around your workflows." },
    { icon: Globe, title: "Web Applications", description: "Fast, responsive platforms built to scale." },
    { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform, on every device." },
    { icon: Building2, title: "Enterprise Systems", description: "ERP, CRM, and internal platforms." },
    { icon: Plug, title: "API Integration", description: "Clean, documented connections across your stack." },
    { icon: Cloud, title: "Cloud & DevOps", description: "Cloud-native architecture with CI/CD automation." },
    { icon: PenTool, title: "UI/UX Design", description: "Interfaces designed for clarity first." },
    { icon: ShieldCheck, title: "QA & Support", description: "Testing and support long after launch." },
  ],
};

export const softwareProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand the problem before writing code." },
  { icon: ClipboardList, title: "Plan", description: "Scope, timeline, and architecture locked in." },
  { icon: Code2, title: "Build", description: "Sprints with visible, reviewable progress." },
  { icon: FlaskConical, title: "Test", description: "Automated and manual QA before launch." },
  { icon: Rocket, title: "Ship", description: "Controlled releases with rollback plans." },
  { icon: LifeBuoy, title: "Support", description: "Monitoring and iteration after launch." },
];

export const softwareFaq = [
  { question: "Do you build software from scratch?", answer: "Yes. Most engagements start with a clean architecture designed around your specific workflows, rather than adapting a generic template." },
  { question: "Can you modernize legacy systems?", answer: "We regularly re-platform legacy applications onto modern, cloud-native architecture without disrupting day-to-day operations." },
  { question: "Do you integrate AI?", answer: "Where it adds real value — from AI-assisted workflows to embedded generative AI features, built by teams working from the same roadmap." },
  { question: "How long does development take?", answer: "It depends on scope — a focused module can ship in weeks, a full platform in a few months. You get a concrete timeline after discovery, not a guess." },
];

export const softwareBottomCta = {
  icon: Code2,
  heading: "Let's Build Software That Powers the Future",
  description:
    "Whether you're launching a startup or modernizing enterprise applications, Bigwigs Technologies delivers secure, scalable software.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
