import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({ eyebrow, heading, description, align = "left", className = "" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-500">{eyebrow} --</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{heading}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-slate-500">{description}</p>}
    </motion.div>
  );
}
