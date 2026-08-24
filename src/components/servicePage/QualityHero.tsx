import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { useParallax } from "@/hooks/useParallax";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
} as const;

interface QualityHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  primaryCta: { label: string; href: string };
}

export default function QualityHero({ eyebrow, heading, description, primaryCta }: QualityHeroProps) {
  const { ref: glowRef, y: glowY } = useParallax(15);

  return (
    <section className="relative flex min-h-[calc(100vh-4.75rem)] w-full flex-col items-center justify-center overflow-hidden py-10 lg:min-h-[calc(100vh-5.25rem)] lg:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />
      <motion.div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        style={{ y: glowY }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <MagneticButton
              href={primaryCta.href}
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
