import { motion } from "framer-motion";
import logo from "@/assests/logo.png";
import { serviceOrbitNodes } from "./serviceOrbitData";

const CARD_RADIUS = 40;
const DOT_RADIUS = 34;
const DOT_COLOR = "#2563eb";

const RING_GRADIENT = `conic-gradient(from 0deg, ${serviceOrbitNodes
  .map((node) => node.ring)
  .concat(serviceOrbitNodes[0].ring)
  .join(", ")})`;

export default function ServiceOrbitVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[460px]">
      {/* soft violet/blue glow behind the whole diagram */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[6%] rounded-full bg-gradient-to-br from-violet-400/15 via-brand-blue-400/10 to-transparent blur-2xl"
      />

      {/* faint dotted network background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, #000 70%, transparent 100%)",
        }}
      />

      {/* faint concentric radar rings */}
      <div aria-hidden className="absolute inset-[2%] rounded-full border border-slate-200/70" />
      <div aria-hidden className="absolute inset-[11%] rounded-full border border-slate-200/70" />
      <div aria-hidden className="absolute inset-[21%] rounded-full border border-dashed border-slate-300/70" />

      {/* rotating gradient orbit ring */}
      <motion.div
        aria-hidden
        className="absolute inset-[16%] rounded-full opacity-80"
        style={{
          background: RING_GRADIENT,
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 0)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* connector dots on the ring */}
      {serviceOrbitNodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + DOT_RADIUS * Math.cos(rad);
        const y = 50 + DOT_RADIUS * Math.sin(rad);
        return (
          <span
            key={`dot-${node.label}`}
            aria-hidden
            className="absolute z-10 flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white shadow-sm"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: DOT_COLOR }} />
          </span>
        );
      })}

      {/* center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-slate-100 bg-white p-2 text-center shadow-[0_16px_40px_-16px_rgba(37,99,235,0.4)] sm:h-28 sm:w-28"
      >
        <img src={logo} alt="Bigwigs Technologies" className="h-10 w-auto object-contain sm:h-12" />
      </motion.div>

      {/* pentagon nodes */}
      {serviceOrbitNodes.map((node, i) => {
        const Icon = node.icon;
        const rad = (node.angle * Math.PI) / 180;
        const x = 50 + CARD_RADIUS * Math.cos(rad);
        const y = 50 + CARD_RADIUS * Math.sin(rad);

        return (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute z-10 w-[6.5rem] -translate-x-1/2 -translate-y-1/2 sm:w-[7.5rem]"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className="flex flex-col items-center bg-white pb-3 pt-7 shadow-[0_16px_30px_-18px_rgba(15,23,42,0.35)]"
              style={{ clipPath: "polygon(50% 0%, 100% 38%, 100% 100%, 0% 100%, 0% 38%)" }}
            >
              <p className="px-2 text-center text-[11px] font-bold leading-tight text-slate-800 sm:text-xs">
                {node.label}
              </p>
            </div>

            <span
              className={`absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white text-white shadow-sm sm:h-11 sm:w-11 ${node.bg}`}
            >
              <Icon size={17} strokeWidth={1.75} />
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
