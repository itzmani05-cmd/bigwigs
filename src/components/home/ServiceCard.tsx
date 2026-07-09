"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ServiceDomain } from "./serviceDomains";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function ServiceCard({ domain }: { domain: ServiceDomain }) {
  const Icon = domain.icon;
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const blobX = useSpring(rawX, { stiffness: 120, damping: 16, mass: 0.5 });
  const blobY = useSpring(rawY, { stiffness: 120, damping: 16, mass: 0.5 });
  const glowX = useTransform(blobX, (v) => v * 1.4);
  const glowY = useTransform(blobY, (v) => v * 1.4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set(e.clientX - rect.left - rect.width / 2);
    rawY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const tintFrom = domain.tint === "green" ? "from-brand-green-400" : "from-brand-blue-500";
  const tintTo = domain.tint === "green" ? "to-brand-blue-500" : "to-brand-green-400";
  const borderHoverClass =
    domain.tint === "green"
      ? "group-hover:from-brand-green-400 group-hover:to-brand-blue-500"
      : "group-hover:from-brand-blue-500 group-hover:to-brand-green-400";
  const iconTint =
    domain.tint === "green"
      ? "from-brand-green-50 to-brand-blue-50 text-brand-green-600"
      : "from-brand-blue-50 to-brand-green-50 text-brand-blue-600";

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative"
    >
      {/* animated glow */}
      <div
        className={`absolute -inset-4 rounded-[32px] bg-gradient-to-br ${tintFrom} ${tintTo} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
      />

      {/* gradient-reveal border */}
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative rounded-3xl p-[1.5px] bg-gradient-to-br from-transparent to-transparent ${borderHoverClass} transition-all duration-500`}
      >
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-white border border-slate-100 group-hover:border-transparent p-7 sm:p-8 h-full flex flex-col shadow-[0_8px_30px_-16px_rgba(15,23,42,0.15)] transition-shadow duration-500 group-hover:shadow-[0_24px_50px_-20px_rgba(15,23,42,0.25)]">
          {/* internal parallax blob */}
          <motion.div
            aria-hidden
            style={{ x: glowX, y: glowY }}
            className={`pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${tintFrom} ${tintTo} opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500`}
          />

          <motion.span
            whileHover={{ rotate: 8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${iconTint} backdrop-blur-sm`}
          >
            <Icon size={26} strokeWidth={1.6} />
          </motion.span>

          <h3 className="relative z-10 mt-5 text-lg font-bold text-slate-900 tracking-tight">
            {domain.title}
          </h3>
          <p className="relative z-10 mt-2.5 text-sm text-slate-600 leading-relaxed flex-1">
            {domain.description}
          </p>

          <a
            href="#contact"
            className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900"
          >
            Learn More
            <motion.span
              className="flex"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <ArrowRight size={15} className="text-brand-green-600" />
            </motion.span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
