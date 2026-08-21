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
    { icon: Target, title: "Low-Quality Training Data" },
    { icon: Layers, title: "Inconsistent Labeling Standards" },
    { icon: Clock, title: "Slow Annotation Turnaround" },
    { icon: Users2, title: "Scaling Annotation Teams" },
    { icon: Lock, title: "Data Security & Confidentiality" },
    { icon: TrendingUp, title: "Rising Annotation Costs" },
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
];

export const annotationBottomCta = {
  icon: PackageCheck,
  heading: "Accelerate AI Innovation With Enterprise Annotation",
  description:
    "Whether you're building Computer Vision, Autonomous Driving, or Document AI, Bigwigs Technologies delivers secure, enterprise-grade annotation.",
  primaryAction: { label: "Start Your Project", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
