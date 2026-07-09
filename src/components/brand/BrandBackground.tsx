import { motion } from "framer-motion";

const round2 = (n: number) => Math.round(n * 100) / 100;

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: round2(2 + seededRandom(i + 1) * 3.5),
  top: round2(seededRandom(i + 51) * 100),
  left: round2(seededRandom(i + 101) * 100),
  duration: round2(10 + seededRandom(i + 151) * 14),
  delay: round2(-(seededRandom(i + 201) * 12)),
  green: i % 2 === 0,
}));

const NOISE_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function BrandBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#050816]">
      {/* soft animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #6ee7b7 1px, transparent 1px), linear-gradient(to bottom, #6ee7b7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 50% 45%, black 40%, transparent 90%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* radial gradient glow behind the center card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] max-w-[95vw] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.22), rgba(37,99,235,0.14) 55%, transparent 75%)",
        }}
      />

      {/* floating glowing particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.green ? "bg-brand-green-400" : "bg-brand-blue-500"}`}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            boxShadow: p.green
              ? "0 0 8px 2px rgba(34,197,94,0.65)"
              : "0 0 8px 2px rgba(37,99,235,0.65)",
          }}
          animate={{
            y: ["0%", "-160%", "0%"],
            opacity: [0.15, 0.75, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_URL}")` }}
      />
    </div>
  );
}
