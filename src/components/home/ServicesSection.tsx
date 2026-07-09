"use client";

import { motion } from "framer-motion";
import HeroBackground from "@/components/hero/HeroBackground";
import Container from "@/components/ui/Container";
import ServiceCard from "./ServiceCard";
import { serviceDomains } from "./serviceDomains";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
} as const;

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-60">
        <HeroBackground />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green-500/25 bg-brand-green-50 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.2em] text-brand-green-600 uppercase">
            What we build
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Enterprise AI services,{" "}
            <span className="bg-gradient-to-r from-brand-green-500 via-brand-green-400 to-brand-blue-500 bg-clip-text text-transparent">
              engineered for scale.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Six core domains, one precision-driven engineering approach.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {serviceDomains.map((domain) => (
            <ServiceCard key={domain.id} domain={domain} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
