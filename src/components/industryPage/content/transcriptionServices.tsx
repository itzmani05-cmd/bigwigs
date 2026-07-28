import {
  Mic,
  Video,
  Stethoscope,
  Scale,
  Briefcase,
  GraduationCap,
  Captions,
  Bot,
  Languages,
  Clock,
  Users,
  Users2,
  Globe2,
  ShieldCheck,
  Timer,
  Lock,
  Building2,
  Layers,
  AudioLines,
  UserCheck,
  Eye,
  Accessibility,
  FileText,
  Search,
  Compass,
  FlaskConical,
  PackageCheck,
  Award,
  Zap,
  Landmark,
  Umbrella,
  Newspaper,
  Cpu,
  Microscope,
  Factory,
  Radio,
} from "lucide-react";

export const transcriptionHero = {
  eyebrow: "Transcription Services",
  heading: (
    <>
      Turn Every Conversation
      <br />
      Into{" "}
      <span className="text-blue-500">
        Actionable
        <br />
        Intelligence
      </span>
    </>
  ),
  description:
    "Convert audio and video into highly accurate, searchable, multilingual text with AI-assisted transcription and expert human review. Empower compliance, accessibility, analytics, and AI model training with enterprise-grade transcription services.",
  primaryCta: { label: "Request a Transcription Quote", href: "/demo" },
  secondaryCta: { label: "Talk To Language Experts", href: "/contact" },
  trustedBy: ["Healthcare", "Legal", "Media", "Education", "Finance", "Government"],
  visualIcon: Mic,
  badges: [
    { icon: Mic, label: "Live Transcription", position: "left-[2%] top-[6%]", delay: 0 },
    { icon: Users, label: "Speaker ID", position: "right-[2%] top-[14%]", delay: 0.6 },
    { icon: Captions, label: "Captioning", position: "left-[4%] bottom-[8%]", delay: 1.2 },
  ],
};

export const transcriptionChallenges = {
  heading: (
    <>
      The Realities Behind
      <br />
      Every Recording
    </>
  ),
  description: "Audio, video, medical, legal, and multilingual transcription — one team across the full pipeline, not nine separate vendors.",
  items: [
    {
      icon: Clock,
      title: "Slow, Manual Transcription",
      description: "Every hour of audio that waits on a human typist is an hour your team doesn't have.",
    },
    { icon: Users, title: "Multiple Overlapping Speakers" },
    { icon: Globe2, title: "Multilingual & Accented Audio" },
    { icon: ShieldCheck, title: "Strict Compliance Requirements" },
    { icon: Timer, title: "Tight Turnaround Windows" },
    { icon: Lock, title: "Sensitive, Confidential Recordings" },
    { icon: Captions, title: "Caption & Subtitle Formatting" },
    { icon: Building2, title: "Fragmented Vendor Relationships" },
    { icon: Bot, title: "Raw AI Transcripts, No Review" },
    { icon: Layers, title: "Scaling Beyond a Single Language" },
  ],
};

export const transcriptionSolutions = {
  heading: "Nine Ways We Turn Speech Into Text",
  items: [
    {
      icon: Mic,
      title: "Audio Transcription",
      description: "Meetings, interviews, and podcasts converted into clean, searchable text.",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Video Transcription",
      description: "Full transcripts and captions for corporate, educational, and marketing video.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Stethoscope,
      title: "Medical Transcription",
      description: "Clinical notes and reports transcribed to strict healthcare documentation standards.",
      gradient: "from-brand-green-500 to-emerald-500",
    },
    {
      icon: Scale,
      title: "Legal Transcription",
      description: "Court-ready transcripts of hearings, depositions, and client interviews.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: Briefcase,
      title: "Business Transcription",
      description: "Board meetings, sales calls, and executive discussions, documented accurately.",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: GraduationCap,
      title: "Academic Research",
      description: "Lectures, interviews, and focus groups transcribed for research and publication.",
      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Captions,
      title: "Captioning & Subtitling",
      description: "Closed captions and subtitles delivered in every broadcast-ready format.",
      gradient: "from-orange-500 to-rose-500",
    },
    {
      icon: Bot,
      title: "AI-Assisted Transcription",
      description: "Speech recognition plus expert human review for enterprise-grade accuracy.",
      gradient: "from-brand-blue-500 to-indigo-500",
    },
    {
      icon: Languages,
      title: "Multilingual Transcription",
      description: "Source-language and translated transcripts across 50+ languages.",
      gradient: "from-violet-500 to-fuchsia-500",
    },
  ],
};

