import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";

interface CtaAction {
  label: string;
  href: string;
}

interface ClosingCtaProps {
  heading: ReactNode;
  description: string;
  primary: CtaAction;
  secondary: CtaAction;
}

export default function ClosingCta({ heading, description, primary, secondary }: ClosingCtaProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#071B46] py-16 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[380px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-blue-500/20 blur-[130px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 h-[280px] w-[280px] translate-y-1/3 rounded-full bg-orange-500/15 blur-[110px] animate-glow-pulse" style={{ animationDelay: "3s" }} />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <MagneticButton
              href={primary.href}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition-colors duration-200 hover:bg-slate-100 select-none"
            >
              <span>{primary.label}</span>
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href={secondary.href}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:border-white/40 select-none"
            >
              <span>{secondary.label}</span>
            </MagneticButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
