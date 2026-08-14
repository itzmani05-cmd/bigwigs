import { useRef } from "react";
import { useScroll, useTransform, useReducedMotion, type MotionValue } from "framer-motion";

/**
 * Subtle scroll-linked parallax for decorative elements only (background grids, floating
 * particles, blur circles) — never for text/buttons/forms. Returns a ref to attach to the
 * tracked element and a y MotionValue to feed into `style={{ y }}` on the element you want
 * to move. Distance is capped at 30px per the "barely noticeable" requirement, and collapses
 * to 0 movement when the user prefers reduced motion.
 */
export function useParallax(distance = 20) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const clamped = Math.max(-30, Math.min(30, distance));
  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-clamped, clamped]
  );

  return { ref, y };
}
