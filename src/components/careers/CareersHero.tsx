import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroBackground from "@/components/hero/HeroBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import CursorGlow from "@/components/ui/CursorGlow";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-28 lg:py-36">
      <HeroBackground />
      <CursorGlow color="16,185,129" size={380} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-50 px-4 py-1.5"
          >
            <Sparkles size={14} className="text-brand-green-600" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase">
              Careers at BigWigs Technologies
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
          >
            Build What&apos;s Next{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              in AI.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            Join a team building enterprise AI across GIS, LiDAR, Medical AI,
            Computer Vision, Enterprise Automation, and Data Analytics —
            work that ships, on problems that matter.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <MagneticButton
              href="#open-roles"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-all duration-300 hover:-translate-y-0.5 select-none"
            >
              <span>View Open Roles</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href="#apply"
              className="px-7 py-3 rounded-full font-semibold border-2 border-slate-200 text-slate-700 hover:border-brand-green-500 hover:text-brand-green-600 transition-colors duration-300 select-none"
            >
              General Application
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
