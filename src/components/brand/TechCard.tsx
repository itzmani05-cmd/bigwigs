import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { Technology } from "./technologies";

export default function TechCard({ tech }: { tech: Technology }) {
  const Icon = tech.icon;
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
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-[0_8px_24px_-14px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:border-brand-blue-400/50 hover:shadow-[0_0_28px_-6px_rgba(37,99,235,0.5)]"
      >
        <Icon size={16} strokeWidth={1.75} className="text-brand-blue-400 shrink-0" />
        <span className="text-sm font-medium text-slate-200 whitespace-nowrap">{tech.name}</span>
      </motion.div>
    </motion.div>
  );
}
