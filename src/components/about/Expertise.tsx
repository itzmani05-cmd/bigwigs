import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import logo from "@/assests/logo.png";
import { expertiseNodes } from "./expertiseData";

const RADIUS = 38;

export default function Expertise() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
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

          <div className="relative mx-auto aspect-square w-full max-w-[440px]">
            {/* connector lines */}
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
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
                    strokeWidth="0.4"
                    strokeDasharray="2 2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.35 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                );
              })}
            </svg>

            {/* center hub */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-brand-blue-100 bg-white p-2 text-center shadow-[0_16px_40px_-16px_rgba(37,99,235,0.4)] sm:h-28 sm:w-28">
              <img src={logo} alt="Bigwigs Technologies" className="h-8 w-auto object-contain sm:h-9" />
              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-slate-400">
                Technologies
              </span>
            </div>

            {/* nodes */}
            {expertiseNodes.map((node, i) => {
              const Icon = node.icon;
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + RADIUS * Math.cos(rad);
              const y = 50 + RADIUS * Math.sin(rad);
              const isLeft = Math.cos(rad) < -0.15;

              return (
                <motion.div
                  key={node.label}
                  className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    flexDirection: isLeft ? "row-reverse" : "row",
                  }}
                  animate={{ y: ["0%", "-6%", "0%"] }}
                  transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white ${node.bg} ${node.color} shadow-[0_10px_24px_-10px_rgba(15,23,42,0.35)] sm:h-14 sm:w-14`}
                  >
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-slate-700 shadow-sm sm:text-xs">
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
