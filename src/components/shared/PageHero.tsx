import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import HeroBackground from "@/components/hero/HeroBackground";
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

interface PageHeroProps {
  icon: LucideIcon;
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}

export default function PageHero({ icon: Icon, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 lg:py-32">
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
            <Icon size={14} className="text-brand-green-600" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
