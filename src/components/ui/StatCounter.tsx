import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/** Counts up from 0 to `value` once the element scrolls into view, and only once —
 * re-scrolling past it does not replay the count. */
export default function StatCounter({ value, decimals = 0, prefix = "", suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
    });
    return unsubscribe;
  }, [springValue, decimals, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
}
