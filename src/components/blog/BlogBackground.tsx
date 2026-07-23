import { motion } from "framer-motion";

const PARTICLES = [
  { top: "8%", left: "6%", duration: 8, delay: 0, color: "bg-brand-blue-400/50" },
  { top: "18%", left: "90%", duration: 10, delay: 1.2, color: "bg-orange-400/40" },
  { top: "40%", left: "14%", duration: 9, delay: 0.6, color: "bg-violet-400/40" },
  { top: "58%", left: "86%", duration: 11, delay: 2, color: "bg-brand-blue-400/40" },
  { top: "76%", left: "10%", duration: 12, delay: 1.6, color: "bg-cyan-400/40" },
  { top: "88%", left: "72%", duration: 9.5, delay: 0.4, color: "bg-brand-blue-400/45" },
];

export default function BlogBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FAFBFD]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 10%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(circle at 88% 25%, rgba(79,70,229,0.06), transparent 35%), radial-gradient(circle at 50% 85%, rgba(249,115,22,0.04), transparent 45%)",
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
        className="absolute left-1/2 top-0 h-[40rem] w-[68rem] -translate-x-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.13]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M20 130 C 300 70, 480 270, 760 170 S 1180 50, 1420 150" stroke="#2563EB" strokeWidth="1" />
        <path d="M40 580 C 320 520, 500 740, 800 640 S 1200 500, 1420 620" stroke="#4F46E5" strokeWidth="1" opacity="0.5" />
      </svg>

      <div className="animate-drift-a absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/[0.07] blur-[140px]" />
      <div className="animate-drift-b absolute -right-40 top-[32%] h-[34rem] w-[34rem] rounded-full bg-indigo-400/[0.06] blur-[150px]" />
      <div className="animate-drift-c absolute bottom-[8%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-400/[0.04] blur-[140px]" />

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
