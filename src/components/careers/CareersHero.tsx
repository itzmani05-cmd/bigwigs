import { motion } from "framer-motion";
import { ArrowRight, Brain, Code2, BarChart3, Users2, Rocket } from "lucide-react";
import Container from "@/components/ui/Container";
import { Link } from "react-router-dom";
import logo from "@/assests/logo.png";

const ORBIT_CARDS = [
  {
    icon: Brain,
    title: "AI & Innovation",
    className: "left-1/2 top-5 -translate-x-1/2",
    delay: 0,
  },
  {
    icon: Code2,
    title: "Engineering Excellence",
    className: "left-[-20%] top-[27%]",
    delay: 0.6,
  },
  {
    icon: BarChart3,
    title: "Growth & Learning",
    className: "right-[-16%] top-[32%]",
    delay: 1.2,
  },
  {
    icon: Users2,
    title: "Great Culture",
    className: "left-0 bottom-18",
    delay: 1.8,
  },
  {
    icon: Rocket,
    title: "Make Impact",
    className: "right-0 bottom-5",
    delay: 2.4,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 lg:pt-10 lg:pb-14">
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
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Careers At Bigwigs
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-[clamp(1.5rem,7.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.12] lg:text-[44px] xl:text-5xl"
            >
              Build Your Career.
              <br />
              Build The Future.
              <br />
              <span className="text-blue-500">Together.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Join a team of passionate engineers, AI experts, designers, and
              innovators building intelligent products that empower businesses
              globally.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-700 select-none"
              >
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <div className="relative hidden md:block">
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-1/2 h-16 w-56 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-blue-500/30 blur-[50px]"
              />

              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-[7%] rounded-full border border-dashed border-brand-blue-300/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-[20%] rounded-full border border-dashed border-brand-blue-300/60"
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
                className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue-200 bg-gradient-to-br from-white via-brand-blue-50 to-brand-blue-100/60 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.35)]"
              >
                <img src={logo} alt="Bigwigs Technologies" className="h-14 w-auto object-contain" />
              </motion.div>

              {ORBIT_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: [0, -8, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                  }}
                  className={`absolute z-20 inline-flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-[0_16px_35px_-18px_rgba(15,23,42,0.25)] ${card.className}`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-blue-50 text-brand-blue-500">
                    <card.icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="text-sm font-semibold leading-tight text-slate-900">{card.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
