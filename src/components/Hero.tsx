"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HeroBackground from "./hero/HeroBackground";
import HeroComposition from "./hero/HeroComposition";
import { useParallax } from "./hero/useParallax";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

export default function Hero() {
  const [btnHovered, setBtnHovered] = useState(false);
  const { x, y } = useParallax();

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white"
    >
      <HeroBackground />
      <HeroComposition parallaxX={x} parallaxY={y} />

      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-28 lg:py-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 max-w-xl"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-green-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-500 uppercase">
              Enterprise AI Systems
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] will-change-transform-opacity"
          >
            Powering AI with{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              Precision.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-normal"
          >
            We build intelligent AI solutions across GIS, LiDAR, Medical AI,
            Computer Vision, Enterprise Automation, and Data Analytics.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href="#solutions"
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-brand-green-500 to-brand-blue-500 shadow-md shadow-brand-green-500/15 hover:shadow-lg hover:shadow-brand-green-500/25 transition-all duration-300 hover:-translate-y-0.5 select-none"
            >
              <span>Explore Solutions</span>
              <motion.span
                animate={{ x: btnHovered ? 4 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden border-2 border-brand-green-500 text-brand-green-500 hover:text-white px-7 py-3 rounded-full font-semibold transition-colors duration-300 ease-out group select-none"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10">Contact Us</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden lg:flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border border-slate-300 rounded-full flex justify-center p-1"
        >
          <motion.div className="w-1.5 h-1.5 bg-brand-green-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
