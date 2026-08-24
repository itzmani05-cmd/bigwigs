import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/scroll";

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
    <ScrollReveal
      direction="up"
      distance={24}
      duration={0.6}
      amount={0.5}
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{heading}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-slate-500">{description}</p>}
    </ScrollReveal>
  );
}
