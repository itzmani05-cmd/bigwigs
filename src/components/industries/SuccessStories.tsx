import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { successStories } from "./successStoriesData";

export default function SuccessStories() {
  return (
    <section className="relative w-full overflow-hidden py-10 lg:py-12">
      <Container className="relative z-10">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue-600 sm:text-sm">
          Success Stories
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Real Business Impact
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {successStories.map((story, i) => (
            <motion.div
              key={story.industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.215, 0.61, 0.355, 1] }}
              className="glass-card group flex flex-col overflow-hidden rounded-[28px]"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <img
                  src={story.image}
                  alt={story.industry}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#03132f]/70 via-transparent to-transparent"
                />
                <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
                  {story.industry}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="text-4xl font-extrabold tracking-tight text-brand-blue-500">{story.stat}</span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{story.description}</p>
                <span className="group/link mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700">
                  Read Case Study
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
