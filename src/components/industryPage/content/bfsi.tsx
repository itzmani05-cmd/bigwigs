import {
  Landmark,
  Building2,
  ShieldAlert,
  FileCheck2,
  DollarSign,
  FileText,
  Scale,
  Clock,
  Hourglass,
  FileWarning,
  Database,
  Server,
  Smartphone,
  Tags,
  BrainCircuit,
  Code2,
  Headset,
  Languages,
  Accessibility,
  ShieldCheck,
  FileSpreadsheet,
  ClipboardCheck,
  Percent,
  BarChart3,
  LineChart,
  MessageSquareText,
  UserPlus,
  Receipt,
  Gauge,
  TrendingUp,
  Users,
  CheckCircle2,
  PieChart,
  FileCheck,
  UserCircle,
  CreditCard,
  PiggyBank,
  Workflow,
  HeartHandshake,
  Rocket,
  Globe2,
  Handshake,
  Home,
  Briefcase,
  Search,
  PenTool,
} from "lucide-react";

export const bfsiHero = {
  eyebrow: "Banking, Financial Services & Insurance",
  heading: (
    <>
      Empowering Financial
      <br />
      Institutions Through{" "}
      <span className="text-blue-500">
        AI, Automation &amp;
        <br />
        Digital Innovation
      </span>
    </>
  ),
  description:
    "Empowering banks, financial institutions, insurance companies, fintech organizations, and payment service providers with AI-powered solutions,and secure data services to accelerate digital transformation.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our Experts", href: "/contact" },
  trustedBy: ["Commercial Banks", "Insurance Companies", "FinTech Organizations", "Asset Management Firms",],
  visualIcon: Landmark,
  badges: [
    { icon: Building2, label: "Core Banking Platform", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: ShieldAlert, label: "Fraud Detection Engine", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: FileCheck2, label: "Digital Claims Processing", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const bfsiChallenges = {
  heading: (
    <>
      The Realities Financial
      <br />
      Institutions Are Solving For
    </>
  ),
  description:
    "Banks, insurers, and fintechs are racing to modernize under fraud pressure, compliance demands, and rising customer expectations.",
  items: [
    {
      icon: ShieldAlert,
      title: "Increasing Fraud & Cyber Threats",
      description: "Threats are escalating faster than legacy risk infrastructure can keep pace with.",
    },
    { icon: DollarSign, title: "High Operational Costs" },
    { icon: FileText, title: "Manual Document-Intensive Processes" },
    { icon: Scale, title: "Regulatory & Compliance Requirements" },
    { icon: Clock, title: "Customer Onboarding Delays" },
    { icon: Hourglass, title: "Loan Processing Inefficiencies" },
    { icon: FileWarning, title: "Insurance Claims Complexity" },
    { icon: Database, title: "Unstructured Financial Data" },
    { icon: Server, title: "Legacy Technology Systems" },
    { icon: Smartphone, title: "Growing Digital Expectations" },
  ],
};

export const bfsiSolutions = {
  heading: "Nine Disciplines. One Financial AI Practice.",
  items: [
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      description: "Automate extraction and validation of loan applications, KYC documents, claims, and financial statements.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Tags,
      title: "AI Data Annotation",
      description: "High-quality labeled datasets for fraud detection, risk categorization, and financial NLP models.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: BrainCircuit,
      title: "AI & Machine Learning Solutions",
      description: "Fraud detection, credit risk assessment, and predictive analytics models built on validated financial data.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Secure core banking, loan management, and insurance platforms engineered for scale and compliance.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Headset,
      title: "Customer Experience Solutions",
      description: "AI chatbots, virtual banking assistants, and self-service portals that modernize every customer touchpoint.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Database,
      title: "Financial Data Services",
      description: "Data collection, validation, cleansing, and dataset preparation tuned for financial AI accuracy standards.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Languages,
      title: "Language Services",
      description: "Multilingual financial translation, transcription, and localization for global banking and insurance operations.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: Accessibility,
      title: "Accessibility Services",
      description: "Accessible annual reports, policy documents, and banking forms compliant with global accessibility standards.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: ShieldCheck,
      title: "Security & Governance",
      description: "Role-based access controls, audit trails, and project governance built for confidential financial data.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const idpSteps = [
  { icon: FileText, label: "Intake" },
  { icon: Search, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Workflow, label: "Route" },
];

export const idp = {
  heading: "Automate Financial Document Workflows With AI",
  description: "We extract, validate, and route financial documents end-to-end — cutting manual effort and improving data accuracy across every stage.",
  steps: idpSteps,
  items: [
    { icon: FileText, title: "Loan Applications" },
    { icon: Receipt, title: "Bank Statements" },
    { icon: UserPlus, title: "Account Opening Forms" },
    { icon: ClipboardCheck, title: "KYC Documents" },
    { icon: FileSpreadsheet, title: "Credit Reports" },
    { icon: FileWarning, title: "Insurance Claims" },
    { icon: Percent, title: "Tax Forms" },
    { icon: BarChart3, title: "Financial Statements" },
    { icon: LineChart, title: "Investment Reports" },
    { icon: MessageSquareText, title: "Customer Correspondence" },
  ],
};

export const bfsiAiSolutions = {
  heading: "AI & Machine Learning Built for Financial Precision",
  description: "We support AI initiatives across fraud prevention, credit risk, and customer intelligence — all built on validated financial data.",
  centerIcon: BrainCircuit,
  badges: [
    { icon: ShieldAlert, label: "Fraud Detection Engine", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Gauge, label: "Credit Risk Models", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: TrendingUp, label: "Predictive Analytics", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: ShieldAlert, title: "Fraud Detection", description: "Real-time models that flag suspicious transactions and behavioral anomalies." },
    { icon: Gauge, title: "Credit Risk Assessment", description: "Predictive scoring that strengthens lending decisions and portfolio quality." },
    { icon: Users, title: "Customer Segmentation", description: "Behavioral and demographic segmentation for targeted financial products." },
    { icon: CheckCircle2, title: "Loan Eligibility Models", description: "Automated eligibility scoring that accelerates approval decisions." },
    { icon: TrendingUp, title: "Predictive Analytics", description: "Forward-looking models for risk, demand, and revenue forecasting." },
    { icon: Headset, title: "Intelligent Customer Support", description: "AI-assisted service that resolves inquiries faster, around the clock." },
    { icon: LineChart, title: "Financial Forecasting", description: "Data-driven forecasting models for planning and treasury operations." },
    { icon: PieChart, title: "Portfolio Analytics", description: "Analytics that surface risk concentration and performance across portfolios." },
  ],
};

export const bfsiSoftwareDashboard = {
  heading: "Financial Software, Engineered for Scale",
  description: "Secure core banking, loan management, and insurance platforms built for compliance, scale, and real-time operations.",
  panelLabel: "Financial Operations Suite",
  tiles: [
    { icon: Landmark, label: "Core Banking" },
    { icon: FileCheck, label: "Loan Management" },
    { icon: ShieldCheck, label: "Insurance Platforms" },
    { icon: UserCircle, label: "Customer Portals" },
    { icon: Smartphone, label: "Mobile Banking" },
    { icon: CreditCard, label: "Payment Solutions", hasLiveDot: true },
    { icon: PiggyBank, label: "Wealth Management" },
    { icon: BarChart3, label: "Financial Dashboards", hasSparkline: true },
  ],
  pills: [
    { icon: Landmark, label: "Core Banking Applications" },
    { icon: FileCheck, label: "Loan Management Systems" },
    { icon: ShieldCheck, label: "Insurance Management Platforms" },
    { icon: UserCircle, label: "Customer Portals" },
    { icon: Smartphone, label: "Mobile Banking Apps" },
    { icon: CreditCard, label: "Payment Solutions" },
  ],
};

export const bfsiAccessibilityLanguage = {
  heading: "Inclusive, Multilingual Financial Services",
  description: "Reach every customer with accessible, multilingual financial communications and documentation.",
  cards: [
    {
      icon: Languages,
      title: "Financial Language Services",
      description: "Support multilingual financial operations across every market you serve.",
      items: ["Financial Translation", "Insurance Documentation Translation", "Customer Communication Localization", "Regulatory Document Translation", "Financial Transcription"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Services",
      description: "Create inclusive financial experiences for every customer and stakeholder.",
      items: ["Accessible Annual Reports", "Accessible Policy Documents", "Accessible Banking Forms", "PDF Remediation", "Digital Publishing", "Accessible Customer Communications"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
  ],
};

export const bfsiWhoWeServe = {
  heading: "Trusted Across Financial Services",
  description: "From retail banking to asset management, we support every organization modernizing financial services.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      BFSI
    </>
  ),
  items: [
    { icon: Landmark, label: "Commercial Banks" },
    { icon: Building2, label: "Retail Banks" },
    { icon: LineChart, label: "Investment Banks" },
    { icon: Users, label: "Credit Unions" },
    { icon: ShieldCheck, label: "Insurance Companies" },
    { icon: Smartphone, label: "FinTech Organizations" },
    { icon: Home, label: "Mortgage Providers" },
    { icon: PieChart, label: "Asset Management Firms" },
    { icon: CreditCard, label: "Payment Service Providers" },
    { icon: Briefcase, label: "Financial Consulting Firms" },
  ],
};

export const bfsiBusinessBenefits = {
  heading: "Measurable Impact Across Financial Operations",
  kpis: [
    { value: 35, suffix: "%", label: "Reduction in Operational Costs" },
    { value: 50, suffix: "%", label: "Faster Loan Processing" },
    { value: 99, suffix: "%", label: "Fraud Detection Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Transactions Processed" },
  ],
  benefits: [
    { icon: DollarSign, title: "Reduce Operational Costs", description: "Automation that lowers the cost of manual, document-heavy processes." },
    { icon: HeartHandshake, title: "Improve Customer Satisfaction", description: "Faster onboarding and support that keeps customers engaged." },
    { icon: Rocket, title: "Accelerate Digital Transformation", description: "Modern platforms that replace legacy systems without disruption." },
    { icon: ShieldAlert, title: "Strengthen Fraud Detection", description: "Higher-quality models and datasets that catch fraud earlier." },
    { icon: CheckCircle2, title: "Improve Data Quality", description: "Validated, clean data pipelines that downstream AI can trust." },
    { icon: Workflow, title: "Increase Process Automation", description: "Fewer manual steps across lending, claims, and servicing workflows." },
  ],
};

export const bfsiWhyUs = {
  heading: "Why Financial Institutions Choose Bigwigs",
  items: [
    { icon: BrainCircuit, title: "AI & Automation Expertise", description: "Deep experience building AI models for fraud, risk, and financial operations.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: ShieldCheck, title: "Secure Operational Practices", description: "Confidentiality, access controls, and audit trails built into every engagement.", gradient: "from-violet-500 to-purple-400" },
    { icon: Building2, title: "Enterprise-Quality Delivery", description: "Proven track record delivering production-grade systems for financial institutions.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Globe2, title: "Scalable Global Teams", description: "Distributed delivery across time zones for round-the-clock support and speed.", gradient: "from-orange-500 to-amber-400" },
    { icon: CheckCircle2, title: "Strong Quality Assurance", description: "Multi-layer QA processes built for the accuracy financial services demand.", gradient: "from-rose-500 to-pink-400" },
    { icon: Handshake, title: "Long-Term Partnership Approach", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const bfsiUseCases = {
  heading: "AI Built for Financial Workflows",
  description: "From loan processing to fraud detection, our AI solutions help financial institutions move faster without compromising security or compliance.",
  items: [
    { id: "ai-loan-processing", icon: FileCheck2, title: "AI-Powered Loan Processing", description: "Automate extraction and validation of borrower information from loan applications to accelerate approval workflows.", outcome: "50% faster loan approval turnaround", href: "#contact" },
    { id: "fraud-dataset-prep", icon: ShieldAlert, title: "Fraud Detection Dataset Preparation", description: "Develop high-quality labeled datasets that help improve fraud detection models by identifying suspicious transactions and behavioral patterns.", outcome: "Fraud model precision improved by 35%", href: "#contact" },
    { id: "claims-automation", icon: FileWarning, title: "Insurance Claims Automation", description: "Use AI and document processing to classify claims, extract key information, and reduce manual review time.", outcome: "60% reduction in manual claims review", href: "#contact" },
    { id: "digital-banking-platform", icon: Smartphone, title: "Digital Banking Platform", description: "Develop secure customer portals and mobile banking applications that improve user experience and streamline financial services.", outcome: "2x increase in digital engagement", href: "#contact" },
    { id: "report-accessibility", icon: Accessibility, title: "Financial Report Accessibility", description: "Convert annual reports, ESG reports, and investor communications into accessible digital formats to improve usability for all stakeholders.", outcome: "100% WCAG-compliant investor communications", href: "#contact" },
  ],
};

export const bfsiCaseStudy = {
  heading: "Helping Financial Institutions Build AI Faster",
  description: "We partner with banks, insurers, and fintech organizations to turn raw financial data into annotated, model-ready datasets and production-grade fraud detection systems.",
  stats: [
    { value: "98%", label: "Fraud Detection Accuracy" },
    { value: "40+", label: "Financial Projects" },
    { value: "Millions", label: "Transactions Analyzed" },
  ],
  ctaHref: "/case-studies/fraud-detection-document-intelligence",
  chartLabels: { primary: "Risk KPIs", secondary: "Transaction Analytics", trend: "Fraud Insights" },
};

export const bfsiProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand business goals, regulatory considerations, and technical requirements." },
  { icon: PenTool, title: "Design", description: "Define the solution architecture, project roadmap, and delivery model." },
  { icon: Code2, title: "Develop", description: "Build, integrate, annotate, validate, or automate according to project scope." },
  { icon: CheckCircle2, title: "Test", description: "Perform comprehensive quality assurance, functional testing, and validation." },
  { icon: Rocket, title: "Deploy", description: "Support implementation, user onboarding, and knowledge transfer." },
  { icon: Gauge, title: "Optimize", description: "Monitor performance, refine workflows, and support continuous improvement." },
];

export const bfsiProcess = {
  heading: "From Discovery to Continuous Optimization",
  steps: bfsiProcessSteps,
  desktopColumnsClassName: "grid-cols-3 xl:grid-cols-6",
};

export const bfsiFaq = {
  items: [
    { question: "Can you develop secure financial applications?", answer: "Yes. We build enterprise-grade financial applications with strong security practices, scalable architecture, and integration capabilities." },
    { question: "Do you support AI projects in banking and insurance?", answer: "Yes. We assist with AI data preparation, annotation, model evaluation support, intelligent document processing, and workflow automation." },
    { question: "Can you work with existing financial systems?", answer: "Yes. We can integrate with existing platforms and collaborate with internal technology teams to support modernization initiatives." },
    { question: "Do you comply with financial industry regulations?", answer: "Yes. Our BFSI engagements follow role-based access controls, confidentiality agreements, secure file transfers, and audit trails, with governance built into every project." },
    { question: "What is your typical engagement model for financial institutions?", answer: "Most BFSI engagements start with a scoped discovery and pilot phase, then scale into ongoing partnerships with dedicated teams, SLAs, and flexible engagement models." },
  ],
};

export const bfsiBottomCta = {
  icon: Landmark,
  heading: (
    <>
      Accelerate Financial
      <br />
      Innovation with AI
    </>
  ),
  description:
    "Whether you're modernizing banking systems, automating insurance workflows, improving fraud detection, or developing AI-powered financial applications, Bigwigs Technologies provides the expertise and scalable solutions to help you succeed.",
  primaryAction: { label: "Schedule a BFSI Solution Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Financial Technology Experts", href: "#contact", showArrow: true },
};
