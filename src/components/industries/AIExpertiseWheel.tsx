import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import logo from "@/assests/logo.png";
import { expertiseWheelNodes } from "./expertiseNodesData";

const RADIUS = 42;

function nodePosition(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + RADIUS * Math.cos(rad)}%`,
    top: `${50 + RADIUS * Math.sin(rad)}%`,
  };
}

export default function AIExpertiseWheel() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-violet-500/[0.06] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
            Our AI Expertise
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            AI Solutions Across Industries
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            From data to deployment, we provide end-to-end AI services that
            empower businesses to innovate and grow.
          </p>
        </div>

        <div className="relative mx-auto mt-16 hidden aspect-square max-w-[640px] lg:block">
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full border border-dashed border-brand-blue-200/60"
          />
          <div
            aria-hidden
            className="absolute inset-[20%] rounded-full border border-slate-200/70"
          />

          <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
            {expertiseWheelNodes.map((node) => {
              const pos = nodePosition(node.angle);
              return (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={parseFloat(pos.left)}
                  y2={parseFloat(pos.top)}
                  stroke="#2563EB"
                  strokeWidth="0.3"
                  strokeOpacity="0.35"
                  className="animate-dash-flow"
                />
              );
            })}
          </svg>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-brand-blue-100 bg-white/90 text-center shadow-[0_20px_50px_-16px_rgba(37,99,235,0.35)] backdrop-blur-xl"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -m-3 rounded-full bg-brand-blue-400/20 blur-2xl"
            />
            <img src={logo} alt="" aria-hidden className="relative h-8 w-8 object-contain" />
            <span className="relative text-[11px] font-extrabold uppercase leading-tight tracking-wide text-slate-900">
              Bigwigs
              <br />
              Technologies
            </span>
          </motion.div>

          {expertiseWheelNodes.map((node, i) => {
            const pos = nodePosition(node.angle);
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
                className="absolute z-10 flex w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
                style={pos}
              >
                <motion.span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-4 border-white ${node.bg} ${node.color} shadow-[0_10px_24px_-8px_rgba(15,23,42,0.3)]`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <node.icon size={22} strokeWidth={1.75} />
                </motion.span>
                <span className="text-xs font-bold leading-tight text-slate-700">{node.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* mobile / tablet fallback grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:hidden">
          {expertiseWheelNodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card flex flex-col items-center gap-2.5 rounded-2xl px-3 py-5 text-center"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${node.bg} ${node.color}`}>
                <node.icon size={20} strokeWidth={1.75} />
              </span>
              <span className="text-xs font-bold leading-tight text-slate-700">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
