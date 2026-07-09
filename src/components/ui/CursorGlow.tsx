import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface CursorGlowProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function CursorGlow({
  color = "16,185,129",
  size = 320,
  className = "",
}: CursorGlowProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMove = (e: globalThis.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        return;
      }
      rawX.set(e.clientX - rect.left);
      rawY.set(e.clientY - rect.top);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [rawX, rawY]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]"
        style={{
          width: size,
          height: size,
          left: x,
          top: y,
          background: `radial-gradient(circle, rgba(${color},0.22), transparent 70%)`,
        }}
      />
    </div>
  );
}
