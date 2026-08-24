import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/scroll";

export default function OurStory() {
  return (
    <section id="our-story" className="relative w-full scroll-mt-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-orange-50/25 to-white py-10 lg:py-12">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-500/[0.07] blur-[120px]"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative z-10">
        <ScrollReveal
          direction="up"
          distance={30}
          scale
          duration={0.7}
          amount={0.4}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[28px] border border-slate-200 bg-white px-8 py-12 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:px-14 sm:py-16"
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-blue-500 via-brand-blue-300 to-transparent"
          />
          <span
            aria-hidden
            className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-orange-400 via-orange-200 to-transparent"
          />

          <Quote aria-hidden size={36} strokeWidth={1.5} className="mx-auto text-brand-blue-200" />

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Story
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
            Founded with a vision to make advanced technology accessible and
            impactful, Bigwigs Technologies has grown into a trusted partner
            for organizations seeking reliable AI and software solutions.
            From supporting machine learning projects through data
            annotation to developing enterprise software and Generative AI
            applications, our journey has been guided by continuous
            innovation, quality, and customer success.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
            Today, we serve clients across multiple industries, helping them
            solve complex business challenges through technology.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
