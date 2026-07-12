import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import HeroParticles from "./hero/HeroParticles";
import MagneticButton from "@/components/ui/MagneticButton";
import CursorGlow from "@/components/ui/CursorGlow";

const headingVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const subheadingVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const buttonsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
} as const;

const buttonVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white ">
      <div className="relative mx-4 sm:mx-2 lg:mx-4 h-[350px] sm:h-[450px] lg:h-[530px] rounded-b-2xl overflow-hidden bg-slate-950">
        <motion.video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <source src="/assets/ai-background.mp4" type="video/mp4" />
        </motion.video>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/55 to-slate-950/35" />

        <HeroParticles />
        <CursorGlow color="16,185,129" size={420} />

        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:px-10">
          <div className="flex flex-col gap-6 max-w-xl">
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl pt-22 font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Bigwigs{" "}
              <span className="bg-gradient-to-r from-brand-green-400 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
                Technologies.
              </span>
            </motion.h1>

            <motion.p
              variants={subheadingVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-md font-normal"
            >
              We build AI, GIS, LiDAR, Healthcare AI, and Enterprise Software
              solutions that transform businesses worldwide.
            </motion.p>

            <motion.div
              variants={buttonsVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4 mt-2"
            >
              <motion.div variants={buttonVariants}>
                <MagneticButton
                  href="#solutions"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/20 hover:shadow-lg hover:shadow-brand-green-500/30 transition-all duration-300 hover:-translate-y-0.5 select-none"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <MagneticButton
                  href="#demo"
                  className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/70 transition-colors duration-300 select-none"
                >
                  <Play size={16} />
                  <span>Watch Demo</span>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
