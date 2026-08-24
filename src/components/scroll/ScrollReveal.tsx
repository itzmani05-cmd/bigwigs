import { forwardRef } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { DURATION, buildRevealVariants, type RevealDirection } from "./motion";

export type { RevealDirection };

const TAGS = {
  div: motion.div,
  section: motion.section,
  span: motion.span,
  li: motion.li,
  article: motion.article,
  figure: motion.figure,
  nav: motion.nav,
} as const;

export interface ScrollRevealProps extends Omit<HTMLMotionProps<"div">, "as" | "variants" | "initial" | "animate" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  direction?: RevealDirection;
  /** px of travel, clamped to the 20-60px "barely noticeable" range. */
  distance?: number;
  /** Adds a subtle 0.96 -> 1 scale alongside the fade/slide. */
  scale?: boolean;
  delay?: number;
  duration?: number;
  /** Fraction of the element that must be visible before it reveals. */
  amount?: number;
  /** Replay every time the element re-enters the viewport instead of once. */
  once?: boolean;
  as?: keyof typeof TAGS;
}

/**
 * Single reusable scroll-reveal wrapper. Replaces the ad-hoc
 * `initial/whileInView/viewport` blocks that used to be copy-pasted into
 * every section — one IntersectionObserver-backed implementation (via
 * framer-motion's whileInView) for the whole site. Forwards its ref so it
 * can double as the target element for useParallax on the same node.
 */
export const ScrollReveal = forwardRef<HTMLElement, ScrollRevealProps>(function ScrollReveal(
  {
    children,
    direction = "up",
    distance = 40,
    scale = false,
    delay = 0,
    duration = DURATION.base,
    amount = 0.25,
    once = true,
    as = "div",
    className,
    ...rest
  },
  ref
) {
  const prefersReducedMotion = useReducedMotion();
  // `React.ElementType` alone collapses JSX prop-checking to `never` here (a
  // known TS limitation with dynamically-selected components), so we fall
  // back to `any` for the tag lookup — the props themselves stay fully typed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = TAGS[as] as any;

  if (prefersReducedMotion) {
    // Show immediately, no transform/parallax — content must never be stuck hidden.
    const { style, ...safeRest } = rest;
    return (
      <MotionTag ref={ref as never} className={className} style={style} {...safeRest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      ref={ref as never}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={buildRevealVariants(direction, distance, scale, duration, delay)}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});
