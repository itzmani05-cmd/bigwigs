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
  TrendingUp,
  ShieldCheck,
  BookOpen,
  Target,
  FlaskConical,
  Send,
  CheckCircle2,
  Headset,
  BarChart3,
  Users2,
  Stethoscope,
  ClipboardList,
  FileText,
  Compass,
  ScanLine,
  Receipt,
  ClipboardCheck,
  Mail,
  Layers,
  FileStack,
  Ticket,
  UserPlus,
  Landmark,
  Umbrella,
  ShoppingCart,
  Factory,
  Radio,
  Building2,
  GraduationCap,
  Scale,
  Truck,
  Cpu,
  Rocket,
  PackageCheck,
  Lock,
  ShieldAlert,
  Clock,
  TrendingDown,
} from "lucide-react";

export const generativeAiHero = {
  eyebrow: "Generative AI Services",
  heading: (
    <>
      Build Smarter Businesses
      <br />
      With{" "}
      <span className="text-blue-500">
        Generative
        <br />
        AI
      </span>
    </>
  ),
  description:
    "Leverage Large Language Models, AI Agents, Retrieval-Augmented Generation (RAG), and intelligent automation to transform business operations, accelerate innovation, and deliver exceptional customer experiences.",
  primaryCta: { label: "Request a Generative AI Consultation", href: "/demo" },
  secondaryCta: { label: "Talk To Our AI Experts", href: "/contact" },
  trustedBy: ["Healthcare", "Finance", "Retail", "Government", "Technology", "Manufacturing"],
  visualIcon: Brain,
  badges: [
    { icon: Brain, label: "Enterprise Assistant", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: MessagesSquare, label: "RAG Grounded Search", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: ShieldCheck, label: "Enterprise Secure", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const generativeAiChallenges = {
  heading: (
    <>
      The Realities Enterprises
      <br />
      Are Solving For
    </>
  ),
  description: "LLMs, agents, and automation — one team across the full Generative AI stack.",
  items: [
    {
      icon: Database,
      title: "Fragmented Enterprise Knowledge",
      description: "Answers live across dozens of systems, none of them connected to each other.",
    },
    { icon: Workflow, title: "Manual, Repetitive Workflows" },
    { icon: Target, title: "Inconsistent AI Output Quality" },
    { icon: Headset, title: "Rising Customer Support Volume" },
    { icon: FileSearch, title: "Slow Document Processing" },
    { icon: ShieldAlert, title: "AI Hallucination Risk" },
    { icon: Lock, title: "Data Privacy & Model Security" },
    { icon: Puzzle, title: "Disconnected Enterprise Systems" },
    { icon: Clock, title: "Slow AI Adoption Timelines" },
    { icon: TrendingDown, title: "Rising Operational Costs" },
  ],
};

export const generativeAiSolutions = {
  heading: "Eight Ways We Help You Put Generative AI to Work",
  items: [
    {
      icon: Brain,
      title: "Large Language Models",
      description: "Enterprise LLMs fine-tuned and deployed on your own data.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Prompt Engineering",
      description: "Prompts designed, tested, and optimized for reliable output.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: MessagesSquare,
      title: "AI Chatbots",
      description: "Conversational assistants deployed across every channel.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Autonomous agents that execute tasks across your systems.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Search,
      title: "Retrieval-Augmented Generation",
      description: "Grounded answers pulled from your own enterprise knowledge.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: FileSearch,
      title: "Document Intelligence",
      description: "Contracts, invoices, and forms understood, not just scanned.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Repetitive processes automated end-to-end with AI.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Puzzle,
      title: "Enterprise Integrations",
      description: "AI connected to the CRMs, ticketing, and tools you run on.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const generativeAiEcosystem = {
  heading: "One Enterprise AI Core, Nine Connected Capabilities",
  centerIcon: Brain,
  badges: [
    { icon: Brain, label: "Large Language Models", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Bot, label: "AI Agents", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Search, label: "RAG", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Brain, title: "Large Language Models", description: "Enterprise LLMs fine-tuned and deployed on your own data." },
    { icon: Sparkles, title: "Prompt Engineering", description: "Prompts designed, tested, and optimized for reliable output." },
    { icon: MessagesSquare, title: "AI Chatbots", description: "Conversational assistants deployed across every channel." },
    { icon: Bot, title: "AI Agents", description: "Autonomous agents that execute tasks across your systems." },
    { icon: Database, title: "Knowledge Base", description: "Enterprise documents indexed and ready for retrieval." },
    { icon: Workflow, title: "Workflow Automation", description: "Repetitive processes automated end-to-end with AI." },
    { icon: FileSearch, title: "Document Intelligence", description: "Contracts, invoices, and forms understood, not just scanned." },
    { icon: Search, title: "RAG", description: "Grounded answers pulled from your own enterprise knowledge." },
    { icon: TrendingUp, title: "Analytics", description: "Visibility into usage, accuracy, and impact across every deployment." },
  ],
};

export const llmSteps = [
  { icon: Brain, label: "Model" },
  { icon: Sparkles, label: "Fine-Tune" },
  { icon: CheckCircle2, label: "Evaluate" },
  { icon: Rocket, label: "Deploy" },
];

export const largeLanguageModels = {
  heading: "Enterprise LLM Solutions Built for Business",
  description: "We work across every major model family — fine-tuned, evaluated, and aligned to the tasks your business actually needs solved.",
  steps: llmSteps,
  items: [
    { icon: Brain, title: "GPT" },
    { icon: Brain, title: "Claude" },
    { icon: Brain, title: "Gemini" },
    { icon: Brain, title: "Llama" },
    { icon: Brain, title: "Mistral" },
    { icon: Brain, title: "DeepSeek" },
    { icon: Brain, title: "Qwen" },
    { icon: Sparkles, title: "Fine-Tuning" },
    { icon: Target, title: "RLHF" },
    { icon: Sparkles, title: "Prompt Optimization" },
    { icon: BookOpen, title: "Instruction Datasets" },
    { icon: CheckCircle2, title: "Response Evaluation" },
  ],
};

export const promptEngineering = {
  heading: "Every Prompt Designed, Tested, and Evaluated",
  steps: [
    { icon: Send, label: "Prompt" },
    { icon: Brain, label: "AI Model" },
    { icon: CheckCircle2, label: "Response" },
    { icon: Target, label: "Evaluation" },
  ],
  checklist: [
    { icon: Sparkles, label: "Prompt Design", description: "Prompts written and structured for consistent, reliable output." },
    { icon: BookOpen, label: "Prompt Library", description: "Versioned, reusable prompts shared across teams and use cases." },
    { icon: Workflow, label: "Workflow Optimization", description: "Prompt chains tuned to fit real multi-step business processes." },
    { icon: MessagesSquare, label: "Conversation Design", description: "Multi-turn dialogue designed for clarity and task completion." },
    { icon: Target, label: "Domain Prompts", description: "Prompts tuned to the terminology and edge cases of your industry." },
    { icon: FlaskConical, label: "Prompt Testing", description: "Systematic evaluation before a prompt ever reaches production." },
  ],
};

export const chatbotsAndAgents = {
  heading: "Conversations That Resolve, Agents That Act",
  description: "Chatbots grounded in your knowledge base, and autonomous agents connected to your systems — executing tasks across departments, not waiting on a human to click through them.",
  cards: [
    {
      icon: MessagesSquare,
      title: "AI Chatbots",
      description: "Conversations that resolve, not just respond — with a clean handoff to a human when it matters.",
      items: ["Website", "Mobile", "Slack", "Teams", "WhatsApp", "Facebook Messenger"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Bot,
      title: "AI Agents",
      description: "Agents that take action, not just answer questions.",
      items: ["Customer Service", "HR Assistant", "IT Helpdesk", "Sales Assistant", "Healthcare Agent", "Research Assistant", "Procurement", "Document Processing"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const retrievalAugmentedGeneration = {
  heading: "Answers Grounded in Your Own Knowledge",
  description: "Enterprise documents indexed into a vector database, retrieved in real time, and passed to the model — so responses come from your data, not a guess.",
  centerIcon: Search,
  badges: [
    { icon: ShieldCheck, label: "Reduced Hallucinations", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Database, label: "Real-Time Knowledge", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Target, label: "Accurate Responses", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: FileSearch, title: "Document Search", description: "Fast, relevant retrieval across enterprise document collections." },
    { icon: Database, title: "Knowledge Base", description: "Structured, indexed knowledge ready for grounded generation." },
    { icon: Search, title: "Enterprise Search", description: "Search that spans every connected system, not just one silo." },
    { icon: ClipboardList, title: "Policy Management", description: "Retrieval built for accurate, up-to-date policy answers." },
    { icon: FileText, title: "Contract Intelligence", description: "Grounded answers pulled directly from contract language." },
    { icon: Compass, title: "Research Portals", description: "Retrieval-backed research tools for internal knowledge workers." },
  ],
};

export const documentSteps = [
  { icon: FileSearch, label: "Scan" },
  { icon: ScanLine, label: "Extract" },
  { icon: ClipboardCheck, label: "Structure" },
  { icon: CheckCircle2, label: "Deliver" },
];

export const documentIntelligence = {
  heading: "Documents Understood, Not Just Digitized",
  description: "Invoices, contracts, forms, and medical records processed with AI that extracts structured data ready for your downstream systems.",
  steps: documentSteps,
  checklist: [
    { icon: ScanLine, label: "OCR", description: "Text detection and recognition across scanned and native documents." },
    { icon: Receipt, label: "Invoice Processing", description: "Line items, totals, and vendor details extracted automatically." },
    { icon: FileText, label: "Contracts", description: "Key terms and clauses extracted from legal and vendor agreements." },
    { icon: ClipboardCheck, label: "Forms", description: "Structured field extraction across every form type you process." },
    { icon: ShieldCheck, label: "Compliance", description: "Extraction workflows built to hold up under regulatory review." },
    { icon: Stethoscope, label: "Medical Records", description: "Clinical documents structured for downstream healthcare systems." },
  ],
};

export const workflowAutomation = {
  heading: "Repetitive Work, Automated End-to-End",
  description: "AI that classifies, routes, and completes repetitive work across departments — so your teams spend time deciding, not processing.",
  steps: [
    { icon: Mail, label: "Email" },
    { icon: Brain, label: "AI" },
    { icon: Layers, label: "Classification" },
    { icon: Workflow, label: "Automation" },
    { icon: FileStack, label: "Reports" },
  ],
  marqueeItems: [
    { icon: Mail, title: "Email Classification" },
    { icon: Ticket, title: "Ticket Routing" },
    { icon: UserPlus, title: "Customer Onboarding" },
    { icon: ClipboardList, title: "Meeting Summaries" },
    { icon: Database, title: "Knowledge Retrieval" },
    { icon: BarChart3, title: "Report Generation" },
  ],
};

export const generativeAiWhoWeServe = {
  heading: "Generative AI Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Generative AI
    </>
  ),
  items: [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Landmark, label: "Finance" },
    { icon: Umbrella, label: "Insurance" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Building2, label: "Government" },
    { icon: GraduationCap, label: "Education" },
    { icon: Scale, label: "Legal" },
    { icon: Truck, label: "Logistics" },
    { icon: Users2, label: "Human Resources" },
    { icon: Cpu, label: "Technology" },
  ],
};

export const generativeAiBusinessBenefits = {
  heading: "Measurable Impact Across the Enterprise",
  kpis: [
    { value: 50, suffix: "+", label: "Enterprise AI Solutions" },
    { value: 99, suffix: "%", label: "Response Accuracy" },
    { value: 60, suffix: "%", label: "Workflow Automation" },
    { value: 40, suffix: "%", label: "Operational Cost Reduction" },
  ],
  benefits: [
    { icon: ShieldCheck, title: "Reduced Hallucinations", description: "Grounded, retrieval-backed responses instead of confident guesses." },
    { icon: Database, title: "Real-Time Knowledge", description: "Answers pulled from documents that are current, not stale training data." },
    { icon: Target, title: "Accurate Responses", description: "Evaluated, tested outputs that hold up under real business use." },
    { icon: Lock, title: "Secure Enterprise Data", description: "Your data stays yours — encrypted, access-controlled, isolated." },
    { icon: Rocket, title: "Faster Innovation Cycles", description: "Working prototypes validated against real business data early." },
    { icon: Headset, title: "Better Customer Experiences", description: "Conversational AI that resolves, not just responds." },
  ],
};

export const generativeAiWhyUs = {
  heading: "Six Reasons Enterprises Trust Our AI Teams",
  items: [
    { icon: Brain, title: "LLM Expertise", description: "Teams who fine-tune and evaluate models, not just call an API.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: ShieldCheck, title: "Enterprise Security", description: "Your data stays yours — encrypted, access-controlled, isolated.", gradient: "from-violet-500 to-purple-400" },
    { icon: Bot, title: "AI Agents", description: "Autonomous workflows that execute, not just recommend.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Search, title: "RAG Specialists", description: "Retrieval pipelines built to minimize hallucination, not just demo well.", gradient: "from-orange-500 to-amber-400" },
    { icon: Sparkles, title: "Prompt Engineering", description: "Prompts tested and versioned like production code.", gradient: "from-rose-500 to-pink-400" },
    { icon: Puzzle, title: "Enterprise Integrations", description: "AI wired into the CRMs and tools your teams already use.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const generativeAiUseCases = {
  heading: "Generative AI Built for Enterprise Outcomes",
  description: "From knowledge assistants to autonomous agents, our Generative AI solutions help enterprises move faster without sacrificing accuracy.",
  items: [
    { id: "enterprise-knowledge-assistant", icon: Search, title: "Enterprise Knowledge Assistant", description: "RAG-grounded search and conversational assistants that answer from your own enterprise knowledge.", outcome: "80% faster knowledge retrieval", href: "#contact" },
    { id: "autonomous-ai-agents", icon: Bot, title: "Autonomous AI Agents for Operations", description: "Agents connected to your systems that execute tasks across departments instead of just recommending them.", outcome: "Tasks executed, not just answered", href: "#contact" },
    { id: "document-intelligence-extraction", icon: FileSearch, title: "Document Intelligence & Extraction", description: "Invoices, contracts, and forms processed with AI that extracts structured, downstream-ready data.", outcome: "Fields, tables, and totals structured to JSON", href: "#contact" },
    { id: "prompt-optimized-llm", icon: Sparkles, title: "Prompt-Optimized LLM Deployment", description: "Fine-tuned, evaluated, and aligned LLMs deployed against the tasks your business actually needs solved.", outcome: "Every prompt designed, tested, and evaluated", href: "#contact" },
    { id: "ai-workflow-automation", icon: Workflow, title: "AI-Powered Workflow Automation", description: "Email classification, ticket routing, and report generation automated end-to-end with AI.", outcome: "60% reduction in manual tasks", href: "#contact" },
  ],
};

export const generativeAiCaseStudy = {
  heading: "Helping Enterprises Adopt Generative AI at Scale",
  description: "An enterprise team partnered with Bigwigs to deploy RAG-grounded search and workflow automation across its knowledge base — cutting manual work within one quarter.",
  stats: [
    { value: "500K+", label: "Documents Processed" },
    { value: "80%", label: "Faster Knowledge Retrieval" },
    { value: "60%", label: "Reduction In Manual Tasks" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Adoption KPIs", secondary: "Usage Analytics", trend: "Automation Trend" },
};

export const generativeAiProcess = {
  heading: "Six Stages Between an Idea and a Production AI System",
  steps: [
    { icon: Compass, title: "Business Discovery", description: "Goals, workflows, and success metrics defined with your team." },
    { icon: ClipboardList, title: "Solution Design", description: "Architecture and model approach scoped to your use case." },
    { icon: FlaskConical, title: "Proof of Concept", description: "A working prototype validated against real business data." },
    { icon: Rocket, title: "Development", description: "The full solution built, integrated, and iterated on." },
    { icon: ShieldCheck, title: "Testing", description: "Accuracy, safety, and performance verified before launch." },
    { icon: PackageCheck, title: "Deployment", description: "Live in production, monitored, and supported at scale." },
  ],
  desktopColumnsClassName: "grid-cols-3 xl:grid-cols-6",
};

export const generativeAiFaq = {
  items: [
    { question: "Can you build custom AI chatbots?", answer: "Yes. Chatbots are built on your knowledge base and deployed across web, mobile, Slack, Teams, WhatsApp, and Messenger." },
    { question: "Do you support private enterprise data?", answer: "Yes. RAG pipelines and fine-tuning run against your own documents and data stores — nothing is sent to train public models." },
    { question: "Can you integrate AI with existing applications?", answer: "Yes. We integrate with CRMs, ticketing systems, ERPs, and internal tools via API, so AI fits into workflows you already run." },
    { question: "How secure are enterprise AI solutions?", answer: "Every deployment includes encrypted data handling, access controls, and audit logging appropriate to enterprise compliance requirements." },
  ],
};

export const generativeAiBottomCta = {
  icon: Brain,
  heading: <>Transform Every Workflow With Enterprise AI</>,
  description:
    "Whether you're building intelligent assistants, deploying AI agents, integrating enterprise knowledge with RAG, or automating business operations, Bigwigs Technologies delivers secure, scalable, and production-ready Generative AI solutions that drive measurable business value.",
  primaryAction: { label: "Request a Generative AI Consultation", href: "#contact" },
  secondaryAction: { label: "Talk To Our AI Experts", href: "#contact", showArrow: true },
};
