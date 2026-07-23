import { motion } from "framer-motion";
import { ArrowRight, FileCheck2 } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const STATS = [
  { value: "6+", label: "Industries Served" },
  { value: "50M+", label: "Data Points Annotated" },
  { value: "98%+", label: "Avg. QA Accuracy" },
];

export default function CaseStudiesHero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 lg:pt-10 lg:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              Case Studies
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[52px]"
          >
            Transforming Data Into{" "}
            <span className="text-blue-500">AI Intelligence</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Explore how Bigwigs Technologies delivers high-quality AI data
            solutions across industries through scalable annotation, data
            collection, and digital transformation projects.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
            >
              <span>Talk To Our Experts</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
            >
              <FileCheck2 size={16} />
              <span>Request A Quote</span>
            </MagneticButton>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="block text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-medium text-slate-500 sm:text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
