import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MagneticButton from "@/components/ui/MagneticButton";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/seo/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
} as const;

interface CtaAction {
  label: string;
  href: string;
}

interface ServiceDetailHeroProps {
  eyebrow: string;
  heading: ReactNode;
  description: string;
  primaryCta: CtaAction;
  secondaryCta: CtaAction;
  /** Adds BreadcrumbList + Service structured data for this page. Omit for pages
   *  that aren't a listed service or industry (there currently are none). */
  category?: "Services" | "Industries";
}

export default function ServiceDetailHero({
  eyebrow,
  heading,
  description,
  primaryCta,
  secondaryCta,
  category,
}: ServiceDetailHeroProps) {
  const { pathname } = useLocation();
  const categoryPath = category === "Services" ? "/services" : category === "Industries" ? "/industries" : undefined;

  return (
    <section className="relative flex min-h-[calc(100vh-4.75rem)] w-full flex-col items-center justify-center overflow-hidden py-10 lg:min-h-[calc(100vh-5.25rem)] lg:py-14">
      {category && categoryPath && (
        <>
          <BreadcrumbJsonLd
            items={[{ name: "Home", path: "/" }, { name: category, path: categoryPath }, { name: eyebrow }]}
          />
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: eyebrow,
                description,
                url: `${SITE_URL}${pathname}`,
                provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
              })}
            </script>
          </Helmet>
        </>
      )}
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

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
              {eyebrow}
            </span>
            <span aria-hidden className="h-px w-8 bg-orange-500/50" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-3 text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[44px] xl:text-5xl"
          >
            {heading}
          </motion.h1>

          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={primaryCta.href}
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-600 select-none"
            >
              <span>{primaryCta.label}</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              href={secondaryCta.href}
              magnetic={false}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue-700 hover:text-brand-blue-600 select-none"
            >
              <span>{secondaryCta.label}</span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
