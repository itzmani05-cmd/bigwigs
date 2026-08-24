import type { Variants } from "framer-motion";

/** Shared viewport config: animate once, trigger a little before full entry. */
export const viewportOnce = { once: true, amount: 0.15 } as const;

const premiumEase = [0.16, 1, 0.3, 1] as const;

/** Standard section entrance — fade + rise. */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: premiumEase } },
};

/** Section heading — adds a touch of scale so it feels like it's settling into place. */
export const headingVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: premiumEase } },
};

/** Stagger container for card grids — pair with cardItemVariants on each child. */
export const cardContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: premiumEase } },
};

/** Large image reveal for image+text sections. */
export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 25 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: premiumEase } },
};

/** Accompanying text column — slides in from the left, slightly offset in time from the image. */
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, ease: premiumEase } },
};

/** CTA blocks — same fade/rise as sections plus a subtle scale settle. */
export const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: premiumEase } },
};

/** Delay for the nth item in a manually-staggered sequence (non-Framer stagger contexts). */
export function staggerDelay(index: number, step = 0.08) {
  return index * step;
}
