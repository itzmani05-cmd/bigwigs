"use client";

import { motion, MotionValue, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingShapeProps {
  parallaxX: MotionValue<number>;
  parallaxY: MotionValue<number>;
  /** How strongly this shape reacts to cursor movement (px). */
  depth?: number;
  top: string;
  left: string;
  /** Vertical drift range of the idle float loop (px). */
  floatRange?: number;
  /** Duration of one idle float/breathing cycle (s). */
  duration?: number;
  /** Stagger offset for both entrance and idle loop (s). */
  delay?: number;
  /** Degrees of idle rotation wobble. Set 0 for shapes that manage their own rotation. */
  rotateRange?: number;
  hoverScale?: number;
  className?: string;
  children: ReactNode;
}

export default function FloatingShape({
  parallaxX,
  parallaxY,
  depth = 24,
  top,
  left,
  floatRange = 14,
  duration = 9,
  delay = 0,
  rotateRange = 4,
  hoverScale = 1.06,
  className = "",
  children,
}: FloatingShapeProps) {
  const reduceMotion = useReducedMotion();
  const px = useTransform(parallaxX, (v) => v * depth);
  const py = useTransform(parallaxY, (v) => v * depth);

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ top, left, x: px, y: py }}
      initial={{ opacity: 0, scale: 0.85, y: 26 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 + delay * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="pointer-events-auto"
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -floatRange, 0],
                rotate: rotateRange ? [0, rotateRange, 0] : undefined,
                scale: [1, 1.035, 1],
              }
        }
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: hoverScale,
          transition: { type: "spring", stiffness: 260, damping: 14 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
