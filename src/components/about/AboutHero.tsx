import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import aboutRightImage from "@/assests/aboutRightSide.png";
import trustedPic1 from "@/assests/trusted/pic1.jpg";
import trustedPic2 from "@/assests/trusted/pic2.jpg";
import trustedPic3 from "@/assests/trusted/pic3.jpg";

const AVATARS = [trustedPic1, trustedPic2, trustedPic3];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-10 pb-10 lg:pt-10 lg:pb-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/60 via-white to-white"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-blue-500/10 blur-[130px]"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[45%_55%] lg:gap-10">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                About Bigwigs Technologies
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
            >
              Building Intelligent Data
              <br />
              That Powers{" "}
              <span className="bg-gradient-to-r from-brand-blue-500 to-cyan-500 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-base leading-relaxed text-slate-500 sm:text-lg">
              We help enterprises build intelligent AI products through high-quality
              data annotation, Generative AI solutions, software engineering, and
              healthcare AI technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#core-services"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
              >
                <span>Our Services</span>
                <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-500 hover:text-brand-blue-600 select-none"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </MagneticButton>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-9 flex items-center gap-3">
              <div className="flex -space-x-3">
                {AVATARS.map((avatar, i) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt="Client from a global enterprise trusted by Bigwigs Technologies"
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    style={{ zIndex: AVATARS.length - i }}
                  />
                ))}
              </div>
              <p className="text-sm leading-snug text-slate-500">
                Trusted by global enterprises
                <br />
                to build the future of AI.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative pr-10 aspect-[4/3] overflow-hidden rounded-[28px] border border-white/10 bg-[#03132f] shadow-[0_40px_90px_-30px_rgba(7,27,70,0.5)]"
          >
            <img
              src={aboutRightImage}
              alt="Bigwigs Technologies AI operations center with holographic data visualization"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/60 via-transparent to-[#03132f]/20"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
