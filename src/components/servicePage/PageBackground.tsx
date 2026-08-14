import { motion } from "framer-motion";

const PARTICLES = [
  { left: "8%", top: "14%", size: 3, tone: "blue", delay: "0s", duration: "8s" },
  { left: "22%", top: "62%", size: 2, tone: "orange", delay: "1.2s", duration: "9s" },
  { left: "38%", top: "22%", size: 2, tone: "blue", delay: "2.1s", duration: "7s" },
  { left: "52%", top: "78%", size: 3, tone: "blue", delay: "0.6s", duration: "10s" },
  { left: "68%", top: "18%", size: 2, tone: "orange", delay: "1.8s", duration: "8.5s" },
  { left: "78%", top: "56%", size: 3, tone: "blue", delay: "0.3s", duration: "9.5s" },
  { left: "88%", top: "30%", size: 2, tone: "orange", delay: "2.6s", duration: "7.5s" },
  { left: "14%", top: "86%", size: 2, tone: "blue", delay: "1.5s", duration: "8s" },
  { left: "46%", top: "48%", size: 2, tone: "orange", delay: "0.9s", duration: "9s" },
  { left: "92%", top: "82%", size: 2, tone: "blue", delay: "2.2s", duration: "8s" },
] as const;

const PARTICLE_TONE = {
  blue: "rgba(37,99,235,0.35)",
  orange: "rgba(249,115,22,0.35)",
} as const;

interface PageBackgroundProps {
  /** "r,g,b" fragment for the radial wash color. Defaults to brand blue. Kept for backwards compatibility. */
  tint?: string;
}

export default function PageBackground({ tint = "37,99,235" }: PageBackgroundProps) {
  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white"
    >
      {/* blueprint grid + dot matrix */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60" />
      <div
        className="absolute inset-0 bg-dot-grid opacity-40"
        style={{ maskImage: "radial-gradient(circle at 50% 30%, black 0%, transparent 70%)" }}
      />

      {/* primary radial glows */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 0%, rgba(${tint},0.08), transparent 45%)`,
        }}
      />
      <div
        className="absolute inset-0 animate-glow-pulse"
        style={{
          backgroundImage: "radial-gradient(circle at 88% 18%, rgba(249,115,22,0.07), transparent 42%)",
        }}
      />

      {/* blurred drifting gradient blobs (mesh glow) */}
      <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-brand-blue-500/10 blur-[110px] animate-drift-a" />
      <div className="absolute top-1/2 -right-28 h-[380px] w-[380px] rounded-full bg-orange-500/10 blur-[120px] animate-drift-c" />
      <div className="absolute -bottom-24 left-1/4 h-[320px] w-[320px] rounded-full bg-brand-blue-500/8 blur-[100px] animate-drift-b" />

      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-particle-float"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: PARTICLE_TONE[p.tone],
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </motion.div>
  );
}