export const aiAssistedTranscription = {
  heading: "Speech Recognition, Plus a Human Who Checks the Work",
  description: "Every transcript starts with AI speech recognition and finishes with expert human review — so accuracy never depends on the model alone.",
  centerIcon: Bot,
  badges: [
    { icon: AudioLines, label: "Speech Recognition", position: "left-[2%] top-[10%]", delay: 0 },
    { icon: UserCheck, label: "Human Review", position: "right-[2%] top-[18%]", delay: 0.6 },
    { icon: Timer, label: "Fast Turnaround", position: "left-[6%] bottom-[10%]", delay: 1.2 },
  ],
  features: [
    { icon: AudioLines, title: "Speech Recognition", description: "AI engines transcribe audio in real time with industry-leading accuracy." },
    { icon: UserCheck, title: "Human Validation", description: "Expert transcriptionists review and correct every AI-generated draft." },
    { icon: FileText, title: "Terminology Consistency", description: "Domain glossaries keep names, jargon, and acronyms consistent throughout." },
    { icon: Timer, title: "Fast Turnaround", description: "Parallelized review pipelines deliver without compromising accuracy." },
    { icon: Layers, title: "Enterprise Scale", description: "From single files to millions of minutes, the same pipeline scales with you." },
  ],
};

export const audioVideoTranscription = {
  heading: "Every Recording, Every Format, Fully Transcribed",
  description: "Meetings, interviews, and podcasts alongside corporate, educational, and marketing video — one pipeline for both.",
  cards: [
    {
      icon: Mic,
      title: "Audio Transcription",
      description: "Meetings, interviews, and podcasts converted into clean, searchable text.",
      items: ["Business Meetings", "Interviews", "Podcasts", "Conferences", "Customer Calls", "Research", "Training", "Voice Notes", "Focus Groups"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      title: "Video Transcription",
      description: "Full transcripts and captions for corporate, educational, and marketing video.",
      items: ["Corporate Videos", "YouTube", "Courses", "Medical Procedures", "Virtual Conferences", "Marketing Videos"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const medicalLegalTranscription = {
  heading: "Precision Where Documentation Is Non-Negotiable",
  description: "Clinical and courtroom-ready transcripts, held to the standard each domain demands.",
  cards: [
    {
      icon: Stethoscope,
      title: "Medical Transcription",
      description: "Clinical notes and reports transcribed to strict healthcare documentation standards.",
      items: ["Clinical Notes", "Radiology Reports", "Discharge Summaries", "Operative Reports", "Consultation Notes", "Laboratory Reports"],
      glowColor: "rgba(37,99,235,0.3)",
      gradient: "from-brand-blue-500 to-cyan-500",
    },
    {
      icon: Scale,
      title: "Legal Transcription",
      description: "Court-ready transcripts of hearings, depositions, and client interviews.",
      items: ["Court Hearings", "Depositions", "Witness Statements", "Client Interviews", "Contracts", "Legal Meetings"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const languagesSupported = {
  heading: "Fifty-Plus Languages. Every Accent, Every Domain.",
  description: "Native-language transcription across international and Indian languages alike.",
  cards: [
    {
      icon: Globe2,
      title: "International Languages",
      description: "Source-language transcripts across major global languages.",
      items: ["English", "French", "German", "Spanish", "Portuguese", "Arabic", "Chinese", "Japanese", "Korean"],
      glowColor: "rgba(56,189,248,0.35)",
      gradient: "from-cyan-500 to-brand-blue-500",
    },
    {
      icon: Languages,
      title: "Indian Languages",
      description: "Native transcription across India's major regional languages.",
      items: ["Hindi", "Tamil", "Telugu", "Malayalam", "Kannada"],
      glowColor: "rgba(249,115,22,0.3)",
      gradient: "from-orange-500 to-amber-500",
    },
  ],
};

export const captioningSubtitling = {
  heading: "Subtitles That Stay in Sync, in Every Language",
  description: "Frame-accurate captions, delivered in the format your platform expects — translated without losing timing or meaning.",
  panelLabel: "Subtitle Editor",
  tiles: [
    { icon: Captions, label: "Closed Captions" },
    { icon: Eye, label: "Open Captions" },
    { icon: Languages, label: "Subtitle Translation" },
    { icon: Accessibility, label: "Accessibility Compliance" },
  ],
  pills: [
    { icon: FileText, label: "SRT" },
    { icon: FileText, label: "VTT" },
    { icon: FileText, label: "SCC" },
    { icon: FileText, label: "TXT" },
    { icon: FileText, label: "Custom Formats" },
  ],
};

export const businessResearchTranscription = {
  heading: "From the Boardroom to the Lecture Hall",
  description: "Four stages carry every recording from raw audio to a reviewed, formatted transcript.",
  steps: [
    { icon: Search, label: "File Assessment" },
    { icon: Mic, label: "Transcription" },
    { icon: ShieldCheck, label: "Quality Review" },
    { icon: PackageCheck, label: "Delivery" },
  ],
  marqueeItems: [
    { icon: Briefcase, title: "Board Meetings" },
    { icon: Users, title: "Executive Meetings" },
    { icon: Building2, title: "Sales Calls" },
    { icon: FileText, title: "Research Interviews" },
    { icon: GraduationCap, title: "Lectures" },
    { icon: Compass, title: "Seminars" },
    { icon: FileText, title: "Thesis Discussions" },
    { icon: Microscope, title: "Scientific Conferences" },
  ],
};

export const transcriptionWhoWeServe = {
  heading: "Transcription Expertise Across Every Sector",
  centerLabel: (
    <>
      Bigwigs
      <br />
      Transcription
    </>
  ),
  items: [
    { icon: Stethoscope, label: "Healthcare" },
    { icon: Scale, label: "Legal" },
    { icon: Landmark, label: "Finance" },
    { icon: Umbrella, label: "Insurance" },
    { icon: GraduationCap, label: "Education" },
    { icon: Newspaper, label: "Media" },
    { icon: Building2, label: "Government" },
    { icon: Cpu, label: "Artificial Intelligence" },
    { icon: Microscope, label: "Research" },
    { icon: Users2, label: "Human Resources" },
    { icon: Factory, label: "Manufacturing" },
    { icon: Radio, label: "Telecommunications" },
  ],
};

export const transcriptionBusinessBenefits = {
  heading: "Measurable Impact on Every Workflow",
  kpis: [
    { value: 99, suffix: ".5%", label: "Accuracy" },
    { value: 50, suffix: "+", label: "Languages" },
    { value: 24, suffix: " Hour", label: "Fast Turnaround" },
    { value: 100, suffix: "+", label: "Enterprise Clients" },
  ],
  benefits: [
    { icon: ShieldCheck, title: "Audit-Ready Documentation", description: "Searchable transcripts that stand up to compliance review, every time." },
    { icon: Search, title: "Faster Knowledge Retrieval", description: "Every meeting and call becomes searchable text instead of buried audio." },
    { icon: Accessibility, title: "Wider Accessibility Reach", description: "Captions and subtitles that meet WCAG, ADA, and FCC requirements." },
    { icon: Globe2, title: "Global Content Reach", description: "Multilingual transcripts that carry your content into new markets." },
    { icon: Clock, title: "Reduced Documentation Time", description: "Hours of manual note-taking replaced by reviewed, ready-to-use transcripts." },
    { icon: Layers, title: "Consistent Enterprise Scale", description: "From a single interview to millions of minutes, on the same pipeline." },
  ],
};

export const transcriptionWhyUs = {
  heading: "Six Reasons Enterprises Trust Us With Every Recording",
  items: [
    { icon: UserCheck, title: "Expert Transcriptionists", description: "Trained professionals across medical, legal, and business domains.", gradient: "from-brand-blue-500 to-cyan-400" },
    { icon: Bot, title: "AI + Human Review", description: "Speech recognition drafts, humans verify — accuracy without the wait.", gradient: "from-violet-500 to-purple-400" },
    { icon: Lock, title: "Strict Confidentiality", description: "NDAs, access controls, and secure handling for every file we touch.", gradient: "from-brand-green-500 to-emerald-400" },
    { icon: Zap, title: "Fast Delivery", description: "Standard, rush, and same-day turnaround options for every project.", gradient: "from-orange-500 to-amber-400" },
    { icon: Award, title: "Industry Expertise", description: "Domain-specific glossaries and formatting standards, built in.", gradient: "from-rose-500 to-pink-400" },
    { icon: Layers, title: "Enterprise Scale", description: "From a single interview to millions of minutes a year.", gradient: "from-brand-blue-500 to-indigo-400" },
  ],
};

export const transcriptionUseCases = {
  heading: "Transcription Built for Real Business Operations",
  description: "From compliance-grade documentation to multilingual content expansion, our transcription solutions help enterprises turn speech into usable text without losing control of accuracy.",
  items: [
    { id: "enterprise-meeting-intelligence", icon: Briefcase, title: "Enterprise Meeting Intelligence", description: "Every meeting, call, and interview transcribed and indexed into a searchable knowledge base.", outcome: "40% faster knowledge retrieval", href: "#contact" },
    { id: "medical-legal-documentation", icon: Stethoscope, title: "Medical & Legal Documentation", description: "Clinical notes and courtroom transcripts produced to the exact standard each domain requires.", outcome: "99.5% accuracy on regulated documentation", href: "#contact" },
    { id: "video-captioning-accessibility", icon: Captions, title: "Video Captioning & Accessibility", description: "Frame-accurate captions and subtitles that meet WCAG, ADA, and FCC accessibility requirements.", outcome: "Every video accessibility-compliant", href: "#contact" },
    { id: "multilingual-content-expansion", icon: Languages, title: "Multilingual Content Expansion", description: "Source-language and translated transcripts across 50+ languages for global audiences.", outcome: "50+ languages delivered from one pipeline", href: "#contact" },
    { id: "ai-training-datasets", icon: Bot, title: "AI Training Dataset Creation", description: "Speech-to-text datasets prepared and formatted for downstream AI model training.", outcome: "Millions of minutes transcribed for AI training", href: "#contact" },
  ],
};

export const transcriptionCaseStudy = {
  heading: "Helping Organizations Unlock Value From Every Conversation",
  description: "An enterprise client partnered with Bigwigs to transcribe and index every meeting, call, and interview — turning spoken conversations into a searchable knowledge base.",
  stats: [
    { value: "95%", label: "Reduced Documentation Time" },
    { value: "10M+", label: "Minutes Transcribed" },
    { value: "40%", label: "Faster Knowledge Retrieval" },
  ],
  ctaHref: "/case-studies",
  chartLabels: { primary: "Transcription KPIs", secondary: "Language Analytics", trend: "Accuracy Trend" },
};

export const transcriptionProcess = {
  heading: "Six Stages Between an Audio File and a Delivered Transcript",
  steps: [
    { icon: Search, title: "File Intake & Assessment", description: "Audio quality, speaker count, and domain reviewed before work begins." },
    { icon: Compass, title: "Language & Domain Matching", description: "Files routed to transcriptionists with the right subject-matter expertise." },
    { icon: Bot, title: "AI-Assisted Drafting", description: "Speech recognition produces a timestamped first-pass transcript." },
    { icon: UserCheck, title: "Human Quality Review", description: "Expert reviewers verify accuracy, formatting, and terminology." },
    { icon: FlaskConical, title: "Client Revision Round", description: "Feedback incorporated before the transcript is finalized." },
    { icon: PackageCheck, title: "Final Delivery", description: "Transcript delivered in your required format, on schedule." },
  ],
  desktopColumnsClassName: "grid-cols-6",
};

export const transcriptionFaq = {
  items: [
    {
      question: "Can you transcribe multiple speakers?",
      answer: "Yes. Every transcript includes speaker identification and labeling, even for files with several overlapping speakers, so you always know who said what.",
    },
    {
      question: "Do you provide timestamps?",
      answer: "Timestamps are included by default at intervals you choose — per speaker turn, per paragraph, or at fixed time codes — for easy navigation and reference.",
    },
    {
      question: "Can you deliver subtitles?",
      answer: "Yes. We deliver closed and open captions, subtitle translation, and files in SRT, VTT, SCC, TXT, or any custom format your platform requires.",
    },
    {
      question: "How is confidential data protected?",
      answer: "All files are handled under signed NDAs with restricted access, encrypted storage and transfer, and secure disposal once delivery is confirmed.",
    },
  ],
};

export const transcriptionBottomCta = {
  icon: Mic,
  heading: <>Turn Voice Into Business Intelligence</>,
  description:
    "Whether you need multilingual transcription, medical documentation, legal transcripts, AI training datasets, or video captions, Bigwigs Technologies delivers secure, scalable, and enterprise-ready transcription solutions.",
  primaryAction: { label: "Request a Transcription Quote", href: "#contact" },
  secondaryAction: { label: "Talk To Our Language Experts", href: "#contact", showArrow: true },
};
