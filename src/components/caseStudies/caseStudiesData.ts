import {
  Stethoscope,
  Car,
  ShoppingCart,
  Landmark,
  Sprout,
  Building2,
  type LucideIcon,
} from "lucide-react";
import healthCareImg from "@/assests/industries/healthCare.png";
import automotiveImg from "@/assests/industries/Automotive.png";
import retailImg from "@/assests/industries/Retail.png";
import bankingImg from "@/assests/industries/Banking.png";
import agricultureImg from "@/assests/industries/Agriculture.png";
import dronesImg from "@/assests/industries/Drones.png";
import smartCitiesImg from "@/assests/industries/SmartCities.png";
import pic1 from "@/assests/trusted/pic1.jpg";
import pic2 from "@/assests/trusted/pic2.jpg";
import pic3 from "@/assests/trusted/pic3.jpg";
import pic4 from "@/assests/trusted/pic4.jpg";
import pic5 from "@/assests/trusted/pic5.jpg";
import pic6 from "@/assests/trusted/pic6.jpg";
import pic7 from "@/assests/trusted/pic7.jpg";

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description?: string;
}

export interface TeamInfo {
  size: string;
  duration: string;
  roles: string[];
}

export interface CaseStudy {
  slug: string;
  industry: string;
  industryIcon: LucideIcon;
  iconGradient: string;
  title: string;
  shortDescription: string;
  coverImage: string;
  technologies: string[];
  client: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  workflow: WorkflowStep[];
  servicesDelivered: string[];
  toolsUsed: string[];
  team: TeamInfo;
  qualityMetrics: MetricItem[];
  businessResults: MetricItem[];
  gallery: string[];
  relatedSlugs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "radiology-triage-annotation",
    industry: "Healthcare",
    industryIcon: Stethoscope,
    iconGradient: "from-brand-blue-500 to-brand-blue-600",
    title: "AI-Powered Radiology Triage Platform",
    shortDescription:
      "A HIPAA-compliant medical image annotation pipeline that trained a radiology triage model to flag critical findings in under two minutes.",
    coverImage: healthCareImg,
    technologies: ["Medical Image Annotation", "DICOM Processing", "Computer Vision", "Python"],
    client: "Multi-Specialty Diagnostic Imaging Network",
    duration: "5 months",
    overview:
      "A multi-specialty diagnostic imaging network partnered with Bigwigs Technologies to build the annotated ground truth needed to train a radiology triage model capable of surfacing critical findings across CT and X-ray studies before a radiologist ever opens the file.",
    challenge:
      "The client's internal team lacked the specialized radiology-informed annotation capacity to label tens of thousands of DICOM studies at the accuracy level clinical deployment demands, and existing vendor pipelines couldn't guarantee HIPAA-compliant de-identification at scale.",
    solution:
      "Bigwigs stood up a dedicated medical annotation pod combining radiology-trained annotators, a multi-tier QA review process, and an automated DICOM de-identification pipeline — giving the client a continuously validated, clinically defensible training dataset.",
    workflow: [
      { title: "Data Ingestion & De-identification", description: "Secure intake of DICOM studies with automated PHI stripping and audit logging." },
      { title: "Annotation Protocol Design", description: "Clinical taxonomy and labeling guidelines co-developed with the client's lead radiologists." },
      { title: "Multi-Tier Radiologist QA", description: "Every study passes through primary annotation, peer review, and a final radiologist sign-off." },
      { title: "Model Training Handoff", description: "Structured export pipelines feeding directly into the client's training environment." },
      { title: "Continuous Feedback Loop", description: "Model error analysis routed back into annotator retraining each sprint." },
    ],
    servicesDelivered: ["Medical Image Annotation", "DICOM De-identification", "Multi-Tier QA Review", "Model Validation Support"],
    toolsUsed: ["CVAT", "3D Slicer", "Python", "DICOM Toolkit", "Label Studio"],
    team: { size: "18 specialists", duration: "5 months", roles: ["Radiology-trained annotators", "QA leads", "Project manager", "ML liaison"] },
    qualityMetrics: [
      { label: "Annotation Accuracy", value: "99.4%" },
      { label: "Inter-Annotator Agreement", value: "97.2%" },
      { label: "QA Pass Rate", value: "98.8%" },
      { label: "Avg. Turnaround", value: "36 hrs" },
    ],
    businessResults: [
      { label: "Triage Speed", value: "3.5x faster", description: "Critical findings flagged in under two minutes." },
      { label: "Model Accuracy Gain", value: "+14%", description: "Improvement in diagnostic model precision." },
      { label: "Radiologist Hours Saved", value: "1,200+/mo", description: "Freed up for high-complexity cases." },
    ],
    gallery: [healthCareImg, pic1, pic2],
    relatedSlugs: ["autonomous-driving-lidar-annotation", "smart-city-traffic-intelligence"],
  },
  {
    slug: "autonomous-driving-lidar-annotation",
    industry: "Automotive",
    industryIcon: Car,
    iconGradient: "from-brand-blue-500 to-cyan-500",
    title: "LiDAR & Sensor Fusion Annotation for Autonomous Driving",
    shortDescription:
      "A high-throughput 3D point cloud and camera-LiDAR fusion annotation pipeline built for a Tier-1 autonomous vehicle supplier.",
    coverImage: automotiveImg,
    technologies: ["LiDAR Annotation", "Sensor Fusion", "3D Point Cloud", "Computer Vision"],
    client: "Tier-1 Autonomous Vehicle Supplier",
    duration: "9 months",
    overview:
      "A Tier-1 autonomous vehicle supplier needed millions of frames of synchronized camera and LiDAR data annotated to train perception models for highway and urban driving scenarios.",
    challenge:
      "Existing annotation throughput couldn't keep pace with the volume of sensor data generated by the test fleet, and cross-sensor labeling consistency between camera bounding boxes and 3D point cloud cuboids was inconsistent across vendors.",
    solution:
      "Bigwigs built a dedicated 3D annotation team trained on multi-sensor calibration, introduced a fusion-aware QA layer that cross-validates camera and LiDAR labels against each other, and mined edge cases to prioritize the highest-value frames first.",
    workflow: [
      { title: "Multi-Sensor Calibration Review", description: "Verifying camera-LiDAR extrinsics before any frame enters the queue." },
      { title: "3D Point Cloud Labeling", description: "Cuboid annotation of vehicles, pedestrians, cyclists, and static obstacles." },
      { title: "Camera-LiDAR Fusion QA", description: "Cross-sensor consistency checks between 2D boxes and 3D cuboids." },
      { title: "Edge Case Mining", description: "Active-learning driven surfacing of rare and safety-critical scenarios." },
      { title: "Model Feedback Integration", description: "Perception model failure cases routed back into annotation priorities." },
    ],
    servicesDelivered: ["3D LiDAR Annotation", "Camera-LiDAR Fusion", "Edge Case Curation", "Scenario Tagging"],
    toolsUsed: ["SuperAnnotate", "Custom Fusion Pipeline", "Python", "ROS Bag Tooling", "PCL"],
    team: { size: "32 annotators", duration: "9 months", roles: ["3D annotation specialists", "Sensor fusion QA", "Data scientist", "Delivery lead"] },
    qualityMetrics: [
      { label: "Point Cloud Accuracy", value: "99.1%" },
      { label: "Cross-Sensor Consistency", value: "96.5%" },
      { label: "QA Pass Rate", value: "98.2%" },
      { label: "Frames Processed / Day", value: "42K" },
    ],
    businessResults: [
      { label: "Annotation Throughput", value: "4.2x", description: "Increase after workflow re-engineering." },
      { label: "Model mAP Improvement", value: "+11.3%", description: "On pedestrian and cyclist detection." },
      { label: "Cost per Frame", value: "-38%", description: "Reduction via automation-assisted labeling." },
    ],
    gallery: [automotiveImg, pic3, pic4],
    relatedSlugs: ["smart-city-traffic-intelligence", "radiology-triage-annotation"],
  },
  {
    slug: "retail-visual-catalog-automation",
    industry: "Retail",
    industryIcon: ShoppingCart,
    iconGradient: "from-cyan-500 to-brand-blue-500",
    title: "Visual Product Recognition & Catalog Automation",
    shortDescription:
      "An automated pre-labeling and human-in-the-loop QA pipeline that cut catalog processing time by 65% for a global marketplace.",
    coverImage: retailImg,
    technologies: ["Computer Vision", "Image Classification", "Data Labeling", "Automation"],
    client: "Global E-Commerce Marketplace",
    duration: "4 months",
    overview:
      "A global e-commerce marketplace needed millions of seller-submitted product images classified, tagged, and mapped into a unified taxonomy to power visual search and recommendations.",
    challenge:
      "Inconsistent seller-submitted imagery and a fragmented internal taxonomy meant products were frequently mis-categorized, hurting search relevance and slowing time-to-list for new inventory.",
    solution:
      "Bigwigs redesigned the taxonomy in partnership with the client's catalog team, deployed a custom pre-labeling model to auto-tag high-confidence attributes, and layered human review only where model confidence dropped below threshold.",
    workflow: [
      { title: "Catalog Audit & Taxonomy Mapping", description: "Rebuilding the product taxonomy against real seller inventory." },
      { title: "Bounding Box & Attribute Labeling", description: "Tagging product region, category, color, and material attributes." },
      { title: "Automated Pre-Labeling Pipeline", description: "Model-assisted first-pass labeling to reduce manual load." },
      { title: "Human-in-the-Loop QA", description: "Review focused on low-confidence and ambiguous predictions." },
      { title: "Deployment Support", description: "Validation of tagged data against live search relevance metrics." },
    ],
    servicesDelivered: ["Product Image Annotation", "Attribute Tagging", "Taxonomy Design", "Automated Pre-Labeling"],
    toolsUsed: ["Label Studio", "CVAT", "Python", "Custom Pre-Labeling Models"],
    team: { size: "22 annotators", duration: "4 months", roles: ["Category specialists", "QA analysts", "ML engineer", "Project manager"] },
    qualityMetrics: [
      { label: "Labeling Accuracy", value: "98.9%" },
      { label: "Attribute Consistency", value: "97.6%" },
      { label: "QA Pass Rate", value: "99.0%" },
      { label: "Items Labeled / Day", value: "28K" },
    ],
    businessResults: [
      { label: "Catalog Processing Time", value: "-65%", description: "Reduction in time-to-list for new inventory." },
      { label: "Search Relevance", value: "+22%", description: "Improvement in visual search accuracy." },
      { label: "Manual Review Load", value: "-70%", description: "After pre-labeling automation went live." },
    ],
    gallery: [retailImg, pic5],
    relatedSlugs: ["fraud-detection-document-intelligence", "crop-health-monitoring-ai"],
  },
  {
    slug: "fraud-detection-document-intelligence",
    industry: "Finance",
    industryIcon: Landmark,
    iconGradient: "from-brand-blue-500 to-indigo-500",
    title: "Document Intelligence & Fraud Detection NLP",
    shortDescription:
      "An entity-annotation and OCR-correction pipeline powering a digital bank's fraud detection and compliance review models.",
    coverImage: bankingImg,
    technologies: ["NLP", "Document AI", "OCR", "Fraud Detection"],
    client: "Regional Digital Banking Platform",
    duration: "6 months",
    overview:
      "A regional digital banking platform needed a labeled corpus of financial documents and transaction narratives to train NLP models for fraud pattern detection and automated compliance review.",
    challenge:
      "Scanned statements and correspondence had inconsistent OCR quality, and the client's compliance team couldn't manually label the volume of documents needed to reach production-grade model accuracy.",
    solution:
      "Bigwigs combined an OCR correction pass with entity and intent annotation performed by reviewers trained on the client's compliance definitions, then layered fraud-pattern tagging to give the model labeled examples of known fraud typologies.",
    workflow: [
      { title: "Document Corpus Collection", description: "Aggregating statements, applications, and correspondence for labeling." },
      { title: "Entity & Intent Annotation", description: "Tagging named entities, transaction intents, and risk indicators." },
      { title: "OCR Correction Pipeline", description: "Human-verified correction of low-confidence OCR extractions." },
      { title: "Fraud Pattern Labeling", description: "Tagging documents against known fraud typologies for supervised training." },
      { title: "Model Validation Support", description: "Joint error analysis sessions with the client's data science team." },
    ],
    servicesDelivered: ["Named Entity Annotation", "OCR Correction", "Fraud Pattern Tagging", "Intent Classification"],
    toolsUsed: ["Label Studio", "Tesseract OCR", "spaCy", "Python"],
    team: { size: "16 specialists", duration: "6 months", roles: ["NLP annotators", "Compliance-domain reviewers", "QA lead", "ML liaison"] },
    qualityMetrics: [
      { label: "Entity Extraction Accuracy", value: "98.3%" },
      { label: "OCR Correction Rate", value: "99.5%" },
      { label: "QA Pass Rate", value: "98.6%" },
      { label: "Documents Processed / Day", value: "9K" },
    ],
    businessResults: [
      { label: "Fraud Detection Recall", value: "+27%", description: "Increase in flagged fraudulent transactions." },
      { label: "Manual Review Time", value: "-54%", description: "Reduction in compliance team workload." },
      { label: "False Positives", value: "-31%", description: "Drop in flagged legitimate transactions." },
    ],
    gallery: [bankingImg, pic6],
    relatedSlugs: ["retail-visual-catalog-automation", "radiology-triage-annotation"],
  },
  {
    slug: "crop-health-monitoring-ai",
    industry: "Agriculture",
    industryIcon: Sprout,
    iconGradient: "from-brand-green-500 to-emerald-500",
    title: "Satellite & Drone Crop Health Monitoring",
    shortDescription:
      "A geospatial segmentation pipeline fusing satellite and drone imagery to power early crop stress detection at scale.",
    coverImage: agricultureImg,
    technologies: ["GIS & Geospatial", "Drone Imagery", "Semantic Segmentation", "Computer Vision"],
    client: "Precision Agriculture Technology Provider",
    duration: "7 months",
    overview:
      "A precision agriculture technology provider needed field boundaries, crop types, and stress regions labeled across a multi-source imagery pipeline spanning satellite passes and drone flyovers.",
    challenge:
      "Aligning satellite and drone imagery at different resolutions and revisit rates made consistent field-level labeling difficult, and the client's agronomists couldn't scale manual review across every growing region.",
    solution:
      "Bigwigs built a geospatial annotation workflow combining GIS-trained analysts with agronomy-informed reviewers, standardizing field boundary and crop-stress labels across both imagery sources with rigorous geospatial alignment QA.",
    workflow: [
      { title: "Multi-Source Imagery Ingestion", description: "Aligning satellite passes and drone flyovers into a shared pipeline." },
      { title: "Field Boundary & Crop Segmentation", description: "Semantic segmentation of parcels and crop types." },
      { title: "Disease & Stress Region Labeling", description: "Tagging stress, disease, and irrigation anomalies with agronomist input." },
      { title: "Geospatial QA & Validation", description: "Cross-checking annotations against ground-truth coordinates." },
      { title: "Model Handoff & Field Testing", description: "Supporting validation against live field-scouting reports." },
    ],
    servicesDelivered: ["Semantic Segmentation", "Geospatial Annotation", "Crop Health Tagging", "Field Boundary Mapping"],
    toolsUsed: ["QGIS", "CVAT", "Python", "GDAL"],
    team: { size: "14 specialists", duration: "7 months", roles: ["GIS analysts", "Agronomy-informed annotators", "QA lead", "Project manager"] },
    qualityMetrics: [
      { label: "Segmentation Accuracy (IoU)", value: "94.8%" },
      { label: "Geospatial Alignment", value: "99.2%" },
      { label: "QA Pass Rate", value: "97.9%" },
      { label: "Hectares Processed / Week", value: "18K" },
    ],
    businessResults: [
      { label: "Yield Prediction Accuracy", value: "+19%", description: "Improvement in early-season forecasts." },
      { label: "Field Scouting Time", value: "-58%", description: "Reduction via automated stress detection." },
      { label: "Water Usage Efficiency", value: "+15%", description: "From targeted irrigation insights." },
    ],
    gallery: [agricultureImg, dronesImg, pic7],
    relatedSlugs: ["retail-visual-catalog-automation", "smart-city-traffic-intelligence"],
  },
  {
    slug: "smart-city-traffic-intelligence",
    industry: "Smart Cities",
    industryIcon: Building2,
    iconGradient: "from-violet-500 to-purple-500",
    title: "Traffic & Public Safety Computer Vision",
    shortDescription:
      "A city-scale video annotation and object-tracking pipeline supporting real-time traffic and incident intelligence.",
    coverImage: smartCitiesImg,
    technologies: ["Computer Vision", "Video Annotation", "Object Tracking", "Real-Time Analytics"],
    client: "Metropolitan Transportation Authority",
    duration: "8 months",
    overview:
      "A metropolitan transportation authority needed thousands of hours of multi-camera intersection footage annotated to train object-tracking and incident-detection models for its traffic management center.",
    challenge:
      "Footage volume from hundreds of intersections far outpaced the authority's internal review capacity, and existing labels lacked the temporal consistency required for reliable multi-frame object tracking.",
    solution:
      "Bigwigs deployed a video annotation team specialized in multi-object tracking, introduced incident-event tagging aligned to the authority's response taxonomy, and validated tracking consistency across full video sequences rather than single frames.",
    workflow: [
      { title: "Multi-Camera Footage Ingestion", description: "Aggregating and indexing footage from intersection camera feeds." },
      { title: "Object Detection & Tracking Annotation", description: "Frame-consistent labeling of vehicles, pedestrians, and cyclists." },
      { title: "Incident Event Tagging", description: "Tagging collisions, near-misses, and congestion events." },
      { title: "Edge Deployment QA", description: "Validating annotations against edge-model inference behavior." },
      { title: "Live Monitoring Support", description: "Ongoing review cycles as new camera feeds came online." },
    ],
    servicesDelivered: ["Video Frame Annotation", "Object Tracking", "Incident Tagging", "Edge Model Validation"],
    toolsUsed: ["CVAT", "SuperAnnotate", "Python", "Custom Tracking Pipeline"],
    team: { size: "20 specialists", duration: "8 months", roles: ["Video annotators", "Tracking QA analysts", "ML liaison", "Delivery lead"] },
    qualityMetrics: [
      { label: "Tracking Accuracy (MOTA)", value: "93.6%" },
      { label: "Detection Precision", value: "98.1%" },
      { label: "QA Pass Rate", value: "98.4%" },
      { label: "Hours Annotated / Week", value: "1,100" },
    ],
    businessResults: [
      { label: "Incident Response Time", value: "-41%", description: "Faster detection-to-dispatch." },
      { label: "Traffic Flow Optimization", value: "+17%", description: "Improvement at monitored intersections." },
      { label: "False Alarm Rate", value: "-35%", description: "Reduction in system-generated alerts." },
    ],
    gallery: [smartCitiesImg, dronesImg],
    relatedSlugs: ["autonomous-driving-lidar-annotation", "crop-health-monitoring-ai"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(study: CaseStudy): CaseStudy[] {
  return study.relatedSlugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((s): s is CaseStudy => Boolean(s));
}
