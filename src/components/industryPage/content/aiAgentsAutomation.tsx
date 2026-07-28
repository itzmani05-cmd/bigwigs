import {
  Bot,
  Headset,
  TrendingUp,
  Users2,
  Landmark,
  Layers,
  Search,
  Workflow,
  MessagesSquare,
  Brain,
  ClipboardList,
  Target,
  Repeat,
  Puzzle,
  Clock,
  MessageCircleQuestion,
  Database,
  BarChart3,
  ShieldCheck,
  FileText,
  FlaskConical,
  Compass,
  ClipboardCheck,
  Mail,
  Ticket,
  UserPlus,
  MonitorSmartphone,
  Lock,
  Zap,
  Stethoscope,
  Umbrella,
  ShoppingCart,
  Factory,
  Truck,
  Radio,
  Building2,
  GraduationCap,
  Scale,
  Cpu,
  PenTool,
  Rocket,
  PackageCheck,
  ShieldAlert,
} from "lucide-react";

export const aiAgentsHero = {
  eyebrow: "AI Agents & Intelligent Automation",
  heading: (
    <>
      Autonomous AI That Works
      <br />
      Like{" "}
      <span className="text-blue-500">
        Your Best
        <br />
        Employee
      </span>
    </>
  ),
  description:
    "Design intelligent AI Agents that understand, reason, retrieve enterprise knowledge, automate workflows, and execute business operations with minimal human intervention.",
  primaryCta: { label: "Schedule an AI Strategy Session", href: "/demo" },
  secondaryCta: { label: "Speak With AI Automation Experts", href: "/contact" },
  trustedBy: ["Healthcare", "Finance", "Retail", "Government", "Technology", "Manufacturing"],
  visualIcon: Bot,
  badges: [
    { icon: Bot, label: "Agent Console", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Workflow, label: "Task Queue", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Search, label: "Knowledge Retrieval", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const aiAgentsChallenges = {
  heading: (
    <>
      The Realities Enterprises
      <br />
      Are Automating Away
    </>
  ),
  description: "Assistants, agents, and orchestration — one team across the full automation stack.",
  items: [
    {
      icon: Clock,
      title: "Slow, Manual Request Handling",
      description: "Every request that waits on a human is a request that could have been resolved instantly.",
    },
    { icon: Headset, title: "Overloaded Support Teams" },
    { icon: Database, title: "Fragmented Enterprise Knowledge" },
    { icon: Workflow, title: "Disconnected Business Workflows" },
    { icon: Users2, title: "Repetitive HR & Finance Tasks" },
    { icon: ShieldAlert, title: "AI Hallucination Risk" },
    { icon: Lock, title: "Data Privacy & Access Control" },
    { icon: Puzzle, title: "Siloed CRM, ERP & HRMS Systems" },
    { icon: Repeat, title: "Agents That Don't Improve Over Time" },
    { icon: TrendingUp, title: "Rising Operational Costs" },
  ],
};

export const aiAgentsSolutions = {
  heading: "Eight Ways We Help You Build a Digital Workforce",
  items: [
    {
      icon: Bot,
      title: "Enterprise AI Assistants",
      description: "Knowledge assistants deployed across every department.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Headset,
      title: "Customer Service Agents",
      description: "24×7 support agents that resolve, escalate, and learn.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: TrendingUp,
      title: "Sales & Marketing Agents",
      description: "Lead qualification, outreach, and CRM updates on autopilot.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Users2,
      title: "HR & Recruitment Agents",
      description: "Screening, scheduling, and onboarding handled end-to-end.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Landmark,
      title: "Finance & Operations Agents",
      description: "Invoices, expenses, and compliance monitored continuously.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Layers,
      title: "Multi-Agent Systems",
      description: "Specialized agents coordinated by a shared orchestrator.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Search,
      title: "Retrieval-Augmented Generation",
      description: "Agents grounded in your enterprise knowledge, not guesses.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Multi-step business processes automated across systems.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const whatAreAiAgents = {
  heading: "Beyond a Chatbot — a System That Acts",
  description: "A chatbot answers questions with limited context. An AI agent reasons, plans, executes tasks, learns, and automates entire workflows.",
  centerIcon: Brain,
  badges: [
    { icon: Brain, label: "Reasoning", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ClipboardList, label: "Planning", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Target, label: "Decision Making", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: MessagesSquare, title: "Natural Language", description: "Understands requests the way a colleague would, not just keywords." },
    { icon: Brain, title: "Reasoning", description: "Works through multi-step problems instead of pattern-matching a reply." },
    { icon: ClipboardList, title: "Planning", description: "Breaks a goal into an ordered sequence of concrete steps." },
    { icon: Search, title: "Knowledge Retrieval", description: "Pulls grounded answers from enterprise systems, not a guess." },
    { icon: Target, title: "Decision Making", description: "Chooses the right action based on policy and context, not a script." },
    { icon: Workflow, title: "Workflow Execution", description: "Carries a task through to completion across connected systems." },
    { icon: Repeat, title: "Learning", description: "Improves over time as it handles more real requests." },
    { icon: Puzzle, title: "Enterprise Integration", description: "Acts directly inside the CRM, ERP, and HRMS you already run." },
  ],
};

export const assistantsAndCustomerService = {
  heading: "Assistants for Every Department, Agents for Every Ticket",
  description: "One assistant grounded in every department's knowledge, and support agents that resolve requests around the clock.",
  cards: [
    {
      icon: Bot,
      title: "Enterprise AI Assistants",
      description: "One assistant, grounded in every department's knowledge — so employees get the same answer whether they ask HR, IT, or finance.",
      items: ["Employee Helpdesk", "HR Assistant", "IT Support", "Procurement", "Finance", "Legal Research", "Knowledge Assistant", "Executive Assistant"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Headset,
      title: "Customer Service Agents",
      description: "Connected to your CRM and knowledge base, agents resolve routine requests instantly and escalate the rest to a human.",
      items: ["24×7 Support", "Order Tracking", "FAQ Resolution", "Appointment Scheduling", "Multi-Language", "Human Escalation"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const departmentAgents = {
  heading: "Department Agents That Do the Work, Not Just Track It",
  description: "Specialized agents for sales, HR, and finance — each grounded in the workflow of the team it supports.",
  cards: [
    {
      icon: TrendingUp,
      title: "Sales Agent",
      description: "Lead qualification, outreach, and CRM updates on autopilot.",
      items: ["Lead Qualification", "CRM Updates", "Email Generation", "Proposal Drafting", "Meeting Scheduling"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Users2,
      title: "HR Agent",
      description: "Screening, scheduling, and onboarding handled end-to-end.",
      items: ["Resume Screening", "Candidate Matching", "Interview Scheduling", "Employee Onboarding", "Leave Management"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Landmark,
      title: "Finance Agent",
      description: "Invoices, expenses, and compliance monitored continuously.",
      items: ["Invoice Processing", "Expense Validation", "Vendor Management", "Compliance Monitoring", "Financial Reports"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const multiAgentEcosystem = {
  heading: "Specialized Agents, Coordinated by One Orchestrator",
  centerIcon: Workflow,
  badges: [
    { icon: Headset, label: "Customer Agent", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Database, label: "Knowledge Agent", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: BarChart3, label: "Analytics Agent", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Headset, title: "Customer Agent", description: "Handles inbound requests and routes exceptions to the right team." },
    { icon: Database, title: "Knowledge Agent", description: "Maintains and serves the shared knowledge base every agent relies on." },
    { icon: BarChart3, title: "Analytics Agent", description: "Surfaces usage, performance, and quality signals across the system." },
    { icon: ShieldCheck, title: "Compliance Agent", description: "Checks actions against policy before they're executed." },
    { icon: FileText, title: "Reporting Agent", description: "Turns raw activity into structured reports for stakeholders." },
    { icon: FlaskConical, title: "Research Agent", description: "Runs deeper, multi-step lookups the other agents hand off to it." },
  ],
};

export const agentRag = {
  heading: "Agents Grounded in Every System You Already Run",
  description: "SharePoint, Drive, Confluence, CRM, and ERP indexed into one vector database — so every agent answer traces back to a real source.",
  panelLabel: "Enterprise Knowledge Graph",
  tiles: [
    { icon: Database, label: "SharePoint" },
    { icon: Database, label: "Google Drive" },
    { icon: Database, label: "Microsoft 365" },
    { icon: Database, label: "Confluence", hasSparkline: true },
    { icon: Database, label: "Notion" },
    { icon: Database, label: "Internal Database" },
    { icon: Landmark, label: "CRM", hasLiveDot: true },
    { icon: Building2, label: "ERP" },
  ],
  pills: [
    { icon: Search, label: "Document Search" },
    { icon: Search, label: "Enterprise Search" },
    { icon: Database, label: "Knowledge Management" },
    { icon: ClipboardList, label: "Policy Intelligence" },
    { icon: FileText, label: "Contract Intelligence" },
    { icon: Compass, label: "Research Portal" },
  ],
};

export const workflowAutomation = {
  heading: "One Request, an Entire Process Automated",
  description: "AI agents that carry a request from intake through to completion — across the systems it actually touches.",
  steps: [
    { icon: MessageCircleQuestion, label: "Customer Request" },
    { icon: Bot, label: "AI Agent" },
    { icon: Search, label: "Knowledge Search" },
    { icon: Target, label: "Decision" },
    { icon: ClipboardCheck, label: "Approval" },
    { icon: Building2, label: "ERP" },
    { icon: Database, label: "CRM" },
    { icon: Mail, label: "Notification" },
  ],
  marqueeItems: [
    { icon: UserPlus, title: "Customer Onboarding" },
    { icon: FileText, title: "Invoice Approval" },
    { icon: FileText, title: "Contract Review" },
    { icon: ClipboardList, title: "Claims Processing" },
    { icon: Mail, title: "Email Triage" },
    { icon: Ticket, title: "Ticket Routing" },
    { icon: ShoppingCart, title: "Purchase Requests" },
    { icon: ShieldCheck, title: "Compliance Checks" },
  ],
};

export const agentArchitecture = {
  heading: "Four Layers, One Connected System",
  steps: [
    { icon: MonitorSmartphone, label: "Interface" },
    { icon: Brain, label: "AI" },
    { icon: Database, label: "Knowledge" },
    { icon: Puzzle, label: "Integration" },
  ],
  checklist: [
    { icon: MonitorSmartphone, label: "User Interface", description: "Web, Mobile, Teams, Slack, WhatsApp, Voice." },
    { icon: Brain, label: "AI Layer", description: "LLMs, Prompt Engineering, Reasoning Engine, Memory, Tool Orchestration." },
    { icon: Database, label: "Knowledge Layer", description: "Documents, Databases, Vector Database, Enterprise Search." },
    { icon: Puzzle, label: "Integration Layer", description: "CRM, ERP, HRMS, Ticketing, Cloud Services." },
  ],
};

export const aiAgentsWhoWeServe = {
  heading: "AI Agents Deployed Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      AI Agents
    </>
  ),
  items: [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Landmark, label: "Banking" },
    { icon: Umbrella, label: "Insurance" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Truck, label: "Logistics" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Building2, label: "Government" },
    { icon: GraduationCap, label: "Education" },
    { icon: Scale, label: "Legal" },
    { icon: Users2, label: "Human Resources" },
    { icon: Cpu, label: "Information Technology" },
  ],
};

export const aiAgentsBusinessBenefits = {
  heading: "Measurable Impact Across Every Workflow",
  kpis: [
    { value: 70, suffix: "%", label: "Task Automation" },
    { value: 60, suffix: "%", label: "Higher Productivity" },
    { value: 50, suffix: "%", label: "Lower Operational Costs" },
    { value: 99, suffix: "%", label: "AI Availability" },
  ],
  benefits: [
    { icon: ShieldCheck, title: "Reduced Hallucinations", description: "Grounded, retrieval-backed answers instead of confident guesses." },
    { icon: Database, title: "Real-Time Answers", description: "Agents that reflect current systems, not stale training data." },
    { icon: Lock, title: "Enterprise Security", description: "Every agent runs under enterprise access controls and audit logging." },
    { icon: Zap, title: "Faster Knowledge Access", description: "Answers retrieved from enterprise sources in real time." },
    { icon: Workflow, title: "Faster Task Execution", description: "Requests carried through to completion, not just acknowledged." },
    { icon: Puzzle, title: "Seamless System Integration", description: "Agents that act directly inside the CRM, ERP, and HRMS you run." },
  ],
};

export const aiAgentsWhyUs = {
  heading: "Six Reasons Enterprises Trust Our Automation Teams",
  items: [
    { icon: Brain, title: "Enterprise AI Expertise", description: "Teams who design agent behavior, not just wire up an API.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Lock, title: "Secure Integrations", description: "CRM, ERP, and HRMS connected under enterprise access control.", gradient: "from-violet-500 to-purple-400" },
    { icon: Workflow, title: "Custom AI Workflows", description: "Agents built around your process, not a generic template.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: ShieldCheck, title: "Data Privacy", description: "Your enterprise data stays isolated and under your control.", gradient: "from-orange-500 to-amber-400" },
    { icon: Layers, title: "Scalable Deployment", description: "From a single agent to a coordinated multi-agent workforce.", gradient: "from-rose-500 to-pink-400" },
    { icon: Repeat, title: "Continuous Optimization", description: "Agents monitored and retrained as your business evolves.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const aiAgentsUseCases = {
  heading: "AI Agents Built for Real Business Operations",
  description: "From department assistants to multi-agent orchestration, our AI Agent solutions help enterprises automate more without losing control.",
  items: [
    { id: "enterprise-knowledge-assistant", icon: Bot, title: "Enterprise Knowledge Assistant", description: "One assistant grounded in every department's knowledge — so employees get the same answer whether they ask HR, IT, or finance.", outcome: "One consistent answer across every department", href: "#contact" },
    { id: "customer-service-automation", icon: Headset, title: "24/7 Customer Service Automation", description: "Agents connected to your CRM and knowledge base that resolve routine requests instantly and escalate the rest with full context.", outcome: "86% resolved without escalation", href: "#contact" },
    { id: "department-agent-automation", icon: TrendingUp, title: "Sales, HR & Finance Agent Automation", description: "Specialized agents that qualify leads, screen candidates, and process invoices end-to-end.", outcome: "Department work done, not just tracked", href: "#contact" },
    { id: "multi-agent-orchestration", icon: Layers, title: "Multi-Agent Workflow Orchestration", description: "Specialized agents coordinated by a shared orchestrator to carry requests from intake through to completion.", outcome: "70% of tasks automated", href: "#contact" },
    { id: "enterprise-rag-agents", icon: Search, title: "Enterprise RAG for AI Agents", description: "SharePoint, Drive, Confluence, CRM, and ERP indexed into one vector database so every agent answer traces back to a real source.", outcome: "9 enterprise sources indexed and searchable", href: "#contact" },
  ],
};

export const aiAgentsCaseStudy = {
  heading: "Helping Enterprises Automate Intelligent Workflows",
  description: "An enterprise team partnered with Bigwigs to deploy a multi-agent system across customer service, finance, and operations — automating the majority of routine requests within one quarter.",
  stats: [
    { value: "70%", label: "Tasks Automated" },
    { value: "80%", label: "Faster Response" },
    { value: "Millions", label: "AI Decisions Processed" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Automation KPIs", secondary: "Agent Analytics", trend: "Adoption Trend" },
};

export const aiAgentsProcess = {
  heading: "Six Stages Between an Idea and a Production AI Workforce",
  steps: [
    { icon: Compass, title: "Business Discovery", description: "Goals, workflows, and success metrics defined with your team." },
    { icon: PenTool, title: "Solution Design", description: "Agent architecture and orchestration approach scoped to your use case." },
    { icon: FlaskConical, title: "Proof of Concept", description: "A working agent validated against real business requests." },
    { icon: Rocket, title: "Development", description: "The full agent workforce built, integrated, and iterated on." },
    { icon: ShieldCheck, title: "Testing", description: "Accuracy, safety, and performance verified before launch." },
    { icon: PackageCheck, title: "Deployment", description: "Live in production, monitored, and supported at scale." },
  ],
  desktopColumnsClassName: "grid-cols-6",
};

export const aiAgentsFaq = {
  items: [
    { question: "Can AI Agents integrate with CRM and ERP?", answer: "Yes. Agents connect to Salesforce, HubSpot, SAP, and other CRM/ERP systems via API, acting on records directly rather than just reading them." },
    { question: "Are AI Agents secure?", answer: "Yes. Every agent runs under enterprise access controls, encrypted data handling, and audit logging appropriate to your compliance requirements." },
    { question: "Can AI Agents work with employees?", answer: "Yes. Agents are designed to hand off to a human at the right moment — for approvals, exceptions, or anything outside their scope." },
    { question: "How do AI Agents use enterprise knowledge?", answer: "Agents retrieve grounded answers from your documents and systems via RAG, so responses reflect your actual policies and data." },
  ],
};

export const aiAgentsBottomCta = {
  icon: Bot,
  heading: <>Build Your Digital Workforce With Enterprise AI Agents</>,
  description:
    "Whether you're automating customer support, enterprise operations, HR workflows, finance processes, or knowledge management, Bigwigs Technologies delivers secure, scalable, and intelligent AI Agent solutions that transform the way your business operates.",
  primaryAction: { label: "Schedule an AI Strategy Session", href: "#contact" },
  secondaryAction: { label: "Speak With AI Automation Experts", href: "#contact", showArrow: true },
};
