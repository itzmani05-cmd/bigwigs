import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ourTeamImage from "@/assests/about/ourteams.jpg";

export default function WhoWeAre() {
  return (
    <section className="relative w-full overflow-hidden py-14 lg:py-20">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
          className="glass-card grid grid-cols-1 overflow-hidden rounded-[28px] lg:grid-cols-2"
        >
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-[380px]">
            <img
              src={ourTeamImage}
              alt="The Bigwigs Technologies team collaborating"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center bg-white/80 p-8 backdrop-blur-sm sm:p-12 lg:p-14">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
                Who We Are
              </span>
              <span aria-hidden className="h-px w-8 bg-brand-blue-500/40" />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
              Bigwigs Technologies is a technology-driven company delivering AI Data
              Services, Generative AI solutions, enterprise software development,
              healthcare AI, and multilingual content services. We partner with global
              organizations to transform raw data into intelligent business solutions
              through innovation, precision, and scalable delivery.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
