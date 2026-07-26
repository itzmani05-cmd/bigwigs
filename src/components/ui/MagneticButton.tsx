import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
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

const MAX_OFFSET = 8;

export default function MagneticButton({
  as = "a",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  strength = 0.3,
  children,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, offsetX * strength)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, offsetY * strength)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref: ref as never,
    style: { x: springX, y: springY },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.96 },
    className: `group ${className}`,
  };

  if (as === "button") {
    return (
      <motion.button type={type} disabled={disabled} onClick={onClick} {...sharedProps}>
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a href={href} onClick={onClick} {...sharedProps}>
      {children}
    </motion.a>
  );
}
