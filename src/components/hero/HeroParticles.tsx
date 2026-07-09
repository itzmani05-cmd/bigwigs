import { motion } from "framer-motion";
import { seededRandom } from "./utils";

const round2 = (n: number) => Math.round(n * 100) / 100;

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: round2(2 + seededRandom(i + 1) * 3.5),
  top: round2(seededRandom(i + 51) * 100),
  left: round2(seededRandom(i + 101) * 100),
  duration: round2(9 + seededRandom(i + 151) * 12),
  delay: round2(-(seededRandom(i + 201) * 10)),
  green: i % 2 === 0,
}));

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${
            p.green ? "bg-brand-green-400" : "bg-brand-blue-500"
          }`}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            boxShadow: p.green
              ? "0 0 8px 2px rgba(34,197,94,0.7)"
              : "0 0 8px 2px rgba(37,99,235,0.7)",
          }}
          animate={{
            y: ["0%", "-160%", "0%"],
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
