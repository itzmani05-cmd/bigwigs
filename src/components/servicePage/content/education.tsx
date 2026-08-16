import {
  GraduationCap,
  BrainCircuit,
  BookOpen,
  BookMarked,
  Accessibility,
  Database,
  Languages,
  Users,
  ClipboardCheck,
  TrendingUp,
  Route,
  Search,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export const educationHero = {
  eyebrow: "Education & eLearning Solutions",
  heading: (
    <>
      Learning, Powered by{" "}
      <span className="text-blue-500">AI & Digital Innovation</span>
    </>
  ),
  description:
    "AI-driven learning platforms, digital publishing, and accessibility solutions built for institutions, EdTech companies, and publishers.",
  primaryCta: { label: "Schedule a Consultation", href: "/demo" },
  secondaryCta: { label: "Talk to Our Team", href: "/contact" },
};

export const educationChallenges = {
  eyebrow: "What We Solve",
  heading: "The Realities Educational Organizations Face",
  items: [
    { icon: TrendingUp, title: "Growing Demand for Online Learning" },
    { icon: Route, title: "Personalized Learning Requirements" },
    { icon: Accessibility, title: "Accessibility Compliance" },
    { icon: Users, title: "Student Engagement" },
    { icon: Languages, title: "Multilingual Education" },
    { icon: Database, title: "Large Volumes of Educational Content" },
  ],
};

export const educationCapabilities = {
  eyebrow: "What's Included",
  heading: "Eight Disciplines. One Education AI Practice.",
  items: [
    { icon: GraduationCap, title: "Learning Management Systems", description: "Course management, assessments, and analytics." },
    { icon: BrainCircuit, title: "AI-Powered Learning", description: "Adaptive, personalized learning experiences." },
    { icon: BookOpen, title: "Educational Content Development", description: "Courseware, question banks, learning materials." },
    { icon: BookMarked, title: "Digital Publishing", description: "EPUB, XML, and PDF conversion." },
    { icon: Accessibility, title: "Accessibility Services", description: "Accessible PDFs, eBooks, and resources." },
    { icon: Database, title: "AI Data Services", description: "Datasets and annotation for education AI." },
    { icon: Languages, title: "Language Services", description: "Translation, localization, and captioning." },
    { icon: ClipboardCheck, title: "Assessment & Examination", description: "Digital testing and AI-assisted evaluation." },
  ],
};

export const educationProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand learning objectives and requirements." },
  { icon: PenTool, title: "Design", description: "Solution architecture and instructional workflows." },
  { icon: Code2, title: "Build", description: "Develop platforms, content, and AI datasets." },
  { icon: CheckCircle2, title: "Validate", description: "Usability, QA, and accessibility testing." },
  { icon: Rocket, title: "Deploy", description: "Launch, train, and provide ongoing support." },
];

export const educationFaq = [
  { question: "Can you build custom Learning Management Systems (LMS)?", answer: "Yes. We develop scalable LMS platforms with course management, assessments, reporting, and mobile access tailored to institutional needs." },
  { question: "Do you support educational publishers?", answer: "Yes. We provide digital publishing, EPUB conversion, accessibility remediation, and content modernization services." },
  { question: "Can you make educational materials accessible?", answer: "Yes. We remediate PDFs, presentations, and digital resources to work with assistive technologies and support inclusive learning." },
  { question: "Do you support multilingual learning programs?", answer: "Yes. We translate, localize, and caption educational content so it reaches learners across every market and language." },
];

export const educationBottomCta = {
  icon: GraduationCap,
  heading: "Shape the Future of Learning with AI",
  description:
    "Whether you're building a learning platform or modernizing educational content, Bigwigs Technologies delivers scalable EdTech solutions.",
  primaryAction: { label: "Schedule a Consultation", href: "/demo" },
  secondaryAction: { label: "Talk to Our Team", href: "/contact", showArrow: true },
};
