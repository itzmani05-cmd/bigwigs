"use client";

import { motion } from "framer-motion";
import { useId, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type Tint = "green" | "blue" | "violet";

const tintHex: Record<Tint, string> = {
  green: "#10b981",
  blue: "#2563eb",
  violet: "#7c6ff0",
};

const glassPanel =
  "backdrop-blur-xl bg-white/45 border border-white/60 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.25)]";

/* ---------------------------------------------------------------- */
/* Glass Hexagon — holds an icon + label, edges drawn via SVG stroke */
/* ---------------------------------------------------------------- */
export function GlassHexagon({
  size = 132,
  icon: Icon,
  label,
  tint = "green",
}: {
  size?: number;
  icon?: LucideIcon;
  label?: string;
  tint?: Tint;
}) {
  const points = "25,4 75,4 98,50 75,96 25,96 2,50";
  return (
    <div style={{ width: size, height: size }} className="relative">
      <div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          clipPath: "polygon(25% 4%, 75% 4%, 98% 50%, 75% 96%, 25% 96%, 2% 50%)",
          background: `linear-gradient(135deg, ${tintHex[tint]}33, rgba(255,255,255,0.08))`,
          filter: "drop-shadow(0 18px 30px rgba(15,23,42,0.16))",
        }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
        <polygon points={points} fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.4" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-3 text-center">
        {Icon && <Icon size={size * 0.17} strokeWidth={1.5} className="text-slate-700/80" />}
        {label && (
          <span className="text-[11px] font-semibold tracking-wide text-slate-600/90">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Organic Blob — asymmetric border-radius, morphs while breathing  */
/* ---------------------------------------------------------------- */
export function OrganicBlob({
  size = 150,
  tint = "blue",
  duration = 12,
}: {
  size?: number;
  tint?: Tint;
  duration?: number;
}) {
  return (
    <motion.div
      style={{
        width: size,
        height: size * 0.9,
        background: `linear-gradient(160deg, ${tintHex[tint]}2e, ${tintHex.green}1a)`,
      }}
      className="backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.2)]"
      animate={{
        borderRadius: [
          "42% 58% 65% 35% / 45% 45% 55% 55%",
          "60% 40% 35% 65% / 55% 60% 40% 45%",
          "42% 58% 65% 35% / 45% 45% 55% 55%",
        ],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

/* ---------------------------------------------------------------- */
/* Circular Capsule — pill with icon + label                        */
/* ---------------------------------------------------------------- */
export function CircularCapsule({
  icon: Icon,
  label,
  tint = "green",
}: {
  icon?: LucideIcon;
  label?: string;
  tint?: Tint;
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-full px-5 py-3 ${glassPanel}`}
      style={{ background: `linear-gradient(90deg, ${tintHex[tint]}22, rgba(255,255,255,0.35))` }}
    >
      {Icon && <Icon size={18} strokeWidth={1.6} className="text-slate-700/85 shrink-0" />}
      {label && (
        <span className="text-[13px] font-semibold text-slate-700/90 whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Diamond Panel — rotated square, content counter-rotated upright  */
/* ---------------------------------------------------------------- */
export function DiamondPanel({
  size = 118,
  icon: Icon,
  label,
  tint = "blue",
}: {
  size?: number;
  icon?: LucideIcon;
  label?: string;
  tint?: Tint;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        transform: "rotate(45deg)",
        background: `linear-gradient(135deg, ${tintHex[tint]}2c, rgba(255,255,255,0.1))`,
      }}
      className={`rounded-[22px] ${glassPanel}`}
    >
      <div
        style={{ transform: "rotate(-45deg)" }}
        className="w-full h-full flex flex-col items-center justify-center gap-1.5"
      >
        {Icon && <Icon size={size * 0.19} strokeWidth={1.5} className="text-slate-700/80" />}
        {label && (
          <span className="text-[10px] font-semibold tracking-wide text-slate-600/90">
            {label}
          </span>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Wireframe Polygon — pure stroke outline, no fill                 */
/* ---------------------------------------------------------------- */
export function WireframePolygon({
  size = 90,
  sides = 5,
  tint = "green",
}: {
  size?: number;
  sides?: 3 | 5 | 6;
  tint?: Tint;
}) {
  const gradId = useId();
  const points = Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    const x = 50 + 46 * Math.cos(angle);
    const y = 50 + 46 * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={tintHex[tint]} stopOpacity="0.75" />
          <stop offset="100%" stopColor={tintHex[tint]} stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <polygon points={points} fill="none" stroke={`url(#${gradId})`} strokeWidth="1.6" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Glow Ring — soft pulsing halo around a thin ring outline          */
/* ---------------------------------------------------------------- */
export function GlowRing({ size = 100, tint = "violet" }: { size?: number; tint?: Tint }) {
  return (
    <div style={{ width: size, height: size }} className="relative">
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        style={{ background: `${tintHex[tint]}33` }}
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-[10%] rounded-full border"
        style={{ borderColor: `${tintHex[tint]}55` }}
      />
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Orbit Path — static ring with a node continuously revolving       */
/* ---------------------------------------------------------------- */
export function OrbitPath({ size = 150, tint = "blue" }: { size?: number; tint?: Tint }) {
  const radius = size / 2;
  return (
    <div style={{ width: size, height: size }} className="relative">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(100,116,139,0.28)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50% 50%" }}
      >
        <div
          className="absolute rounded-full shadow-[0_0_12px_2px_var(--glow)]"
          style={
            {
              width: 10,
              height: 10,
              top: 0,
              left: radius - 5,
              background: tintHex[tint],
              "--glow": `${tintHex[tint]}aa`,
            } as CSSProperties
          }
        />
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Data Node Cluster — mini network graph, pulsing nodes             */
/* ---------------------------------------------------------------- */
export function DataNodeCluster({ size = 120, tint = "green" }: { size?: number; tint?: Tint }) {
  const nodes = [
    { x: 20, y: 30 },
    { x: 55, y: 10 },
    { x: 85, y: 35 },
    { x: 40, y: 65 },
    { x: 75, y: 80 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 3],
    [3, 4],
    [2, 4],
  ];

  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={tintHex[tint]}
          strokeOpacity={0.25}
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3}
          fill={tintHex[tint]}
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Gradient Mesh Panel — rounded card with layered mesh gradient     */
/* ---------------------------------------------------------------- */
export function GradientMeshPanel({
  width = 160,
  height = 110,
  icon: Icon,
  label,
}: {
  width?: number;
  height?: number;
  icon?: LucideIcon;
  label?: string;
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: `
          radial-gradient(at 20% 20%, ${tintHex.green}30 0px, transparent 55%),
          radial-gradient(at 80% 30%, ${tintHex.blue}30 0px, transparent 55%),
          radial-gradient(at 60% 85%, ${tintHex.violet}22 0px, transparent 55%)
        `,
      }}
      className={`rounded-[26px] flex flex-col items-center justify-center gap-2 ${glassPanel}`}
    >
      {Icon && <Icon size={22} strokeWidth={1.5} className="text-slate-700/80" />}
      {label && (
        <span className="text-[12px] font-semibold tracking-wide text-slate-600/90">{label}</span>
      )}
    </div>
  );
}
