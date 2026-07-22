import { motion } from "framer-motion";

const PARTICLES = [
  { top: "10%", left: "6%", duration: 8, delay: 0, color: "bg-brand-blue-400/50" },
  { top: "22%", left: "90%", duration: 10, delay: 1.2, color: "bg-orange-400/40" },
  { top: "48%", left: "14%", duration: 9, delay: 0.6, color: "bg-violet-400/40" },
  { top: "64%", left: "88%", duration: 11, delay: 2, color: "bg-brand-blue-400/40" },
  { top: "80%", left: "10%", duration: 12, delay: 1.6, color: "bg-orange-400/40" },
  { top: "90%", left: "72%", duration: 9.5, delay: 0.4, color: "bg-brand-blue-400/45" },
];

export default function ApplyBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FCFDFF]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(circle at 90% 30%, rgba(59,130,246,0.06), transparent 35%), radial-gradient(circle at 50% 80%, rgba(249,115,22,0.05), transparent 45%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div
        className="absolute left-0 top-0 h-[36rem] w-[46rem] opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage: "radial-gradient(ellipse 55% 55% at 15% 10%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 55% 55% at 15% 10%, black 30%, transparent 75%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M20 120 C 300 60, 480 260, 760 160 S 1180 40, 1420 140" stroke="#2563EB" strokeWidth="1" />
        <path d="M40 600 C 320 540, 500 760, 800 660 S 1200 520, 1420 640" stroke="#F97316" strokeWidth="1" opacity="0.6" />
      </svg>

      <div className="animate-drift-a absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/[0.07] blur-[140px]" />
      <div className="animate-drift-b absolute -right-40 top-[35%] h-[32rem] w-[32rem] rounded-full bg-blue-400/[0.06] blur-[150px]" />
      <div className="animate-drift-c absolute bottom-[6%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-orange-400/[0.05] blur-[140px]" />

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
