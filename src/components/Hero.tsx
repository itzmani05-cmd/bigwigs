import { useEffect, useState } from "react";
import { ArrowRight, Users, ShieldCheck, Globe2, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroVisualAnimation from "@/components/hero/HeroVisualAnimation";
import appenLogo from "/data/trustedPartners/AppenLogo.png";
import imeritLogo from "/data/trustedPartners/ImeritLogo.jpeg";
import ivisionLogo from "/data/trustedPartners/IvisionLogo.png";
import bigwigsPartnerLogo from "/data/trustedPartners/Logo.jpeg";
import prudentLogo from "/data/trustedPartners/PrudentLogo.png";
import tictagLogo from "/data/trustedPartners/TictagLogo.png";
import wiseplLogo from "/data/trustedPartners/WiseplLogo.jpeg";
import u2dLogo from "/data/trustedPartners/u2d-logo.png";

interface PartnerLogo {
  src: string;
  name: string;
  /** max-height only — width is left to scale via object-contain, capped by a shared max-w safety net. */
  maxHClass: string;
}

// Each source file bakes in a different amount of transparent padding around
// its mark (e.g. Prudent/Tictag/ivision are ~45-60% empty canvas), so a single
// shared max-h would make those logos look much smaller than Appen/u2d, which
// are already tightly cropped. max-h is tuned per logo so the actual glyphs
// land at a consistent visual height instead of a consistent canvas height.
const partnerLogos: PartnerLogo[] = [
  { src: appenLogo, name: "Appen", maxHClass: "max-h-[16px] sm:max-h-[23px]" },
  { src: imeritLogo, name: "iMerit", maxHClass: "max-h-[17px] sm:max-h-[25px]" },
  { src: ivisionLogo, name: "ivision", maxHClass: "max-h-[36px] sm:max-h-[53px]" },
  { src: bigwigsPartnerLogo, name: "Partner", maxHClass: "max-h-[18px] sm:max-h-[26px]" },
  { src: prudentLogo, name: "Prudent Partners", maxHClass: "max-h-[30px] sm:max-h-[43px]" },
  { src: tictagLogo, name: "Tictag", maxHClass: "max-h-[30px] sm:max-h-[44px]" },
  { src: wiseplLogo, name: "WISEPL", maxHClass: "max-h-[19px] sm:max-h-[28px]" },
  { src: u2dLogo, name: "UP2DATEZ", maxHClass: "max-h-[15px] sm:max-h-[23px]" },
];

// Show a handful of logos at a time and rotate through the rest so the row
// stays compact instead of shrinking every logo to fit them all at once.
const LOGOS_PER_GROUP = 4;
const LOGO_ROTATION_MS = 2000;
const trustedPartnerLogoGroups = Array.from(
  { length: Math.ceil(partnerLogos.length / LOGOS_PER_GROUP) },
  (_, i) => partnerLogos.slice(i * LOGOS_PER_GROUP, i * LOGOS_PER_GROUP + LOGOS_PER_GROUP)
);

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
  const [logoGroupIndex, setLogoGroupIndex] = useState(0);

  useEffect(() => {
    if (trustedPartnerLogoGroups.length <= 1) return;
    const id = window.setInterval(() => {
      setLogoGroupIndex((i) => (i + 1) % trustedPartnerLogoGroups.length);
    }, LOGO_ROTATION_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-[1500px] 2xl:max-w-[1800px] px-4 pt-4 pb-2 sm:px-8 lg:px-10 xl:px-12 lg:pt-6 lg:pb-10">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-[3fr_2fr] md:gap-8 min-[1440px]:grid-cols-[0.95fr_1.05fr] min-[1440px]:gap-14 2xl:gap-16">
          <div className="flex flex-col items-start gap-3 text-left min-[1440px]:max-w-[620px] 2xl:max-w-[740px]">
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
              className="text-4xl font-extrabold leading-[1.01] tracking-[-0.03em] text-slate-900 sm:text-5xl lg:text-[66px]"
            >
              Building Intelligent <br/>Solutions for a 
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
                  href="/demo"
                  magnetic={false}
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_24px_-10px_rgba(11,23,66,0.55)] transition-colors duration-300 hover:bg-blue-600 select-none"
                >
                  <span>Talk to an Expert</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <MagneticButton
                  href="/services"
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
            className="relative mx-auto aspect-[3/2] w-full max-w-[620px] sm:aspect-[6/5] lg:max-w-none min-[1440px]:mx-0 min-[1440px]:max-w-[720px] min-[1440px]:justify-self-end 2xl:max-w-[860px]"
          >
            <HeroVisualAnimation />
          </motion.div>
        </div>
      </div>

      <div className="relative w-full border-t border-slate-100 bg-white">
        <div className="mx-auto grid max-w-[1500px] 2xl:max-w-[1800px] grid-cols-1 items-center gap-6 px-4 pb-4 pt-2 sm:grid-cols-[45%_55%] sm:gap-8 sm:px-8 sm:py-2 lg:gap-12 lg:px-10 xl:px-12">
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

          <div className="flex flex-col items-start gap-4 pr-2 pt-5 sm:items-end sm:gap-2 sm:pl-12 sm:pr-6 sm:pt-0 lg:pr-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900">
              Trusted by Global Enterprises
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={logoGroupIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-wrap items-center gap-x-1 gap-y-2 sm:justify-end"
              >
                {trustedPartnerLogoGroups[logoGroupIndex].map((logo) => (
                  <span
                    key={logo.src}
                    className="flex h-11 w-24 shrink-0 items-center justify-center rounded-lg sm:h-16 sm:w-32"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`h-auto w-auto max-w-[90px] object-contain sm:max-w-[130px] ${logo.maxHClass}`}
                    />
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
