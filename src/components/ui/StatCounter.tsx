import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Skip the scroll-into-view gate and start counting as soon as the component mounts.
   * Use this for stats that are already visible on load (e.g. in a hero), where waiting
   * on an IntersectionObserver race against initial paint can miss the trigger. */
  immediate?: boolean;
}

/** Counts up from 0 to `value` once the element scrolls into view, and only once —
 * re-scrolling past it does not replay the count. */
export default function StatCounter({ value, decimals = 0, prefix = "", suffix = "", immediate = false }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1600, bounce: 0 });

  useEffect(() => {
    if (immediate || isInView) motionValue.set(value);
  }, [immediate, isInView, value, motionValue]);

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
