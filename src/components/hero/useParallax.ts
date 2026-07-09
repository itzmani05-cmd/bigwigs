"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Tracks pointer position as normalized values in [-0.5, 0.5] on each axis,
 * smoothed through a spring. Individual shapes multiply these by their own
 * depth factor to get independent parallax offsets.
 */
export function useParallax() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 45, damping: 20, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 45, damping: 20, mass: 0.6 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      rawX.set(e.clientX / window.innerWidth - 0.5);
      rawY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, [rawX, rawY]);

  return { x, y };
}
