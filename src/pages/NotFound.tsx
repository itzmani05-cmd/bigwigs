import { motion } from "framer-motion";
import { ArrowRight, Code2, Stethoscope, Sparkles, Boxes } from "lucide-react";
import PageBackground from "@/components/servicePage/PageBackground";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const OPTIONAL_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

const DESTINATIONS = [
  { icon: Boxes, title: "AI Data Annotation", href: "/service/ai-data-annotation" },
  { icon: Sparkles, title: "Generative AI", href: "/service/generative-ai" },
  { icon: Code2, title: "Software Development", href: "/service/software-development" },
  { icon: Stethoscope, title: "Healthcare AI", href: "/service/healthcare-ai" },
];

export default function NotFound() {
  useDocumentTitle("Page Not Found | Bigwigs Technologies");

  return (
    <div className="relative flex min-h-[50vh] w-full items-center overflow-x-hidden pb-20 pt-8">
      <PageBackground />

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[140px] font-extrabold leading-none text-brand-blue-200 opacity-30 blur-2xl sm:text-[200px]"
            >
              404
            </span>
            <motion.span
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative block bg-gradient-to-r from-brand-blue-600 to-brand-blue-400 bg-clip-text text-[88px] font-extrabold leading-none tracking-tight text-transparent sm:text-[120px]"
            >
              404
            </motion.span>
          </div>

          <span className="mt-6 inline-flex items-center rounded-full border border-brand-blue-200 bg-brand-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue-700">
            Page Not Found
          </span>

          <h1 className="mt-3 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
            Oops! The Page You&apos;re Looking For{" "}
            <span className="bg-gradient-to-r from-brand-blue-600 to-brand-blue-400 bg-clip-text text-transparent">
              Doesn&apos;t Exist
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
            The page may have been moved, renamed, or is temporarily unavailable. Let&apos;s help
            you get back on track.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href="/"
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-blue-700 select-none"
            >
              <span>Go Back Home</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="/#services"
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/30 bg-white px-5 py-2.5 text-sm font-medium text-brand-blue-600 transition-colors duration-200 hover:bg-brand-blue-50 select-none"
            >
              <span>Explore Our Services</span>
            </MagneticButton>
          </div>
          <p className="mt-10 text-xs text-slate-400">
            Error Code: 404 — Bigwigs Technologies
          </p>
        </div>
      </Container>
    </div>
  );
}
