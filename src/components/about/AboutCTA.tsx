import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

export default function AboutCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 lg:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#03132f] via-[#0b1f45] to-[#0F172A] p-8 sm:p-12 lg:p-14">
          {/* dotted world map */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage: "radial-gradient(#3b82f6 1.4px, transparent 1.4px)",
              backgroundSize: "16px 16px",
              WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 60% 40%, black 0%, transparent 70%)",
              maskImage: "radial-gradient(ellipse 70% 70% at 60% 40%, black 0%, transparent 70%)",
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue-500/25 blur-[110px]"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* AI particles */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-[15%] top-[20%] h-1.5 w-1.5 rounded-full bg-brand-blue-300"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-[40%] top-[75%] h-1 w-1 rounded-full bg-brand-blue-300"
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <motion.div
              aria-hidden
              className="relative hidden h-24 w-24 shrink-0 items-center justify-center rounded-full bg-brand-blue-500/15 text-brand-blue-300 shadow-[0_0_60px_10px_rgba(37,99,235,0.35)] lg:flex"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Rocket size={40} strokeWidth={1.5} />
            </motion.div>

            <div className="max-w-xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[32px]">
                Let&rsquo;s Build the Future of AI Together
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Partner with Bigwigs Technologies to build intelligent, scalable, and
                secure AI-powered solutions.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-3 lg:w-auto lg:justify-end">
              <MagneticButton
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_15px_-8px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 select-none sm:w-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 select-none sm:w-auto"
              >
                <span>Talk to Our Experts</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
