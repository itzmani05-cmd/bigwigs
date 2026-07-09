import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { BrandDomain } from "./domains";

export default function MarqueeCard({ domain }: { domain: BrandDomain }) {
  const Icon = domain.icon;
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const magnetX = useSpring(rawX, { stiffness: 150, damping: 15, mass: 0.4 });
  const magnetY = useSpring(rawY, { stiffness: 150, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    rawY.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: magnetX, y: magnetY }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-[190px] sm:w-[210px] h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col gap-3 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:border-brand-green-400/50 hover:shadow-[0_0_36px_-8px_rgba(16,185,129,0.55)]"
      >
        <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-green-500/20 to-brand-blue-500/20 text-brand-green-400">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <h3 className="text-sm font-semibold text-white tracking-tight">{domain.title}</h3>
        <p className="text-xs text-slate-400 leading-relaxed">{domain.description}</p>
      </motion.div>
    </motion.div>
  );
}
