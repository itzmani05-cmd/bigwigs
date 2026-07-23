import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { CaseStudy } from "../caseStudiesData";

export default function CaseStudyGallery({ study }: { study: CaseStudy }) {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Gallery
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Behind The Project
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {study.gallery.map((image, i) => (
            <motion.div
              key={`${study.slug}-gallery-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
              className={`group relative overflow-hidden rounded-2xl ${
                i === 0 ? "col-span-2 aspect-[16/9] sm:col-span-2" : "aspect-square"
              }`}
            >
              <img
                src={image}
                alt={`${study.title} gallery ${i + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[#03132f]/0 transition-colors duration-300 group-hover:bg-[#03132f]/10"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
