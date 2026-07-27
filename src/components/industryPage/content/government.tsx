import {
  Landmark,
  Building2,
  FileText,
  Database,
  Radar,
  Code2,
  Languages,
  Accessibility,
  BookOpen,
  ShieldCheck,
  Server,
  FileStack,
  Clock,
  Scale,
  ShieldAlert,
  DollarSign,
  Users,
  FileCheck2,
  Receipt,
  ClipboardList,
  MessageSquareText,
  Send,
  ScanEye,
  CheckCircle2,
  Workflow,
  IdCard,
  Map,
  Megaphone,
  Package,
  Mail,
  Tags,
  Image,
  Mic,
  BarChart3,
  MapPin,
  Zap,
  Leaf,
  AlertTriangle,
  LineChart,
  Boxes,
  Smartphone,
  GraduationCap,
  Truck,
  Globe2,
  Handshake,
  HeartHandshake,
  Briefcase,
  Stethoscope,
  Wifi,
  Search,
  PenTool,
  Rocket,
} from "lucide-react";

export const governmentHero = {
  eyebrow: "Government & Public Sector Solutions",
  heading: (
    <>
      Enabling Smarter Governance
      <br />
      Through{" "}
      <span className="text-blue-500">
        AI, Digital Transformation &amp;
        <br />
        Secure Technology
      </span>
    </>
  ),
  description:
    "Governments and public sector organizations are embracing digital transformation to improve citizen services, modernize legacy systems, automate administrative processes, and strengthen cybersecurity. We partner with government agencies, public institutions, smart city initiatives, and non-profits to build secure, scalable, citizen-centric digital solutions.",
  primaryCta: { label: "Schedule a Government Digital Transformation Consultation", href: "#contact" },
  secondaryCta: { label: "Speak with Our Public Sector Technology Experts", href: "#contact" },
  trustedBy: ["Federal Government Agencies", "State & Provincial Governments", "Municipal Authorities", "Smart City Programs", "Public Health Departments", "Non-Profit Organizations"],
  visualIcon: Landmark,
  badges: [
    { icon: ShieldCheck, label: "Secure Government Platforms", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: FileText, label: "Document Digitization AI", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Building2, label: "Smart City Analytics", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const governmentChallenges = {
  heading: (
    <>
      The Realities Public Sector
      <br />
      Organizations Are Solving For
    </>
  ),
  description:
    "Agencies and institutions are under pressure to modernize legacy systems while managing compliance, security, and constrained budgets.",
  items: [
    {
      icon: Server,
      title: "Legacy IT Infrastructure",
      description: "Outdated systems slow service delivery and make modernization harder every year they persist.",
    },
    { icon: FileStack, title: "Paper-Based Administrative Workflows" },
    { icon: ScanEye, title: "Large-Scale Document Digitization" },
    { icon: Clock, title: "Citizen Service Delays" },
    { icon: Scale, title: "Regulatory & Compliance Requirements" },
    { icon: Languages, title: "Multilingual Communication Needs" },
    { icon: Accessibility, title: "Accessibility Compliance" },
    { icon: ShieldAlert, title: "Cybersecurity Concerns" },
    { icon: Database, title: "Data Interoperability" },
    { icon: DollarSign, title: "Budget & Resource Constraints" },
  ],
};

export const governmentSolutions = {
  heading: "Nine Disciplines. One Government AI Practice.",
  items: [
    {
      icon: Landmark,
      title: "Digital Government Platforms",
      description: "Secure, scalable platforms that simplify citizen interactions and streamline operations.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      description: "Automate document-intensive government workflows end-to-end.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Database,
      title: "AI Data Services",
      description: "High-quality datasets that support public sector AI initiatives.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Radar,
      title: "Smart City Solutions",
      description: "Intelligent technologies that support urban innovation and planning.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Code2,
      title: "Government Software Development",
      description: "Secure enterprise applications built for public sector scale and compliance.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Languages,
      title: "Multilingual Communication",
      description: "Translation and localization that serve diverse populations.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Services",
      description: "Inclusive access to public information for every citizen.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: BookOpen,
      title: "Digital Publishing",
      description: "Public communication materials produced for every channel and format.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Robust security and governance built into every government engagement.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const platformSteps = [
  { icon: FileText, label: "Submit" },
  { icon: Search, label: "Review" },
  { icon: CheckCircle2, label: "Approve" },
  { icon: Send, label: "Deliver" },
];

export const digitalGovernmentPlatforms = {
  heading: "Digital Platforms That Simplify Citizen Interactions",
  description: "Develop secure, scalable platforms that simplify citizen interactions and streamline government operations.",
  steps: platformSteps,
  items: [
    { icon: Users, title: "Citizen Service Portals" },
    { icon: Landmark, title: "e-Governance Applications" },
    { icon: FileCheck2, title: "Online Permit & Licensing Systems" },
    { icon: Receipt, title: "Tax & Revenue Management" },
    { icon: ClipboardList, title: "Public Service Request Portals" },
    { icon: MessageSquareText, title: "Grievance Redressal Systems" },
    { icon: FileStack, title: "Case Management Platforms" },
    { icon: Building2, title: "Internal Administrative Portals" },
  ],
};

export const documentSteps = [
  { icon: FileText, label: "Intake" },
  { icon: ScanEye, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Workflow, label: "Route" },
];

export const documentProcessing = {
  heading: "Automate Document-Intensive Government Workflows",
  description: "Faster processing, reduced manual workload, improved accuracy, and better records management across every document type.",
  steps: documentSteps,
  marqueeItems: [
    { icon: IdCard, title: "Identity Documents" },
    { icon: FileCheck2, title: "Permit Applications" },
    { icon: Receipt, title: "Tax Forms" },
    { icon: Users, title: "Census Records" },
    { icon: Map, title: "Land Records" },
    { icon: Scale, title: "Legal Documents" },
    { icon: Megaphone, title: "Public Notices" },
    { icon: Package, title: "Procurement Documents" },
    { icon: ShieldCheck, title: "Compliance Reports" },
    { icon: Mail, title: "Official Correspondence" },
  ],
};

export const aiDataServices = {
  heading: "Datasets Built for Public Sector AI",
  description: "Support AI initiatives across government and civic technology with high-quality, validated datasets.",
  centerIcon: Database,
  badges: [
    { icon: Tags, label: "NER Datasets", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Map, label: "GIS Annotation", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Mic, label: "Speech Datasets", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: FileText, title: "Document Annotation", description: "Labeled government documents for classification and extraction models." },
    { icon: ScanEye, title: "OCR Annotation", description: "Text extraction datasets for scanned forms, records, and correspondence." },
    { icon: Tags, title: "Named Entity Recognition (NER)", description: "Entity-labeled text for names, addresses, and regulatory references." },
    { icon: Image, title: "Image Annotation", description: "Labeled imagery for public safety, infrastructure, and monitoring models." },
    { icon: Map, title: "GIS & Map Annotation", description: "Geospatial datasets for planning, mapping, and infrastructure models." },
    { icon: Mic, title: "Speech Dataset Collection", description: "Voice datasets for citizen service and multilingual support models." },
    { icon: MessageSquareText, title: "NLP Dataset Preparation", description: "Structured text datasets for chatbots and language understanding models." },
    { icon: CheckCircle2, title: "AI Model Evaluation", description: "Ground truth validation and benchmark creation for public sector AI." },
  ],
};

export const smartCitySteps = [
  { icon: Radar, label: "Monitor" },
  { icon: BarChart3, label: "Analyze" },
  { icon: AlertTriangle, label: "Detect" },
  { icon: LineChart, label: "Report" },
];

export const smartCitySolutions = {
  heading: "Intelligent Technologies for Urban Innovation",
  description: "Support smart city initiatives with data and dashboards that connect transportation, utilities, and public safety.",
  steps: smartCitySteps,
  checklist: [
    { icon: BarChart3, label: "Traffic Analytics", description: "Real-time traffic flow and congestion insight across the city." },
    { icon: ShieldAlert, label: "Public Safety Monitoring", description: "AI-assisted monitoring that supports faster public safety response." },
    { icon: MapPin, label: "Smart Parking", description: "Parking availability and utilization data across municipal zones." },
    { icon: Zap, label: "Utility Monitoring", description: "Real-time visibility into water, power, and utility infrastructure." },
    { icon: Leaf, label: "Environmental Data Dashboards", description: "Air quality, weather, and environmental monitoring in one view." },
    { icon: Building2, label: "Infrastructure Asset Management", description: "Track condition and maintenance needs across public infrastructure." },
    { icon: MessageSquareText, label: "Citizen Feedback Systems", description: "Channels that capture and route citizen feedback to the right teams." },
  ],
};

export const softwareDashboard = {
  heading: "Government Software, Engineered for Scale",
  description: "Build secure enterprise applications that modernize public sector operations end-to-end.",
  panelLabel: "Government Operations Suite",
  tiles: [
    { icon: Workflow, label: "Workflow Automation" },
    { icon: Boxes, label: "Asset Management" },
    { icon: Package, label: "Public Procurement", hasSparkline: true },
    { icon: Users, label: "HR Management" },
    { icon: DollarSign, label: "Budget & Finance" },
    { icon: FileStack, label: "Document Management" },
    { icon: Smartphone, label: "Mobile Government Apps" },
    { icon: BarChart3, label: "Analytics Dashboards", hasLiveDot: true },
  ],
  pills: [
    { icon: Workflow, label: "Workflow Automation Systems" },
    { icon: Boxes, label: "Asset Management Platforms" },
    { icon: Package, label: "Public Procurement Systems" },
    { icon: Users, label: "Human Resource Management Systems" },
    { icon: FileStack, label: "Document Management Systems" },
    { icon: Smartphone, label: "Mobile Government Applications" },
  ],
};

export const communicationAccessibility = {
  heading: "Multilingual, Accessible Public Communication",
  description: "Serve diverse populations with inclusive, multilingual communication across every citizen touchpoint.",
  cards: [
    {
      icon: Languages,
      title: "Multilingual Communication",
      description: "Serve diverse populations through translation, localization, and interpretation.",
      items: ["Government Document Translation", "Public Information Localization", "Website Localization", "Interpretation Services", "Audio & Video Transcription", "Citizen Communication Support"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Services",
      description: "Ensure inclusive access to public information for every citizen.",
      items: ["PDF Accessibility Remediation", "Accessible Government Websites", "Accessible Forms", "WCAG Compliance Support", "Screen Reader Optimization", "Accessible Reports", "Accessible Public Communications"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
  ],
};

export const publishingSecurity = {
  heading: "Public Communication, Backed by Enterprise Security",
  description: "Produce public-facing content and run every engagement under government-grade security and governance.",
  cards: [
    {
      icon: BookOpen,
      title: "Digital Publishing",
      description: "Support public communication initiatives across every format and channel.",
      items: ["Annual Reports", "Policy Publications", "Regulatory Documents", "Public Awareness Materials", "Educational Campaign Content", "Digital Brochures", "Interactive Publications"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: ShieldCheck,
      title: "Security & Compliance",
      description: "Robust security and governance built into every government engagement.",
      items: ["Secure Development Practices", "Role-Based Access Controls", "Audit Trails", "Data Encryption", "Confidentiality Agreements", "Quality Assurance Frameworks", "Secure Collaboration Processes", "Project Governance"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
  ],
};

export const governmentWhoWeServe = {
  heading: "Trusted Across the Public Sector",
  description: "From federal agencies to non-profits, we support every organization modernizing public service delivery.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Government
    </>
  ),
  items: [
    { icon: Landmark, label: "Federal Government Agencies" },
    { icon: Building2, label: "State & Provincial Governments" },
    { icon: MapPin, label: "Municipal Authorities" },
    { icon: Wifi, label: "Smart City Programs" },
    { icon: Stethoscope, label: "Public Health Departments" },
    { icon: GraduationCap, label: "Education Departments" },
    { icon: Truck, label: "Transport Authorities" },
    { icon: Zap, label: "Utility Organizations" },
    { icon: Briefcase, label: "Public Sector Enterprises" },
    { icon: Globe2, label: "International Development Organizations" },
    { icon: HeartHandshake, label: "Non-Profit Organizations (NGOs)" },
  ],
};

export const governmentBusinessBenefits = {
  heading: "Measurable Impact Across Public Services",
  kpis: [
    { value: 40, suffix: "%", label: "Faster Citizen Service Processing" },
    { value: 55, suffix: "%", label: "Reduction in Manual Document Workload" },
    { value: 99, suffix: "%", label: "Data Accuracy in Digitized Records" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Public Records Digitized" },
  ],
  benefits: [
    { icon: Users, title: "Improve Citizen Service Delivery", description: "Faster, more responsive services across every citizen touchpoint." },
    { icon: Rocket, title: "Accelerate Digital Transformation", description: "Modern platforms that replace legacy systems without disruption." },
    { icon: DollarSign, title: "Reduce Administrative Costs", description: "Automation that lowers the cost of manual, paper-based processes." },
    { icon: BarChart3, title: "Increase Operational Efficiency", description: "Streamlined workflows that free staff for higher-value work." },
    { icon: ShieldCheck, title: "Enhance Transparency & Accountability", description: "Auditable systems that strengthen public trust." },
    { icon: Accessibility, title: "Improve Accessibility & Inclusion", description: "Inclusive digital experiences for citizens of every ability." },
    { icon: Server, title: "Modernize Legacy Systems", description: "Application redevelopment and cloud migration that reduce risk." },
    { icon: Database, title: "Support AI-Driven Public Services", description: "Validated data and models that power smarter public decision-making." },
  ],
};

export const governmentWhyUs = {
  heading: "Why Public Sector Organizations Choose Bigwigs",
  items: [
    { icon: ShieldCheck, title: "Expertise in Secure Enterprise Solutions", description: "Deep experience delivering secure, compliant public sector systems.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Database, title: "AI & Automation Capabilities", description: "Proven data services and automation for citizen-facing workflows.", gradient: "from-violet-500 to-purple-400" },
    { icon: BookOpen, title: "Digital Publishing & Accessibility Experience", description: "Specialist teams for public content and inclusive digital access.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Languages, title: "Multilingual Service Delivery", description: "Translation and localization expertise across diverse populations.", gradient: "from-orange-500 to-amber-400" },
    { icon: Globe2, title: "Scalable Global Delivery Model", description: "Distributed teams that scale with agency size and program growth.", gradient: "from-rose-500 to-pink-400" },
    { icon: CheckCircle2, title: "Strong Quality Assurance", description: "Multi-layer QA built for the accuracy public sector work demands.", gradient: "from-brand-blue-500 to-indigo-400" },
    { icon: Handshake, title: "Flexible Engagement Models", description: "Scoped pilots that scale into long-term delivery partnerships.", gradient: "from-cyan-500 to-brand-blue-400" },
    { icon: HeartHandshake, title: "Long-Term Technology Partnership Approach", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-orange-500 to-rose-400" },
  ],
};

export const governmentUseCases = {
  heading: "AI Built for Government & Public Sector Workflows",
  description: "From citizen portals to smart city dashboards, our AI solutions help public institutions serve communities faster and more transparently.",
  items: [
    { id: "citizen-service-portal", icon: Users, title: "Citizen Service Portal", description: "Develop a unified digital platform where citizens can apply for permits, submit service requests, track applications, and access government services online.", outcome: "Unified access across every government service", href: "#contact" },
    { id: "document-digitization", icon: ScanEye, title: "AI-Powered Document Digitization", description: "Digitize and classify historical records, legal documents, and public archives using OCR, AI, and intelligent document processing.", outcome: "55% reduction in manual document workload", href: "#contact" },
    { id: "smart-city-dashboard", icon: Radar, title: "Smart City Analytics Dashboard", description: "Build dashboards that integrate transportation, utilities, public safety, and environmental data to support informed urban planning.", outcome: "Real-time visibility across city infrastructure", href: "#contact" },
    { id: "accessible-public-documents", icon: Accessibility, title: "Accessible Public Documents", description: "Convert government reports, forms, and policy documents into accessible digital formats that comply with international accessibility standards.", outcome: "100% WCAG-compliant public communications", href: "#contact" },
    { id: "multilingual-communication", icon: Languages, title: "Multilingual Government Communication", description: "Translate public notices, policy documents, and citizen communications into multiple languages to improve accessibility and community engagement.", outcome: "Public content localized across new communities", href: "#contact" },
  ],
};

export const governmentProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess organizational goals, regulatory requirements, and stakeholder needs." },
  { icon: PenTool, title: "Design", description: "Define secure solution architecture, workflows, and implementation plans." },
  { icon: Code2, title: "Develop", description: "Build applications, prepare AI datasets, digitize records, and automate processes." },
  { icon: CheckCircle2, title: "Validate", description: "Conduct quality assurance, accessibility testing, security validation, and user acceptance testing." },
  { icon: Rocket, title: "Deploy & Support", description: "Deploy solutions, train users, monitor adoption, and provide continuous enhancement." },
];

export const governmentProcess = {
  heading: "From Discovery to Continuous Enhancement",
  steps: governmentProcessSteps,
  desktopColumnsClassName: "grid-cols-5",
};

export const governmentFaq = {
  items: [
    { question: "Can you modernize legacy government applications?", answer: "Yes. We help modernize existing systems through application redevelopment, cloud migration support, workflow automation, and system integration." },
    { question: "Do you support accessibility compliance?", answer: "Yes. We provide accessibility remediation, WCAG compliance support, accessible document creation, and inclusive digital experience design." },
    { question: "Can you process large volumes of government records?", answer: "Absolutely. Our intelligent document processing and AI-powered data services help digitize, classify, validate, and manage high-volume public records efficiently." },
  ],
};

export const governmentBottomCta = {
  icon: Landmark,
  heading: (
    <>
      Build Smarter
      <br />
      Public Services with AI
    </>
  ),
  description:
    "Whether you're modernizing citizen services, digitizing records, implementing smart city initiatives, or improving accessibility, Bigwigs Technologies provides secure, scalable, and innovative solutions to help transform public sector operations.",
  primaryAction: { label: "Schedule a Government Digital Transformation Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Public Sector Technology Experts", href: "#contact", showArrow: true },
};
