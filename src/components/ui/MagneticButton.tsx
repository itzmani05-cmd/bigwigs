import { useRef } from "react";
import type { MouseEvent, ReactNode, Ref } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  strength?: number;
  children: ReactNode;
}

export default function MagneticButton({
  as = "a",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  strength = 0.35,
  children,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * strength);
    rawY.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  if (as === "button") {
    return (
      <motion.button
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x, y }}
        whileTap={disabled ? undefined : { scale: 0.96 }}
        className={className}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref as Ref<HTMLAnchorElement>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
