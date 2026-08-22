import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import StatCounter from "@/components/ui/StatCounter";
import ServiceOrbitVisual from "@/components/services/ServiceOrbitVisual";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const heroStats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 99.5, decimals: 1, suffix: "%", label: "Quality Benchmark" },
  { value: 10, suffix: "+", label: "Industries Served" },
  { value: 40, suffix: "%", label: "Faster Delivery" },
];

export default function ServicesHero() {
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
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-violet-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1360px] grid-cols-1 items-center gap-11 lg:grid-cols-[1fr_460px] lg:gap-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Services
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-2 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              AI-Native Services 
              <br /> That Drive
              <span className="text-blue-500"> Real Impact</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              From software engineering and Generative AI to data annotation, transcription, and
              autonomous agents — Bigwigs Technologies delivers the full stack of AI-native services
              behind every enterprise transformation.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/demo"
                               magnetic={false}
                               className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
                             >
                               <span>Book a Demo</span>
                               <ArrowRight size={16} />
                             </MagneticButton>

            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-slate-200 pt-6 sm:gap-x-8"
            >
              {heroStats.map((stat, i) => (
                <Fragment key={stat.label}>
                  {i > 0 && <span aria-hidden className="hidden h-9 w-px bg-slate-200 sm:block" />}
                  <div>
                    <div className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                      <StatCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} />
                    </div>
                    <div className="mt-0.5 text-xs font-medium text-slate-500">{stat.label}</div>
                  </div>
                </Fragment>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="hidden lg:block"
          >
            <ServiceOrbitVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
