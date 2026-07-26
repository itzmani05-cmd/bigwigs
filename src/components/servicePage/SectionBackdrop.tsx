import { motion } from "framer-motion";

const DOTS = [
  { left: "6%", top: "22%", size: 5, duration: 7, delay: 0 },
  { left: "92%", top: "18%", size: 4, duration: 8.5, delay: 0.6 },
  { left: "88%", top: "72%", size: 6, duration: 9, delay: 1.1 },
  { left: "10%", top: "80%", size: 4, duration: 7.5, delay: 1.6 },
] as const;

/** Subtle blue-wash + fine-grid backdrop with floating blue dots, used behind service-page sections. */
export default function SectionBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(37,99,235,0.05), transparent 45%), radial-gradient(circle at 85% 100%, rgba(37,99,235,0.05), transparent 45%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(circle at 50% 40%, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 0%, transparent 75%)",
        }}
      />

      {/* dotted cluster, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 h-64 w-80 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.3px, transparent 1.3px)",
          backgroundSize: "13px 13px",
          WebkitMaskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
          maskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
        }}
      />

      {DOTS.map((dot, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-brand-blue-500/40"
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          animate={{ opacity: [0.25, 0.9, 0.25], y: [0, -10, 0] }}
          transition={{ duration: dot.duration, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
