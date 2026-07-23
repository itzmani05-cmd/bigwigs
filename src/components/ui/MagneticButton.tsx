import type { ReactNode } from "react";
import { motion } from "framer-motion";

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
  children,
}: MagneticButtonProps) {
  if (as === "button") {
    return (
      <motion.button
        type={type}
        disabled={disabled}
        onClick={onClick}
        whileTap={disabled ? undefined : { scale: 0.96 }}
        className={className}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a href={href} onClick={onClick} whileTap={{ scale: 0.96 }} className={className}>
      {children}
    </motion.a>
  );
}
