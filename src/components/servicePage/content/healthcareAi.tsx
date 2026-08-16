import {
  ScanLine,
  MessageSquareText,
  Tags,
  Stethoscope,
  LayoutDashboard,
  MessagesSquare,
  ScanText,
  Clock,
  ShieldAlert,
  Server,
  Gauge,
  ShieldCheck,
  CheckCircle2,
  Search,
  FileText,
  FlaskConical,
  Rocket,
  LifeBuoy,
} from "lucide-react";

export const healthcareAiHero = {
  eyebrow: "Healthcare AI",
  heading: (
    <>
      Smarter Healthcare, Powered by{" "}
      <span className="text-blue-500">AI</span>
    </>
  ),
  description:
    "AI-driven solutions for hospitals, healthcare providers, and medical innovators that improve diagnosis, automate workflows, and enhance patient care.",
  primaryCta: { label: "Discuss Your Project", href: "/demo" },
  secondaryCta: { label: "Contact Our Team", href: "/contact" },
};

export const healthcareAiChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Healthcare Teams Face",
  items: [
    { icon: Clock, title: "Diagnostic Turnaround Delays" },
    { icon: MessageSquareText, title: "Unstructured Clinical Documentation" },
    { icon: ScanLine, title: "Manual Medical Image Review" },
    { icon: ShieldAlert, title: "Data Privacy & Compliance Risk" },
    { icon: Server, title: "Legacy EHR & EMR Systems" },
    { icon: Gauge, title: "Scaling Annotation Quality" },
  ],
};

export const healthcareAiCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Ways We Support Clinical AI",
  items: [
    { icon: ScanLine, title: "Medical Image Annotation", description: "Radiology-grade labeling for MRI, CT, and X-ray." },
    { icon: MessageSquareText, title: "Clinical NLP", description: "Structured insight from unstructured clinical notes." },
    { icon: Tags, title: "Medical Data Annotation", description: "Curated, compliant datasets for clinical AI." },
    { icon: Stethoscope, title: "Diagnostic AI", description: "Decision-support models built with clinical experts." },
    { icon: LayoutDashboard, title: "Healthcare Software", description: "EHR, patient portals, and hospital systems." },
    { icon: MessagesSquare, title: "Healthcare Chatbots", description: "Patient-facing assistants for triage and scheduling." },
    { icon: ScanText, title: "Medical OCR", description: "Digitizing prescriptions and lab reports." },
    { icon: ShieldCheck, title: "Compliance & Security", description: "Encryption, access control, and audit trails." },
  ],
};

export const healthcareAiProcessSteps = [
  { icon: Search, title: "Assess", description: "Clinical experts review scope and taxonomy." },
  { icon: FileText, title: "Guidelines", description: "Documented, versioned annotation guidelines." },
  { icon: FlaskConical, title: "Pilot", description: "A small cohort validates quality and throughput." },
  { icon: Rocket, title: "Production", description: "Full-scale delivery against the validated pipeline." },
  { icon: CheckCircle2, title: "Validate", description: "Clinical sign-off before data reaches your model." },
  { icon: LifeBuoy, title: "Support", description: "Ongoing support as models and datasets evolve." },
];

export const healthcareAiFaq = [
  { question: "Can you annotate medical images?", answer: "Yes — MRI, CT, X-ray, ultrasound, retinal, and histopathology imaging, annotated against clinical taxonomy and reviewed through multi-tier QA." },
  { question: "Do you build healthcare software?", answer: "We build hospital dashboards, patient portals, EHR/EMR systems, telemedicine platforms, and healthcare mobile apps engineered around real clinical workflows." },
  { question: "Can you support international healthcare organizations?", answer: "Yes. Our delivery model works across time zones, and workflows adapt to region-specific regulatory requirements." },
  { question: "How do you protect sensitive healthcare data?", answer: "Encryption at rest and in transit, role-based access, full audit logging, and de-identification built into every workflow." },
];

export const healthcareAiBottomCta = {
  icon: Stethoscope,
  heading: "Let's Build the Future of Intelligent Healthcare",
  description:
    "Whether you're developing AI-powered diagnostics or enterprise healthcare systems, we help you deliver secure, intelligent solutions.",
  primaryAction: { label: "Discuss Your Project", href: "/demo" },
  secondaryAction: { label: "Contact Our Team", href: "/contact", showArrow: true },
};
