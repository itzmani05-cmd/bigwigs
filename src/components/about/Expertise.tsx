import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import logo from "@/assests/logo.png";
import { expertiseNodes } from "./expertiseData";

const RADIUS = 36;

export default function Expertise() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-4">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-blue-500/[0.1] blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10 ">
        <div className="px-24 grid grid-cols-1 items-center gap-14  lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Expertise
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
              End-to-end AI and digital solutions that empower businesses to
              innovate, automate, and scale intelligently.
            </p>
          </motion.div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[540px]">
            {/* faint rotating orbit ring */}
            <motion.div
              aria-hidden
              className="absolute inset-[6%] rounded-full border border-dashed border-brand-blue-200/70"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* connector lines */}
            <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100">
              {expertiseNodes.map((node) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = 50 + RADIUS * Math.cos(rad);
                const y = 50 + RADIUS * Math.sin(rad);
                return (
                  <motion.line
                    key={node.label}
                    x1={50}
                    y1={50}
                    x2={x}
                    y2={y}
                    stroke="#2563EB"
                    strokeWidth="0.5"
                    className="animate-dash-flow"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.35 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                );
              })}
            </svg>

            {/* center hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
              className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-brand-blue-100 bg-white/90 p-2 text-center shadow-[0_16px_40px_-16px_rgba(37,99,235,0.4)] backdrop-blur-sm sm:h-24 sm:w-24"
            >
              <img src={logo} alt="Bigwigs Technologies" className="h-7 w-auto object-contain sm:h-8" />
              <span className="text-[7px] font-bold uppercase tracking-[0.1em] text-slate-400 sm:text-[8px]">
                Technologies
              </span>
            </motion.div>

            {/* nodes: icon + label stacked vertically so nothing overflows sideways */}
            {expertiseNodes.map((node, i) => {
              const Icon = node.icon;
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + RADIUS * Math.cos(rad);
              const y = 50 + RADIUS * Math.sin(rad);
              const isTop = Math.sin(rad) < -0.2;
              const isBottom = Math.sin(rad) > 0.2;
              const isMid = !isTop && !isBottom;

              return (
                <motion.div
                  key={node.label}
                  className="absolute z-10 flex w-20 -translate-x-1/2 flex-col items-center gap-1.5 sm:w-24"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: isMid ? "translate(-50%, -50%)" : "translateX(-50%)",
                    marginTop: isTop ? "-1.75rem" : isBottom ? "-1.25rem" : undefined,
                    flexDirection: isBottom ? "column-reverse" : "column",
                  }}
                  animate={{ y: ["0%", "-8%", "0%"] }}
                  transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white ${node.bg} ${node.color} shadow-[0_10px_24px_-10px_rgba(15,23,42,0.35)] sm:h-13 sm:w-13`}
                  >
                    <Icon size={18} strokeWidth={1.75} className="sm:h-5 sm:w-5" />
                  </span>
                  <span className="rounded-lg bg-white/85 px-2 py-1 text-center text-[9px] font-bold leading-tight text-slate-700 shadow-sm backdrop-blur-sm sm:text-[10px]">
                    {node.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
