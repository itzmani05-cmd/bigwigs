import {
  Car,
  Database,
  Boxes,
  ScanEye,
  ShieldCheck,
  BatteryCharging,
  Radar,
  Eye,
  CheckCircle2,
  Code2,
  Route,
  Camera,
  Search,
  PenTool,
  Cog,
  Rocket,
} from "lucide-react";

export const automotiveHero = {
  eyebrow: "Automotive & Mobility",
  heading: (
    <>
      Accelerating Mobility With{" "}
      <span className="text-blue-500">Artificial Intelligence</span>
    </>
  ),
  description:
    "AI data services, software engineering, and automation for automotive OEMs, Tier-1 suppliers, and mobility providers.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const automotiveChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Automotive Teams Face",
  items: [
    { icon: Car, title: "Autonomous Driving Development" },
    { icon: Database, title: "Massive Sensor Data Processing" },
    { icon: Boxes, title: "LiDAR & 3D Point Cloud Annotation" },
    { icon: ScanEye, title: "Road Object Detection" },
    { icon: ShieldCheck, title: "Vehicle Safety Validation" },
    { icon: BatteryCharging, title: "EV Software Integration" },
  ],
};

export const automotiveCapabilities = {
  eyebrow: "What's Included",
  heading: "One Mobility AI Practice, Every Discipline",
  items: [
    { icon: ScanEye, title: "Autonomous Driving Annotation", description: "LiDAR, bounding box, and segmentation annotation." },
    { icon: Radar, title: "Sensor Data Processing", description: "Camera, radar, and sensor fusion processing." },
    { icon: Eye, title: "Computer Vision Solutions", description: "Object detection, lane keeping, driver monitoring." },
    { icon: CheckCircle2, title: "AI Model Evaluation", description: "Ground truth validation and safety benchmarking." },
    { icon: Code2, title: "Software Development", description: "Fleet, connected vehicle, and mobility platforms." },
    { icon: BatteryCharging, title: "EV Solutions", description: "Charging, fleet, and battery-performance software." },
    { icon: Route, title: "Smart Mobility Solutions", description: "Connected fleet management and route optimization." },
    { icon: Camera, title: "Data Collection Services", description: "Vehicle imagery and road scene data collection." },
  ],
};

export const automotiveProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand vehicle programs, AI objectives, and scope." },
  { icon: PenTool, title: "Design", description: "Define workflows, guidelines, and delivery plans." },
  { icon: Cog, title: "Execute", description: "Deliver datasets and software through dedicated teams." },
  { icon: CheckCircle2, title: "Validate", description: "Multi-level QA, testing, and performance reviews." },
  { icon: Rocket, title: "Deploy & Support", description: "Implementation support and ongoing improvements." },
];

export const automotiveFaq = [
  { question: "Do you support autonomous vehicle AI projects?", answer: "Yes — LiDAR annotation, computer vision datasets, model evaluation, and AI data preparation for autonomous driving and ADAS." },
  { question: "Can you process multi-sensor datasets?", answer: "Yes. We work with camera, LiDAR, radar, and other sensor data, including sensor fusion and synchronized annotation." },
  { question: "Do you build automotive software platforms?", answer: "Yes — fleet management, mobility apps, connected vehicle platforms, and analytics dashboards." },
  { question: "What's your typical engagement model?", answer: "Most start with a scoped pilot to validate quality and throughput, then scale into an ongoing partnership." },
];

export const automotiveBottomCta = {
  icon: Car,
  heading: "Drive the Future of Mobility with AI",
  description:
    "Whether you're building autonomous driving systems, EV solutions, or fleet management platforms, Bigwigs Technologies delivers the AI services to accelerate it.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
