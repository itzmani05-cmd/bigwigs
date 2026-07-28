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
  Camera,
  Tags,
  ShieldCheck,
  CheckCircle2,
  Car,
  Users,
  Scan,
  Factory,
  Stethoscope,
  Layers,
  Volume2,
  Radio,
  Headset,
  Wind,
  Speaker,
  MessageSquare,
  ScanLine,
  FileCog,
  BarChart3,
  PackageCheck,
  Search,
  UserCheck,
  ClipboardCheck,
  Cpu,
  ShoppingCart,
  Landmark,
  Umbrella,
  Sprout,
  Building2,
  GraduationCap,
  Truck,
  ClipboardList,
  Cog,
  Globe2,
  Lock,
  Zap,
  Rocket,
  Database,
  Clock,
  DollarSign,
} from "lucide-react";

export const dataCollectionHero = {
  eyebrow: "Data Collection & AI Datasets",
  heading: (
    <>
      Build Better AI
      <br />
      With{" "}
      <span className="text-blue-500">
        Better
        <br />
        Data
      </span>
    </>
  ),
  description:
    "Collect, validate, and prepare high-quality datasets for Artificial Intelligence, Machine Learning, Computer Vision, NLP, Speech AI, and Large Language Models with enterprise-scale delivery and global data collection capabilities.",
  primaryCta: { label: "Start Your Data Collection Project", href: "#contact" },
  secondaryCta: { label: "Talk To AI Data Specialists", href: "#contact" },
  trustedBy: ["Healthcare", "Automotive", "Retail", "AI Companies", "Financial Services", "Government"],
  visualIcon: Database,
  badges: [
    { icon: Database, label: "Dataset Pipeline", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Globe2, label: "Global Coverage", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: ShieldCheck, label: "99.5% Validated", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const dataCollectionChallenges = {
  heading: (
    <>
      The Realities AI Teams
      <br />
      Face Building Datasets
    </>
  ),
  description: "Collection, preparation, and recruitment — one team across the full dataset pipeline.",
  items: [
    {
      icon: Database,
      title: "Fragmented Data Sources",
      description: "Images, audio, video, and documents scattered across regions and formats.",
    },
    { icon: ShieldCheck, title: "Inconsistent Data Quality" },
    { icon: Globe2, title: "Limited Demographic Diversity" },
    { icon: Clock, title: "Slow Dataset Delivery" },
    { icon: Languages, title: "Multilingual Coverage Gaps" },
    { icon: Wand2, title: "Manual Data Cleaning" },
    { icon: FlaskConical, title: "Rare Edge-Case Scenarios" },
    { icon: Users, title: "Participant Recruitment Complexity" },
    { icon: Lock, title: "Data Privacy & Consent Management" },
    { icon: DollarSign, title: "Rising Data Acquisition Costs" },
  ],
};

export const dataCollectionSolutions = {
  heading: "Nine Ways We Help You Build AI-Ready Datasets",
  items: [
    {
      icon: Image,
      title: "Image Data Collection",
      description: "Diverse, real-world images captured for computer vision models.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Video Data Collection",
      description: "Footage from vehicles, warehouses, and clinics for motion-aware AI.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Mic,
      title: "Audio Data Collection",
      description: "Speech and environmental audio recorded for speech AI systems.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: FileText,
      title: "Text Data Collection",
      description: "Conversational and domain-specific text for NLP and LLM training.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: FileStack,
      title: "Document Collection",
      description: "Invoices, contracts, and records sourced and digitized at scale.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Multilingual Dataset Creation",
      description: "Parallel corpora and localized datasets across 50+ languages.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: FlaskConical,
      title: "Synthetic Data",
      description: "Simulated environments and rare events generated for edge cases.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Wand2,
      title: "Data Preparation",
      description: "Cleaning, deduplication, balancing, and enrichment before delivery.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: UserPlus,
      title: "Participant Recruitment",
      description: "Global participants sourced to match your demographic spec.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const imageDataSteps = [
  { icon: Camera, label: "Capture" },
  { icon: Tags, label: "Categorize" },
  { icon: ShieldCheck, label: "Verify" },
  { icon: CheckCircle2, label: "Deliver" },
];

export const imageDataCollection = {
  heading: "Capture Diverse Images for Smarter AI Models",
  description: "Images sourced across lighting, angles, and environments — so your computer vision model sees the real world, not just the studio.",
  steps: imageDataSteps,
  items: [
    { icon: Camera, title: "Human Faces" },
    { icon: ShoppingCart, title: "Retail Products" },
    { icon: Car, title: "Vehicles" },
    { icon: Scan, title: "Traffic Scenes" },
    { icon: Factory, title: "Industrial Equipment" },
    { icon: Stethoscope, title: "Medical Images" },
    { icon: Camera, title: "Food" },
    { icon: FileStack, title: "Documents" },
    { icon: Camera, title: "Consumer Electronics" },
  ],
};

export const videoDataSteps = [
  { icon: Video, label: "Record" },
  { icon: Scan, label: "Track" },
  { icon: Layers, label: "Segment" },
  { icon: CheckCircle2, label: "Validate" },
];

export const videoDataCollection = {
  heading: "Motion, Context, and Scale — Captured on Video",
  description: "From autonomous driving to warehouse robotics, footage is captured and timestamped for models that need to understand movement, not just a single frame.",
  steps: videoDataSteps,
  checklist: [
    { icon: Scan, label: "Traffic Monitoring", description: "Road and intersection footage captured across conditions and times of day." },
    { icon: Car, label: "Driving Scenarios", description: "Real-world driving footage across varied roads and traffic patterns." },
    { icon: Users, label: "Pedestrian Detection", description: "Footage capturing pedestrian movement across urban environments." },
    { icon: Factory, label: "Manufacturing", description: "Production-line footage for defect and process monitoring models." },
    { icon: Stethoscope, label: "Healthcare Procedures", description: "Clinical procedure footage captured under consent-managed protocols." },
    { icon: ShieldCheck, label: "Public Safety", description: "Footage supporting safety monitoring and incident detection models." },
  ],
};

export const audioSpeechData = {
  heading: "High-Quality Audio for Speech AI",
  description: "Recorded across devices, accents, and background conditions — so recognition and voice models perform where they actually ship.",
  panelLabel: "Speech Data Suite",
  tiles: [
    { icon: Mic, label: "Read Speech" },
    { icon: MessageSquare, label: "Natural Conversations" },
    { icon: Volume2, label: "Voice Commands" },
    { icon: Radio, label: "Podcasts", hasSparkline: true },
    { icon: Users, label: "Interviews" },
    { icon: Headset, label: "Customer Support Calls", hasLiveDot: true },
    { icon: Wind, label: "Environmental Sounds" },
    { icon: Speaker, label: "Wake Words" },
  ],
  pills: [
    { icon: Mic, label: "Read Speech" },
    { icon: MessageSquare, label: "Natural Conversations" },
    { icon: Volume2, label: "Voice Commands" },
    { icon: Users, label: "Interviews" },
    { icon: Headset, label: "Customer Support Calls" },
    { icon: Speaker, label: "Wake Words" },
  ],
};

export const textAndDocumentDatasets = {
  heading: "Structured Data From Unstructured Documents",
  description: "Every document is digitized, tagged, and validated — ready for training document AI and knowledge-grounded language models.",
  centerIcon: FileStack,
  badges: [
    { icon: FileText, label: "Invoices", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Stethoscope, label: "Medical Records", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: FileText, label: "Contracts", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: FileText, title: "Text Collection", description: "Domain-specific and conversational text sourced for NLP and LLMs." },
    { icon: FileStack, title: "Document Collection", description: "Structured and unstructured documents gathered at enterprise scale." },
    { icon: ScanLine, title: "OCR", description: "Scanned documents converted into clean, structured text." },
    { icon: Tags, title: "Metadata", description: "Every document tagged with the metadata your model needs." },
    { icon: FileCog, title: "Format Conversion", description: "Delivered in the file format your pipeline already expects." },
  ],
};

export const multilingualAndSynthetic = {
  heading: "Every Language Your Model Needs, Every Scenario Real Capture Can't Reach",
  description: "50+ languages covered by native-language teams, plus simulated environments that generate rare events safely, at the volume training actually requires.",
  cards: [
    {
      icon: Languages,
      title: "Multilingual Datasets",
      description: "One dataset practice, every language your model needs — from major world languages to regional Indian languages.",
      items: ["Translation", "Localization", "Language Verification", "Native Review", "Parallel Corpus", "Conversation Datasets"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: FlaskConical,
      title: "Synthetic Data",
      description: "Digital twins and simulation environments generate rare events safely, at the volume training actually requires.",
      items: ["Computer Vision", "Manufacturing", "Autonomous Driving", "AI Testing", "Rare Event Simulation"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
  ],
};

export const dataPreparationSteps = [
  { icon: Wand2, label: "Clean" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: BarChart3, label: "Score" },
  { icon: PackageCheck, label: "Deliver" },
];

export const dataPreparation = {
  heading: "Raw Data, Refined Into Training-Ready Datasets",
  description: "Every batch is cleaned, deduplicated, balanced, and enriched before it's scored and validated for delivery.",
  steps: dataPreparationSteps,
  checklist: [
    { icon: Wand2, label: "Cleaning", description: "Noise, artifacts, and low-quality samples removed before anything else." },
    { icon: Layers, label: "Deduplication", description: "Duplicate or near-duplicate records identified and removed." },
    { icon: Tags, label: "Metadata", description: "Structured metadata attached to every record in the dataset." },
    { icon: BarChart3, label: "Balancing", description: "Class and demographic distribution checked and corrected." },
    { icon: ShieldCheck, label: "Validation", description: "Every batch validated against your accuracy and format spec." },
    { icon: Sprout, label: "Data Enrichment", description: "Additional context and labels added where the model needs more signal." },
  ],
};

export const participantRecruitmentSteps = [
  { icon: Search, label: "Source" },
  { icon: UserCheck, label: "Screen" },
  { icon: ClipboardCheck, label: "Match" },
  { icon: CheckCircle2, label: "Confirm" },
];

export const participantRecruitment = {
  heading: "The Right Participants, Matched to Your Dataset Spec",
  description: "Global participants sourced to match your demographic spec, screened and confirmed before data collection begins.",
  steps: participantRecruitmentSteps,
  marqueeItems: [
    { icon: Users, title: "Age Groups" },
    { icon: UserCheck, title: "Gender" },
    { icon: Globe2, title: "Geographic Region" },
    { icon: Languages, title: "Native Language" },
    { icon: FileStack, title: "Profession" },
    { icon: GraduationCap, title: "Education" },
    { icon: Building2, title: "Industry Experience" },
    { icon: Cpu, title: "Device Type" },
  ],
};

export const dataCollectionWhoWeServe = {
  heading: "Dataset Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Datasets
    </>
  ),
  items: [
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Car, label: "Automotive" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Landmark, label: "Banking" },
    { icon: Umbrella, label: "Insurance" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Sprout, label: "Agriculture" },
    { icon: Building2, label: "Government" },
    { icon: GraduationCap, label: "Education" },
    { icon: Radio, label: "Telecommunications" },
    { icon: Truck, label: "Logistics" },
  ],
};

export const dataCollectionBusinessBenefits = {
  heading: "Measurable Impact Across Every Dataset",
  kpis: [
    { value: 100, suffix: "M+", label: "Data Points Collected" },
    { value: 50, suffix: "+", label: "Countries" },
    { value: 99.5, suffix: "%", label: "Quality Validation" },
    { value: 40, suffix: "%", label: "Faster AI Development" },
  ],
  benefits: [
    { icon: Zap, title: "Faster AI Development", description: "Production-ready datasets that skip rework and validation delays." },
    { icon: ShieldCheck, title: "Higher Data Quality", description: "Multi-stage validation before any dataset reaches your team." },
    { icon: Globe2, title: "Global Coverage", description: "Sourcing across 50+ countries and every demographic segment." },
    { icon: Lock, title: "Secure Data Handling", description: "Consent-managed, encrypted handling from capture to delivery." },
    { icon: Languages, title: "Multilingual Reach", description: "Native-language teams across text, speech, and document data." },
    { icon: Rocket, title: "Faster Time-to-Dataset", description: "Pipelines built to scale from pilot batches to millions of records." },
  ],
};

export const dataCollectionWhyUs = {
  heading: "Six Reasons AI Teams Trust Us With Their Data",
  items: [
    { icon: Globe2, title: "Global Participant Network", description: "Sourcing across 50+ countries and every demographic segment.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Building2, title: "Enterprise Delivery", description: "Pipelines built to scale from pilot batches to millions of records.", gradient: "from-violet-500 to-purple-400" },
    { icon: Lock, title: "Secure Data Handling", description: "Consent-managed, encrypted handling from capture to delivery.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: ShieldCheck, title: "High Quality Validation", description: "Multi-stage review before any dataset reaches your team.", gradient: "from-orange-500 to-amber-400" },
    { icon: Languages, title: "Multilingual Expertise", description: "Native-language teams across text, speech, and document data.", gradient: "from-rose-500 to-pink-400" },
    { icon: ClipboardList, title: "Transparent Project Management", description: "Clear milestones and reporting through every stage of delivery.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const dataCollectionUseCases = {
  heading: "AI Datasets Built for Every Model",
  description: "From computer vision to document AI, our data collection teams help enterprises train reliable models faster.",
  items: [
    { id: "cv-dataset-collection", icon: Camera, title: "Computer Vision Dataset Collection", description: "Images and video sourced across lighting, angles, and environments for real-world computer vision models.", outcome: "2,480+ images across 9 categories captured", href: "#contact" },
    { id: "speech-voice-dataset", icon: Mic, title: "Speech & Voice AI Dataset Collection", description: "Audio recorded across devices, accents, and background conditions for recognition and voice models.", outcome: "4 speakers, 12 languages detected", href: "#contact" },
    { id: "document-ai-dataset", icon: FileStack, title: "Document AI Dataset Creation", description: "Invoices, contracts, and records digitized, tagged, and validated for document AI training.", outcome: "99.1% OCR accuracy", href: "#contact" },
    { id: "multilingual-localization", icon: Languages, title: "Multilingual Dataset Localization", description: "Parallel corpora and localized datasets built across international and Indian languages.", outcome: "50+ languages supported", href: "#contact" },
    { id: "synthetic-edge-cases", icon: FlaskConical, title: "Synthetic Data for Edge Cases", description: "Simulated environments generate rare events safely, at the volume real capture can't reach.", outcome: "Rare events generated safely, at scale", href: "#contact" },
  ],
};

export const dataCollectionCaseStudy = {
  heading: "Helping Global Enterprises Build Reliable AI Datasets",
  description: "A global AI platform partnered with Bigwigs to source, annotate, and validate image, speech, and document data across dozens of markets — on one delivery pipeline.",
  stats: [
    { value: "50+", label: "Countries" },
    { value: "Millions", label: "Images Collected" },
    { value: "Thousands", label: "Hours Of Audio" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Dataset KPIs", secondary: "Collection Analytics", trend: "Quality Trend" },
};

export const dataCollectionProcess = {
  heading: "Five Stages Between Planning and Delivery",
  steps: [
    { icon: ClipboardList, title: "Project Planning", description: "Scope, spec, and target demographics defined with your team." },
    { icon: Search, title: "Data Acquisition", description: "Collection begins across the sources and regions you need." },
    { icon: Cog, title: "Data Processing", description: "Raw data cleaned, structured, and prepared for annotation." },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Every batch validated against your accuracy and format spec." },
    { icon: PackageCheck, title: "Delivery", description: "Final dataset packaged and delivered on your schedule." },
  ],
  desktopColumnsClassName: "grid-cols-5",
};

export const dataCollectionFaq = {
  items: [
    { question: "Can you collect data globally?", answer: "Yes. We recruit participants and source data across 50+ countries, matching the regions, languages, and demographics your project requires." },
    { question: "Do you provide metadata?", answer: "Every dataset ships with structured metadata — demographics, device, environment, consent status, and any custom fields your model needs." },
    { question: "Can you create custom datasets?", answer: "Yes. Collection, annotation, and preparation are scoped to your exact use case, whether that's computer vision, NLP, speech AI, or LLM training." },
    { question: "How do you ensure data quality?", answer: "Every batch passes automated validation plus human review for accuracy, format compliance, and consistency before it's delivered." },
  ],
};

export const dataCollectionBottomCta = {
  icon: Database,
  heading: <>Power Your AI With Enterprise Data</>,
  description:
    "Whether you're building Computer Vision, Large Language Models, Speech AI, Document AI, or enterprise machine learning systems, Bigwigs Technologies delivers secure, scalable, and production-ready datasets to accelerate AI innovation.",
  primaryAction: { label: "Start Your Data Collection Project", href: "#contact" },
  secondaryAction: { label: "Talk To AI Data Specialists", href: "#contact", showArrow: true },
};
