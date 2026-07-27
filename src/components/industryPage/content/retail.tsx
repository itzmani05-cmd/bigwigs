import {
  ShoppingCart,
  ShoppingBag,
  Sparkles,
  ScanEye,
  Camera,
  BarChart3,
  Boxes,
  TrendingUp,
  FileStack,
  ShieldAlert,
  Headset,
  Share2,
  Truck,
  Warehouse,
  Tags,
  Image,
  Copy,
  CheckCircle2,
  Receipt,
  Code2,
  LineChart,
  Languages,
  Accessibility,
  FileText,
  FileSignature,
  Store,
  Globe2,
  Gem,
  Shirt,
  MonitorSmartphone,
  Package,
  MessageSquareText,
  Percent,
  Rocket,
  Handshake,
  Search,
  PenTool,
  ClipboardCheck,
  Users,
  ScanBarcode,
  Star,
  BrainCircuit,
} from "lucide-react";

export const retailHero = {
  eyebrow: "Retail & E-Commerce Solutions",
  heading: (
    <>
      Transforming Retail
      <br />
      With{" "}
      <span className="text-blue-500">
        AI, Automation &amp;
        <br />
        Intelligent Experiences
      </span>
    </>
  ),
  description:
    "We help retailers, e-commerce companies, marketplaces, consumer brands, and logistics providers harness AI, automation, and modern software solutions to accelerate growth and deliver exceptional customer experiences.",
  primaryCta: { label: "Schedule a Retail Solutions Consultation", href: "#contact" },
  secondaryCta: { label: "Speak with Our Retail Technology Experts", href: "#contact" },
  trustedBy: ["E-Commerce Companies", "Online Marketplaces", "Retail Chains", "Fashion & Apparel Brands", "FMCG Companies", "D2C Brands"],
  visualIcon: ShoppingCart,
  badges: [
    { icon: Sparkles, label: "Product Recommendations", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: ScanEye, label: "Visual Search", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: BarChart3, label: "Inventory Analytics", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const retailChallenges = {
  heading: (
    <>
      The Realities Retail
      <br />
      Teams Are Solving For
    </>
  ),
  description:
    "Every retailer and e-commerce brand is racing to personalize, automate, and optimize under rising cost pressure.",
  items: [
    {
      icon: Percent,
      title: "Increasing Customer Acquisition Costs",
      description: "Rising ad and channel costs are squeezing margins across every retail category.",
    },
    { icon: Boxes, title: "Inventory Optimization Challenges" },
    { icon: TrendingUp, title: "Demand Forecasting Complexity" },
    { icon: FileStack, title: "Product Catalog Management" },
    { icon: ShieldAlert, title: "Fraud Prevention" },
    { icon: Headset, title: "Customer Service Scalability" },
    { icon: Share2, title: "Omnichannel Integration" },
    { icon: Warehouse, title: "Warehouse Efficiency" },
    { icon: Truck, title: "Supply Chain Visibility" },
    { icon: Sparkles, title: "Personalized Shopping Experiences" },
  ],
};

export const retailSolutions = {
  heading: "Nine Disciplines. One Retail AI Practice.",
  items: [
    {
      icon: FileStack,
      title: "AI Product Catalog Management",
      description: "Maintain accurate, structured, and enriched product information across every channel.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: ScanEye,
      title: "Computer Vision for Retail",
      description: "AI-powered image analysis for shelf monitoring, checkout automation, and loss prevention.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Receipt,
      title: "Intelligent Document Processing",
      description: "Automated processing of purchase orders, invoices, and shipping documents.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: MessageSquareText,
      title: "AI-Powered Customer Experience",
      description: "Personalized recommendations, chatbots, and sentiment analysis that deepen engagement.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Code2,
      title: "Retail Software Development",
      description: "Custom e-commerce, POS, and inventory platforms engineered for scale.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Tags,
      title: "Data Annotation for Retail AI",
      description: "High-quality labeled datasets for product, shelf, and customer behavior AI models.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "AI-driven forecasting for demand, sales, pricing, and customer lifetime value.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: Languages,
      title: "Voice & Language Services",
      description: "Multilingual translation, localization, and conversational AI training data.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility & Digital Content",
      description: "Accessible catalogs, marketing materials, and inclusive customer communications.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const catalogSteps = [
  { icon: Boxes, label: "Collect" },
  { icon: Tags, label: "Enrich" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: FileStack, label: "Standardize" },
];

export const catalogManagement = {
  heading: "Product Catalogs, Structured for Scale",
  description: "Maintain accurate, structured, and enriched product information across every channel.",
  steps: catalogSteps,
  items: [
    { icon: Boxes, title: "Product Data Collection" },
    { icon: FileStack, title: "Product Categorization" },
    { icon: Image, title: "Image Tagging" },
    { icon: Tags, title: "Attribute Extraction" },
    { icon: FileText, title: "Metadata Creation" },
    { icon: Copy, title: "Duplicate Detection" },
    { icon: CheckCircle2, title: "Product Validation" },
    { icon: ClipboardCheck, title: "Catalog Standardization" },
  ],
};

export const computerVision = {
  heading: "Computer Vision Built for Retail Operations",
  description: "Leverage AI-powered image analysis to improve operations from shelf to checkout.",
  centerIcon: ScanEye,
  badges: [
    { icon: Camera, label: "Product Recognition", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ScanBarcode, label: "Checkout Automation", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: ShieldAlert, label: "Loss Prevention", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Camera, title: "Product Recognition", description: "Identify SKUs and products automatically from images and video." },
    { icon: Store, title: "Shelf Monitoring", description: "Detect out-of-stock, misplaced, and low-inventory shelf conditions." },
    { icon: Boxes, title: "Inventory Detection", description: "Vision models that track stock levels across store and warehouse." },
    { icon: ScanEye, title: "Visual Search", description: "Let customers find products by uploading an image, not just keywords." },
    { icon: ScanBarcode, title: "Barcode Recognition", description: "Fast, accurate barcode reading across checkout and inventory flows." },
    { icon: Search, title: "Package Inspection", description: "Automated quality checks for packaging and shipment accuracy." },
    { icon: CheckCircle2, title: "Checkout Automation", description: "Vision-powered self-checkout and frictionless payment experiences." },
    { icon: ShieldAlert, title: "Loss Prevention Analytics", description: "Detect shrinkage and suspicious activity across store locations." },
  ],
};

export const softwareDashboard = {
  heading: "Retail Software, Built to Sell",
  description: "We build custom retail solutions that keep commerce, inventory, and loyalty connected.",
  panelLabel: "Retail Operations Suite",
  tiles: [
    { icon: ShoppingCart, label: "E-Commerce Platforms" },
    { icon: Store, label: "Marketplace Applications" },
    { icon: Boxes, label: "Inventory Management" },
    { icon: Warehouse, label: "Warehouse Management", hasSparkline: true },
    { icon: MonitorSmartphone, label: "Point-of-Sale (POS)" },
    { icon: Receipt, label: "Order Management", hasLiveDot: true },
    { icon: Star, label: "Customer Loyalty" },
    { icon: ShoppingBag, label: "Mobile Shopping Apps" },
  ],
  pills: [
    { icon: ShoppingCart, label: "E-Commerce Platforms" },
    { icon: Store, label: "Marketplace Applications" },
    { icon: Boxes, label: "Inventory Management Systems" },
    { icon: Warehouse, label: "Warehouse Management Systems" },
    { icon: MonitorSmartphone, label: "Point-of-Sale Systems" },
    { icon: ShoppingBag, label: "Mobile Shopping Apps" },
  ],
};

export const documentSteps = [
  { icon: FileText, label: "Intake" },
  { icon: ScanEye, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Share2, label: "Route" },
];

export const documentProcessing = {
  heading: "Automate Retail Document Workflows",
  description: "We digitize and process purchase orders, invoices, and shipping documents end-to-end.",
  steps: documentSteps,
  marqueeItems: [
    { icon: FileText, title: "Purchase Orders" },
    { icon: Receipt, title: "Supplier Invoices" },
    { icon: Truck, title: "Shipping Documents" },
    { icon: FileStack, title: "Product Catalogs" },
    { icon: Receipt, title: "Receipts" },
    { icon: FileSignature, title: "Vendor Agreements" },
    { icon: FileText, title: "Return Forms" },
  ],
};

export const predictiveAnalytics = {
  heading: "Predictive Analytics for Smarter Retail Decisions",
  description: "Enable smarter business decisions with AI-driven insights across demand, pricing, and customers.",
  steps: [
    { icon: Boxes, label: "Data" },
    { icon: BrainCircuit, label: "Model" },
    { icon: LineChart, label: "Forecast" },
    { icon: CheckCircle2, label: "Act" },
  ],
  checklist: [
    { icon: TrendingUp, label: "Demand Forecasting", description: "Predict product demand across channels, seasons, and locations." },
    { icon: LineChart, label: "Sales Forecasting", description: "Forward-looking revenue models that inform planning and budgeting." },
    { icon: Boxes, label: "Inventory Optimization", description: "Right-size stock levels to reduce shortages and overstocking." },
    { icon: Users, label: "Customer Lifetime Value Prediction", description: "Identify high-value customers to prioritize retention efforts." },
    { icon: ShieldAlert, label: "Churn Prediction", description: "Flag at-risk customers before they disengage or leave." },
    { icon: Percent, label: "Dynamic Pricing Support", description: "Data-driven pricing models that respond to demand and competition." },
  ],
};

export const voiceLanguageAccessibility = {
  heading: "Multilingual & Accessible by Design",
  description: "Reach every customer with accessible, multilingual retail content and communications.",
  cards: [
    {
      icon: Languages,
      title: "Voice & Language Services",
      description: "Enhance customer communication across every language and market you serve.",
      items: ["Multilingual Translation", "Product Description Localization", "Customer Support Transcription", "Voice Dataset Collection", "Conversational AI Training Data"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility & Digital Content",
      description: "Improve digital inclusivity across every customer-facing touchpoint.",
      items: ["Accessible Product Catalogs", "Accessible Marketing Materials", "PDF Accessibility", "Digital Publishing", "Accessible User Guides", "Inclusive Customer Communications"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
  ],
};

export const retailWhoWeServe = {
  heading: "Trusted Across Retail & Commerce",
  description: "From marketplaces to D2C brands, we support every organization building the future of retail.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Retail
    </>
  ),
  items: [
    { icon: ShoppingCart, label: "E-Commerce Companies" },
    { icon: Globe2, label: "Online Marketplaces" },
    { icon: Store, label: "Retail Chains" },
    { icon: ShoppingBag, label: "Supermarkets" },
    { icon: Shirt, label: "Fashion & Apparel Brands" },
    { icon: MonitorSmartphone, label: "Consumer Electronics Retailers" },
    { icon: Package, label: "FMCG Companies" },
    { icon: Gem, label: "Luxury Brands" },
    { icon: Truck, label: "Wholesale Distributors" },
    { icon: Users, label: "Direct-to-Consumer (D2C) Brands" },
  ],
};

export const retailBusinessBenefits = {
  heading: "Measurable Impact Across the Retail Funnel",
  kpis: [
    { value: 28, suffix: "%", label: "Increase in Conversion Rate" },
    { value: 35, suffix: "%", label: "Faster Order Processing" },
    { value: 99, suffix: "%", label: "Product Data Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Products Catalogued" },
  ],
  benefits: [
    { icon: Sparkles, title: "Improve Customer Engagement", description: "Personalized experiences that keep shoppers coming back." },
    { icon: Boxes, title: "Optimize Inventory Management", description: "Predictive stock levels that cut shortages and overstocking." },
    { icon: Percent, title: "Reduce Operational Costs", description: "Automation that lowers the cost of catalog and document work." },
    { icon: Rocket, title: "Accelerate Order Processing", description: "Faster fulfillment from purchase order to shipment." },
    { icon: TrendingUp, title: "Improve Demand Forecasting", description: "AI-driven forecasts that sharpen planning and buying decisions." },
    { icon: Globe2, title: "Scale Digital Commerce Operations", description: "Platforms and teams that scale with peak seasons and growth." },
  ],
};

export const retailWhyUs = {
  heading: "Why Retailers Choose Bigwigs",
  items: [
    { icon: BrainCircuit, title: "AI & Automation Expertise", description: "Deep experience building AI models for catalog, vision, and customer data.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Code2, title: "Enterprise Software Development Capabilities", description: "Proven delivery of e-commerce, POS, and inventory platforms.", gradient: "from-violet-500 to-purple-400" },
    { icon: CheckCircle2, title: "Strong Data Quality Processes", description: "Multi-layer QA built for the accuracy retail catalogs demand.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Languages, title: "Experience With Multilingual Content", description: "Translation and localization expertise across global markets.", gradient: "from-orange-500 to-amber-400" },
    { icon: Globe2, title: "Scalable Delivery Teams", description: "Distributed teams that scale with peak seasons and growth.", gradient: "from-rose-500 to-pink-400" },
    { icon: Handshake, title: "Customer-Focused Innovation", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const retailUseCases = {
  heading: "AI Built for Retail & E-Commerce Workflows",
  description: "From recommendations to invoice processing, our AI solutions help retailers grow faster without adding operational drag.",
  items: [
    { id: "recommendation-engine", icon: Sparkles, title: "AI Product Recommendation Engine", description: "Develop AI-ready datasets and software integrations that enable personalized product recommendations based on customer behavior and preferences.", outcome: "25% increase in average order value", href: "#contact" },
    { id: "smart-inventory", icon: Boxes, title: "Smart Inventory Management", description: "Implement predictive analytics and automated inventory tracking to optimize stock levels and reduce shortages or overstocking.", outcome: "30% reduction in stockouts", href: "#contact" },
    { id: "invoice-automation", icon: Receipt, title: "Automated Invoice Processing", description: "Use AI-powered document processing to extract, validate, and manage supplier invoices with reduced manual effort.", outcome: "50% faster invoice turnaround", href: "#contact" },
    { id: "visual-search", icon: ScanEye, title: "Visual Search for E-Commerce", description: "Enable customers to upload images and discover visually similar products using computer vision technologies.", outcome: "20% increase in product discovery", href: "#contact" },
    { id: "support-automation", icon: Headset, title: "Retail Customer Support Automation", description: "Deploy AI chatbots and multilingual virtual assistants to improve customer engagement, resolve common inquiries, and provide 24/7 support.", outcome: "60% faster response times, 24/7 coverage", href: "#contact" },
  ],
};

export const retailCaseStudy = {
  heading: "Helping Retailers Build AI Faster",
  description: "We partner with retailers, marketplaces, and consumer brands to turn raw product and customer data into annotated, model-ready datasets and production-grade retail AI systems.",
  stats: [
    { value: "96%", label: "Catalog Accuracy" },
    { value: "70+", label: "Retail Projects" },
    { value: "Millions", label: "Products Catalogued" },
  ],
  ctaHref: "/case-studies/retail-visual-catalog-automation",
  chartLabels: { primary: "Sales KPIs", secondary: "Inventory Analytics", trend: "Demand Insights" },
};

export const retailProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand business objectives, customer journeys, and operational challenges." },
  { icon: PenTool, title: "Design", description: "Develop solution architecture, AI workflows, and implementation roadmaps." },
  { icon: Code2, title: "Build", description: "Develop software, prepare AI datasets, automate workflows, and integrate systems." },
  { icon: CheckCircle2, title: "Validate", description: "Conduct comprehensive testing, quality assurance, and performance optimization." },
  { icon: Rocket, title: "Launch & Optimize", description: "Deploy solutions, monitor results, and continuously improve performance based on business outcomes." },
];

export const retailProcess = {
  heading: "From Discovery to Continuous Optimization",
  steps: retailProcessSteps,
  desktopColumnsClassName: "grid-cols-5",
};

export const retailFaq = {
  items: [
    { question: "Can you develop custom e-commerce platforms?", answer: "Yes. We design and develop scalable e-commerce platforms, marketplaces, mobile shopping applications, and retail management systems tailored to business requirements." },
    { question: "Do you support AI initiatives for retailers?", answer: "Yes. We provide AI data preparation, computer vision datasets, predictive analytics support, intelligent document processing, and AI-powered customer engagement solutions." },
    { question: "Can you integrate with existing retail systems?", answer: "Yes. We can integrate with ERP, CRM, payment gateways, inventory systems, logistics platforms, and other enterprise applications to ensure seamless operations." },
    { question: "Can you help with product catalog and image annotation at scale?", answer: "Yes. Our teams handle high-volume product, shelf, and fashion image annotation with QA workflows built for large, fast-moving catalogs." },
    { question: "What is your typical engagement model for retail projects?", answer: "Most retail engagements start with a scoped pilot to validate quality and throughput, then scale into ongoing partnerships with dedicated teams and flexible delivery models." },
  ],
};

export const retailBottomCta = {
  icon: ShoppingCart,
  heading: (
    <>
      Build Smarter Retail
      <br />
      Experiences with AI
    </>
  ),
  description:
    "Whether you're launching a digital commerce platform, optimizing inventory, improving customer engagement, or adopting AI-driven retail solutions, Bigwigs Technologies delivers the expertise and scalable technology to help your business grow.",
  primaryAction: { label: "Schedule a Retail Solutions Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Retail Technology Experts", href: "#contact", showArrow: true },
};
