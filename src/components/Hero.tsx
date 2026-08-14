import { ArrowRight, Users, ShieldCheck, Globe2, Star } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroVisualAnimation from "@/components/hero/HeroVisualAnimation";

const partnerLogoModules = import.meta.glob("/data/trustedPartners/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;
const trustedPartnerLogos = Object.values(partnerLogoModules);

const eyebrowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const descriptionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const buttonsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.28 },
  },
} as const;

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const illustrationVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, delay: 0.15, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const stats = [
  { icon: Users, value: "12+", label: "Years Experience" },
  { icon: ShieldCheck, value: "ISO 27001", label: "Certified" },
  { icon: Globe2, value: "Global", label: "Delivery" },
  { icon: Star, value: "99%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-[1360px] px-4 pt-4 pb-4 sm:px-8 lg:px-10 lg:pt-6 lg:pb-10">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-[3fr_2fr] md:gap-8">
          <div className="flex flex-col items-start gap-3 text-left">
            <motion.span
              variants={eyebrowVariants}
              initial="hidden"
              animate="visible"
              className="text-xs pl-1 font-bold  tracking-[0.1em] text-brand-blue-400"
            >
              AI. Data. Digital Engineering.
            </motion.span>

            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[72px]"
            >
              Building Intelligent Solutions for a 
              <br />
              <span className="text-brand-blue-600">Global Future</span>
            </motion.h1>

            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="max-w-[460px] text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              Partner with Bigwigs Technologies to unlock the power of your
              data, automate operations, and deliver measurable business
              outcomes at scale.
            </motion.p>

            <motion.div
              variants={buttonsVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <MagneticButton
                  href="#contact"
                  magnetic={false}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-10px_rgba(11,23,66,0.55)] transition-colors duration-300 hover:bg-blue-600 select-none"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <MagneticButton
                  href="#services"
                  magnetic={false}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#0b1742]/25 bg-white px-5 py-3 text-sm font-semibold text-[#0b1742] transition-colors duration-300 hover:border-[#0b1742]/50 hover:bg-slate-50 select-none"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={illustrationVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto aspect-[3/2] w-full max-w-[620px] sm:aspect-[6/5] lg:max-w-none"
          >
            <HeroVisualAnimation />
          </motion.div>
        </div>
      </div>

      <div className="relative w-full border-t border-slate-100 bg-white">
        <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-6 px-4 py-5 sm:grid-cols-[45%_55%] sm:gap-8 sm:px-7 sm:py-2 lg:gap-12 lg:px-8">
          <motion.div
            variants={statsVariants}
            initial="hidden"
            animate="visible"
            className="grid w-full grid-cols-2 gap-x-2 gap-y-4 sm:gap-x-3 sm:gap-y-5 lg:grid-cols-4 lg:gap-x-3"
          >
           {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-1">
                <Icon
                  size={20}
                  className="text-brand-blue-600"
                  strokeWidth={1.75}
                />
                <span className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                  {value}
                </span>
              </div>

              <span className="text-xs leading-snug text-slate-500">
                {label}
              </span>
            </div>
          ))}
          </motion.div>

          <div className="flex flex-col items-start gap-3 border-t border-slate-100 pt-5 sm:items-end sm:gap-2 sm:border-l sm:border-t-0 sm:pl-12 sm:pr-6 sm:pt-0">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Trusted by Global Enterprises
            </span>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:justify-end">
              {trustedPartnerLogos.map((logo) => (
                <img
                  key={logo}
                  src={logo}
                  alt="Bigwigs Technologies partner logo"
                  className="h-6 w-auto max-w-[100px] object-contain sm:h-8 sm:max-w-[120px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
