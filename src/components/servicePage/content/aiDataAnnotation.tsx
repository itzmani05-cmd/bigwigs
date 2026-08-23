import {
  Camera,
  Video,
  Scan,
  Layers,
  Crosshair,
  ScanLine,
  CheckCircle2,
  Target,
  Clock,
  Users2,
  Lock,
  TrendingUp,
  Search,
  ClipboardList,
  BookOpen,
  FlaskConical,
  Rocket,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export const annotationHero = {
  eyebrow: "AI Data Annotation",
  heading: (
    <>
      Power Intelligent AI With{" "}
      <span className="text-blue-500">High-Quality Data</span>
    </>
  ),
  description:
    "Enterprise-grade data annotation for Computer Vision, NLP, Speech AI, and Autonomous Driving — accurate, scalable, and built to train reliable models.",
  primaryCta: { label: "Start Your Project", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const annotationChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities AI Teams Face",
  items: [
    { icon: Target, title: "Low-Quality Training Data", description: "Poorly labeled data quietly caps model accuracy no matter how strong the architecture is." },
    { icon: Layers, title: "Inconsistent Labeling Standards", description: "Annotators interpreting guidelines differently introduces noise your model has to unlearn." },
    { icon: Clock, title: "Slow Annotation Turnaround", description: "In-house teams get buried in backlog just as model iteration speed matters most." },
    { icon: Users2, title: "Scaling Annotation Teams", description: "Hiring and managing annotators in-house is slow and expensive to scale up or down." },
    { icon: Lock, title: "Data Security & Confidentiality", description: "Sensitive training data needs enterprise-grade handling, not a spreadsheet and a freelancer." },
    { icon: TrendingUp, title: "Rising Annotation Costs", description: "Per-label pricing adds up fast without a workflow built for efficiency at scale." },
  ],
};

export const annotationCapabilities = {
  eyebrow: "What's Included",
  heading: "Seven Ways We Help You Train Reliable AI",
  items: [
    { icon: Camera, title: "Image Annotation", description: "Bounding boxes, polygons, and masks." },
    { icon: Video, title: "Video Annotation", description: "Frame-by-frame tracking across footage." },
    { icon: Scan, title: "LiDAR Annotation", description: "3D point clouds for autonomous driving." },
    { icon: Layers, title: "Semantic Segmentation", description: "Every pixel classified by object class." },
    { icon: Crosshair, title: "Keypoint Annotation", description: "Pose and landmarks for tracking models." },
    { icon: ScanLine, title: "OCR & Document AI", description: "Text and forms labeled for document AI." },
    { icon: CheckCircle2, title: "Data Labeling & Validation", description: "Cleaning and validation before delivery." },
  ],
};

export const annotationProcessSteps = [
  { icon: Search, title: "Requirements", description: "Understand the model and taxonomy before scoping." },
  { icon: ClipboardList, title: "Assessment", description: "Review data volume, format, and quality." },
  { icon: BookOpen, title: "Guidelines", description: "Documented standards that keep annotators aligned." },
  { icon: FlaskConical, title: "Pilot", description: "A small batch validates quality and throughput." },
  { icon: Rocket, title: "Production", description: "Full-scale annotation on the validated pipeline." },
  { icon: ShieldCheck, title: "QA & Delivery", description: "Multi-level review before final delivery." },
];

export const annotationFaq = [
  { question: "Which annotation formats do you support?", answer: "We deliver in COCO, YOLO, Pascal VOC, KITTI, and any custom JSON or XML schema your training pipeline expects." },
  { question: "Can you scale large annotation projects?", answer: "Yes. Our teams scale from a pilot batch to millions of objects a month without changing quality or format." },
  { question: "How do you ensure annotation quality?", answer: "Every batch passes multi-level review — initial annotation, peer check, and senior QA sign-off — before delivery." },
  { question: "Can you handle confidential datasets?", answer: "Yes. Confidential and regulated datasets are handled under signed NDAs with encrypted storage and controlled access." },
  { question: "What's your typical turnaround time?", answer: "Turnaround depends on volume and complexity, but most projects move from pilot to first delivery within one to two weeks." },
  { question: "Do you support ongoing annotation pipelines?", answer: "Yes. Many clients run continuous pipelines that feed retraining cycles, not just one-off batches." },
];

export const annotationDifferentiators = {
  eyebrow: "Why Bigwigs",
  heading: "Why Teams Choose Us for Annotation",
  items: [
    { icon: Target, title: "Domain-Trained Annotators", description: "Annotators trained on your specific taxonomy, not generic labeling templates." },
    { icon: Layers, title: "Multi-Format Expertise", description: "Image, video, LiDAR, text, and audio annotation under one team, one process." },
    { icon: ShieldCheck, title: "Multi-Level QA Built In", description: "Every batch passes peer review and senior sign-off before it reaches you." },
    { icon: TrendingUp, title: "Scales With Your Model", description: "From a 500-image pilot to millions of labels a month, on the same pipeline." },
    { icon: Lock, title: "Enterprise-Grade Security", description: "NDA-bound teams, encrypted storage, and controlled access on every project." },
    { icon: Clock, title: "Fast, Predictable Delivery", description: "Clear turnaround commitments from the first pilot batch onward." },
  ],
};

export const annotationBottomCta = {
  icon: PackageCheck,
  heading: "Accelerate AI Innovation With Enterprise Annotation",
  description:
    "Whether you're building Computer Vision, Autonomous Driving, or Document AI, Bigwigs Technologies delivers secure, enterprise-grade annotation.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
