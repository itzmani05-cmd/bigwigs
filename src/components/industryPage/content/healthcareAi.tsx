import {
  ScanLine,
  MessageSquareText,
  Tags,
  Stethoscope,
  LayoutDashboard,
  MessagesSquare,
  ScanText,
  BarChart3,
  Clock,
  ShieldAlert,
  Server,
  Gauge,
  Database,
  FlaskConical,
  Layers,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  Tag,
  Pill,
  Scissors,
  FileText,
  Link2,
  Brain,
  SearchCheck,
  ScanSearch,
  ClipboardCheck,
  FileCheck2,
  Hash,
  Video,
  FileStack,
  IdCard,
  ClipboardList,
  Archive,
  Smartphone,
  Lock,
  KeyRound,
  ScrollText,
  EyeOff,
  BadgeCheck,
  Building2,
  Cpu,
  Dna,
  Sparkles,
  Microscope,
  Umbrella,
  Users2,
  Zap,
  TrendingUp,
  Award,
  Aperture,
  HeartHandshake,
  Search,
  Rocket,
  LifeBuoy,
  Boxes,
  Shapes,
  Layers2,
} from "lucide-react";

export const healthcareAiHero = {
  eyebrow: "Healthcare AI",
  heading: (
    <>
      Smarter Healthcare.
      <br />
      Powered by{" "}
      <span className="text-blue-500">
        Artificial
        <br />
        Intelligence
      </span>
    </>
  ),
  description:
    "Empowering hospitals, healthcare providers, pharmaceutical companies, and medical innovators with AI-driven solutions that improve diagnosis, automate workflows, and enhance patient care.",
  primaryCta: { label: "Discuss Your Healthcare AI Project", href: "/demo" },
  secondaryCta: { label: "Contact Healthcare Team", href: "/contact" },
  trustedBy: ["Hospitals", "Healthcare Providers", "Pharmaceutical Companies", "Medical Innovators"],
  visualIcon: Stethoscope,
  badges: [
    { icon: ScanLine, label: "Medical Image Annotation", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: MessageSquareText, label: "Clinical NLP", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: LayoutDashboard, label: "Healthcare Software", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const healthcareAiChallenges = {
  heading: (
    <>
      The Realities Healthcare
      <br />
      Teams Are Solving For
    </>
  ),
  description:
    "From raw scans to production diagnostic tools, healthcare organizations need one team across the full pipeline.",
  items: [
    {
      icon: Clock,
      title: "Diagnostic Turnaround Delays",
      description: "Every hour between scan and diagnosis support is an hour a patient is waiting.",
    },
    { icon: MessageSquareText, title: "Unstructured Clinical Documentation" },
    { icon: ScanLine, title: "Manual Medical Image Review" },
    { icon: ShieldAlert, title: "Data Privacy & Compliance Risk" },
    { icon: Server, title: "Legacy EHR & EMR Systems" },
    { icon: Gauge, title: "Scaling Annotation Quality" },
    { icon: Database, title: "Fragmented Patient Data" },
    { icon: FlaskConical, title: "Slow AI Model Validation" },
    { icon: Layers, title: "Multi-Modality Imaging Complexity" },
    { icon: DollarSign, title: "Rising Operational Costs" },
  ],
};

export const healthcareAiSolutions = {
  heading: "Eight Ways We Support Clinical AI",
  items: [
    {
      icon: ScanLine,
      title: "Medical Image Annotation",
      description: "Radiology-grade labeling for MRI, CT, X-ray, and retinal scans.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquareText,
      title: "Clinical NLP",
      description: "Structured insight extracted from unstructured clinical notes.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Tags,
      title: "Medical Data Annotation",
      description: "Curated, compliant datasets for training clinical AI models.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Stethoscope,
      title: "Diagnostic AI",
      description: "Decision-support models built alongside clinical experts.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: LayoutDashboard,
      title: "Healthcare Software",
      description: "EHR, patient portals, and hospital systems that clinicians trust.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: MessagesSquare,
      title: "Healthcare Chatbots",
      description: "Patient-facing assistants for triage, scheduling, and follow-up.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: ScanText,
      title: "Medical OCR",
      description: "Digitizing prescriptions, lab reports, and handwritten charts.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Healthcare Analytics",
      description: "Operational and clinical dashboards built for real decisions.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const annotationSteps = [
  { icon: ScanLine, label: "Capture" },
  { icon: Tags, label: "Annotate" },
  { icon: ShieldCheck, label: "Review" },
  { icon: CheckCircle2, label: "Validate" },
];

export const medicalImageAnnotation = {
  heading: "Train AI Models With High-Precision Medical Annotation",
  description: "Every scan is annotated by teams trained on clinical taxonomy — then reviewed against a documented QA protocol before it ever reaches your model.",
  steps: annotationSteps,
  items: [
    { icon: ScanLine, title: "X-Ray" },
    { icon: ScanLine, title: "MRI" },
    { icon: ScanLine, title: "CT" },
    { icon: ScanLine, title: "PET" },
    { icon: ScanLine, title: "Ultrasound" },
    { icon: ScanLine, title: "Retina" },
    { icon: Microscope, title: "Histopathology" },
    { icon: ScanLine, title: "Dental" },
    { icon: ScanLine, title: "Dermatology" },
    { icon: ScanSearch, title: "Tumor Segmentation" },
    { icon: SearchCheck, title: "Lesion Detection" },
    { icon: Boxes, title: "Bounding Box" },
    { icon: Shapes, title: "Polygon" },
    { icon: Layers, title: "Semantic Segmentation" },
    { icon: Layers2, title: "Instance Segmentation" },
  ],
};

export const clinicalNlp = {
  heading: "Structure Hiding Inside Every Clinical Note",
  description: "We turn free-text reports, prescriptions, and coded terminology — ICD, SNOMED — into structured data your systems can actually query.",
  centerIcon: MessageSquareText,
  badges: [
    { icon: Tag, label: "Diagnosis", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Pill, label: "Medication", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Scissors, label: "Procedure", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Tag, title: "Medical Entity Recognition", description: "Identify diagnoses, medications, and procedures directly within clinical text." },
    { icon: Stethoscope, title: "Diagnosis Extraction", description: "Pull confirmed and differential diagnoses out of free-text physician notes." },
    { icon: Pill, title: "Medication Extraction", description: "Extract drug names, dosages, and schedules from prescriptions and notes." },
    { icon: Scissors, title: "Procedure Recognition", description: "Identify clinical procedures referenced across visit and operative notes." },
    { icon: FileText, title: "Clinical Notes", description: "Structure unstructured physician and nursing documentation at scale." },
    { icon: Link2, title: "Relationship Extraction", description: "Map relationships between diagnoses, medications, and procedures." },
  ],
};

export const healthcareApplications = {
  heading: "One Model Core, Eight Clinical Use Cases",
  description: "The same underlying AI practice powers diagnostics, operations, and patient-facing tools.",
  centerIcon: Brain,
  badges: [
    { icon: SearchCheck, label: "Disease Detection", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Video, label: "Telemedicine", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: FileStack, label: "Document AI", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: SearchCheck, title: "Disease Detection", description: "Models trained to flag disease indicators earlier and more consistently." },
    { icon: ScanSearch, title: "Tumor Detection", description: "AI-assisted identification of suspicious regions across imaging modalities." },
    { icon: Layers, title: "Organ Segmentation", description: "Precise organ and structure boundaries for surgical and diagnostic planning." },
    { icon: ClipboardCheck, title: "Clinical Decision Support", description: "Decision-support tools that surface relevant evidence at the point of care." },
    { icon: FileCheck2, title: "Claims Processing", description: "Automated extraction and validation that speeds up claims adjudication." },
    { icon: Hash, title: "Medical Coding", description: "AI-assisted coding that reduces manual lookup and coding errors." },
    { icon: Video, title: "Telemedicine", description: "Platforms that extend clinical reach beyond the physical clinic." },
    { icon: FileStack, title: "Document AI", description: "Structured extraction from referrals, forms, and clinical paperwork." },
  ],
};

export const healthcareSoftware = {
  heading: "The Systems Your Care Teams Live In",
  description: "Built for clinicians and administrators, not just for a demo.",
  panelLabel: "Healthcare Operations Suite",
  tiles: [
    { icon: LayoutDashboard, label: "Hospital Dashboard" },
    { icon: IdCard, label: "Patient Portal" },
    { icon: Video, label: "Telemedicine" },
    { icon: ClipboardList, label: "EHR", hasSparkline: true },
    { icon: Archive, label: "EMR" },
    { icon: FlaskConical, label: "Laboratory System" },
    { icon: Smartphone, label: "Healthcare Mobile App" },
    { icon: BarChart3, label: "Analytics Dashboard", hasLiveDot: true },
  ],
  pills: [
    { icon: LayoutDashboard, label: "Hospital Dashboards" },
    { icon: IdCard, label: "Patient Portals" },
    { icon: ClipboardList, label: "EHR Systems" },
    { icon: Archive, label: "EMR Systems" },
    { icon: FlaskConical, label: "Laboratory Systems" },
    { icon: Smartphone, label: "Healthcare Mobile Apps" },
  ],
};

export const complianceSteps = [
  { icon: Lock, label: "Secure" },
  { icon: KeyRound, label: "Encrypt" },
  { icon: ScrollText, label: "Audit" },
  { icon: BadgeCheck, label: "Certify" },
];

export const complianceSecurity = {
  heading: "Built to Handle Data That Can't Be Handled Carelessly",
  steps: complianceSteps,
  checklist: [
    { icon: ShieldCheck, label: "Secure Data Handling", description: "Controlled ingestion and storage for every sensitive dataset." },
    { icon: Lock, label: "Encryption", description: "Data encrypted in transit and at rest, by default." },
    { icon: KeyRound, label: "Role-Based Access", description: "Access scoped to exactly what each role needs to see." },
    { icon: ScrollText, label: "Audit Logs", description: "A complete, reviewable trail of who accessed what, and when." },
    { icon: EyeOff, label: "Privacy Protection", description: "De-identification and PHI handling built into every workflow." },
    { icon: BadgeCheck, label: "Compliance Ready", description: "Processes designed to hold up under healthcare-grade scrutiny." },
  ],
};

export const healthcareAiWhoWeServe = {
  heading: "Across the Healthcare Ecosystem",
  description: "From hospitals to public health agencies, we support every organization building the future of clinical AI.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Healthcare
    </>
  ),
  items: [
    { icon: Building2, label: "Hospitals" },
    { icon: Cpu, label: "Medical Devices" },
    { icon: Pill, label: "Pharmaceutical" },
    { icon: Dna, label: "Biotechnology" },
    { icon: Sparkles, label: "HealthTech" },
    { icon: Microscope, label: "Research" },
    { icon: Umbrella, label: "Insurance" },
    { icon: Users2, label: "Public Health" },
  ],
};

export const healthcareAiBusinessBenefits = {
  heading: "Measurable Impact Across the Care Pathway",
  kpis: [
    { value: 99.5, suffix: "%", label: "Annotation Quality" },
    { value: 50, suffix: "+", label: "Healthcare Projects" },
    { value: 10, suffix: "M+", label: "Medical Images Processed" },
    { value: 40, suffix: "%", label: "Faster AI Development" },
  ],
  benefits: [
    { icon: Zap, title: "Faster Diagnostic Support", description: "AI-assisted annotation that shortens the path from scan to insight." },
    { icon: CheckCircle2, title: "Consistent Annotation Quality", description: "A documented QA protocol that holds the line at every scale." },
    { icon: Gauge, title: "Reduced Administrative Burden", description: "Software and automation that give clinical teams time back." },
    { icon: ShieldCheck, title: "Stronger Data Security", description: "Encryption, access control, and audit trails built into every workflow." },
    { icon: TrendingUp, title: "Scalable Clinical AI Pipelines", description: "From a pilot cohort to millions of records, the same quality bar." },
    { icon: Stethoscope, title: "Improved Patient Outcomes", description: "AI-driven solutions that improve diagnosis and enhance patient care." },
  ],
};

export const healthcareAiWhyUs = {
  heading: "Six Reasons Healthcare Teams Trust Us",
  items: [
    { icon: Award, title: "Healthcare Experts", description: "Teams trained on clinical taxonomy, not generic labeling guidelines.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Aperture, title: "Medical Imaging Expertise", description: "Years of radiology-grade annotation across modalities.", gradient: "from-violet-500 to-purple-400" },
    { icon: MessageSquareText, title: "Clinical NLP", description: "Structured extraction from real clinical documentation.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Lock, title: "Secure Data", description: "Handling built around healthcare-grade data sensitivity.", gradient: "from-orange-500 to-amber-400" },
    { icon: TrendingUp, title: "Scalable Delivery", description: "From a pilot cohort to millions of records, same quality bar.", gradient: "from-rose-500 to-pink-400" },
    { icon: HeartHandshake, title: "Long-Term Partnership", description: "We stay engaged through validation, deployment, and beyond.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const healthcareAiUseCases = {
  heading: "AI Built for Clinical Workflows",
  description: "From radiology to telemedicine, our AI solutions help healthcare organizations move faster without compromising patient safety.",
  items: [
    { id: "radiology-triage", icon: ScanSearch, title: "Radiology Triage & Diagnostic Support", description: "AI-assisted medical image annotation that gives radiology teams a consistent, audit-ready pipeline from scan to diagnosis support.", outcome: "40% faster diagnosis support", href: "#contact" },
    { id: "clinical-nlp-ehr", icon: MessageSquareText, title: "Clinical NLP for EHR Structuring", description: "Turn free-text clinical notes and prescriptions into structured, queryable data mapped to ICD and SNOMED terminology.", outcome: "Structured data your systems can query", href: "#contact" },
    { id: "diagnostic-decision-support", icon: ClipboardCheck, title: "AI-Assisted Clinical Decision Support", description: "Decision-support models built alongside clinical experts to surface relevant evidence at the point of care.", outcome: "Faster, evidence-backed clinical decisions", href: "#contact" },
    { id: "telemedicine-platforms", icon: Video, title: "Telemedicine & Patient Engagement", description: "Patient portals and telemedicine platforms engineered around real clinical workflows, not just a demo.", outcome: "Extended clinical reach beyond the clinic", href: "#contact" },
    { id: "claims-coding-automation", icon: FileCheck2, title: "Claims & Medical Coding Automation", description: "Automated extraction and coding support that reduces manual lookup and speeds up claims adjudication.", outcome: "Faster, more accurate claims processing", href: "#contact" },
  ],
};

export const healthcareAiCaseStudy = {
  heading: "Helping a Healthcare Organization Reduce Diagnostic Turnaround Time",
  description: "AI-assisted medical image annotation gave a radiology team a consistent, audit-ready pipeline — cutting the time between scan and diagnosis support.",
  stats: [
    { value: "40%", label: "Faster diagnosis support" },
    { value: "98%", label: "Annotation consistency" },
    { value: "Millions", label: "Medical images processed" },
  ],
  ctaHref: "/case-studies/radiology-triage-annotation",
  chartLabels: { primary: "Hospital KPIs", secondary: "Patient Analytics", trend: "AI Insights" },
};

export const healthcareAiProcessSteps = [
  { icon: Search, title: "Requirement Analysis", description: "Understand the clinical problem and data before writing an annotation guideline." },
  { icon: Stethoscope, title: "Clinical Assessment", description: "Clinical experts review scope, taxonomy, and edge cases up front." },
  { icon: FileText, title: "Annotation Guidelines", description: "Documented, versioned guidelines that keep every annotator aligned." },
  { icon: FlaskConical, title: "Pilot", description: "A small cohort validates quality and throughput before scaling up." },
  { icon: Rocket, title: "Production", description: "Full-scale annotation and delivery against the validated pipeline." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Multi-tier review against the documented QA protocol." },
  { icon: CheckCircle2, title: "Validation", description: "Clinical sign-off before data reaches your model or system." },
  { icon: LifeBuoy, title: "Support", description: "Ongoing support as models and datasets evolve after launch." },
];

export const healthcareAiProcess = {
  heading: "Eight Stages Between Idea and Clinical Use",
  steps: healthcareAiProcessSteps,
  desktopColumnsClassName: "grid-cols-4 xl:grid-cols-8",
};

export const healthcareAiFaq = {
  items: [
    { question: "Can you annotate medical images?", answer: "Yes — MRI, CT, X-ray, ultrasound, retinal, and histopathology imaging, annotated against clinical taxonomy and reviewed through a multi-tier QA process." },
    { question: "Do you build healthcare software?", answer: "We build hospital dashboards, patient portals, EHR/EMR systems, telemedicine platforms, and healthcare mobile apps — engineered around real clinical workflows." },
    { question: "Can you support international healthcare organizations?", answer: "Yes. Our delivery model works across time zones, and our workflows adapt to region-specific regulatory and data-handling requirements." },
    { question: "How do you protect sensitive healthcare data?", answer: "Encryption at rest and in transit, role-based access, full audit logging, and de-identification built into every workflow that touches patient data." },
  ],
};

export const healthcareAiBottomCta = {
  icon: Stethoscope,
  heading: <>Let&apos;s Build the Future of Intelligent Healthcare</>,
  description:
    "Whether you're developing AI-powered diagnostics, digital health platforms, or enterprise healthcare systems, Bigwigs Technologies helps you deliver secure, scalable, and intelligent healthcare solutions.",
  primaryAction: { label: "Discuss Your Healthcare AI Project", href: "#contact" },
  secondaryAction: { label: "Contact Our Healthcare Team", href: "#contact", showArrow: true },
};
