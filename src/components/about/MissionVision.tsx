import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Container from "@/components/ui/Container";

export default function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-brand-blue-500/10 bg-gradient-to-br from-brand-blue-50/70 via-white to-white p-8 sm:p-10"
          >
            <svg
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M0 140 C 50 100, 90 180, 140 130 S 220 60, 260 110" stroke="#2563EB" strokeWidth="1.5" />
              <path d="M0 170 C 50 130, 90 210, 140 160 S 220 90, 260 140" stroke="#2563EB" strokeWidth="1" opacity="0.6" />
            </svg>

            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-blue-500 shadow-[0_10px_30px_-12px_rgba(37,99,235,0.35)]">
              <Target size={28} strokeWidth={1.75} />
            </span>
            <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
              Our Mission
            </h3>
            <p className="relative mt-3 max-w-md text-base leading-relaxed text-slate-500">
              Empowering organizations with reliable AI data, intelligent software,
              and innovative digital solutions that accelerate business
              transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-orange-500/10 bg-gradient-to-br from-orange-50/70 via-white to-white p-8 sm:p-10"
          >
            <svg
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 opacity-30"
              viewBox="0 0 200 200"
              fill="none"
            >
              <path d="M0 140 C 50 100, 90 180, 140 130 S 220 60, 260 110" stroke="#F97316" strokeWidth="1.5" />
              <path d="M0 170 C 50 130, 90 210, 140 160 S 220 90, 260 140" stroke="#F97316" strokeWidth="1" opacity="0.6" />
            </svg>

            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-orange-500 shadow-[0_10px_30px_-12px_rgba(249,115,22,0.35)]">
              <Eye size={28} strokeWidth={1.75} />
            </span>
            <h3 className="relative mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
              Our Vision
            </h3>
            <p className="relative mt-3 max-w-md text-base leading-relaxed text-slate-500">
              To become a trusted global technology partner delivering
              world-class AI solutions and enabling the future of intelligent
              automation.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
