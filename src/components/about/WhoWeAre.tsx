import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";
import ourTeamImage from "@/assests/about/ourteams.jpg";

export default function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/70 via-brand-blue-50/25 to-white"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-20 h-[22rem] w-[22rem] rounded-full bg-orange-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] lg:grid-cols-2">
          <ScrollReveal
            direction="left"
            distance={40}
            scale
            duration={0.7}
            amount={0.3}
            className="relative min-h-[280px] overflow-hidden lg:min-h-[380px]"
          >
            <img
              src={ourTeamImage}
              alt="The Bigwigs Technologies team collaborating"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            distance={40}
            delay={0.1}
            amount={0.3}
            className="flex flex-col justify-center bg-white p-8 sm:p-12 lg:p-14"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Who We Are
              </span>
              <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              Bigwigs Technologies is a technology-driven company delivering AI Data
              Services, Generative AI solutions, enterprise software development,
              healthcare AI, and multilingual content services. We partner with global
              organizations to transform raw data into intelligent business solutions
              through innovation, precision, and scalable delivery.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
