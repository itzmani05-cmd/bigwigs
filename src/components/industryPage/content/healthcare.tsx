import {
  Brain,
  FileHeart,
  Activity,
  HeartPulse,
  Database,
  FileText,
  ScanEye,
  Users,
  ClipboardList,
  AlertTriangle,
  Share2,
  DollarSign,
  HeartHandshake,
  Cpu,
  MessageSquareText,
  Code2,
  FileStack,
  Layers,
  Accessibility,
  Languages,
  BrainCircuit,
  Lightbulb,
  Stethoscope,
  ClipboardCheck,
  Pill,
  Hash,
  BookMarked,
  FlaskConical,
  ListTree,
  ScanLine,
  ShieldAlert,
  Headset,
  TrendingUp,
  Bot,
  LayoutDashboard,
  Building2,
  UserCircle,
  CalendarCheck,
  BarChart3,
  Video,
  Workflow,
  Smartphone,
  Files,
  Receipt,
  UserPlus,
  FileSignature,
  Tags,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  FolderCog,
  FileSearch,
  Hospital,
  Microscope,
  TestTube,
  ClipboardX,
  Rocket,
  Globe2,
  Handshake,
  FileCheck2,
  NotebookPen,
} from "lucide-react";

export const healthcareHero = {
  eyebrow: "Healthcare & Life Sciences",
  heading: (
    <>
      Transforming
      <br />
      Healthcare With{" "}
      <span className="text-blue-500">
        AI &amp; Digital
        <br />
        Innovation
      </span>
    </>
  ),
  description:
    "Empowering hospitals, pharmaceutical companies, healthcare providers, research institutions, and medical device manufacturers with enterprise AI, intelligent automation, software engineering, and healthcare data solutions.",
  primaryCta: { label: "Talk to Our Healthcare AI Experts", href: "/demo" },
  secondaryCta: { label: "Start Your Healthcare Transformation", href: "/contact" },
  trustedBy: ["Hospitals", "Pharmaceuticals", "HealthTech", "Medical Devices", "Research Labs", "Healthcare Startups"],
  visualIcon: Brain,
  badges: [
    { icon: FileHeart, label: "Electronic Health Records", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Activity, label: "Medical Reports", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: HeartPulse, label: "Cloud Healthcare Platform", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const healthcareChallenges = {
  heading: (
    <>
      The Realities Healthcare
      <br />
      Teams Are Solving For
    </>
  ),
  description:
    "Every hospital, payer, and life-sciences org is racing to modernize under the same operational pressure.",
  items: [
    {
      icon: Database,
      title: "Growing Clinical Data",
      description: "The volume alone is outpacing legacy infrastructure across every department.",
    },
    { icon: FileText, title: "Manual Documentation" },
    { icon: ScanEye, title: "Medical Imaging Complexity" },
    { icon: Users, title: "Healthcare Workforce Shortage" },
    { icon: ClipboardList, title: "Administrative Burden" },
    { icon: AlertTriangle, title: "Poor Data Quality" },
    { icon: Share2, title: "Interoperability Issues" },
    { icon: DollarSign, title: "Operational Costs" },
    { icon: HeartHandshake, title: "Patient Engagement" },
    { icon: Cpu, title: "AI Adoption Challenges" },
  ],
};

export const healthcareSolutions = {
  heading: "Nine Disciplines. One Healthcare AI Practice.",
  items: [
    {
      icon: ScanEye,
      title: "Medical Image Annotation",
      description: "Pixel-accurate bounding boxes, segmentation, and landmarking across X-ray, CT, MRI, and pathology imaging.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquareText,
      title: "Clinical NLP",
      description: "Extracting structured insight from clinical notes, EHR text, and physician dictation at scale.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Brain,
      title: "Healthcare AI Solutions",
      description: "Custom diagnostic, predictive, and clinical decision-support models built on validated medical data.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Code2,
      title: "Healthcare Software Development",
      description: "HIPAA-aware platforms, patient portals, and interoperability engineering for care providers.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Medical Data Services",
      description: "Cleansing, labeling, and structuring clinical, claims, and research datasets for downstream AI.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: FileStack,
      title: "Intelligent Document Processing",
      description: "Automated extraction from medical records, prior authorizations, and insurance claims.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Layers,
      title: "AI Data Services",
      description: "End-to-end data sourcing, labeling, and validation pipelines tuned for healthcare accuracy standards.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: Accessibility,
      title: "Healthcare Accessibility",
      description: "Accessible patient portals, forms, and publications compliant with WCAG and Section 508.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Languages,
      title: "Language Services",
      description: "Medical translation, localization, and transcription across global patient populations.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const clinicalNlpSteps = [
  { icon: FileText, label: "Medical Notes" },
  { icon: BrainCircuit, label: "AI Processing" },
  { icon: Database, label: "Structured Records" },
  { icon: Lightbulb, label: "Clinical Insights" },
];

export const clinicalNlp = {
  heading: "Turning Clinical Notes Into Structured Intelligence",
  description: "Extracting structured insight from clinical notes, EHR text, and physician dictation at scale.",
  steps: clinicalNlpSteps,
  items: [
    { icon: Stethoscope, title: "Medical Entity Recognition", description: "Identify symptoms, conditions, and procedures within free-text notes." },
    { icon: ClipboardCheck, title: "Diagnosis Extraction", description: "Pull confirmed and differential diagnoses from unstructured records." },
    { icon: Pill, title: "Medication Identification", description: "Detect drug names, dosages, and administration routes accurately." },
    { icon: Hash, title: "ICD Coding", description: "Map clinical findings to standardized ICD-10/11 codes." },
    { icon: BookMarked, title: "SNOMED", description: "Normalize terminology against SNOMED CT clinical vocabularies." },
    { icon: FlaskConical, title: "Lab Reports", description: "Extract lab values, units, and reference ranges at scale." },
    { icon: ListTree, title: "Medical Classification", description: "Categorize documents and findings for downstream analytics." },
  ],
};

export const aiSolutions = {
  heading: "AI Solutions Built for the Care Continuum",
  description: "Custom diagnostic, predictive, and clinical decision-support models built on validated medical data.",
  centerIcon: Bot,
  badges: [
    { icon: TrendingUp, label: "Predictive Analytics", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Bot, label: "Virtual Assistant", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: LayoutDashboard, label: "Medical Dashboard", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Stethoscope, title: "Clinical Decision Support", description: "AI-assisted insights that help clinicians diagnose and treat with confidence." },
    { icon: ScanEye, title: "Medical Imaging AI", description: "Deep learning models that detect anomalies across radiology and pathology scans." },
    { icon: ShieldAlert, title: "Patient Risk Assessment", description: "Predictive scoring that flags high-risk patients before complications arise." },
    { icon: MessageSquareText, title: "Healthcare Chatbots", description: "Conversational AI that handles triage, FAQs, and appointment support 24/7." },
    { icon: Headset, title: "Virtual Assistants", description: "AI agents that support clinicians and patients across every care touchpoint." },
    { icon: Database, title: "Research Data Management", description: "Structured, analytics-ready pipelines for clinical trials and life-sciences research." },
  ],
};

export const softwareDashboard = {
  heading: "Healthcare Software, Built to Run Operations",
  description: "HIPAA-aware platforms, patient portals, and interoperability engineering for care providers.",
  panelLabel: "Healthcare Operations Suite",
  tiles: [
    { icon: Building2, label: "Hospital Management" },
    { icon: FileText, label: "EHR" },
    { icon: ClipboardList, label: "EMR" },
    { icon: UserCircle, label: "Patient Portal" },
    { icon: CalendarCheck, label: "Appointment System" },
    { icon: BarChart3, label: "Analytics", hasSparkline: true },
    { icon: Video, label: "Telemedicine", hasLiveDot: true },
  ],
  pills: [
    { icon: Building2, label: "Hospital Management" },
    { icon: UserCircle, label: "Patient Portal" },
    { icon: Video, label: "Telemedicine" },
    { icon: Workflow, label: "Clinical Workflows" },
    { icon: LayoutDashboard, label: "Healthcare Dashboards" },
    { icon: Smartphone, label: "Mobile Health Apps" },
  ],
};

export const documentProcessingSteps = [
  { icon: Files, label: "Medical Documents" },
  { icon: ScanLine, label: "OCR" },
  { icon: BrainCircuit, label: "AI" },
  { icon: Receipt, label: "Claims" },
  { icon: Users, label: "Patient Records" },
  { icon: Hash, label: "Medical Coding" },
];

export const documentProcessing = {
  heading: "From Paper-Heavy Workflows To Automated Records",
  description: "Automated extraction from medical records, prior authorizations, and insurance claims.",
  steps: documentProcessingSteps,
  marqueeItems: [
    { icon: Receipt, title: "Insurance Claims" },
    { icon: UserPlus, title: "Patient Registration" },
    { icon: FileText, title: "Clinical Documentation" },
    { icon: Share2, title: "Referral Management" },
    { icon: FileSignature, title: "Consent Forms" },
    { icon: FlaskConical, title: "Lab Reports" },
  ],
};

export const aiDataServicesSteps = [
  { icon: Database, label: "Dataset Collection" },
  { icon: Tags, label: "Annotation" },
  { icon: CheckCircle2, label: "Validation" },
  { icon: ShieldCheck, label: "Quality Assurance" },
  { icon: Gauge, label: "Model Evaluation" },
];

export const aiDataServices = {
  heading: "High-Fidelity Data That Powers Trustworthy Healthcare AI",
  description: "End-to-end data sourcing, labeling, and validation pipelines tuned for healthcare accuracy standards.",
  steps: aiDataServicesSteps,
  checklist: [
    { icon: HeartPulse, label: "Medical Data Collection", description: "Source diverse, consent-compliant clinical and imaging data at scale." },
    { icon: FolderCog, label: "Dataset Preparation", description: "Clean, de-identify, and structure raw data for model-ready pipelines." },
    { icon: Tags, label: "Annotation", description: "Expert-reviewed labeling across text, imaging, and multimodal datasets." },
    { icon: CheckCircle2, label: "Validation", description: "Cross-check annotations against clinical guidelines and gold standards." },
    { icon: ShieldCheck, label: "QA", description: "Multi-layer quality gates to catch inconsistencies before delivery." },
    { icon: FileSearch, label: "Dataset Auditing", description: "Ongoing audits for bias, drift, and compliance across dataset versions." },
  ],
};

export const accessibilityLanguage = {
  heading: "Inclusive, Multilingual by Design",
  description: "Accessible experiences and multilingual operations for every patient population you serve.",
  cards: [
    {
      icon: Accessibility,
      title: "Healthcare Accessibility",
      description: "Making patient-facing content usable for everyone with WCAG and Section 508-compliant digital assets.",
      items: ["Accessible PDFs", "Patient Education", "Medical Forms", "Screen Reader Support", "Digital Publishing"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Languages,
      title: "Healthcare Language Services",
      description: "Bridging language barriers across clinical documentation and patient communication in every major market.",
      items: ["Medical Translation", "Clinical Documentation", "Localization", "Medical Transcription", "Captioning", "Patient Information"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const whoWeServe = {
  heading: "Trusted Across The Healthcare Ecosystem",
  description: "From bedside care to the research lab, we support every organization building the future of health.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Healthcare
    </>
  ),
  items: [
    { icon: Hospital, label: "Hospitals" },
    { icon: Building2, label: "Health Systems" },
    { icon: Cpu, label: "Medical Device Companies" },
    { icon: Pill, label: "Pharmaceutical Companies" },
    { icon: FlaskConical, label: "Biotech" },
    { icon: Smartphone, label: "HealthTech" },
    { icon: Microscope, label: "Research Institutions" },
    { icon: ClipboardCheck, label: "CROs" },
    { icon: TestTube, label: "Diagnostic Labs" },
    { icon: Headset, label: "Healthcare BPO" },
  ],
};

export const businessBenefits = {
  heading: "Measurable Impact, From Pilot to Production",
  kpis: [
    { value: 40, suffix: "%", label: "Operational Efficiency" },
    { value: 60, suffix: "%", label: "Faster Documentation" },
    { value: 99, suffix: "%", label: "Healthcare Data Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Medical Records Processed" },
  ],
  benefits: [
    { icon: BrainCircuit, title: "Improve AI Accuracy", description: "Higher-quality clinical data pipelines that sharpen model precision." },
    { icon: ClipboardX, title: "Reduce Administrative Work", description: "Automation that frees clinical staff from repetitive paperwork." },
    { icon: Workflow, title: "Enhance Clinical Workflows", description: "Streamlined processes that shorten time from intake to treatment." },
    { icon: HeartHandshake, title: "Patient Engagement", description: "Connected experiences that keep patients informed and involved." },
    { icon: Rocket, title: "Digital Transformation", description: "Modern platforms that replace legacy systems without disruption." },
    { icon: FlaskConical, title: "Research Innovation", description: "Faster, cleaner data pipelines that accelerate clinical research." },
  ],
};

export const whyUs = {
  heading: "Six Reasons Healthcare Teams Choose Bigwigs",
  items: [
    { icon: BrainCircuit, title: "Healthcare AI Expertise", description: "Deep experience building AI models for clinical and operational healthcare data.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Stethoscope, title: "Domain Specialists", description: "Teams that understand clinical workflows, terminology, and compliance needs.", gradient: "from-violet-500 to-purple-400" },
    { icon: Building2, title: "Enterprise Delivery", description: "Proven track record delivering production-grade systems for large healthcare orgs.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Globe2, title: "Global Teams", description: "Distributed delivery across time zones for round-the-clock support and speed.", gradient: "from-orange-500 to-amber-400" },
    { icon: ShieldCheck, title: "Quality Assurance", description: "Multi-layer QA processes built for the accuracy healthcare demands.", gradient: "from-rose-500 to-pink-400" },
    { icon: Handshake, title: "Long-Term Partnership", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const useCases = {
  heading: "AI Built for Healthcare Workflows",
  description: "From diagnosis to research, our AI solutions help healthcare organizations move faster without compromising accuracy or compliance.",
  items: [
    { id: "ai-radiology", icon: ScanLine, title: "AI-Assisted Radiology", description: "Annotated imaging datasets and model support that help radiologists spot anomalies faster across X-ray, CT, and MRI scans.", outcome: "40% faster diagnosis turnaround", href: "#contact" },
    { id: "claims-automation", icon: FileCheck2, title: "Claims Processing Automation", description: "Intelligent document processing that extracts, validates, and routes insurance claims with minimal manual review.", outcome: "60% reduction in claims processing time", href: "#contact" },
    { id: "clinical-documentation", icon: NotebookPen, title: "Clinical Documentation AI", description: "Ambient and NLP-driven tools that convert clinician-patient conversations into structured, EHR-ready notes.", outcome: "5+ hours saved per clinician weekly", href: "#contact" },
    { id: "telemedicine-platform", icon: Video, title: "Telemedicine Platform", description: "Secure, scalable virtual care platforms with AI triage and scheduling built for high-volume patient loads.", outcome: "3x increase in patient reach", href: "#contact" },
    { id: "medical-research-ai", icon: FlaskConical, title: "Medical Research AI", description: "Data annotation and analytics pipelines that accelerate drug discovery and clinical trial data analysis.", outcome: "30% faster research cycle times", href: "#contact" },
  ],
};

export const caseStudy = {
  heading: "Helping Healthcare Organizations Build AI Faster",
  description: "We partner with hospitals, health-tech companies, and life sciences organizations to turn raw clinical data into annotated, model-ready datasets and production AI systems — without compromising on accuracy or compliance.",
  stats: [
    { value: "99%", label: "Annotation Accuracy" },
    { value: "50+", label: "Healthcare Projects" },
    { value: "Millions", label: "Medical Records Processed" },
  ],
  ctaHref: "/case-studies/radiology-triage-annotation",
};

export const faq = {
  items: [
    { question: "How do you support healthcare AI?", answer: "We provide end-to-end support — from annotating medical imaging and clinical text to building and deploying diagnostic, documentation, and operational AI models tailored to your care setting." },
    { question: "Can you build EHR systems?", answer: "Yes. Our software team designs and builds custom EHR and clinical workflow systems, and can integrate AI-driven features directly into existing hospital or clinic platforms." },
    { question: "Do you support medical imaging?", answer: "We annotate and process X-ray, CT, MRI, and ultrasound data at scale, working with radiologists and clinical specialists to ensure diagnostic-grade labeling quality." },
    { question: "How do you ensure data security?", answer: "All patient and clinical data is handled under strict access controls, encryption, and audit trails, with secure delivery workflows built for regulated healthcare environments." },
    { question: "Are your services HIPAA and regulatory compliant?", answer: "Yes. Our healthcare engagements follow HIPAA-aligned data handling practices and regional regulatory requirements, with compliance built into our data pipelines and team training from day one." },
    { question: "What is a typical project turnaround and engagement model?", answer: "Most healthcare engagements start with a scoped pilot within 2-4 weeks, then scale into ongoing partnerships with dedicated teams, SLAs, and flexible monthly or project-based pricing." },
  ],
};

export const bottomCta = {
  icon: HeartPulse,
  heading: (
    <>
      Transform Healthcare
      <br />
      With Intelligent AI Solutions
    </>
  ),
  description:
    "Whether you're building AI-powered diagnostic systems, modernizing hospital platforms, automating clinical documentation, or accelerating healthcare research, Bigwigs Technologies delivers secure, scalable, and enterprise-grade healthcare technology solutions.",
  primaryAction: { label: "Talk to Our Healthcare AI Experts", href: "#contact" },
  secondaryAction: { label: "Start Your Healthcare Transformation", href: "#contact", showArrow: true },
};
