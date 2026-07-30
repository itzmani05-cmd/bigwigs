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
  Camera,
  Tags,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Gauge,
  Eye,
  Truck,
  Boxes,
  Server,
  DollarSign,
  Radar,
  Flame,
  Paintbrush,
  Package,
  QrCode,
  Activity,
  TrendingUp,
  AlertTriangle,
  CalendarDays,
  Image,
  Layers,
  Video,
  Warehouse,
  ShieldCheck,
  Users,
  LineChart,
  Smartphone,
  ClipboardCheck,
  ClipboardList,
  BookOpen,
  Receipt,
  FileSignature,
  PenTool,
  FileStack,
  Car,
  Cpu,
  Rocket,
  FlaskConical,
  UtensilsCrossed,
  Beaker,
  Shirt,
  BrainCircuit,
  Handshake,
  Globe2,
  Search,
  Workflow,
} from "lucide-react";

export const manufacturingHero = {
  eyebrow: "Manufacturing & Industrial Solutions",
  heading: (
    <>
      Driving Smart Manufacturing
      <br />
      Through{" "}
      <span className="text-blue-500">
        AI, Automation &amp;
        <br />
        Digital Transformation
      </span>
    </>
  ),
  description:
    "Manufacturing is transforming through Industry 4.0, Industrial IoT, robotics, and intelligent automation. Bigwigs Technologies empowers manufacturers with AI-driven solutions, software engineering, predictive maintenance, quality inspection, and factory intelligence.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our Experts", href: "/contact" },
  trustedBy: ["Automotive Manufacturing", "Electronics Manufacturing", "Aerospace & Defense",],
  visualIcon: Factory,
  badges: [
    { icon: ScanEye, label: "Quality Inspection AI", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Wrench, label: "Predictive Maintenance", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: BarChart3, label: "Factory Analytics Platform", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const manufacturingChallenges = {
  heading: (
    <>
      The Realities Manufacturers
      <br />
      Are Solving For
    </>
  ),
  description:
    "Manufacturing organizations are under pressure to modernize operations while managing downtime, quality, and rising costs.",
  items: [
    {
      icon: Clock,
      title: "Unplanned Equipment Downtime",
      description: "Unexpected failures halt production lines and erode margins before teams can react.",
    },
    { icon: ShieldAlert, title: "Quality Control Inconsistencies" },
    { icon: Gauge, title: "Production Inefficiencies" },
    { icon: Eye, title: "Manual Inspection Processes" },
    { icon: Truck, title: "Supply Chain Disruptions" },
    { icon: Boxes, title: "Inventory Optimization Challenges" },
    { icon: HardHat, title: "Worker Safety Concerns" },
    { icon: Server, title: "Legacy Manufacturing Systems" },
    { icon: DollarSign, title: "Rising Operational Costs" },
    { icon: Radar, title: "Limited Real-Time Visibility" },
  ],
};

export const manufacturingSolutions = {
  heading: "Eight Disciplines. One Manufacturing AI Practice.",
  items: [
    {
      icon: ScanEye,
      title: "Computer Vision for Quality Inspection",
      description: "AI-powered visual inspection that catches defects across every stage of production.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Wrench,
      title: "Predictive Maintenance",
      description: "Analyze equipment performance and flag maintenance needs before failures occur.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Code2,
      title: "Industrial Software Development",
      description: "Custom MES, inventory, quality, and factory analytics applications built for scale.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: FileText,
      title: "Intelligent Document Processing",
      description: "Automate extraction and routing of manufacturing documentation end-to-end.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "AI Data Collection & Annotation",
      description: "Support industrial AI initiatives with labeled datasets across every data type.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: BarChart3,
      title: "Industrial Analytics",
      description: "AI-driven insights that improve production, yield, and operational performance.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: HardHat,
      title: "Worker Safety Solutions",
      description: "AI-enabled monitoring that improves workplace safety on the factory floor.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility & Documentation",
      description: "Accessible technical manuals and documentation for every manufacturing team.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const inspectionSteps = [
  { icon: Camera, label: "Capture" },
  { icon: ScanEye, label: "Detect" },
  { icon: Tags, label: "Classify" },
  { icon: CheckCircle2, label: "Validate" },
];

export const computerVisionInspection = {
  heading: "AI-Powered Visual Inspection for Every Production Line",
  description: "Improve manufacturing quality with AI-powered visual inspection systems that catch defects human inspectors miss.",
  steps: inspectionSteps,
  items: [
    { icon: ScanEye, title: "Surface Defect Detection" },
    { icon: Boxes, title: "Component Inspection" },
    { icon: CheckCircle2, title: "Assembly Verification" },
    { icon: Flame, title: "Weld Inspection" },
    { icon: Paintbrush, title: "Paint Quality Analysis" },
    { icon: Package, title: "Packaging Inspection" },
    { icon: QrCode, title: "Barcode & QR Code Verification" },
    { icon: Tags, title: "Product Classification" },
  ],
};

export const maintenanceSteps = [
  { icon: Radar, label: "Monitor" },
  { icon: BarChart3, label: "Analyze" },
  { icon: TrendingUp, label: "Predict" },
  { icon: AlertTriangle, label: "Alert" },
];

export const predictiveMaintenance = {
  heading: "Reduce Downtime Before It Happens",
  description: "Analyze equipment performance and identify maintenance needs before failures occur.",
  steps: maintenanceSteps,
  checklist: [
    { icon: Activity, label: "Equipment Health Monitoring", description: "Continuous tracking of machine condition across the production line." },
    { icon: Gauge, label: "Maintenance Dashboards", description: "Real-time visibility into asset status, alerts, and service history." },
    { icon: Radar, label: "Sensor Data Analysis", description: "Turn raw sensor streams into actionable maintenance insights." },
    { icon: AlertTriangle, label: "Predictive Alerts", description: "Early warnings that flag anomalies before they cause failures." },
    { icon: CalendarDays, label: "Maintenance Scheduling", description: "Plan service windows around predicted failure risk, not fixed intervals." },
    { icon: TrendingUp, label: "Asset Performance Analytics", description: "Track performance trends across equipment fleets over time." },
  ],
};

export const aiDataServices = {
  heading: "Datasets Built for Industrial Quality AI",
  description: "High-quality annotated datasets that power computer vision models across every inspection use case.",
  centerIcon: Tags,
  badges: [
    { icon: Image, label: "Defect Labeling", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Layers, label: "Semantic Segmentation", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: ScanEye, label: "Object Detection", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Image, title: "Image Annotation", description: "Labeled imagery for defect detection and product classification models." },
    { icon: Video, title: "Video Annotation", description: "Frame-level annotation for production line and assembly monitoring." },
    { icon: Tags, title: "Defect Labeling", description: "Precise labeling of surface defects, cracks, and assembly errors." },
    { icon: Layers, title: "Semantic Segmentation", description: "Pixel-level labeling for detailed component and defect analysis." },
    { icon: ScanEye, title: "Object Detection", description: "Bounding-box datasets for parts, tools, and packaging recognition." },
    { icon: FileText, title: "OCR Annotation", description: "Text extraction datasets for labels, nameplates, and printed markings." },
  ],
};

export const softwareDashboard = {
  heading: "Manufacturing Software, Engineered for the Factory Floor",
  description: "Custom manufacturing applications built for scale, compliance, and real-time visibility.",
  panelLabel: "Manufacturing Operations Suite",
  tiles: [
    { icon: Factory, label: "MES" },
    { icon: BarChart3, label: "Production Monitoring", hasSparkline: true },
    { icon: Boxes, label: "Inventory Management" },
    { icon: Warehouse, label: "Warehouse Management" },
    { icon: ShieldCheck, label: "Quality Management" },
    { icon: Users, label: "Supplier Portals" },
    { icon: LineChart, label: "Factory Analytics", hasLiveDot: true },
    { icon: Smartphone, label: "Mobile Manufacturing Apps" },
  ],
  pills: [
    { icon: Factory, label: "Manufacturing Execution Systems" },
    { icon: BarChart3, label: "Production Monitoring Dashboards" },
    { icon: Boxes, label: "Inventory Management Systems" },
    { icon: Warehouse, label: "Warehouse Management Systems" },
    { icon: ShieldCheck, label: "Quality Management Systems" },
    { icon: Smartphone, label: "Mobile Manufacturing Apps" },
  ],
};

export const documentSteps = [
  { icon: FileText, label: "Intake" },
  { icon: ScanEye, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Workflow, label: "Route" },
];

export const documentProcessing = {
  heading: "Automate Manufacturing Documentation Workflows",
  description: "We extract, validate, and route manufacturing documentation end-to-end — cutting manual effort across every stage.",
  steps: documentSteps,
  marqueeItems: [
    { icon: ClipboardCheck, title: "Quality Inspection Reports" },
    { icon: ClipboardList, title: "Production Logs" },
    { icon: FileText, title: "Work Orders" },
    { icon: BookOpen, title: "Equipment Manuals" },
    { icon: Receipt, title: "Supplier Invoices" },
    { icon: FileSignature, title: "Purchase Orders" },
    { icon: ShieldCheck, title: "Compliance Documents" },
    { icon: ShieldAlert, title: "Safety Reports" },
    { icon: PenTool, title: "Engineering Drawings" },
    { icon: FileStack, title: "Bills of Materials (BOM)" },
  ],
};

export const dataAnalytics = {
  heading: "Data and Analytics That Keep Production Moving",
  description: "Support industrial AI initiatives and turn operational data into decisions that improve performance.",
  cards: [
    {
      icon: Database,
      title: "AI Data Collection & Annotation",
      description: "Support industrial AI initiatives with data collected directly from the factory floor.",
      items: ["Machine Image Collection", "Production Line Video Collection", "Defect Image Datasets", "Industrial OCR Datasets", "Equipment Audio Collection", "Safety Incident Datasets"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Industrial Analytics",
      description: "Leverage AI and analytics to improve operational performance across the plant.",
      items: ["Production Forecasting", "Yield Optimization", "Downtime Analysis", "Inventory Planning", "Energy Consumption Monitoring", "Resource Utilization", "Root Cause Analysis"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const safetyAccessibility = {
  heading: "Safer Floors, More Inclusive Documentation",
  description: "Improve workplace safety and support every team member with accessible manufacturing documentation.",
  cards: [
    {
      icon: HardHat,
      title: "Worker Safety Solutions",
      description: "Improve workplace safety using AI-enabled monitoring.",
      items: ["PPE Detection", "Restricted Area Monitoring", "Hazard Detection", "Worker Presence Monitoring", "Safety Compliance Reporting", "Incident Analytics"],
      glowColor: "rgba(244,63,94,0.3)",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility & Documentation",
      description: "Support manufacturing organizations with accessible technical documentation.",
      items: ["Accessible Technical Manuals", "PDF Accessibility", "Digital Work Instructions", "Maintenance Documentation", "Operator Training Materials", "Engineering Documentation"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
  ],
};

export const manufacturingWhoWeServe = {
  heading: "Trusted Across Manufacturing & Industrial Sectors",
  description: "From automotive to pharmaceuticals, we support manufacturers building smarter, safer operations.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Manufacturing
    </>
  ),
  items: [
    { icon: Car, label: "Automotive Manufacturing" },
    { icon: Cpu, label: "Electronics Manufacturing" },
    { icon: Rocket, label: "Aerospace & Defense" },
    { icon: Factory, label: "Industrial Equipment" },
    { icon: Package, label: "Consumer Goods" },
    { icon: FlaskConical, label: "Pharmaceuticals" },
    { icon: UtensilsCrossed, label: "Food & Beverage" },
    { icon: Beaker, label: "Chemical Manufacturing" },
    { icon: Shirt, label: "Textile & Apparel" },
    { icon: Boxes, label: "Packaging" },
  ],
};

export const manufacturingBusinessBenefits = {
  heading: "Measurable Impact Across Factory Operations",
  kpis: [
    { value: 30, suffix: "%", label: "Reduction in Equipment Downtime" },
    { value: 40, suffix: "%", label: "Faster Defect Detection" },
    { value: 99, suffix: "%", label: "Inspection Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Production Records Processed" },
  ],
  benefits: [
    { icon: Gauge, title: "Improve Production Efficiency", description: "Automation and analytics that keep lines running at peak throughput." },
    { icon: Wrench, title: "Reduce Equipment Downtime", description: "Predictive maintenance that catches failures before they halt production." },
    { icon: ScanEye, title: "Enhance Product Quality", description: "Computer vision inspection that catches defects earlier and more consistently." },
    { icon: DollarSign, title: "Lower Operational Costs", description: "Automation that reduces the cost of manual, document-heavy processes." },
    { icon: HardHat, title: "Increase Workplace Safety", description: "AI-enabled monitoring that reduces incidents on the factory floor." },
    { icon: Truck, title: "Improve Supply Chain Visibility", description: "Real-time data that keeps production and logistics teams aligned." },
  ],
};

export const manufacturingWhyUs = {
  heading: "Why Manufacturers Choose Bigwigs",
  items: [
    { icon: BrainCircuit, title: "AI & Industrial Automation Expertise", description: "Deep experience building AI models for inspection, maintenance, and factory operations.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: ScanEye, title: "Strong Computer Vision Capabilities", description: "Specialist teams for defect detection, segmentation, and industrial imaging.", gradient: "from-violet-500 to-purple-400" },
    { icon: Code2, title: "Enterprise Software Development Experience", description: "Proven delivery of MES, quality, and factory analytics platforms.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: CheckCircle2, title: "Structured Quality Assurance", description: "Multi-layer QA processes built for the precision manufacturing demands.", gradient: "from-orange-500 to-amber-400" },
    { icon: Handshake, title: "Flexible Engagement Models", description: "Scoped pilots that scale into long-term delivery partnerships.", gradient: "from-rose-500 to-pink-400" },
    { icon: Globe2, title: "Scalable Global Delivery", description: "Distributed teams that scale with your production footprint.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const manufacturingUseCases = {
  heading: "AI Built for Manufacturing Workflows",
  description: "From defect detection to supplier document automation, our AI solutions help manufacturers run smarter, safer operations.",
  items: [
    { id: "defect-detection", icon: ScanEye, title: "Automated Defect Detection", description: "Train computer vision models to identify scratches, cracks, dents, and assembly defects with high accuracy.", outcome: "40% faster defect detection turnaround", href: "#contact" },
    { id: "factory-dashboard", icon: BarChart3, title: "Smart Factory Dashboard", description: "Develop real-time dashboards displaying production metrics, equipment status, quality indicators, and maintenance alerts.", outcome: "Real-time visibility across every production line", href: "#contact" },
    { id: "predictive-maintenance-platform", icon: Wrench, title: "Predictive Maintenance Platform", description: "Analyze machine performance data to forecast failures, reduce downtime, and optimize maintenance schedules.", outcome: "30% reduction in unplanned downtime", href: "#contact" },
    { id: "digital-qms", icon: ShieldCheck, title: "Digital Quality Management", description: "Automate quality inspections, generate reports, and improve traceability across production lines.", outcome: "Improved traceability across every batch", href: "#contact" },
    { id: "supplier-doc-automation", icon: Receipt, title: "Supplier Document Automation", description: "Extract, validate, and process purchase orders, invoices, and shipping documentation using AI-powered document processing.", outcome: "50% faster supplier document turnaround", href: "#contact" },
  ],
};

export const manufacturingProcessSteps = [
  { icon: Search, title: "Discover", description: "Assess manufacturing operations, business goals, production challenges, and technology requirements." },
  { icon: PenTool, title: "Design", description: "Create solution architecture, AI workflows, integration plans, and project roadmaps." },
  { icon: Code2, title: "Build", description: "Develop software, prepare AI datasets, automate processes, and integrate with existing manufacturing systems." },
  { icon: CheckCircle2, title: "Validate", description: "Perform functional testing, quality assurance, user acceptance testing (UAT), and performance validation." },
  { icon: Rocket, title: "Deploy & Optimize", description: "Deploy solutions, train users, monitor KPIs, and continuously improve operational performance." },
];

export const manufacturingProcess = {
  heading: "From Discovery to Continuous Optimization",
  steps: manufacturingProcessSteps,
  desktopColumnsClassName: "grid-cols-3 xl:grid-cols-5",
};

export const manufacturingFaq = {
  items: [
    { question: "Can you integrate with our existing ERP or MES systems?", answer: "Yes. We develop integration solutions that work with existing ERP, MES, inventory, and production systems to minimize disruption and maximize operational efficiency." },
    { question: "Do you support AI-powered quality inspection?", answer: "Yes. We provide image annotation, computer vision datasets, AI model evaluation support, and software solutions for automated visual inspection." },
    { question: "Can you build custom manufacturing dashboards?", answer: "Absolutely. We design real-time dashboards that provide visibility into production, quality, maintenance, inventory, and operational KPIs." },
  ],
};

export const manufacturingBottomCta = {
  icon: Factory,
  heading: (
    <>
      Build the Factory
      <br />
      of the Future
    </>
  ),
  description:
    "Whether you're implementing Industry 4.0 initiatives, improving quality inspection, optimizing production, or deploying AI-powered manufacturing solutions, Bigwigs Technologies delivers the expertise and scalable technology to help you achieve operational excellence.",
  primaryAction: { label: "Schedule a Manufacturing Solutions Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Industrial Technology Experts", href: "#contact", showArrow: true },
};
