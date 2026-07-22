import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/ui/CTASection";
import { industries, type Industry } from "./industries";

const PARTICLES = [
  { top: "14%", left: "6%", duration: 9, delay: 0 },
  { top: "28%", left: "94%", duration: 11, delay: 1.5 },
  { top: "62%", left: "3%", duration: 10, delay: 0.8 },
  { top: "80%", left: "96%", duration: 12, delay: 2.2 },
];

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const Icon = industry.icon;
  const [imageOk, setImageOk] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative isolate flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/70 bg-white shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.22)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px z-20 rounded-[24px] opacity-0 shadow-[0_0_0_1px_rgba(37,99,235,0.25),0_0_40px_4px_rgba(37,99,235,0.15)] transition-opacity duration-300 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] bg-white"
      >
        {/* Image */}
        <div className="absolute inset-y-0 right-0 w-[70%] overflow-hidden">
          {imageOk && (
            <img
              src={industry.image}
              alt=""
              onError={() => setImageOk(false)}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          )}

          {/* Left Fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,.9) 20%, rgba(255,255,255,.45) 45%, rgba(255,255,255,0) 100%)",
            }}
          />

          {/* Bottom Fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,.8) 18%, rgba(255,255,255,.25) 45%, rgba(255,255,255,0) 70%)",
            }}
          />

          {/* Top Soft Glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,.45) 0%, rgba(255,255,255,0) 25%)",
            }}
          />

          {/* Radial Glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at bottom left, rgba(255,255,255,1) 0%, rgba(255,255,255,.8) 30%, rgba(255,255,255,0) 70%)",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 flex h-full flex-col p-5">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-blue-500/20 bg-brand-blue-50 text-brand-blue-500 shadow-sm">
          <Icon size={24} strokeWidth={1.75} />
        </span>
        <h3 className="mt-5 text-lg font-bold text-slate-900">{industry.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
          {industry.description}
        </p>
        <a
          href="#contact"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue-600 transition-colors duration-300 hover:text-brand-blue-700"
        >
          Learn More
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative scroll-mt-24 overflow-hidden bg-white py-15 lg:py-18"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-blue-50/50 via-white to-white"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* dotted world map */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[44rem] w-[60rem] -translate-x-1/2 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#2563EB 1.4px, transparent 1.4px)",
          backgroundSize: "15px 15px",
          WebkitMaskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 75%)",
          maskImage: "radial-gradient(ellipse 60% 55% at 50% 0%, black 40%, transparent 75%)",
        }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-brand-blue-500/10 blur-[120px]"
        animate={{ opacity: [0.5, 0.9, 0.5], y: [0, -16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-orange-400/[0.06] blur-[110px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-brand-blue-500/40"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -14, 0], opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
        />
      ))}

      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase sm:text-sm">
              Industries We Serve
            </span>
            <span className="h-px w-8 bg-orange-500/50" />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Powering AI Across <span className="text-brand-blue-500">Every Industry</span>
          </h2>
         
          <p className="mt-6 text-base leading-relaxed text-slate-500 sm:text-lg">
            Delivering high-quality AI data solutions that accelerate innovation across
            healthcare, automotive, retail, finance, manufacturing, agriculture, and
            beyond.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </div>

        <CTASection
          withContainer={false}
          className="mt-16"
          icon={Phone}
          heading="Let’s Build Smarter AI Solutions Together"
          description="Talk to our AI experts and discover how Bigwigs Technologies can accelerate your business with enterprise-grade AI data services."
          primaryAction={{ label: "Contact Us", href: "#contact" }}
          secondaryAction={{ label: "Get a Quote", href: "#contact" }}
        />
      </Container>
    </section>
  );
}
