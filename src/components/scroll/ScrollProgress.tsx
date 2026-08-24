import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Extremely thin top-of-page scroll progress line. Reads page scroll only
 * via framer-motion's useScroll (already rAF-driven, no manual scroll listener). */
export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-brand-blue-500"
      style={{ scaleX }}
    />
  );
}
