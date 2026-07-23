import { motion } from "framer-motion";

const PARTICLES = [
  { top: "10%", left: "8%", duration: 8, delay: 0, color: "bg-brand-blue-400/50" },
  { top: "20%", left: "88%", duration: 10, delay: 1.2, color: "bg-violet-400/40" },
  { top: "44%", left: "16%", duration: 9, delay: 0.6, color: "bg-brand-blue-400/40" },
  { top: "62%", left: "84%", duration: 11, delay: 2, color: "bg-cyan-400/40" },
  { top: "78%", left: "10%", duration: 12, delay: 1.6, color: "bg-brand-blue-400/45" },
  { top: "90%", left: "70%", duration: 9.5, delay: 0.4, color: "bg-violet-400/40" },
];

export default function IndustriesBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FCFDFF]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 8%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(circle at 90% 22%, rgba(59,130,246,0.06), transparent 35%), radial-gradient(circle at 55% 90%, rgba(139,92,246,0.05), transparent 45%), radial-gradient(circle at 80% 65%, rgba(6,182,212,0.04), transparent 40%)",
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
        className="absolute left-1/2 top-0 h-[42rem] w-[68rem] -translate-x-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.2px, transparent 1.2px)",
          backgroundSize: "18px 18px",
          WebkitMaskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 55% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.14]" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none">
        <path d="M20 140 C 300 80, 480 280, 760 180 S 1180 60, 1420 160" stroke="#2563EB" strokeWidth="1" />
        <path d="M40 580 C 320 520, 500 740, 800 640 S 1200 500, 1420 620" stroke="#8B5CF6" strokeWidth="1" opacity="0.5" />
        <path d="M0 820 C 260 760, 460 920, 740 840 S 1160 720, 1440 800" stroke="#2563EB" strokeWidth="1" opacity="0.35" />
      </svg>

      <div className="animate-drift-a absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/[0.07] blur-[140px]" />
      <div className="animate-drift-b absolute -right-40 top-[30%] h-[34rem] w-[34rem] rounded-full bg-blue-400/[0.06] blur-[150px]" />
      <div className="animate-drift-c absolute bottom-[8%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-400/[0.05] blur-[140px]" />
      <div className="animate-drift-b absolute right-[8%] top-[68%] h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[120px]" />

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
