import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import BrandBackground from "./BrandBackground";
import MarqueeRow from "./MarqueeRow";
import MarqueeCard from "./MarqueeCard";
import TechCard from "./TechCard";
import CenterShowcaseCard from "./CenterShowcaseCard";
import { brandDomains } from "./domains";
import { technologies } from "./technologies";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
} as const;

const topRowVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const bottomRowVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function BrandSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const rawGlowX = useMotionValue(0);
  const rawGlowY = useMotionValue(0);
  const glowX = useSpring(rawGlowX, { stiffness: 60, damping: 20 });
  const glowY = useSpring(rawGlowY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawGlowX.set(e.clientX - rect.left);
    rawGlowY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden py-20 lg:py-28"
    >
      <BrandBackground />

      {/* glow that follows the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-green-400/10 blur-[110px]"
        style={{ left: glowX, top: glowY }}
      />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 flex flex-col gap-10 lg:gap-14"
      >
        <motion.div variants={topRowVariants}>
          <MarqueeRow
            items={brandDomains}
            direction="left"
            renderItem={(domain) => <MarqueeCard domain={domain} />}
          />
        </motion.div>

        <div className="px-6 sm:px-10 lg:px-16">
          <CenterShowcaseCard />
        </div>

        <motion.div variants={bottomRowVariants}>
          <MarqueeRow
            items={technologies}
            direction="right"
            renderItem={(tech) => <TechCard tech={tech} />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
