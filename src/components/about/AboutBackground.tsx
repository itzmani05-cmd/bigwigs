import { motion } from "framer-motion";

const PARTICLES = [
  { top: "12%", left: "8%", duration: 8, delay: 0, color: "bg-brand-blue-400/50" },
  { top: "22%", left: "88%", duration: 10, delay: 1.2, color: "bg-orange-400/40" },
  { top: "42%", left: "18%", duration: 9, delay: 0.6, color: "bg-brand-blue-400/40" },
  { top: "58%", left: "80%", duration: 11, delay: 2, color: "bg-violet-400/40" },
  { top: "74%", left: "12%", duration: 12, delay: 1.6, color: "bg-orange-400/40" },
  { top: "86%", left: "70%", duration: 9.5, delay: 0.4, color: "bg-brand-blue-400/45" },
];

export default function AboutBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FCFDFF]">
      {/* layered radial mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(circle at 90% 25%, rgba(59,130,246,0.06), transparent 35%), radial-gradient(circle at 50% 85%, rgba(249,115,22,0.05), transparent 45%), radial-gradient(circle at 75% 65%, rgba(139,92,246,0.04), transparent 40%)",
        }}
      />

      {/* blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* dotted AI / world-map texture */}
      <div
        className="absolute left-1/2 top-0 h-[40rem] w-[70rem] -translate-x-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      {/* neural network lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.15]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M20 120 C 300 60, 480 260, 760 160 S 1180 40, 1420 140" stroke="#2563EB" strokeWidth="1" />
        <path d="M40 560 C 320 500, 500 720, 800 620 S 1200 480, 1420 600" stroke="#F97316" strokeWidth="1" opacity="0.6" />
        <path d="M0 800 C 260 740, 460 900, 740 820 S 1160 700, 1440 780" stroke="#2563EB" strokeWidth="1" opacity="0.4" />
      </svg>

      {/* blueprint corner marks */}
      <svg className="absolute left-6 top-6 h-16 w-16 opacity-20" viewBox="0 0 64 64" fill="none">
        <path d="M2 20 V2 H20" stroke="#2563EB" strokeWidth="1.5" />
      </svg>
      <svg className="absolute bottom-6 right-6 h-16 w-16 opacity-20" viewBox="0 0 64 64" fill="none">
        <path d="M62 44 V62 H44" stroke="#2563EB" strokeWidth="1.5" />
      </svg>

      {/* ambient glow blobs, slow drift */}
      <div className="animate-drift-a absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/[0.07] blur-[140px]" />
      <div className="animate-drift-b absolute -right-40 top-[32%] h-[34rem] w-[34rem] rounded-full bg-blue-400/[0.06] blur-[150px]" />
      <div className="animate-drift-c absolute bottom-[8%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-400/[0.05] blur-[140px]" />
      <div className="animate-drift-b absolute right-[8%] top-[68%] h-80 w-80 rounded-full bg-violet-400/[0.045] blur-[120px]" />

      {/* glass reflection streak */}
      <div className="absolute -top-1/4 left-[8%] h-[160%] w-1/4 -rotate-12 bg-gradient-to-b from-white/50 via-white/0 to-transparent opacity-40" />

      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute h-1.5 w-1.5 rounded-full ${p.color}`}
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}
    </div>
  );
}
