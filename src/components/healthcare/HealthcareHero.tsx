import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionBackdrop from "@/components/servicePage/SectionBackdrop";
import googleLogo from "@/assests/google.png";
import youtubeLogo from "@/assests/youtube.png";
import healthCareRightSide from "@/assests/healthcare/heroDashboard.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

const TRUSTED_LOGOS = [
  { name: "Google", logo: googleLogo },
  { name: "YouTube", logo: youtubeLogo },
];

export default function HealthcareHero() {
  return (
    <section className="relative w-full overflow-hidden pt-14 pb-16 lg:pt-11 lg:pb-20">
      <SectionBackdrop />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[45%_55%] lg:gap-10">
          {/* LEFT */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.span
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-500"
            >
              Healthcare AI
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px]"
            >
              Smarter healthcare. Powered by{" "}
              <span className="text-brand-blue-600">artificial intelligence</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-5 max-w-lg text-base leading-relaxed text-slate-500">
              Empowering hospitals, healthcare providers, pharmaceutical companies, and
              medical innovators with AI-driven solutions that improve diagnosis, automate
              workflows, and enhance patient care.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton
                href="#healthcare-services"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-slate-800 select-none"
              >
                <span>Discuss Your Healthcare AI Project</span>
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 select-none"
              >
                <span>Contact Healthcare Team</span>
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
              <span className="text-xs font-medium text-slate-400">
                Trusted by hospitals, healthcare partners &amp; medical startups
              </span>
              <div className="flex items-center gap-6">
                {TRUSTED_LOGOS.map((brand) => (
                  <img
                    key={brand.name}
                    src={brand.logo}
                    alt={brand.name}
                    className="h-6 w-auto max-w-[90px] object-contain opacity-40 grayscale"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — clinical AI dashboard illustration */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative mx-auto w-full max-w-[600px]"
          >
            <img
              src={healthCareRightSide}
              alt="Healthcare AI dashboard showing patient vitals, an AI-analyzed scan, and diagnostic insights"
              className="w-full h-auto rounded-2xl border border-slate-200 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
