import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Gauge } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const TRUSTED_CATEGORIES = ["Healthcare", "Automotive", "Finance", "Retail", "AI Companies", "Government"];

export default function DataQAHero() {
  return (
    <section className="relative w-full overflow-hidden pt-14 pb-16 lg:pt-16 lg:pb-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500"
            >
              Data Validation &amp; Quality Assurance
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px]"
            >
              Trusted data. <span className="text-brand-blue-600">Reliable AI.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 max-w-lg text-base leading-relaxed text-slate-500">
              Ensure every dataset meets enterprise-grade quality standards before AI model
              training. Bigwigs Technologies provides comprehensive validation, multi-level
              quality assurance, and continuous quality monitoring for Computer Vision, NLP,
              Speech AI, and LLM datasets.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#qa-services"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-800 select-none"
              >
                <span>Request a Data Quality Assessment</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 select-none"
              >
                <span>Speak With Our QA Specialist</span>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <span className="text-xs font-medium text-slate-400">Trusted by quality-critical teams across</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {TRUSTED_CATEGORIES.map((cat) => (
                  <span key={cat} className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — flat quality dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="ml-3 flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                  <ShieldCheck size={11} />
                  QA Dashboard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-slate-100">
                <div className="flex flex-col items-center justify-center bg-white p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Quality Score</span>
                  <div
                    className="relative mt-3 flex h-24 w-24 items-center justify-center rounded-full"
                    style={{ background: "conic-gradient(#2563EB 0deg 354deg, #E2E8F0 354deg 360deg)" }}
                  >
                    <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-white">
                      <span className="text-lg font-semibold text-slate-900">98%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Validation</span>
                    <Gauge size={12} className="text-slate-300" />
                  </div>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {[
                      { label: "Images", value: "Passed" },
                      { label: "Audio", value: "Passed" },
                      { label: "LLM Prompts", value: "Reviewing" },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{v.label}</span>
                        <span className="font-semibold text-brand-blue-600">{v.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-slate-100">
                {["99.5% Accuracy", "4-Level Review", "Audit-Ready"].map((label) => (
                  <div key={label} className="bg-white px-3 py-3 text-center">
                    <span className="text-[10px] font-medium text-slate-500">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
