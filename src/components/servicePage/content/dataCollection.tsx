import {
  Image,
  Video,
  Mic,
  FileText,
  FileStack,
  Languages,
  FlaskConical,
  Wand2,
  UserPlus,
  ShieldCheck,
  Globe2,
  Lock,
  ClipboardList,
  Search,
  Cog,
  PackageCheck,
  Clock,
  DollarSign,
  Database,
} from "lucide-react";

export const dataCollectionHero = {
  eyebrow: "Data Collection & AI Datasets",
  heading: (
    <>
      Build Better AI With{" "}
      <span className="text-blue-500">Better Data</span>
    </>
  ),
  description:
    "Collect, validate, and prepare high-quality datasets for computer vision, NLP, speech AI, and LLMs — at enterprise scale.",
  primaryCta: { label: "Start Your Project", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const dataCollectionChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities AI Teams Face Building Datasets",
  items: [
    { icon: Database, title: "Fragmented Data Sources", description: "Stitching together data from scattered sources slows every project before annotation even starts." },
    { icon: ShieldCheck, title: "Inconsistent Data Quality", description: "Data collected without a clear spec often turns out unusable once it reaches the model." },
    { icon: Globe2, title: "Limited Demographic Diversity", description: "Narrow data leaves models that fail exactly where the real world is most diverse." },
    { icon: Clock, title: "Slow Dataset Delivery", description: "Long collection cycles delay every downstream step of model development." },
    { icon: Lock, title: "Privacy & Consent Management", description: "Collecting real-world data at scale requires consent tracking most teams aren't set up to manage." },
    { icon: DollarSign, title: "Rising Acquisition Costs", description: "Sourcing data in-house is often slower and more expensive than a dedicated collection pipeline." },
  ],
};

export const dataCollectionCapabilities = {
  eyebrow: "What's Included",
  heading: "Nine Ways We Build AI-Ready Datasets",
  items: [
    { icon: Image, title: "Image Data Collection", description: "Diverse, real-world images for computer vision." },
    { icon: Video, title: "Video Data Collection", description: "Motion-aware footage for vehicles and robotics." },
    { icon: Mic, title: "Audio Data Collection", description: "Speech and environmental audio for speech AI." },
    { icon: FileText, title: "Text Data Collection", description: "Conversational and domain text for NLP and LLMs." },
    { icon: FileStack, title: "Document Collection", description: "Invoices and records sourced at scale." },
    { icon: Languages, title: "Multilingual Datasets", description: "Localized datasets across 50+ languages." },
    { icon: FlaskConical, title: "Synthetic Data", description: "Simulated environments for rare edge cases." },
    { icon: Wand2, title: "Data Preparation", description: "Cleaning, deduplication, and enrichment." },
    { icon: UserPlus, title: "Participant Recruitment", description: "Global participants matched to your spec." },
  ],
};

export const dataCollectionProcessSteps = [
  { icon: ClipboardList, title: "Plan", description: "Scope, spec, and target demographics defined." },
  { icon: Search, title: "Acquire", description: "Collection begins across your sources and regions." },
  { icon: Cog, title: "Process", description: "Raw data cleaned and structured for annotation." },
  { icon: ShieldCheck, title: "Validate", description: "Every batch checked against your accuracy spec." },
  { icon: PackageCheck, title: "Deliver", description: "Final dataset packaged on your schedule." },
];

export const dataCollectionFaq = [
  { question: "Can you collect data globally?", answer: "Yes. We recruit participants and source data across 50+ countries, matching the regions, languages, and demographics your project requires." },
  { question: "Do you provide metadata?", answer: "Every dataset ships with structured metadata — demographics, device, environment, and consent status." },
  { question: "Can you create custom datasets?", answer: "Yes. Collection and preparation are scoped to your exact use case, whether computer vision, NLP, speech AI, or LLM training." },
  { question: "How do you ensure data quality?", answer: "Every batch passes automated validation plus human review for accuracy and consistency before delivery." },
  { question: "Can you collect data for a brand-new use case?", answer: "Yes. We scope collection from scratch for novel model types, not just refresh existing datasets." },
  { question: "Do you handle data licensing and consent?", answer: "Yes. Every collection project includes documented consent and licensing appropriate for commercial model training." },
];

export const dataCollectionDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for Data Collection",
  items: [
    { icon: Database, title: "Sourced to Your Exact Spec", description: "Collection scoped to your model's use case, not a generic off-the-shelf dataset." },
    { icon: Globe2, title: "Real Demographic Diversity", description: "Participants and sources spread across regions so your data reflects the real world." },
    { icon: Wand2, title: "Cleaned and Structured on Delivery", description: "Deduplication, enrichment, and structuring included, not left for you to do." },
    { icon: Lock, title: "Consent & Licensing Handled", description: "Every dataset ships with documentation appropriate for commercial model training." },
    { icon: ShieldCheck, title: "Validated Before It Reaches You", description: "Automated and human review catch quality issues before delivery, not after." },
    { icon: Clock, title: "Built to Scale With You", description: "Collection pipelines that grow from a pilot batch to millions of samples." },
  ],
};

export const dataCollectionBottomCta = {
  icon: Database,
  heading: "Power Your AI With Enterprise Data",
  description:
    "Whether you're building computer vision, LLMs, or speech AI, Bigwigs Technologies delivers secure, production-ready datasets.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
