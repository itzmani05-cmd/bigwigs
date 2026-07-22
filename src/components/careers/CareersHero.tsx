import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import careersRightImage from "@/assests/aboutRightSide.png";
import trustedPic1 from "@/assests/trusted/pic1.jpg";
import trustedPic2 from "@/assests/trusted/pic2.jpg";
import trustedPic3 from "@/assests/trusted/pic3.jpg";
import trustedPic4 from "@/assests/trusted/pic4.jpg";

const AVATARS = [trustedPic1, trustedPic2, trustedPic3, trustedPic4];

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
        className="pointer-events-none absolute -bottom-32 -right-20 h-[24rem] w-[24rem] rounded-full bg-orange-400/[0.08] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                Careers
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              Build The Future
              <br />
              Of{" "}
              <span className="bg-gradient-to-r from-brand-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              Join Bigwigs Technologies and work with engineers, AI specialists,
              designers, and innovators building intelligent products for global
              enterprises.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#open-positions"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>View Open Positions</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#why-join"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
              >
                <span>Join Our Team</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((avatar, i) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt="Bigwigs Technologies employee"
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    style={{ zIndex: AVATARS.length - i }}
                  />
                ))}
              </div>
              <p className="text-sm leading-snug text-slate-500">
                Trusted by passionate innovators
                <br />
                worldwide.
              </p>
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
              aria-hidden
              className="pointer-events-none absolute -inset-16 hidden rounded-full border border-dashed border-brand-blue-200/30 sm:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -left-3 top-[20%] h-2 w-2 rounded-full bg-brand-blue-400 shadow-[0_0_10px_3px_rgba(37,99,235,0.5)]"
              animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden
              className="pointer-events-none absolute -right-4 bottom-[24%] h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_10px_3px_rgba(249,115,22,0.5)]"
              animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
              className="relative aspect-[3/2] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
            >
              <img
                src={careersRightImage}
                alt="Bigwigs Technologies AI workspace with holographic data visualization"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-105"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/60 via-transparent to-[#03132f]/20"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
