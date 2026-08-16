import {
  ShoppingCart,
  Sparkles,
  ScanEye,
  Boxes,
  TrendingUp,
  FileStack,
  ShieldAlert,
  Share2,
  Receipt,
  MessageSquareText,
  Code2,
  LineChart,
  Languages,
  Accessibility,
  Search,
  PenTool,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export const retailHero = {
  eyebrow: "Retail & E-Commerce",
  heading: (
    <>
      Retail Experiences Powered by{" "}
      <span className="text-blue-500">AI</span>
    </>
  ),
  description:
    "AI, automation, and modern software for retailers, marketplaces, and consumer brands — built to accelerate growth and delight customers.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const retailChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Retail Teams Face",
  items: [
    { icon: TrendingUp, title: "Rising Customer Acquisition Costs" },
    { icon: Boxes, title: "Inventory Optimization Challenges" },
    { icon: FileStack, title: "Demand Forecasting Complexity" },
    { icon: ShieldAlert, title: "Fraud Prevention" },
    { icon: Share2, title: "Omnichannel Integration" },
    { icon: Sparkles, title: "Personalized Shopping Experiences" },
  ],
};

export const retailCapabilities = {
  eyebrow: "What's Included",
  heading: "One Retail AI Practice, Every Discipline",
  items: [
    { icon: FileStack, title: "AI Product Catalog Management", description: "Accurate, enriched product data at scale." },
    { icon: ScanEye, title: "Computer Vision for Retail", description: "Shelf monitoring and checkout automation." },
    { icon: Receipt, title: "Intelligent Document Processing", description: "Automated purchase orders and invoices." },
    { icon: MessageSquareText, title: "AI-Powered Customer Experience", description: "Personalized recommendations and support." },
    { icon: Code2, title: "Retail Software Development", description: "Custom e-commerce, POS, and inventory platforms." },
    { icon: LineChart, title: "Predictive Analytics", description: "Forecasting for demand, sales, and pricing." },
    { icon: Languages, title: "Voice & Language Services", description: "Multilingual translation and conversational AI data." },
    { icon: Accessibility, title: "Accessibility & Digital Content", description: "Accessible catalogs and inclusive content." },
  ],
};

export const retailProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand objectives and customer journeys." },
  { icon: PenTool, title: "Design", description: "Solution architecture and AI workflows." },
  { icon: Code2, title: "Build", description: "Software, datasets, and integrations." },
  { icon: CheckCircle2, title: "Validate", description: "Testing, QA, and performance tuning." },
  { icon: Rocket, title: "Launch", description: "Deploy, monitor, and keep improving." },
];

export const retailFaq = [
  { question: "Can you develop custom e-commerce platforms?", answer: "Yes — scalable e-commerce platforms, marketplaces, mobile shopping apps, and retail management systems tailored to your requirements." },
  { question: "Do you support AI initiatives for retailers?", answer: "Yes. AI data preparation, computer vision datasets, predictive analytics, and AI-powered customer engagement solutions." },
  { question: "Can you integrate with existing retail systems?", answer: "Yes — ERP, CRM, payment gateways, inventory systems, and logistics platforms for seamless operations." },
  { question: "What's your typical engagement model?", answer: "Most retail engagements start with a scoped pilot to validate quality, then scale into an ongoing partnership." },
];

export const retailBottomCta = {
  icon: ShoppingCart,
  heading: "Build Smarter Retail Experiences with AI",
  description:
    "Whether you're launching a commerce platform or adopting AI-driven retail solutions, Bigwigs Technologies delivers the expertise to help you grow.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
