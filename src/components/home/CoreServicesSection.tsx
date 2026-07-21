import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ServicesShowcase from "./ServicesShowcase";

export default function CoreServicesSection() {
  return (
    <section
      id="core-services"
      className="relative scroll-mt-24 overflow-hidden bg-white py-15 lg:py-18"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white to-white"
      />

      {/* thin grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* dotted pattern, top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-6 h-56 w-72 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.3px, transparent 1.3px)",
          backgroundSize: "13px 13px",
          WebkitMaskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
          maskImage: "linear-gradient(to bottom left, black 25%, transparent 75%)",
        }}
      />

      {/* curved arc, top-left */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -left-16 top-4 h-44 w-44 opacity-25"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M10 190 C10 90 90 10 190 10" stroke="#2563EB" strokeWidth="1" />
      </svg>

      {/* floating particles */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-[7%] top-[15%] h-2 w-2 rounded-full bg-purple-400/70"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[18%] h-1.5 w-1.5 rounded-full bg-purple-400/70"
        animate={{ opacity: [0.3, 1, 0.3], y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* soft radial glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], x: [0, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-purple-500/[0.07] blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4], x: [0, -16, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
              Our Core Services
            </span>
            <span className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Intelligent Solutions.{" "}
            <span className="text-brand-blue-500">
              Endless Possibilities.
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            From high-quality training data to intelligent applications, we deliver
            AI-powered solutions that drive innovation and business impact.
          </p>
        </div>
        <div className="mt-16">
          <ServicesShowcase />
        </div>

      </Container>
    </section>
  );
}
