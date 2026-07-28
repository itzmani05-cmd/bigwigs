import {
  Camera,
  Video,
  Scan,
  Shapes,
  Layers,
  Boxes,
  Crosshair,
  ScanLine,
  CheckCircle2,
  Target,
  ShieldCheck,
  Clock,
  TrendingUp,
  Tags,
  Award,
  Lock,
  Users2,
  Cuboid,
  FileSearch,
  Table,
  Receipt,
  ClipboardCheck,
  RotateCcw,
  Copy,
  FileStack,
  PackageCheck,
  Cpu,
  Car,
  Stethoscope,
  ShoppingCart,
  Factory,
  Sprout,
  Bot,
  Satellite,
  Landmark,
  Umbrella,
  Building2,
  MapPin,
  Zap,
  Search,
  ClipboardList,
  BookOpen,
  FlaskConical,
  Rocket,
  FileText,
} from "lucide-react";

export const annotationHero = {
  eyebrow: "AI Data Annotation Services",
  heading: (
    <>
      Power Intelligent AI
      <br />
      With{" "}
      <span className="text-blue-500">
        High-Quality
        <br />
        Data
      </span>
    </>
  ),
  description:
    "Build accurate, scalable, and reliable AI models with enterprise-grade data annotation services. Bigwigs Technologies delivers precision labeling for Computer Vision, NLP, Speech AI, Autonomous Driving, Healthcare AI, Robotics, and Large Language Models.",
  primaryCta: { label: "Start Your AI Annotation Project", href: "/demo" },
  secondaryCta: { label: "Talk To AI Specialists", href: "/contact" },
  trustedBy: ["Healthcare", "Automotive", "Retail", "Manufacturing", "AI Companies", "Government"],
  visualIcon: Camera,
  badges: [
    { icon: Camera, label: "Annotation Workspace", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Layers, label: "Quality Metrics", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Scan, label: "LiDAR Point Cloud", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const annotationChallenges = {
  heading: (
    <>
      The Realities AI Teams
      <br />
      Are Solving For
    </>
  ),
  description: "Every model is only as good as the data it learns from.",
  items: [
    {
      icon: Target,
      title: "Low-Quality Training Data",
      description: "Inconsistent or inaccurate labels quietly cap how good a model can ever get.",
    },
    { icon: Layers, title: "Inconsistent Labeling Standards" },
    { icon: Clock, title: "Slow Annotation Turnaround" },
    { icon: Users2, title: "Scaling Annotation Teams" },
    { icon: Lock, title: "Data Security & Confidentiality" },
    { icon: FileStack, title: "Multi-Format Dataset Requirements" },
    { icon: Boxes, title: "Complex Multi-Modal Data" },
    { icon: ShieldCheck, title: "Manual QA Overhead" },
    { icon: Award, title: "Domain-Specific Taxonomy Gaps" },
    { icon: TrendingUp, title: "Rising Annotation Costs" },
  ],
};

export const annotationSolutions = {
  heading: "Nine Ways We Help You Train Reliable AI",
  items: [
    {
      icon: Camera,
      title: "Image Annotation",
      description: "Bounding boxes, polygons, and masks labeled for computer vision.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Video Annotation",
      description: "Frame-by-frame tracking and event labeling across footage.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Scan,
      title: "LiDAR Annotation",
      description: "3D point clouds labeled for autonomous driving and robotics.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Shapes,
      title: "Polygon Annotation",
      description: "Irregular object boundaries traced with pixel-level precision.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Layers,
      title: "Semantic Segmentation",
      description: "Every pixel classified into its corresponding object class.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Boxes,
      title: "Instance Segmentation",
      description: "Individual object instances separated within a shared class.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Crosshair,
      title: "Keypoint Annotation",
      description: "Pose, landmarks, and gesture points labeled for tracking models.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: ScanLine,
      title: "OCR & Document Annotation",
      description: "Text, tables, and forms labeled for document AI training.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: CheckCircle2,
      title: "Data Labeling & Validation",
      description: "Cleaning, structuring, and validation before final delivery.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const whyAnnotationMatters = {
  heading: "Every Model Is Only as Good as the Data It Learns From",
  centerIcon: Cuboid,
  badges: [
    { icon: Target, label: "High Accuracy", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ShieldCheck, label: "Reliable Models", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: TrendingUp, label: "Better Predictions", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: Target, title: "High Accuracy", description: "Precisely labeled data that gives models the ground truth they need." },
    { icon: ShieldCheck, title: "Reliable Models", description: "Consistent labeling standards that hold up in production." },
    { icon: Clock, title: "Reduced Development Time", description: "Clean, ready-to-train datasets that skip rework cycles." },
    { icon: TrendingUp, title: "Better Predictions", description: "Higher-quality training data that sharpens model performance." },
    { icon: Layers, title: "Scalable AI", description: "Annotation pipelines built to grow from pilot to production." },
  ],
};

export const imageAnnotationSteps = [
  { icon: Camera, label: "Capture" },
  { icon: Shapes, label: "Annotate" },
  { icon: ShieldCheck, label: "Review" },
  { icon: CheckCircle2, label: "Validate" },
];

export const imageAnnotation = {
  heading: "Train Computer Vision With Precision Annotation",
  description: "Every object, boundary, and landmark labeled to your taxonomy — with the annotation type that fits the model you're training.",
  steps: imageAnnotationSteps,
  items: [
    { icon: Boxes, title: "Bounding Boxes" },
    { icon: Shapes, title: "Polygon Annotation" },
    { icon: Layers, title: "Semantic Segmentation" },
    { icon: Boxes, title: "Instance Segmentation" },
    { icon: Cuboid, title: "Cuboids" },
    { icon: Crosshair, title: "Keypoints" },
    { icon: Crosshair, title: "Landmarks" },
    { icon: ScanLine, title: "OCR" },
    { icon: Tags, title: "Image Classification" },
  ],
};

export const videoAndLidar = {
  heading: "Motion and Depth, Labeled for Autonomy",
  description: "Objects tracked across every frame with consistent IDs, and point clouds labeled with 3D cuboids — for models that need to understand motion and real-world depth.",
  cards: [
    {
      icon: Video,
      title: "Video Annotation",
      description: "Motion labeled frame by frame, object by object.",
      items: ["Object Tracking", "Multi-Object Tracking", "Frame Annotation", "Action Recognition", "Traffic Analysis", "Lane Detection"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Scan,
      title: "LiDAR Annotation",
      description: "3D perception for autonomous systems.",
      items: ["Point Cloud Classification", "3D Cuboids", "Lane Marking", "Semantic Segmentation", "Object Tracking", "Sensor Fusion"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const advancedAnnotation = {
  heading: "One Annotation Type, Many Industries",
  description: "The same precision annotation techniques adapt across every industry we serve.",
  cards: [
    {
      icon: Shapes,
      title: "Polygon Annotation",
      description: "Irregular object boundaries traced with pixel-level precision.",
      items: ["Medical Imaging", "Satellite Imagery", "Agriculture", "Manufacturing"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Semantic Segmentation",
      description: "Every pixel classified into its corresponding object class.",
      items: ["Road Scenes", "Healthcare", "Satellite Mapping", "Environmental Monitoring"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Boxes,
      title: "Instance Segmentation",
      description: "Individual object instances separated within a shared class.",
      items: ["Retail", "Robotics", "Inventory", "Autonomous Driving"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Crosshair,
      title: "Keypoint Annotation",
      description: "Pose, landmarks, and gesture points labeled for tracking models.",
      items: ["Pose Estimation", "Sports Analytics", "Gesture Recognition", "Healthcare", "AR"],
      glowColor: "rgba(244,63,94,0.3)",
      gradient: "from-rose-500 to-pink-500",
    },
  ],
};

export const ocrSteps = [
  { icon: ScanLine, label: "Scan" },
  { icon: FileSearch, label: "Extract" },
  { icon: Table, label: "Structure" },
  { icon: CheckCircle2, label: "Validate" },
];

export const ocrDocumentAi = {
  heading: "Structured Labels for Unstructured Documents",
  description: "Invoices, forms, and tables labeled at the field level — training document AI to extract, not just read.",
  steps: ocrSteps,
  checklist: [
    { icon: ScanLine, label: "Text Detection", description: "Locate every line of text across scanned and native documents." },
    { icon: FileText, label: "Text Recognition", description: "Convert detected text regions into accurate machine-readable text." },
    { icon: ClipboardCheck, label: "Form Annotation", description: "Label fields, checkboxes, and signatures across structured forms." },
    { icon: Receipt, label: "Invoice Processing", description: "Extract line items, totals, and vendor details from invoices." },
    { icon: FileSearch, label: "Document Classification", description: "Sort incoming documents by type before downstream processing." },
    { icon: Table, label: "Table Recognition", description: "Preserve row and column structure when extracting tabular data." },
  ],
};

export const dataLabelingSteps = [
  { icon: RotateCcw, label: "Clean" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: FileStack, label: "Structure" },
  { icon: PackageCheck, label: "Deliver" },
];

export const dataLabelingValidation = {
  heading: "Every Dataset Cleaned, Checked, and Structured",
  description: "Raw annotations are cleaned, deduplicated, and validated before they're ever structured into your final delivery format.",
  steps: dataLabelingSteps,
  marqueeItems: [
    { icon: RotateCcw, title: "Cleaning" },
    { icon: CheckCircle2, title: "Validation" },
    { icon: Tags, title: "Metadata" },
    { icon: Copy, title: "Duplicate Detection" },
    { icon: ShieldCheck, title: "Quality Verification" },
    { icon: FileStack, title: "Dataset Structuring" },
  ],
};

export const annotationWhoWeServe = {
  heading: "Annotation Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Annotation
    </>
  ),
  items: [
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Car, label: "Autonomous Driving" },
    { icon: Stethoscope, label: "Healthcare" },
    { icon: ShoppingCart, label: "Retail" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Sprout, label: "Agriculture" },
    { icon: Bot, label: "Robotics" },
    { icon: Satellite, label: "GIS & Remote Sensing" },
    { icon: Landmark, label: "Banking" },
    { icon: Umbrella, label: "Insurance" },
    { icon: Building2, label: "Government" },
    { icon: MapPin, label: "Smart Cities" },
  ],
};

export const annotationBusinessBenefits = {
  heading: "Measurable Impact Across Every Dataset",
  kpis: [
    { value: 99.5, suffix: "%", label: "Annotation Accuracy" },
    { value: 50, suffix: "M+", label: "Objects Annotated" },
    { value: 100, suffix: "+", label: "Enterprise AI Projects" },
    { value: 40, suffix: "%", label: "Faster Model Training" },
  ],
  benefits: [
    { icon: Tags, title: "High-Quality Labels", description: "Every label produced to spec, not just close enough." },
    { icon: CheckCircle2, title: "Consistent Standards", description: "The same guideline applied across every annotator." },
    { icon: Award, title: "Domain Expertise", description: "Annotators trained on your industry, not a generic taskset." },
    { icon: ShieldCheck, title: "Enterprise QA", description: "Multi-level review before any dataset reaches your model." },
    { icon: Lock, title: "Secure Data", description: "Confidential datasets handled under strict access control." },
    { icon: Users2, title: "Scalable Teams", description: "From a pilot batch to thousands of annotators on demand." },
  ],
};

export const annotationWhyUs = {
  heading: "Six Reasons AI Teams Trust Our Annotation Teams",
  items: [
    { icon: Users2, title: "Experienced Annotators", description: "Teams trained on your taxonomy, not a generic labeling task.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Layers, title: "Enterprise Scale", description: "From a pilot batch to millions of objects, on the same pipeline.", gradient: "from-violet-500 to-purple-400" },
    { icon: ShieldCheck, title: "Multi-Level QA", description: "Every batch reviewed before it ever reaches your model.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Lock, title: "Secure Data Handling", description: "Consent-managed, encrypted handling from intake to delivery.", gradient: "from-orange-500 to-amber-400" },
    { icon: Award, title: "Dedicated Project Managers", description: "One point of contact accountable for every delivery.", gradient: "from-rose-500 to-pink-400" },
    { icon: Zap, title: "Fast Turnaround", description: "Standard and rush timelines, without compromising accuracy.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const annotationUseCases = {
  heading: "AI Data Annotation Built for Every Model",
  description: "From computer vision to document AI, our annotation teams help enterprises train reliable models faster.",
  items: [
    { id: "cv-model-training", icon: Camera, title: "Computer Vision Model Training", description: "Bounding box, polygon, and segmentation annotation that gives vision models a solid ground truth.", outcome: "99% annotation quality score", href: "#contact" },
    { id: "autonomous-driving-perception", icon: Scan, title: "Autonomous Driving Perception", description: "LiDAR point clouds and video frames labeled with 3D cuboids and consistent tracking IDs for perception models.", outcome: "3D perception ready for autonomous systems", href: "#contact" },
    { id: "document-ai-invoices", icon: ScanLine, title: "Document AI & Invoice Processing", description: "Field-level labeling of invoices, forms, and tables that trains document AI to extract, not just read.", outcome: "Structured extraction across every document type", href: "#contact" },
    { id: "multi-format-datasets", icon: FileStack, title: "Multi-Format Dataset Delivery", description: "Datasets delivered in COCO, YOLO, Pascal VOC, KITTI, or any custom schema your training pipeline expects.", outcome: "Delivered in the format your pipeline expects", href: "#contact" },
    { id: "large-scale-validation", icon: CheckCircle2, title: "Large-Scale Dataset Validation", description: "Cleaning, deduplication, and structuring at scale before datasets reach final delivery.", outcome: "60% reduction in model training time", href: "#contact" },
  ],
};

export const annotationCaseStudy = {
  heading: "Helping Enterprises Build Better AI Models",
  description: "An enterprise AI team partnered with Bigwigs to annotate and validate its computer vision dataset — cutting training time while raising model accuracy.",
  stats: [
    { value: "50M+", label: "Objects Labeled" },
    { value: "99%", label: "Quality Score" },
    { value: "60%", label: "Reduced Training Time" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Model KPIs", secondary: "Annotation Analytics", trend: "Quality Trend" },
};

export const annotationProcessSteps = [
  { icon: Search, title: "Requirement Analysis", description: "Understand the model, taxonomy, and data types before scoping the project." },
  { icon: ClipboardList, title: "Dataset Assessment", description: "Review raw data volume, format, and quality to plan the pipeline." },
  { icon: BookOpen, title: "Annotation Guidelines", description: "Documented, versioned guidelines that keep every annotator aligned." },
  { icon: FlaskConical, title: "Pilot Annotation", description: "A small batch validates quality and throughput before scaling up." },
  { icon: Rocket, title: "Production", description: "Full-scale annotation delivered against the validated pipeline." },
  { icon: ShieldCheck, title: "Quality Assurance", description: "Multi-level review before any dataset reaches your model." },
  { icon: PackageCheck, title: "Delivery", description: "Structured datasets delivered in the format your pipeline expects." },
];

export const annotationProcess = {
  heading: "Seven Stages Between Raw Data and a Trained Model",
  steps: annotationProcessSteps,
  desktopColumnsClassName: "grid-cols-7",
};

export const annotationFaq = {
  items: [
    { question: "Which annotation formats do you support?", answer: "We deliver in COCO, YOLO, Pascal VOC, KITTI, and any custom JSON or XML schema your training pipeline expects." },
    { question: "Can you scale large annotation projects?", answer: "Yes. Our teams scale from a pilot batch to millions of objects a month without changing your delivery format or quality bar." },
    { question: "How do you ensure annotation quality?", answer: "Every batch passes multi-level review — initial annotation, peer check, and senior QA sign-off — before delivery." },
    { question: "Can you handle confidential datasets?", answer: "Yes. Confidential and regulated datasets are handled under signed NDAs with encrypted storage and controlled access." },
  ],
};

export const annotationBottomCta = {
  icon: Camera,
  heading: <>Accelerate AI Innovation With Enterprise Annotation</>,
  description:
    "Whether you're building Computer Vision systems, Autonomous Driving platforms, Healthcare AI, Robotics, Document AI, or Large Language Models, Bigwigs Technologies delivers secure, scalable, and enterprise-grade annotation services that power the next generation of Artificial Intelligence.",
  primaryAction: { label: "Start Your AI Annotation Project", href: "#contact" },
  secondaryAction: { label: "Talk To AI Specialists", href: "#contact", showArrow: true },
};
