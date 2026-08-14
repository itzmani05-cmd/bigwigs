import { motion } from "framer-motion";

/**
 * Placeholder hero visual — an abstract, stylized representation of AI data
 * annotation/processing/analytics (bounding-box annotations, a live-processing
 * badge, an accuracy chip). Not a screenshot of any real Bigwigs product.
 *
 * Swap-out: once a real product screenshot exists, replace the contents of
 * this component with a plain `<img className="h-full w-full rounded-[28px]
 * object-cover" src={...} />` — the parent wrapper in Hero.tsx already owns
 * the sizing/aspect-ratio, so nothing else needs to change.
 */
export default function HeroVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#03132f] via-[#0b1f45] to-[#0F172A] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]">
      {/* grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* soft ambient glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 left-1/4 h-56 w-56 rounded-full bg-brand-blue-400/20 blur-[90px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-1/4 h-56 w-56 rounded-full bg-purple-400/10 blur-[90px]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* abstract silhouette shapes standing in for "raw data" being processed */}
      <svg
        aria-hidden
        viewBox="0 0 400 320"
        className="absolute inset-0 h-full w-full opacity-90"
        fill="none"
      >
        <rect x="40" y="182" width="52" height="88" rx="5" fill="#13294B" />
        <rect x="112" y="138" width="62" height="132" rx="5" fill="#0F2242" />
        <rect x="196" y="200" width="46" height="70" rx="5" fill="#13294B" />
        <circle cx="304" cy="118" r="48" fill="#122A52" />
      </svg>

      {/* annotation bounding boxes — abstract, not a real UI */}
      <AnnotationBox className="left-[8%] top-[44%] h-[42%] w-[16%]" label="Object" confidence="98.2%" delay={0.5} />
      <AnnotationBox className="left-[27%] top-[26%] h-[58%] w-[19%]" label="Structure" confidence="96.7%" delay={0.75} />
      <AnnotationBox className="left-[66%] top-[16%] h-[42%] w-[24%]" label="Region" confidence="99.1%" delay={1} />

      {/* floating accuracy chip */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"
      >
        <MiniBarChart />
        <div>
          <div className="text-sm font-bold text-white">99.5%</div>
          <div className="text-[10px] font-medium uppercase tracking-wide text-white/50">Accuracy</div>
        </div>
      </motion.div>

      {/* floating status badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.35 }}
        className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-green-400" />
        <span className="text-[11px] font-semibold text-white/80">Live Processing</span>
      </motion.div>
    </div>
  );
}

function AnnotationBox({
  className,
  label,
  confidence,
  delay = 0,
}: {
  className: string;
  label: string;
  confidence: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute rounded-md border-2 border-brand-blue-400/70 ${className}`}
    >
      <span className="absolute -top-[22px] left-0 whitespace-nowrap rounded bg-brand-blue-500 px-1.5 py-0.5 text-[9px] font-bold text-white">
        {label} · {confidence}
      </span>
      <span className="absolute -left-[3px] -top-[3px] h-2.5 w-2.5 border-l-2 border-t-2 border-brand-blue-300" />
      <span className="absolute -right-[3px] -top-[3px] h-2.5 w-2.5 border-r-2 border-t-2 border-brand-blue-300" />
      <span className="absolute -bottom-[3px] -left-[3px] h-2.5 w-2.5 border-b-2 border-l-2 border-brand-blue-300" />
      <span className="absolute -bottom-[3px] -right-[3px] h-2.5 w-2.5 border-b-2 border-r-2 border-brand-blue-300" />
    </motion.div>
  );
}

function MiniBarChart() {
  const bars = [40, 65, 50, 80, 60];
  return (
    <div className="flex h-8 items-end gap-1" aria-hidden>
      {bars.map((h, i) => (
        <span key={i} className="w-1.5 rounded-sm bg-brand-blue-400" style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}
