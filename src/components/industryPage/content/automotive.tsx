import {
  Car,
  CarFront,
  Radar,
  Boxes,
  ScanEye,
  Eye,
  ShieldCheck,
  Truck,
  Wrench,
  BatteryCharging,
  Wifi,
  Shapes,
  Layers,
  Layers2,
  Box,
  Route,
  Map,
  Signpost,
  TrafficCone,
  Footprints,
  CheckCircle2,
  Code2,
  FileStack,
  Camera,
  BarChart3,
  Cpu,
  Rocket,
  Building2,
  Package,
  Microscope,
  Search,
  PenTool,
  Cog,
  FileText,
  Receipt,
  ClipboardList,
  Factory,
  FileSignature,
  ShieldAlert,
  UserCircle,
  Smartphone,
  MapPin,
  ClipboardCheck,
  Database,
  Globe2,
  Handshake,
  Workflow,
  Rocket as RocketIcon,
} from "lucide-react";

export const automotiveHero = {
  eyebrow: "Automotive & Mobility Solutions",
  heading: (
    <>
      Accelerating the
      <br />
      Future of Mobility With{" "}
      <span className="text-blue-500">
        Artificial
        <br />
        Intelligence
      </span>
    </>
  ),
  description:
    "We help automotive manufacturers, Tier-1 suppliers, mobility providers, autonomous vehicle companies, and transportation technology organizations accelerate innovation through AI data services, software engineering, intelligent automation, and digital transformation.",
  primaryCta: { label: "Schedule an Automotive AI Consultation", href: "#contact" },
  secondaryCta: { label: "Speak with Our Mobility Solutions Experts", href: "#contact" },
  trustedBy: ["Automotive OEMs", "Tier-1 Suppliers", "Autonomous Vehicle Companies", "EV Manufacturers", "Mobility Startups", "Fleet Operators"],
  visualIcon: Car,
  badges: [
    { icon: Radar, label: "Sensor Fusion Data", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: BarChart3, label: "Fleet Analytics", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Wifi, label: "Connected Vehicle Platform", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const automotiveChallenges = {
  heading: (
    <>
      The Realities Automotive
      <br />
      Teams Are Solving For
    </>
  ),
  description:
    "Every OEM, Tier-1 supplier, and mobility provider is racing to bring safe, connected, and autonomous vehicles to market faster.",
  items: [
    {
      icon: Car,
      title: "Autonomous Driving Development",
      description: "Every OEM and AV company is racing to bring safe, reliable autonomy to market faster.",
    },
    { icon: Database, title: "Massive Sensor Data Processing" },
    { icon: Boxes, title: "LiDAR & 3D Point Cloud Annotation" },
    { icon: ScanEye, title: "Road Object Detection" },
    { icon: Eye, title: "Driver Behavior Analysis" },
    { icon: ShieldCheck, title: "Vehicle Safety Validation" },
    { icon: Truck, title: "Fleet Management Optimization" },
    { icon: Wrench, title: "Predictive Maintenance" },
    { icon: BatteryCharging, title: "Electric Vehicle Software Integration" },
    { icon: Wifi, title: "Connected Mobility Services" },
  ],
};

export const automotiveSolutions = {
  heading: "Nine Disciplines. One Mobility AI Practice.",
  items: [
    {
      icon: ScanEye,
      title: "Autonomous Driving Data Annotation",
      description: "High-quality bounding box, segmentation, and LiDAR point cloud annotation for autonomous vehicle AI systems.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Radar,
      title: "LiDAR & Sensor Data Processing",
      description: "Accurate processing of LiDAR, radar, camera, and sensor fusion data for ADAS and autonomous driving.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "AI-ready datasets for object detection, lane keeping, parking assistance, and driver monitoring.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: CheckCircle2,
      title: "AI Model Evaluation",
      description: "Ground truth validation, benchmark creation, and safety scenario evaluation for automotive AI systems.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Fleet management, connected vehicle, and mobility platforms engineered for automotive scale.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: FileStack,
      title: "Intelligent Document Processing",
      description: "Automated extraction from inspection reports, warranty claims, and manufacturing documentation.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Camera,
      title: "Data Collection Services",
      description: "Vehicle imagery, road scene, and driver behavior data collection for AI model development.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: BatteryCharging,
      title: "Electric Vehicle (EV) Solutions",
      description: "Charging infrastructure, fleet analytics, and battery performance platforms for EV manufacturers.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Route,
      title: "Smart Mobility Solutions",
      description: "Connected fleet management, route optimization, and Mobility-as-a-Service platforms.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const annotationSteps = [
  { icon: Camera, label: "Raw Sensor Data" },
  { icon: ScanEye, label: "Annotation" },
  { icon: CheckCircle2, label: "QA Review" },
  { icon: Boxes, label: "Model-Ready Dataset" },
];

export const annotation = {
  heading: "Datasets Built for Autonomous Vehicle AI",
  description: "We prepare high-quality datasets for autonomous vehicle AI systems across every sensor type and scenario.",
  steps: annotationSteps,
  items: [
    { icon: Box, title: "Bounding Box Annotation" },
    { icon: Shapes, title: "Polygon Annotation" },
    { icon: Layers, title: "Semantic Segmentation" },
    { icon: Layers2, title: "Instance Segmentation" },
    { icon: Boxes, title: "Cuboid Annotation (3D)" },
    { icon: Radar, title: "LiDAR Point Cloud Annotation" },
    { icon: Route, title: "Lane Detection" },
    { icon: Map, title: "Drivable Area Annotation" },
    { icon: Signpost, title: "Traffic Sign Annotation" },
    { icon: TrafficCone, title: "Traffic Light Recognition" },
    { icon: Footprints, title: "Pedestrian Detection" },
    { icon: CarFront, title: "Vehicle Tracking" },
  ],
};

export const sensorSteps = [
  { icon: Camera, label: "Capture" },
  { icon: Cog, label: "Synchronize" },
  { icon: Radar, label: "Fuse" },
  { icon: CheckCircle2, label: "Validate" },
];

export const sensorProcessing = {
  heading: "Sensor Data Processing for ADAS & Autonomy",
  description: "Support advanced driver-assistance systems and autonomous driving through accurate multi-sensor processing.",
  steps: sensorSteps,
  checklist: [
    { icon: Radar, label: "LiDAR Point Clouds", description: "High-density 3D point cloud data captured across driving scenarios." },
    { icon: Radar, label: "Radar Data", description: "Range, velocity, and object-tracking data from automotive radar systems." },
    { icon: Camera, label: "Camera Images", description: "Multi-camera imagery covering front, side, and rear vehicle perspectives." },
    { icon: Layers, label: "Depth Maps", description: "Dense depth estimation data for scene understanding and obstacle detection." },
    { icon: Boxes, label: "Sensor Fusion Datasets", description: "Synchronized, multi-modal datasets combining camera, LiDAR, and radar." },
    { icon: MapPin, label: "GPS & IMU Metadata", description: "Precise positioning and motion metadata aligned to every sensor frame." },
  ],
};

export const computerVision = {
  heading: "Vehicle Perception, Built for Every Scenario",
  description: "Enable intelligent vehicle perception with AI-ready datasets across every driving condition.",
  centerIcon: Eye,
  badges: [
    { icon: ScanEye, label: "Object Detection", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: ShieldCheck, label: "Collision Avoidance", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: UserCircle, label: "Driver Monitoring", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: ScanEye, title: "Object Detection", description: "Identify vehicles, pedestrians, and obstacles across driving scenes." },
    { icon: Route, title: "Road Surface Analysis", description: "Detect road conditions, markings, and surface hazards in real time." },
    { icon: Map, title: "Lane Keeping Assistance", description: "Datasets that power accurate lane detection and keeping systems." },
    { icon: MapPin, title: "Parking Assistance", description: "Vision models that support automated and assisted parking maneuvers." },
    { icon: ShieldAlert, title: "Collision Avoidance", description: "Perception datasets that improve early hazard and collision detection." },
    { icon: BarChart3, title: "Traffic Monitoring", description: "Scene understanding for congestion, flow, and incident detection." },
    { icon: Eye, title: "Driver Monitoring Systems (DMS)", description: "Datasets that support fatigue, distraction, and attention detection." },
  ],
};

export const softwareDashboard = {
  heading: "Automotive Software, Built to Scale",
  description: "We build automotive software solutions that keep fleets, dealers, and drivers connected.",
  panelLabel: "Mobility Operations Suite",
  tiles: [
    { icon: Truck, label: "Fleet Management" },
    { icon: Cpu, label: "Vehicle Monitoring" },
    { icon: Wifi, label: "Connected Vehicle Apps" },
    { icon: Wrench, label: "Predictive Maintenance", hasSparkline: true },
    { icon: Building2, label: "Dealer Management" },
    { icon: Route, label: "Mobility Platforms" },
    { icon: BarChart3, label: "Vehicle Analytics", hasLiveDot: true },
    { icon: Smartphone, label: "Mobile Applications" },
  ],
  pills: [
    { icon: Truck, label: "Fleet Management Systems" },
    { icon: Cpu, label: "Vehicle Monitoring Platforms" },
    { icon: Wifi, label: "Connected Vehicle Applications" },
    { icon: Wrench, label: "Predictive Maintenance Dashboards" },
    { icon: Route, label: "Mobility Platforms" },
    { icon: Smartphone, label: "Mobile Applications" },
  ],
};

export const documentSteps = [
  { icon: FileText, label: "Intake" },
  { icon: ScanEye, label: "Extract" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: Workflow, label: "Route" },
];

export const documentProcessing = {
  heading: "Automate Automotive Documentation Workflows",
  description: "We digitize and process inspection reports, warranty claims, and manufacturing documentation end-to-end.",
  steps: documentSteps,
  marqueeItems: [
    { icon: ClipboardCheck, title: "Vehicle Inspection Reports" },
    { icon: Receipt, title: "Warranty Claims" },
    { icon: Wrench, title: "Maintenance Records" },
    { icon: Factory, title: "Manufacturing Documents" },
    { icon: FileSignature, title: "Supplier Documentation" },
    { icon: ClipboardList, title: "Quality Inspection Reports" },
    { icon: FileText, title: "Compliance Documentation" },
  ],
};

export const evMobility = {
  heading: "EV & Smart Mobility, Ready to Scale",
  description: "Supporting electric vehicle manufacturers and connected mobility providers with data and software built for scale.",
  cards: [
    {
      icon: BatteryCharging,
      title: "Electric Vehicle (EV) Solutions",
      description: "Support EV manufacturers with charging, fleet, and battery-performance software.",
      items: ["Charging Infrastructure Applications", "Fleet Analytics", "Battery Performance Dashboards", "Predictive Maintenance", "Mobile EV Applications", "Charging Station Management"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Route,
      title: "Smart Mobility Solutions",
      description: "Enable connected transportation with intelligent fleet and mobility platforms.",
      items: ["Intelligent Fleet Management", "Route Optimization", "Driver Performance Analytics", "Smart Parking Systems", "Public Transport Analytics", "Mobility-as-a-Service (MaaS) Platforms"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
  ],
};

export const automotiveWhoWeServe = {
  heading: "Trusted Across the Mobility Ecosystem",
  description: "From OEMs to smart city initiatives, we support every organization building the future of transportation.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Automotive
    </>
  ),
  items: [
    { icon: Car, label: "Automotive OEMs" },
    { icon: Factory, label: "Tier-1 Suppliers" },
    { icon: Cpu, label: "Autonomous Vehicle Companies" },
    { icon: BatteryCharging, label: "Electric Vehicle Manufacturers" },
    { icon: RocketIcon, label: "Mobility Startups" },
    { icon: Truck, label: "Fleet Operators" },
    { icon: Wifi, label: "Transportation Technology Providers" },
    { icon: Building2, label: "Smart City Initiatives" },
    { icon: Package, label: "Logistics Companies" },
    { icon: Microscope, label: "Automotive Research Organizations" },
  ],
};

export const automotiveBusinessBenefits = {
  heading: "Measurable Impact Across the Vehicle Lifecycle",
  kpis: [
    { value: 45, suffix: "%", label: "Faster Annotation Turnaround" },
    { value: 30, suffix: "%", label: "Reduction in Data Prep Time" },
    { value: 99, suffix: "%", label: "Annotation Accuracy" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Sensor Frames Processed" },
  ],
  benefits: [
    { icon: Car, title: "Accelerate Autonomous Driving Development", description: "Faster, higher-quality datasets that keep AV programs on schedule." },
    { icon: CheckCircle2, title: "Improve AI Model Accuracy", description: "Rigorous QA processes that sharpen perception and prediction models." },
    { icon: ShieldCheck, title: "Enhance Vehicle Safety", description: "Validated datasets and models that strengthen safety outcomes." },
    { icon: Truck, title: "Optimize Fleet Operations", description: "Analytics and automation that reduce cost and downtime across fleets." },
    { icon: BatteryCharging, title: "Support EV Innovation", description: "Software and data services built for the electric vehicle transition." },
    { icon: Globe2, title: "Scale AI Initiatives Globally", description: "Distributed delivery teams that scale with your program's growth." },
  ],
};

export const automotiveWhyUs = {
  heading: "Why Automotive Companies Choose Bigwigs",
  items: [
    { icon: ScanEye, title: "Expertise in AI Data Services", description: "Deep experience preparing data for perception, prediction, and planning models.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Radar, title: "LiDAR & Computer Vision Capabilities", description: "Specialist teams for LiDAR, radar, camera, and multi-sensor annotation.", gradient: "from-violet-500 to-purple-400" },
    { icon: Code2, title: "Enterprise Software Development Experience", description: "Proven delivery of fleet, mobility, and connected-vehicle platforms.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: ShieldCheck, title: "Strong Quality Assurance Processes", description: "Multi-layer QA built for the precision autonomous systems demand.", gradient: "from-orange-500 to-amber-400" },
    { icon: Globe2, title: "Scalable Global Delivery Teams", description: "Distributed teams that scale with your program across time zones.", gradient: "from-rose-500 to-pink-400" },
    { icon: Handshake, title: "Customer-Focused Partnership Approach", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const automotiveUseCases = {
  heading: "AI Built for Automotive & Mobility Workflows",
  description: "From autonomous training to fleet intelligence, our AI solutions help mobility organizations innovate faster and safer.",
  items: [
    { id: "av-training", icon: ScanEye, title: "Autonomous Vehicle Training", description: "Develop annotated datasets for object detection, lane recognition, traffic sign identification, and pedestrian detection to improve autonomous driving models.", outcome: "35% improvement in object detection accuracy", href: "#contact" },
    { id: "fleet-intelligence", icon: Truck, title: "Fleet Intelligence Platform", description: "Build dashboards that monitor vehicle health, optimize routes, and provide predictive maintenance insights for commercial fleets.", outcome: "20% reduction in fleet operating costs", href: "#contact" },
    { id: "driver-monitoring", icon: Eye, title: "Driver Monitoring System", description: "Support AI models that detect driver fatigue, distraction, and unsafe behavior to improve road safety.", outcome: "40% reduction in fatigue-related incidents", href: "#contact" },
    { id: "ev-charging", icon: BatteryCharging, title: "EV Charging Management", description: "Create cloud-based platforms for monitoring charging stations, tracking usage, and optimizing charging operations.", outcome: "25% increase in charging station utilization", href: "#contact" },
    { id: "warranty-automation", icon: Receipt, title: "Warranty Claims Automation", description: "Use AI and document processing to streamline warranty claim validation, reducing manual effort and accelerating claim resolution.", outcome: "55% faster claims resolution time", href: "#contact" },
  ],
};

export const automotiveCaseStudy = {
  heading: "Helping Automotive Companies Build AI Faster",
  description: "We partner with OEMs, Tier-1 suppliers, and autonomous vehicle companies to turn raw sensor data into annotated, model-ready datasets and production-grade perception systems.",
  stats: [
    { value: "97%", label: "Annotation Accuracy" },
    { value: "60+", label: "Automotive Projects" },
    { value: "Millions", label: "Sensor Frames Annotated" },
  ],
  ctaHref: "/case-studies/autonomous-driving-lidar-annotation",
  chartLabels: { primary: "Fleet KPIs", secondary: "Sensor Analytics", trend: "Model Performance" },
};

export const automotiveProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand vehicle programs, AI objectives, data requirements, and project scope." },
  { icon: PenTool, title: "Design", description: "Define workflows, annotation guidelines, software architecture, and delivery plans." },
  { icon: Cog, title: "Execute", description: "Deliver AI datasets, software solutions, and automation services through dedicated teams." },
  { icon: CheckCircle2, title: "Validate", description: "Conduct multi-level quality assurance, testing, and performance reviews." },
  { icon: Rocket, title: "Deploy & Support", description: "Provide implementation support, knowledge transfer, and ongoing operational improvements." },
];

export const automotiveProcess = {
  heading: "From Discovery to Ongoing Support",
  steps: automotiveProcessSteps,
  desktopColumnsClassName: "grid-cols-5",
};

export const automotiveFaq = {
  items: [
    { question: "Do you support autonomous vehicle AI projects?", answer: "Yes. We provide LiDAR annotation, computer vision datasets, model evaluation support, and AI data preparation services for autonomous driving and ADAS applications." },
    { question: "Can you process multi-sensor datasets?", answer: "Yes. We work with camera, LiDAR, radar, and other sensor data, supporting projects that require sensor fusion and synchronized annotations." },
    { question: "Do you build automotive software platforms?", answer: "Yes. We develop fleet management systems, mobility applications, connected vehicle platforms, analytics dashboards, and other custom automotive software solutions." },
    { question: "Can you handle large-scale LiDAR and point cloud datasets?", answer: "Yes. Our teams and tooling are built for high-volume 3D point cloud annotation, with QA workflows designed for the precision autonomous systems require." },
    { question: "What is your typical engagement model for automotive projects?", answer: "Most automotive engagements start with a scoped pilot to validate quality and throughput, then scale into ongoing partnerships with dedicated teams and flexible delivery models." },
  ],
};

export const automotiveBottomCta = {
  icon: Car,
  heading: (
    <>
      Drive the Future
      <br />
      of Mobility with AI
    </>
  ),
  description:
    "Whether you're building autonomous driving systems, connected vehicle platforms, EV solutions, or intelligent fleet management applications, Bigwigs Technologies provides the expertise and scalable AI services to accelerate your innovation.",
  primaryAction: { label: "Schedule an Automotive AI Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our Mobility Solutions Experts", href: "#contact", showArrow: true },
};
