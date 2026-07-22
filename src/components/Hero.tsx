import { ArrowRight, Image, Box, Eye, MessagesSquare, Users, ListChecks, Globe2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import heroIllustration from "@/assests/bgHero.png";
import googleLogo from "@/assests/google.png";
import youtubeLogo from "@/assests/youtube.png";

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

const featuresVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] },
  },
} as const;

const buttonsVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
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

const serviceFeatures = [
  { icon: Image, label: "AI Data Annotation" },
  { icon: Box, label: "LiDAR & 3D Annotation" },
  { icon: Eye, label: "Computer Vision" },
  { icon: MessagesSquare, label: "NLP & Data Processing" },
];

const trustedLogos = [
  { name: "Google", logo: googleLogo },
  { name: "YouTube", logo: youtubeLogo },
  { name: "Google", logo: googleLogo },
  { name: "YouTube", logo: youtubeLogo },
  { name: "Google", logo: googleLogo },
];

const stats = [
  { icon: Users, value: "75+", label: "Expert Team" },
  { icon: ListChecks, value: "10M+", label: "Tasks Completed" },
  { icon: Globe2, value: "50+", label: "Global Clients" },
  { icon: ShieldCheck, value: "99.5%", label: "Quality Accuracy" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-[#03132f]">
      <div className="relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[460px] overflow-hidden">
        <div
          style={{ backgroundImage: `url(${heroIllustration})` }}
          className="absolute inset-0 bg-cover bg-center lg:bg-[position:68%_center]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#03132f] via-[#03132f]/85 to-[#03132f]/25 lg:via-[#03132f]/70 lg:to-[#03132f]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03132f]/90 via-transparent to-[#03132f]/40" />

        <div className="relative z-10 mx-auto flex min-h-[480px] sm:min-h-[520px] lg:min-h-[450px] max-w-[1360px] items-center px-6 pt-20 pb-6 sm:px-10 lg:px-10 lg:py-0">
          <div className="flex w-full flex-col items-start gap-3 pt-10 text-left lg:w-[45%] lg:pr-6">
            <motion.span
              variants={eyebrowVariants}
              initial="hidden"
              animate="visible"
              className="text-[10px] sm:text-base font-semibold uppercase tracking-[0.15em] text-orange-400"
            >
              Transforming Data Into
            </motion.span>

            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[55px] font-extrabold uppercase tracking-tight leading-[1.05] text-white"
            >
              Intelligent
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </motion.h1>

            <span aria-hidden className="h-1 w-16 rounded-full bg-orange-500" />

            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="max-w-[450px] text-small sm:text-medium leading-relaxed text-slate-200"
            >
              High-quality training data that powers the world&apos;s AI and
              Machine Learning innovations.
            </motion.p>

            <motion.div
              variants={featuresVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 gap-x-6 gap-y-3 mt-2 lg:mt-4 lg:flex lg:w-fit lg:max-w-full lg:flex-nowrap lg:items-center lg:gap-0"
            >
              {serviceFeatures.map(({ icon: Icon, label }, i) => (
                <div key={label} className="flex items-center lg:shrink-0">
                  {i !== 0 && (
                    <span
                      aria-hidden
                      className="hidden h-6 w-px shrink-0 bg-white/15 lg:mx-4 lg:block"
                    />
                  )}
                  <div className="flex items-center gap-2">
                    <Icon size={24} className="shrink-0 text-[#7f9bba]" strokeWidth={1.5} />
                    <span className="text-xs leading-[1.25] font-normal text-[#d8e0ea] lg:text-[13px]">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={buttonsVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <MagneticButton
                  href="#services"
                  className="flex w-full sm:w-auto min-w-[150px] items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_15px_-8px_rgba(249,115,22,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 select-none"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
              <motion.div variants={buttonVariants} className="w-full sm:w-auto">
                <MagneticButton
                  href="#contact"
                  className="flex w-full sm:w-auto min-w-[150px] items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/10 select-none"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative w-full bg-white">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-4 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-3">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] pt-4 text-slate-700">
              Trusted by Innovators
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 lg:justify-start">
              {trustedLogos.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto max-w-[150px] object-contain opacity-50 grayscale transition-opacity duration-300 hover:opacity-90"
                />
              ))}
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-slate-200 lg:w-auto">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center px-2 text-center sm:px-6">
                 <div key={label} className="flex flex-row items-center px-5 text-center sm:px-6">
                  <Icon size={18} className="text-orange-500" strokeWidth={1.75} />
                  <span className="text-base sm:text-xl pl-1 font-extrabold tracking-tight text-[#03132f]">
                    {value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
