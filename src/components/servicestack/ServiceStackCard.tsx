import { useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import CursorGlow from "@/components/ui/CursorGlow";
import type { ServiceStackItem } from "./serviceStackData";

interface ServiceStackCardProps {
  item: ServiceStackItem;
  isActive: boolean;
  x: number;
  y: number;
  z: number;
  rotateY: number;
  rotateZ: number;
  scale: number;
  opacity: number;
  blur: number;
  brightness: number;
  zIndex: number;
  onClick: () => void;
}

const tintGlow: Record<"green" | "blue", string> = {
  green: "16,185,129",
  blue: "37,99,235",
};

export default function ServiceStackCard({
  item,
  isActive,
  x,
  y,
  z,
  rotateY,
  rotateZ,
  scale,
  opacity,
  blur,
  brightness,
  zIndex,
  onClick,
}: ServiceStackCardProps) {
  const Icon = item.icon;
  const tiltRef = useRef<HTMLDivElement>(null);

  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tiltX = useSpring(rawTiltX, { stiffness: 150, damping: 20 });
  const tiltY = useSpring(rawTiltY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isActive) return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rawTiltY.set(relX * 8);
    rawTiltX.set(-relY * 8);
  };

  const handleMouseLeave = () => {
    rawTiltX.set(0);
    rawTiltY.set(0);
  };

  const glowColor = tintGlow[item.tint];

  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{ zIndex }}
      animate={{
        x: `calc(-50% + ${x}px)`,
        y: `calc(-50% + ${y}px)`,
        z,
        rotateY,
        rotateZ,
        scale,
        opacity,
        filter: `blur(${blur}px) brightness(${brightness})`,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.9 }}
    >
      <motion.div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={{ y: -10, scale: isActive ? 1.02 : 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        className={`group relative w-[260px] cursor-pointer rounded-[30px] border overflow-hidden flex flex-col select-none ${
          isActive ? "min-h-[360px] border-white/20" : "min-h-[220px] border-white/[0.08]"
        }`}
      >
        {/* glassmorphism base */}
        <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl" />

        {/* glow border on hover */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `0 0 0 1px rgba(${glowColor},0.4), 0 20px 60px -20px rgba(${glowColor},0.35)`,
          }}
        />

        {/* soft ambient shadow */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[30px] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]"
        />

        {isActive && (
          <>
            <CursorGlow color={glowColor} size={260} className="rounded-[30px]" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -top-10 -right-10 w-56 h-56 rounded-full blur-[90px]"
              style={{ background: `rgba(${glowColor},0.3)` }}
              animate={{ opacity: [0.35, 0.75, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="relative z-10 flex flex-col flex-1 p-7 gap-4">
          <span
            className={`flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 text-white ${
              isActive ? "w-16 h-16" : "w-12 h-12"
            }`}
          >
            <Icon size={isActive ? 28 : 20} strokeWidth={1.6} />
          </span>

          <h3
            className={`font-bold text-white tracking-tight ${isActive ? "text-xl" : "text-sm"}`}
          >
            {item.title}
          </h3>

          {isActive && (
            <>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">
                {item.description}
              </p>
              <MagneticButton
                href="#contact"
                className="mt-auto inline-flex items-center gap-1.5 self-start px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/20 hover:shadow-lg hover:shadow-brand-green-500/30 transition-shadow duration-300 select-none"
              >
                Learn More
                <ArrowRight size={14} />
              </MagneticButton>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
