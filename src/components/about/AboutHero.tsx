import { motion } from "framer-motion";
import { ArrowRight, Globe2, Users, ShieldCheck, Zap, BrainCircuit, BarChart3, Code2, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import { useParallax } from "@/hooks/useParallax";

const worldMapModules = import.meta.glob("/data/aboutPageWorldMap.webp", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const aboutWorldMap = Object.values(worldMapModules)[0];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
} as const;

const heroStats = [
  { icon: Globe2, value: "7+", label: "Countries Served" },
  { icon: Users, value: "150+", label: "Projects Delivered" },
  { icon: ShieldCheck, value: "98%", label: "Client Retention" },
  { icon: Zap, value: "10+", label: "Years of Excellence" },
];

const featureChips = [
  { icon: BrainCircuit, label: "AI & GenAI", position: "top-[16%] left-0 -translate-x-1/4", delay: 0 },
  { icon: BarChart3, label: "Data Intelligence", position: "top-[16%] right-0 translate-x-1/4", delay: 1 },
  { icon: Code2, label: "Software Engineering", position: "bottom-[30%] left-0 -translate-x-1/3", delay: 2 },
  { icon: Building2, label: "Industry Solutions", position: "bottom-[30%] right-0 translate-x-1/3", delay: 3 },
];

export default function AboutHero() {
  const { ref: visualRef, y: visualY } = useParallax(16);

  return (
    <section className="relative w-full overflow-hidden bg-white pt-7 pb-10 lg:pt-10 lg:pb-14">
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                About Bigwigs Technologies
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[40px] xl:text-5xl"
            >
              Building Intelligence That Moves{" "}
              <span className="text-blue-500">Businesses Forward</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              We combine data, AI, and engineering excellence to create
              intelligent solutions that solve real-world problems and drive
              meaningful impact.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/apply"
                magnetic={false}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>Work With Us</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="/services"
                magnetic={false}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            ref={visualRef}
            style={{ y: visualY }}
            className="relative mx-auto hidden w-full max-w-[480px] lg:mr-10 lg:block"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-full bg-brand-blue-500/15 blur-[70px]"
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={aboutWorldMap}
              alt="Global network of Bigwigs Technologies AI and data operations"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 h-auto w-full object-contain"
            />

            {featureChips.map((chip) => (
              <motion.div
                key={chip.label}
                className={`absolute z-20 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3 py-2 shadow-[0_16px_30px_-16px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:flex ${chip.position}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: chip.delay }}
              >
                <chip.icon size={15} strokeWidth={1.75} className="text-brand-blue-500" />
                <span className="text-[11px] font-bold whitespace-nowrap text-slate-700">{chip.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 grid grid-cols-2 divide-x divide-y divide-slate-100 rounded-2xl border border-slate-200 bg-white shadow-[0_20px_45px_-20px_rgba(15,23,42,0.15)] sm:grid-cols-4 sm:divide-y-0"
        >
          {heroStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center px-4 py-4 text-center"
            >
              <div className="flex items-center gap-2">
                <Icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-brand-blue-500"
                />

                <span className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                  {value}
                </span>
              </div>

              <span className="mt-1 text-[11px] leading-tight text-slate-500 sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
