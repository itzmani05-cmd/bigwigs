import {
  Tablet,
  FileCode,
  LayoutTemplate,
  ScanLine,
  RefreshCw,
  Accessibility,
  GraduationCap,
  FlaskConical,
  Briefcase,
} from "lucide-react";
import type { IconGridItem } from "@/components/servicePage/IconGrid";

export const publishingServices: IconGridItem[] = [
  {
    icon: Tablet,
    title: "eBook Conversion",
    description: "Publications converted into EPUB, MOBI, and every reader format.",
  },
  {
    icon: FileCode,
    title: "XML & Structured Content",
    description: "DITA, DocBook, and JATS-compliant structured content, built to standard.",
  },
  {
    icon: LayoutTemplate,
    title: "Typesetting & Layout Design",
    description: "Books, journals, and reports laid out to production-ready standard.",
  },
  {
    icon: ScanLine,
    title: "Content Digitization",
    description: "Legacy archives scanned, OCR'd, and converted into searchable text.",
  },
  {
    icon: RefreshCw,
    title: "Content Conversion",
    description: "PDF, Word, XML, HTML, and EPUB converted across every format pair.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Publishing",
    description: "Tagged PDFs and EPUBs built for screen readers and compliance.",
  },
  {
    icon: GraduationCap,
    title: "Educational Publishing",
    description: "Textbooks, courseware, and question banks built for classrooms.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Publishing",
    description: "Research journals and clinical publications to academic standard.",
  },
  {
    icon: Briefcase,
    title: "Corporate Publishing",
    description: "Annual reports, manuals, and training materials, produced at scale.",
  },
];
