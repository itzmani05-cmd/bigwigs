import { motion } from "framer-motion";
import { ArrowRight, Camera, Layers } from "lucide-react";
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

const TRUSTED_CATEGORIES = ["Healthcare", "Automotive", "Retail", "Manufacturing", "AI Companies", "Government"];

export default function AiAnnotationHero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-16 lg:pt-12 lg:pb-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-500"
            >
              AI Data Annotation Services
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px]"
            >
              Power intelligent AI with{" "}
              <span className="text-brand-blue-600">high-quality data</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 max-w-lg text-base leading-relaxed text-slate-500">
              Build accurate, scalable, and reliable AI models with enterprise-grade data
              annotation services. Bigwigs Technologies delivers precision labeling for
              Computer Vision, NLP, Speech AI, Autonomous Driving, Healthcare AI, Robotics,
              and Large Language Models.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#annotation-services"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-800 select-none"
              >
                <span>Start Your AI Annotation Project</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 select-none"
              >
                <span>Talk To AI Specialists</span>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <span className="text-xs font-medium text-slate-400">Trusted by AI teams across</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {TRUSTED_CATEGORIES.map((cat) => (
                  <span key={cat} className="rounded-md border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — flat annotation dashboard mockup */}
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
                  <Camera size={11} />
                  Annotation Workspace
                </span>
              </div>

              <div className="grid grid-cols-2 gap-px bg-slate-100">
                <div className="bg-white p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Detection</span>
                  <div className="relative mt-3 flex h-24 items-center justify-center rounded-lg bg-slate-50">
                    <span className="absolute left-[20%] top-[24%] h-10 w-14 rounded border-2 border-dashed border-brand-blue-500/70" />
                    <span className="absolute right-[18%] bottom-[20%] h-8 w-10 rounded border-2 border-dashed border-orange-400/70" />
                  </div>
                </div>

                <div className="bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Quality</span>
                    <Layers size={12} className="text-slate-300" />
                  </div>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {[
                      { label: "Objects", value: "1,248" },
                      { label: "Classes", value: "12" },
                      { label: "Accuracy", value: "99.5%" },
                    ].map((v) => (
                      <div key={v.label} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{v.label}</span>
                        <span className="font-semibold text-slate-900">{v.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-slate-100">
                {["Bounding Boxes", "Segmentation", "LiDAR"].map((label) => (
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
