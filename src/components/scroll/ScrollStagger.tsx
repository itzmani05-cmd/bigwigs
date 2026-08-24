import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { DURATION, STAGGER, buildRevealVariants, type RevealDirection } from "./motion";

const TAGS = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  article: motion.article,
  nav: motion.nav,
} as const;

type Tag = keyof typeof TAGS;

export interface ScrollStaggerProps extends Omit<HTMLMotionProps<"div">, "as" | "variants" | "initial" | "animate" | "whileInView" | "viewport"> {
  children: React.ReactNode;
  /** Seconds between each ScrollStaggerItem's start. */
  staggerDelay?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
  as?: Tag;
}

/** Container half of the stagger pair — triggers once in view, then lets
 * framer-motion cascade its ScrollStaggerItem children via variant propagation. */
export function ScrollStagger({
  children,
  staggerDelay = STAGGER.base,
  delayChildren = 0.05,
  amount = 0.2,
  once = true,
  as = "div",
  className,
  ...rest
}: ScrollStaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  // `React.ElementType` alone collapses JSX prop-checking to `never` here (a
  // known TS limitation with dynamically-selected components), so we fall
  // back to `any` for the tag lookup — the props themselves stay fully typed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = TAGS[as] as any;

  if (prefersReducedMotion) {
    const { style, ...safeRest } = rest;
    return (
      <MotionTag className={className} style={style} {...safeRest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay, delayChildren } } }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export interface ScrollStaggerItemProps extends Omit<HTMLMotionProps<"div">, "as" | "variants"> {
  children: React.ReactNode;
  direction?: RevealDirection;
  distance?: number;
  scale?: boolean;
  duration?: number;
  as?: Tag;
}

/** Child half of the stagger pair. No viewport/observer of its own — it
 * inherits "hidden"/"visible" animate state from the nearest ScrollStagger. */
export function ScrollStaggerItem({
  children,
  direction = "up",
  distance = 30,
  scale = false,
  duration = DURATION.base,
  as = "div",
  className,
  ...rest
}: ScrollStaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();
  // `React.ElementType` alone collapses JSX prop-checking to `never` here (a
  // known TS limitation with dynamically-selected components), so we fall
  // back to `any` for the tag lookup — the props themselves stay fully typed.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = TAGS[as] as any;

  if (prefersReducedMotion) {
    const { style, ...safeRest } = rest;
    return (
      <MotionTag className={className} style={style} {...safeRest}>
        {children}
      </MotionTag>
    );
  }

  return (
    <MotionTag
      variants={buildRevealVariants(direction, distance, scale, duration)}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
