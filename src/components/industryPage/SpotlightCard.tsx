import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tilt?: boolean;
}

/** Glass card with a cursor-following radial spotlight and a subtle 3D tilt on hover. */
export default function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(37,99,235,0.16)",
  tilt = true,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 220, damping: 22 });
  const spotlightBackground = useTransform([mouseX, mouseY], ([x, y]: number[]) =>
    `radial-gradient(420px circle at ${x * 100}% ${y * 100}%, ${glowColor}, transparent 72%)`
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={`group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/75 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 hover:border-brand-blue-300 ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px z-20 rounded-[28px] opacity-0 shadow-[0_0_0_1px_rgba(37,99,235,0.3),0_0_40px_4px_rgba(37,99,235,0.16)] transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
