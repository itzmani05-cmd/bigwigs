import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { seededRandom } from "./utils";

/** Rounded to 2 decimals so the server-rendered style string and the browser's
 *  own serialization of that number always agree — full-precision floats
 *  trigger a spurious hydration mismatch warning. */
const round2 = (n: number) => Math.round(n * 100) / 100;

const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  size: round2(2 + seededRandom(i + 1) * 3.5),
  top: round2(seededRandom(i + 51) * 100),
  left: round2(seededRandom(i + 101) * 100),
  duration: round2(9 + seededRandom(i + 151) * 12),
  delay: round2(-(seededRandom(i + 201) * 10)),
  green: i % 2 === 0,
}));

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const blobY3 = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* base wash */}
      <div className="absolute inset-0 bg-white" />

      {/* large blurred radial gradients, layered depth, parallax on scroll */}
      <motion.div
        style={{ y: blobY1 }}
        className="absolute -top-32 -left-20 w-lg h-128 rounded-full bg-brand-green-400/15 blur-[130px]"
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        style={{ y: blobY2 }}
        className="absolute top-1/3 right-[-8%] w-152 h-152 rounded-full bg-brand-blue-500/12 blur-[150px]"
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>
      <motion.div
        style={{ y: blobY3 }}
        className="absolute bottom-[-15%] left-1/4 w-104 h-104 rounded-full bg-violet-400/10 blur-[120px]"
      >
        <motion.div
          className="w-full h-full rounded-full"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </motion.div>

      {/* subtle AI grid, faded at the edges, slowly panning */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 90%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      />

      {/* thin abstract connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.35]"
        viewBox="0 0 960 600"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 80 120 C 300 60, 500 220, 760 140"
          fill="none"
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.path
          d="M 120 420 C 380 380, 560 520, 880 460"
          fill="none"
          stroke="rgba(37,99,235,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.7 }}
        />
      </svg>

      {/* tiny glowing particles */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${
            p.green ? "bg-brand-green-500" : "bg-brand-blue-500"
          }`}
          style={{
            width: p.size,
            height: p.size,
            top: `${p.top}%`,
            left: `${p.left}%`,
            boxShadow: p.green
              ? "0 0 6px 1px rgba(16,185,129,0.5)"
              : "0 0 6px 1px rgba(37,99,235,0.5)",
          }}
          animate={{
            y: ["0%", "-140%", "0%"],
            opacity: [0.15, 0.65, 0.15],
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
