/** Shared timing tokens for the site-wide scroll-animation system.
 *  Keeping these in one place is what makes the reveal system feel
 *  consistent instead of every section inventing its own easing/duration. */
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
  cinematic: 0.9,
} as const;

/** Default per-item stagger gap, in seconds. Mobile call sites should pass
 * a smaller value (see useIsCompactViewport) to keep sequences feeling fast. */
export const STAGGER = {
  tight: 0.06,
  base: 0.08,
  relaxed: 0.12,
} as const;

export function clampDistance(distance: number) {
  return Math.max(20, Math.min(60, distance));
}

/** Describes where the content appears to originate from (matches how the
 * design brief talks about it: "slide from left" starts off to the left and
 * moves right into place; "up" starts below and rises into place). */
export type RevealDirection = "up" | "down" | "left" | "right" | "none";

/** Shared hidden/visible variant builder used by both ScrollReveal and
 * ScrollStaggerItem so the two never drift out of sync. */
export function buildRevealVariants(
  direction: RevealDirection,
  distance: number,
  scale: boolean,
  duration: number,
  delay = 0
) {
  const clamped = clampDistance(distance);
  const offset =
    direction === "up" ? { y: clamped } :
    direction === "down" ? { y: -clamped } :
    direction === "left" ? { x: -clamped } :
    direction === "right" ? { x: clamped } :
    {};

  return {
    hidden: { opacity: 0, ...offset, ...(scale ? { scale: 0.96 } : {}) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      ...(scale ? { scale: 1 } : {}),
      transition: { duration, delay, ease: PREMIUM_EASE },
    },
  };
}
