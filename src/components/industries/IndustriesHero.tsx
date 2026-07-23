import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Car, Factory, Landmark, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import heroImage from "@/assests/bgHero.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const TRUSTED_LOGOS = ["appen", "Remotasks", "TicTac", "WisePL", "GTS"];

const FLOATING_BADGES = [
  { icon: Building2, label: "Smart Cities", sub: "Traffic Intelligence", position: "left-[4%] top-[10%]", delay: 0 },
  { icon: Car, label: "Automotive", sub: "Autonomous Driving", position: "right-[4%] top-[14%]", delay: 0.5 },
  { icon: HeartPulse, label: "Healthcare", sub: "AI Diagnostics", position: "left-[6%] bottom-[26%]", delay: 1 },
  { icon: Factory, label: "Manufacturing", sub: "Smart Automation", position: "right-[6%] top-[46%]", delay: 1.5 },
  { icon: Landmark, label: "Financial Services", sub: "Risk & Fraud Detection", position: "left-[10%] bottom-[6%]", delay: 2 },
];

export default function IndustriesHero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 lg:pt-10 lg:pb-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white/40 to-transparent"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-violet-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-11 lg:grid-cols-[45%_55%] lg:gap-7">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]  text-orange-500 sm:text-sm">
                Industries
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-2 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              Powering{" "}
              <span className="text-blue-500">
                AI
              </span>{" "}
              Across
              <br />
              Every Industry
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-4 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Bigwigs Technologies delivers enterprise AI data services, software
              engineering, Generative AI, and digital transformation solutions
              across healthcare, automotive, finance, manufacturing,
              agriculture, retail, logistics, and smart cities.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#industries-grid"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>Explore Solutions</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
              >
                <span>Talk To Experts</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Trusted By Innovators Worldwide
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-3">
                {TRUSTED_LOGOS.map((name) => (
                  <span
                    key={name}
                    className="text-lg font-extrabold tracking-tight text-slate-300 grayscale transition-colors duration-300 hover:text-slate-500"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mr-10">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-brand-blue-500/15 blur-[60px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-10 rounded-full border border-dashed border-brand-blue-300/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative aspect-[3/2] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
            >
              <img
                src={heroImage}
                alt="Bigwigs Technologies AI perception system detecting vehicles, pedestrians, and infrastructure across a connected smart city"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/70 via-transparent to-[#03132f]/20"
              />

              {FLOATING_BADGES.map((badge) => (
                <motion.div
                  key={badge.label}
                  className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 shadow-[0_16px_30px_-16px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:flex ${badge.position}`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-blue-500/20 text-brand-blue-300">
                    <badge.icon size={14} strokeWidth={1.75} />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[10px] font-bold uppercase tracking-wide text-white">
                      {badge.label}
                    </span>
                    <span className="block text-[9px] text-slate-300">{badge.sub}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
