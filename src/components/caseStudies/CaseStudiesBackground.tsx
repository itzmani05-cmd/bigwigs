import { motion } from "framer-motion";

const PARTICLES = [
  { top: "14%", left: "10%", duration: 9, delay: 0, color: "bg-brand-blue-400/50" },
  { top: "24%", left: "86%", duration: 11, delay: 1.4, color: "bg-violet-400/40" },
  { top: "48%", left: "18%", duration: 10, delay: 0.8, color: "bg-cyan-400/40" },
  { top: "64%", left: "82%", duration: 12, delay: 2.2, color: "bg-brand-blue-400/45" },
  { top: "82%", left: "12%", duration: 13, delay: 1.8, color: "bg-violet-400/40" },
];

export default function CaseStudiesBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#FCFDFF]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.08), transparent 40%), radial-gradient(circle at 88% 20%, rgba(139,92,246,0.06), transparent 35%), radial-gradient(circle at 50% 92%, rgba(16,185,129,0.05), transparent 45%)",
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

      <div className="animate-drift-a absolute -left-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-brand-blue-500/[0.07] blur-[140px]" />
      <div className="animate-drift-b absolute -right-40 top-[28%] h-[32rem] w-[32rem] rounded-full bg-violet-400/[0.06] blur-[150px]" />
      <div className="animate-drift-c absolute bottom-[6%] left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-green-400/[0.05] blur-[140px]" />

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
