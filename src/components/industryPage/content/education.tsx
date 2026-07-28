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
  FileStack,
  BarChart3,
  Server,
  Presentation,
  FileCheck2,
  Award,
  MessageSquareText,
  Smartphone,
  Bot,
  FileQuestion,
  LineChart,
  Layers,
  Sparkles,
  FileText,
  Globe2,
  Image,
  Volume2,
  Search,
  ScanText,
  CheckCircle2,
  UserPlus,
  CalendarDays,
  Receipt,
  Clock,
  Laptop,
  Gauge,
  Rocket,
  Code2,
  Handshake,
  HeartHandshake,
  Building2,
  Briefcase,
  Microscope,
  BadgeCheck,
  School,
  Landmark,
  PenTool,
} from "lucide-react";

export const educationHero = {
  eyebrow: "Education & eLearning Solutions",
  heading: (
    <>
      Empowering the Future
      <br />
      of Learning Through{" "}
      <span className="text-blue-500">
        AI &amp;
        <br />
        Digital Innovation
      </span>
    </>
  ),
  description:
    "The education sector is evolving through AI, digital learning platforms, virtual classrooms, intelligent tutoring systems, and data-driven educational insights. We help educational institutions, EdTech companies, universities, publishers, and corporate training providers build intelligent, engaging, and scalable learning ecosystems.",
  primaryCta: { label: "Schedule an Education Technology Consultation", href: "/demo" },
  secondaryCta: { label: "Speak with Our EdTech Solutions Experts", href: "/contact" },
  trustedBy: ["Universities", "EdTech Companies", "Online Learning Platforms", "Corporate Training Providers", "Educational Publishers", "Schools"],
  visualIcon: GraduationCap,
  badges: [
    { icon: BrainCircuit, label: "AI Tutoring Engine", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: BookOpen, label: "Digital Publishing Suite", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Accessibility, label: "Accessible Learning", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const educationChallenges = {
  heading: (
    <>
      The Realities Educational
      <br />
      Organizations Are Solving For
    </>
  ),
  description:
    "Institutions, EdTech companies, and publishers are racing to modernize learning while managing scale, accessibility, and engagement.",
  items: [
    {
      icon: TrendingUp,
      title: "Growing Demand for Online Learning",
      description: "Institutions are scaling digital learning faster than legacy platforms can support.",
    },
    { icon: Route, title: "Personalized Learning Requirements" },
    { icon: FileStack, title: "Content Digitization Challenges" },
    { icon: Accessibility, title: "Accessibility Compliance" },
    { icon: Users, title: "Student Engagement" },
    { icon: ClipboardCheck, title: "Assessment Automation" },
    { icon: Languages, title: "Multilingual Education" },
    { icon: BarChart3, title: "Learning Analytics" },
    { icon: Server, title: "Administrative Inefficiencies" },
    { icon: Database, title: "Large Volumes of Educational Content" },
  ],
};

export const educationSolutions = {
  heading: "Nine Disciplines. One Education AI Practice.",
  items: [
    {
      icon: GraduationCap,
      title: "Learning Management Systems (LMS)",
      description: "Scalable learning platforms with course management, assessments, and analytics.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: BrainCircuit,
      title: "AI-Powered Learning Solutions",
      description: "Intelligent tutoring, adaptive learning, and personalized study experiences.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: BookOpen,
      title: "Educational Content Development",
      description: "High-quality digital learning materials, from courseware to question banks.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: BookMarked,
      title: "Digital Publishing",
      description: "EPUB, XML, and PDF conversion for modern educational publishing.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Accessibility,
      title: "Accessibility Services",
      description: "Accessible PDFs, eBooks, and learning resources for every learner.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Database,
      title: "AI Data Services",
      description: "Datasets and annotation that power educational AI initiatives.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Language Services",
      description: "Translation, localization, and captioning for global learning audiences.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Users,
      title: "Student Information Systems",
      description: "Modern administrative platforms for admissions, records, and reporting.",
      gradient: "from-brand-blue-500 to-brand-blue-600",
    },
    {
      icon: ClipboardCheck,
      title: "Assessment & Examination Solutions",
      description: "Digital testing, AI-assisted evaluation, and performance analytics.",
      gradient: "from-orange-500 to-rose-500",
    },
  ],
};

export const lmsSteps = [
  { icon: UserPlus, label: "Enroll" },
  { icon: BookOpen, label: "Learn" },
  { icon: ClipboardCheck, label: "Assess" },
  { icon: TrendingUp, label: "Track" },
];

export const lms = {
  heading: "Learning Platforms Built for Digital Education",
  description: "We design and develop scalable learning management systems that support every stage of the learner journey.",
  steps: lmsSteps,
  items: [
    { icon: Users, title: "Student Management" },
    { icon: BookOpen, title: "Course Management" },
    { icon: Presentation, title: "Instructor Portals" },
    { icon: FileCheck2, title: "Assignment Submission" },
    { icon: ClipboardCheck, title: "Online Assessments" },
    { icon: TrendingUp, title: "Progress Tracking" },
    { icon: Award, title: "Certificates" },
    { icon: MessageSquareText, title: "Discussion Forums" },
    { icon: BarChart3, title: "Learning Analytics" },
    { icon: Smartphone, title: "Mobile Learning" },
  ],
};

export const aiLearning = {
  heading: "Personalized Learning, Powered by AI",
  description: "Artificial intelligence helps create adaptive, personalized learning experiences at scale.",
  centerIcon: BrainCircuit,
  badges: [
    { icon: Bot, label: "AI Study Assistant", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: Route, label: "Personalized Paths", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: LineChart, label: "Performance Analytics", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: BrainCircuit, title: "Intelligent Tutoring Systems", description: "AI tutors that guide students through concepts at their own pace." },
    { icon: Bot, title: "AI Study Assistants", description: "Conversational assistants that answer questions and summarize lessons." },
    { icon: FileQuestion, title: "Automated Question Generation", description: "AI-generated questions and quizzes aligned to course content." },
    { icon: Route, title: "Personalized Learning Paths", description: "Learning journeys that adapt to each student's pace and goals." },
    { icon: LineChart, title: "Student Performance Analytics", description: "Insights that help educators identify students who need support." },
    { icon: MessageSquareText, title: "AI Chatbots for Student Support", description: "Round-the-clock support for common student questions and requests." },
    { icon: Layers, title: "Adaptive Learning", description: "Content that adjusts in real time based on learner progress." },
    { icon: Sparkles, title: "Learning Recommendations", description: "Recommended courses and materials tailored to each learner." },
  ],
};

export const contentPublishing = {
  heading: "Content and Publishing Built for Modern Learning",
  description: "We help institutions and publishers produce, convert, and modernize high-quality digital learning materials.",
  cards: [
    {
      icon: BookOpen,
      title: "Educational Content Development",
      description: "High-quality digital learning materials built for engagement and outcomes.",
      items: ["Course Content Development", "Interactive Learning Modules", "eBooks", "Instructor Guides", "Student Workbooks", "Assessments", "Question Banks", "Multimedia Learning Content"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: BookMarked,
      title: "Digital Publishing",
      description: "Modern educational publishing across every format and platform.",
      items: ["EPUB Conversion", "XML Publishing", "PDF Conversion", "Interactive eBooks", "Digital Textbooks", "Courseware Development", "Online Learning Resources", "Educational Content Migration"],
      glowColor: "rgba(16,185,129,0.3)",
      gradient: "from-brand-green-500 to-emerald-500",
    },
  ],
};

export const accessibilitySteps = [
  { icon: Search, label: "Review" },
  { icon: FileCheck2, label: "Remediate" },
  { icon: CheckCircle2, label: "Validate" },
  { icon: BookOpen, label: "Publish" },
];

export const accessibilityServices = {
  heading: "Inclusive Education Starts With Accessible Content",
  description: "We help institutions make every learning resource usable for students of all abilities.",
  steps: accessibilitySteps,
  checklist: [
    { icon: FileCheck2, label: "Accessible PDF Remediation", description: "Remediate PDFs to meet accessibility and compliance standards." },
    { icon: Image, label: "Alternative Text for Images", description: "Descriptive alt text that makes visual content usable for all learners." },
    { icon: Presentation, label: "Accessible Presentations", description: "Slide decks structured for screen readers and assistive technology." },
    { icon: Volume2, label: "Screen Reader Optimization", description: "Content structured and tagged for accurate screen reader playback." },
    { icon: ClipboardCheck, label: "Accessible Forms", description: "Digital forms built for keyboard navigation and assistive technology." },
    { icon: Search, label: "Digital Accessibility Reviews", description: "Audits that identify and prioritize accessibility gaps across content." },
    { icon: BookOpen, label: "Accessible eBooks", description: "eBooks remediated for compatibility with assistive reading tools." },
  ],
};

export const dataLanguage = {
  heading: "Data and Language Services for Global Learning",
  description: "Support educational AI initiatives and reach learners in every language and market.",
  cards: [
    {
      icon: Database,
      title: "AI Data Services",
      description: "Support educational AI initiatives with high-quality datasets and annotation.",
      items: ["Educational Dataset Collection", "Image Annotation", "Text Annotation", "NLP Dataset Creation", "OCR Annotation", "AI Model Evaluation", "Speech Dataset Collection"],
      glowColor: "rgba(56,189,248,0.3)",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Language Services",
      description: "Multilingual communication that helps learning reach every market you serve.",
      items: ["Educational Translation", "Course Localization", "Video Captioning", "Multilingual Subtitling", "Academic Transcription", "Language Dataset Creation"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const studentInfoSystems = {
  heading: "Administrative Platforms Built for Institutions",
  description: "Modern student information systems that streamline administration from admissions to reporting.",
  panelLabel: "Student Information Suite",
  tiles: [
    { icon: UserPlus, label: "Admissions" },
    { icon: FileText, label: "Student Records" },
    { icon: CalendarDays, label: "Attendance" },
    { icon: Receipt, label: "Fee Management", hasSparkline: true },
    { icon: Clock, label: "Timetables" },
    { icon: ClipboardCheck, label: "Examinations" },
    { icon: Users, label: "Faculty Management" },
    { icon: BarChart3, label: "Reporting & Analytics", hasLiveDot: true },
  ],
  pills: [
    { icon: UserPlus, label: "Admissions Management" },
    { icon: FileText, label: "Student Records Systems" },
    { icon: CalendarDays, label: "Attendance Tracking" },
    { icon: Receipt, label: "Fee Management Systems" },
    { icon: ClipboardCheck, label: "Examination Platforms" },
    { icon: BarChart3, label: "Reporting & Analytics" },
  ],
};

export const assessmentSteps = [
  { icon: FileQuestion, label: "Create" },
  { icon: Laptop, label: "Deliver" },
  { icon: BrainCircuit, label: "Evaluate" },
  { icon: LineChart, label: "Report" },
];

export const assessmentExamination = {
  heading: "Assessment Platforms, Ready for Scale",
  description: "We support digital assessment platforms from question creation through automated evaluation.",
  steps: assessmentSteps,
  marqueeItems: [
    { icon: Laptop, title: "Online Testing" },
    { icon: FileQuestion, title: "Question Banks" },
    { icon: BrainCircuit, title: "AI-Assisted Evaluation" },
    { icon: ScanText, title: "Remote Proctoring Integration" },
    { icon: FileCheck2, title: "Automated Result Processing" },
    { icon: LineChart, title: "Performance Analytics" },
  ],
};

export const educationWhoWeServe = {
  heading: "Trusted Across the Education Ecosystem",
  description: "From universities to certification bodies, we support every organization shaping the future of learning.",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Education
    </>
  ),
  items: [
    { icon: Landmark, label: "Universities" },
    { icon: School, label: "Colleges" },
    { icon: GraduationCap, label: "Schools" },
    { icon: Laptop, label: "EdTech Companies" },
    { icon: Globe2, label: "Online Learning Platforms" },
    { icon: Briefcase, label: "Corporate Training Providers" },
    { icon: BookOpen, label: "Educational Publishers" },
    { icon: Microscope, label: "Research Institutions" },
    { icon: Building2, label: "Government Education Departments" },
    { icon: BadgeCheck, label: "Professional Certification Organizations" },
  ],
};

export const educationBusinessBenefits = {
  heading: "Measurable Impact Across the Learning Journey",
  kpis: [
    { value: 45, suffix: "%", label: "Increase in Student Engagement" },
    { value: 60, suffix: "%", label: "Faster Content Digitization" },
    { value: 98, suffix: "%", label: "Accessibility Compliance" },
    { value: 0, isStatic: true, staticText: "Millions", label: "Students Reached" },
  ],
  benefits: [
    { icon: Users, title: "Improve Student Engagement", description: "Personalized, interactive learning that keeps students motivated." },
    { icon: Globe2, title: "Expand Digital Learning Opportunities", description: "Platforms that extend reach beyond the physical classroom." },
    { icon: Accessibility, title: "Deliver Accessible Education", description: "Inclusive content that supports learners of every ability." },
    { icon: Gauge, title: "Reduce Administrative Workload", description: "Automation that frees staff from manual, repetitive processes." },
    { icon: Languages, title: "Support Multilingual Learning", description: "Localized content that reaches learners in their own language." },
    { icon: FileStack, title: "Accelerate Content Digitization", description: "Faster conversion of legacy materials into digital formats." },
    { icon: BarChart3, title: "Improve Learning Analytics", description: "Data-driven insight into outcomes, engagement, and performance." },
    { icon: Rocket, title: "Scale Educational Programs Globally", description: "Infrastructure and delivery teams that grow with your institution." },
  ],
};

export const educationWhyUs = {
  heading: "Why Educational Organizations Choose Bigwigs",
  items: [
    { icon: BrainCircuit, title: "AI Expertise", description: "Deep experience building AI models for tutoring, assessment, and analytics.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: GraduationCap, title: "Educational Technology Capabilities", description: "Proven delivery of LMS, SIS, and assessment platforms at scale.", gradient: "from-violet-500 to-purple-400" },
    { icon: BookOpen, title: "Digital Publishing Experience", description: "End-to-end EPUB, XML, and PDF publishing for educational content.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Accessibility, title: "Accessibility Specialists", description: "Dedicated teams for accessible content and compliance remediation.", gradient: "from-orange-500 to-amber-400" },
    { icon: Code2, title: "Enterprise Software Development", description: "Secure, scalable platforms engineered for institutional demands.", gradient: "from-rose-500 to-pink-400" },
    { icon: Handshake, title: "Flexible Engagement Models", description: "Scoped pilots that scale into long-term delivery partnerships.", gradient: "from-brand-blue-500 to-indigo-400" },
    { icon: CheckCircle2, title: "Strong Quality Assurance", description: "Multi-layer QA built for the accuracy educational content demands.", gradient: "from-cyan-500 to-brand-blue-400" },
    { icon: HeartHandshake, title: "Long-Term Partnership Approach", description: "We embed with your team as a lasting partner, not a one-off vendor.", gradient: "from-orange-500 to-rose-400" },
  ],
};

export const educationUseCases = {
  heading: "AI Built for Education & eLearning Workflows",
  description: "From tutoring to accessibility, our AI solutions help educational organizations reach and support more learners.",
  items: [
    { id: "ai-learning-assistant", icon: Bot, title: "AI Learning Assistant", description: "Develop conversational AI assistants that help students answer questions, summarize lessons, and recommend study materials.", outcome: "24/7 personalized study support", href: "#contact" },
    { id: "digital-university-platform", icon: Building2, title: "Digital University Platform", description: "Build an integrated platform combining admissions, learning management, assessments, communication, and analytics.", outcome: "Unified platform across every department", href: "#contact" },
    { id: "accessible-course-content", icon: Accessibility, title: "Accessible Course Content", description: "Convert textbooks, lecture notes, and presentations into accessible digital formats for learners with diverse needs.", outcome: "100% accessibility-compliant course materials", href: "#contact" },
    { id: "multilingual-learning-platform", icon: Languages, title: "Multilingual Learning Platform", description: "Translate and localize educational content to support learners across multiple countries and languages.", outcome: "Course content localized across new markets", href: "#contact" },
    { id: "intelligent-assessment-system", icon: ClipboardCheck, title: "Intelligent Assessment System", description: "Create AI-assisted assessment platforms that automate grading, provide instant feedback, and generate learning insights.", outcome: "50% faster grading turnaround", href: "#contact" },
  ],
};

export const educationProcessSteps = [
  { icon: Search, title: "Discover", description: "Understand learning objectives, institutional needs, and technology requirements." },
  { icon: PenTool, title: "Design", description: "Develop solution architecture, instructional workflows, and implementation plans." },
  { icon: Code2, title: "Build", description: "Develop software, create educational content, prepare AI datasets, and integrate learning platforms." },
  { icon: CheckCircle2, title: "Validate", description: "Conduct usability testing, quality assurance, accessibility validation, and performance reviews." },
  { icon: Rocket, title: "Deploy & Support", description: "Launch solutions, train administrators and educators, and provide ongoing support and optimization." },
];

export const educationProcess = {
  heading: "From Discovery to Ongoing Support",
  steps: educationProcessSteps,
  desktopColumnsClassName: "grid-cols-5",
};

export const educationFaq = {
  items: [
    { question: "Can you build custom Learning Management Systems (LMS)?", answer: "Yes. We develop scalable LMS platforms with course management, assessments, reporting, analytics, mobile access, and integrations tailored to institutional requirements." },
    { question: "Do you support educational publishers?", answer: "Yes. We provide digital publishing, XML workflows, EPUB conversion, accessibility remediation, multilingual translation, and content modernization services." },
    { question: "Can you make educational materials accessible?", answer: "Yes. We remediate PDFs, presentations, and digital learning resources to improve usability with assistive technologies and support inclusive learning initiatives." },
  ],
};

export const educationBottomCta = {
  icon: GraduationCap,
  heading: (
    <>
      Shape the Future
      <br />
      of Learning with AI
    </>
  ),
  description:
    "Whether you're building an online learning platform, modernizing educational content, improving accessibility, or adopting AI-powered learning solutions, Bigwigs Technologies delivers the expertise and scalable technology to help transform education.",
  primaryAction: { label: "Schedule an Education Technology Consultation", href: "#contact" },
  secondaryAction: { label: "Speak with Our EdTech Solutions Experts", href: "#contact", showArrow: true },
};
