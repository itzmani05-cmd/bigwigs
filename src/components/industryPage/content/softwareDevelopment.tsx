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
  Zap,
  TrendingDown,
  Gauge,
  Layers,
  Boxes,
  Users2,
  Truck,
  Wallet,
  UserCog,
  FileText,
  Bot,
  RotateCcw,
  Webhook,
  ClipboardCheck,
  Search,
  ClipboardList,
  FlaskConical,
  Rocket,
  Stethoscope,
  ShoppingCart,
  Factory,
  GraduationCap,
  Landmark,
  Radio,
  Award,
  Brain,
  RefreshCw,
  Lock,
  HeartHandshake,
  Clock,
  DollarSign,
  ShieldAlert,
  AlertTriangle,
  Database,
  CloudCog,
} from "lucide-react";

export const softwareHero = {
  eyebrow: "Software Development",
  heading: (
    <>
      Engineering Digital Products
      <br />
      That{" "}
      <span className="text-blue-500">
        Scale With
        <br />
        Your Business
      </span>
    </>
  ),
  description:
    "Transform ideas into secure, scalable, cloud-native software with Bigwigs Technologies. From custom enterprise applications to AI-powered platforms, we build digital products engineered for long-term growth.",
  primaryCta: { label: "Start Your Software Project", href: "/demo" },
  secondaryCta: { label: "Speak With Our Engineering Team", href: "/contact" },
  trustedBy: ["Startups", "Enterprises", "SaaS Platforms", "Healthcare Organizations", "Retail Brands", "Government Agencies"],
  visualIcon: Code2,
  badges: [
    { icon: Cloud, label: "Cloud-Native Architecture", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: ShieldCheck, label: "Enterprise Security", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Workflow, label: "CI/CD Automation", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const softwareChallenges = {
  heading: (
    <>
      The Realities Engineering
      <br />
      Teams Are Solving For
    </>
  ),
  description:
    "Every engineering decision is measured against one standard: does it make the business faster, safer, or more scalable.",
  items: [
    {
      icon: Clock,
      title: "Slow Time-to-Market",
      description: "Competitors ship faster when engineering decisions get stuck in handoffs and approvals.",
    },
    { icon: Building2, title: "Legacy System Constraints" },
    { icon: Boxes, title: "Disconnected Tools & Data Silos" },
    { icon: Gauge, title: "Scaling Bottlenecks" },
    { icon: ShieldAlert, title: "Security & Compliance Gaps" },
    { icon: AlertTriangle, title: "Technical Debt" },
    { icon: Smartphone, title: "Cross-Platform Fragmentation" },
    { icon: ClipboardCheck, title: "Manual QA Overhead" },
    { icon: Lock, title: "Vendor Lock-In" },
    { icon: DollarSign, title: "Rising Development Costs" },
  ],
};

export const softwareSolutions = {
  heading: "Ten Disciplines. One Engineering Practice.",
  items: [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Purpose-built systems designed around your workflows, not the other way around.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Fast, responsive web platforms engineered for scale from the first release.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform apps that feel instant on every device.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Building2,
      title: "Enterprise Systems",
      description: "ERP, CRM, and internal platforms built for complex organizations.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Plug,
      title: "API Integration",
      description: "Clean, documented connections between every tool in your stack.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud-native architecture across AWS, Azure, and Google Cloud.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Workflow,
      title: "DevOps",
      description: "CI/CD pipelines and infrastructure automation that ship without drama.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Interfaces designed for clarity first, decoration second.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      description: "Automated and manual testing that catches issues before your users do.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: LifeBuoy,
      title: "Maintenance & Support",
      description: "Ongoing monitoring, patching, and support long after launch day.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ],
};

export const enterpriseSteps = [
  { icon: Search, label: "Discover" },
  { icon: PenTool, label: "Architect" },
  { icon: Code2, label: "Build" },
  { icon: Rocket, label: "Launch" },
];

export const enterpriseSystems = {
  heading: "Enterprise Systems, Built Around Your Workflows",
  description: "Purpose-built systems designed around your workflows, not the other way around.",
  steps: enterpriseSteps,
  items: [
    { icon: Code2, title: "Custom Enterprise Applications" },
    { icon: Boxes, title: "ERP Systems" },
    { icon: Users2, title: "CRM Platforms" },
    { icon: Truck, title: "Supply Chain Management" },
    { icon: Wallet, title: "Finance & Accounting Platforms" },
    { icon: UserCog, title: "HRMS Systems" },
    { icon: FileText, title: "Document Management Systems" },
    { icon: Workflow, title: "Workflow Automation" },
    { icon: Brain, title: "AI-Powered Business Applications" },
  ],
};

export const webAndDesign = {
  heading: "Applications Built for Every Screen, Every Load",
  description: "Responsive by default, secure by design, and architected as microservices so no single failure takes the whole platform down.",
  centerIcon: Globe,
  badges: [
    { icon: Layers, label: "Microservices", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ShieldCheck, label: "Security", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Gauge, label: "Performance", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Code2, title: "Frontend Engineering", description: "Responsive interfaces that render fast and hold up under real traffic." },
    { icon: Database, title: "Backend Engineering", description: "Resilient services built for high concurrency and clean failure handling." },
    { icon: CloudCog, title: "Database Architecture", description: "Schemas and indexing strategies designed for scale from day one." },
    { icon: PenTool, title: "Wireframing & Prototyping", description: "Interfaces shaped around real users before a line of code is written." },
    { icon: Layers, title: "Design Systems", description: "Reusable components that keep every product consistent as it grows." },
    { icon: Gauge, title: "Interactive Dashboards", description: "Data-dense interfaces designed for clarity first, decoration second." },
    { icon: ShieldCheck, title: "Accessibility-First Design", description: "Interfaces built to work for every user, on every assistive technology." },
  ],
};

export const mobileSteps = [
  { icon: PenTool, label: "Design" },
  { icon: Code2, label: "Build" },
  { icon: FlaskConical, label: "Test" },
  { icon: Rocket, label: "Ship" },
];

export const mobileDevelopment = {
  heading: "One Codebase. Every Device That Matters.",
  description: "Native performance where it counts, shared logic where it saves time — apps that feel built for iOS and Android, not ported to them.",
  steps: mobileSteps,
  checklist: [
    { icon: Smartphone, label: "Android Development", description: "Native Android apps built for performance across every device tier." },
    { icon: Smartphone, label: "iOS Development", description: "Native iOS apps that follow Apple's platform conventions closely." },
    { icon: Layers, label: "Flutter Cross-Platform", description: "Single-codebase apps that still feel native on both major platforms." },
    { icon: Code2, label: "React Native Cross-Platform", description: "Shared logic across iOS and Android without sacrificing native feel." },
    { icon: Globe, label: "Progressive Web Apps (PWA)", description: "Installable, offline-capable web apps that reach users without a store." },
  ],
};

export const integrationAndCloud = {
  heading: "Every System You Run, Wired Together",
  description: "Clean, documented integrations connecting your platform to the tools it already depends on — deployed on infrastructure that scales with you.",
  cards: [
    {
      icon: Plug,
      title: "API & System Integration",
      description: "Clean, documented connections between every tool in your stack.",
      items: ["REST APIs", "GraphQL APIs", "Payment Gateway Integration", "CRM Integration", "ERP Integration", "Identity & Access Management", "Microservices Architecture"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud-native architecture and CI/CD pipelines that ship without drama.",
      items: ["Cloud Migration", "Containers", "Docker", "Kubernetes", "CI/CD with GitHub Actions", "Infrastructure as Code (Terraform)", "Jenkins Automation"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const qaSteps = [
  { icon: ClipboardList, label: "Plan" },
  { icon: FlaskConical, label: "Test" },
  { icon: ShieldCheck, label: "Validate" },
  { icon: ClipboardCheck, label: "Sign Off" },
];

export const qualityAssurance = {
  heading: "Testing That Catches Issues Before Your Users Do",
  description: "Automated and manual quality assurance built into every stage of delivery, not bolted on at the end.",
  steps: qaSteps,
  marqueeItems: [
    { icon: Bot, title: "Test Automation" },
    { icon: ShieldCheck, title: "Security Audits" },
    { icon: Gauge, title: "Performance Benchmarking" },
    { icon: RotateCcw, title: "Regression Testing" },
    { icon: Webhook, title: "API Testing" },
    { icon: ClipboardCheck, title: "User Acceptance Testing" },
  ],
};

export const softwareWhoWeServe = {
  heading: "Software That Speaks Your Industry's Language",
  description: "From healthcare to government, we build software tuned to the workflows and compliance needs of every sector we serve.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Software
    </>
  ),
  items: [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Factory, label: "Manufacturing" },
    { icon: GraduationCap, label: "Education" },
    { icon: Landmark, label: "Finance" },
    { icon: Truck, label: "Logistics" },
    { icon: Building2, label: "Government" },
    { icon: Zap, label: "Energy" },
    { icon: Radio, label: "Telecom" },
  ],
};

export const softwareBusinessBenefits = {
  heading: "Measurable Impact Across Every Engagement",
  kpis: [
    { value: 40, suffix: "%", label: "Faster Development" },
    { value: 99.5, suffix: "%", label: "Quality" },
    { value: 10, suffix: "+", label: "Industries" },
    { value: 100, suffix: "+", label: "Projects" },
  ],
  benefits: [
    { icon: Zap, title: "Faster Operations", description: "Automated workflows remove the manual steps slowing teams down." },
    { icon: TrendingDown, title: "Lower Costs", description: "Consolidated systems replace expensive, overlapping tools." },
    { icon: Gauge, title: "Higher Productivity", description: "Teams spend more time deciding, less time on data entry." },
    { icon: Layers, title: "Scalable Architecture", description: "Built to handle tomorrow's load, not just today's." },
    { icon: Rocket, title: "Reduced Time-to-Market", description: "Sprint-based delivery that ships working software early and often." },
    { icon: ShieldCheck, title: "Stronger Security Posture", description: "Security reviewed at every stage, not bolted on before launch." },
  ],
};

export const softwareWhyUs = {
  heading: "Six Reasons Enterprises Keep Coming Back",
  items: [
    { icon: Award, title: "Experienced Engineers", description: "Senior engineers on every project, not junior teams learning on your budget.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Brain, title: "AI Expertise", description: "Generative AI and intelligent automation built in where it earns its place.", gradient: "from-violet-500 to-purple-400" },
    { icon: Cloud, title: "Cloud Native", description: "Architected for AWS, Azure, or GCP from the first line of infrastructure code.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: RefreshCw, title: "Agile Development", description: "Short sprints, visible progress, and room to change direction early.", gradient: "from-orange-500 to-amber-400" },
    { icon: Lock, title: "Secure Coding", description: "Security reviewed at every stage, not bolted on before launch.", gradient: "from-rose-500 to-pink-400" },
    { icon: HeartHandshake, title: "Long Term Support", description: "We stay on after launch — monitoring, patching, and iterating with you.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const softwareUseCases = {
  heading: "Software Built for Real Business Outcomes",
  description: "From modernizing legacy platforms to shipping new products, our engineering teams help businesses move faster without breaking what already works.",
  items: [
    { id: "enterprise-modernization", icon: RefreshCw, title: "Enterprise Platform Modernization", description: "Re-platform legacy applications onto modern, cloud-native architecture without disrupting day-to-day operations.", outcome: "Faster releases on modernized infrastructure", href: "#contact" },
    { id: "customer-web-app", icon: Globe, title: "Customer-Facing Web Application", description: "Design and build responsive, secure web platforms engineered to handle real production traffic from day one.", outcome: "Built to scale from the first release", href: "#contact" },
    { id: "cross-platform-mobile", icon: Smartphone, title: "Cross-Platform Mobile App", description: "Ship native-feeling iOS and Android apps from a single, well-architected codebase.", outcome: "One codebase, every device that matters", href: "#contact" },
    { id: "api-systems-integration", icon: Plug, title: "API & Systems Integration", description: "Connect ERP, CRM, payment, and identity systems through clean, documented APIs.", outcome: "Every system in the stack wired together", href: "#contact" },
    { id: "cloud-devops-automation", icon: Cloud, title: "Cloud Migration & DevOps Automation", description: "Move workloads to the cloud and automate delivery with CI/CD pipelines built for zero-drama releases.", outcome: "Automated pipelines from commit to production", href: "#contact" },
  ],
};

export const softwareCaseStudy = {
  heading: "Helping Businesses Ship Software Faster",
  description: "We partner with startups and enterprises to turn ambitious product ideas into secure, scalable, production-grade software.",
  stats: [
    { value: "100+", label: "Software Projects Delivered" },
    { value: "40%", label: "Faster Development Cycles" },
    { value: "99.5%", label: "Quality Benchmark" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Engineering KPIs", secondary: "Delivery Analytics", trend: "Release Velocity" },
};

export const softwareProcessSteps = [
  { icon: Search, title: "Discovery", description: "Understand the problem before writing a line of code." },
  { icon: ClipboardList, title: "Planning", description: "Scope, timeline, and architecture decisions locked in." },
  { icon: PenTool, title: "Design", description: "Wireframes and interfaces shaped around real users." },
  { icon: Code2, title: "Development", description: "Sprints with visible progress, not black-box builds." },
  { icon: FlaskConical, title: "Testing", description: "Automated and manual QA before anything ships." },
  { icon: Rocket, title: "Deployment", description: "Controlled releases with rollback plans in place." },
  { icon: LifeBuoy, title: "Support", description: "Monitoring and iteration long after launch day." },
];

export const softwareProcess = {
  heading: "Seven Stages. No Guesswork.",
  steps: softwareProcessSteps,
  desktopColumnsClassName: "grid-cols-7",
};

export const softwareFaq = {
  items: [
    { question: "Do you build software from scratch?", answer: "Yes. Most engagements start with a clean architecture designed around your specific workflows, rather than adapting a generic template." },
    { question: "Can you modernize legacy systems?", answer: "We regularly re-platform legacy applications — migrating outdated stacks to modern, cloud-native architecture without disrupting day-to-day operations." },
    { question: "Do you integrate AI?", answer: "Where it adds real value. From AI-assisted workflows to embedded generative AI features, our engineering and AI teams work from the same roadmap." },
    { question: "How long does development take?", answer: "It depends on scope — a focused module can ship in weeks, while a full enterprise platform typically runs a few months. We give you a concrete timeline after discovery, not a guess." },
  ],
};

export const softwareBottomCta = {
  icon: Code2,
  heading: <>Let&apos;s Build Software That Powers the Future</>,
  description:
    "Whether you're launching a startup, modernizing enterprise applications, or integrating AI into your business, Bigwigs Technologies delivers secure, scalable, and intelligent software solutions.",
  primaryAction: { label: "Start Your Software Project", href: "#contact" },
  secondaryAction: { label: "Speak With Our Engineering Team", href: "#contact", showArrow: true },
};
