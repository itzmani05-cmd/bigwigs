import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import QualityHero from "@/components/servicePage/QualityHero";
import IconGridSection from "@/components/servicePage/IconGridSection";
import ProcessTimeline from "@/components/servicePage/ProcessTimeline";
import QualitySecurityPanels from "@/components/servicePage/QualitySecurityPanels";
import QualityDashboardPreview from "@/components/servicePage/QualityDashboardPreview";
import ClosingCta from "@/components/servicePage/ClosingCta";
import FullScreenSection from "@/components/servicePage/FullScreenSection";
import Container from "@/components/ui/Container";
import {
  qualityHero,
  qualityDifferentiators,
  qualityWorkflowSteps,
  qualityLayers,
  qualityMetrics,
  qualityAcrossServices,
  qualityHealthcare,
  qualityBenchmarks,
  qualityWhyItMatters,
  qualityBottomCta,
} from "@/components/servicePage/content/quality";
import SEO from "@/components/seo/SEO";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Quality() {
  const meta = getRouteMeta("/quality");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Quality Assurance" }]} />

      <QualityHero {...qualityHero} />

      <FullScreenSection>
        <IconGridSection
          eyebrow={qualityDifferentiators.eyebrow}
          heading={qualityDifferentiators.heading}
          headerAlign="center"
          align="center"
          items={qualityDifferentiators.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          titleSize="md"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="Bigwigs Quality Workflow"
          heading="From Raw Data to Reliable AI Training Data"
          steps={qualityWorkflowSteps}
          desktopColumnsClassName="grid-cols-3 xl:grid-cols-6"
        />
      </FullScreenSection>

      <FullScreenSection>
        <ProcessTimeline
          eyebrow="Triple-Layer Quality Assurance"
          heading="Three Layers. One Quality Standard."
          steps={qualityLayers}
          desktopColumnsClassName="grid-cols-3"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={qualityMetrics.eyebrow}
          heading={qualityMetrics.heading}
          headerAlign="center"
          align="center"
          items={qualityMetrics.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          titleSize="md"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={qualityAcrossServices.eyebrow}
          heading={qualityAcrossServices.heading}
          headerAlign="center"
          items={qualityAcrossServices.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          titleSize="md"
        />
      </FullScreenSection>

      <FullScreenSection>
        <IconGridSection
          eyebrow={qualityHealthcare.eyebrow}
          heading={qualityHealthcare.heading}
          description={qualityHealthcare.description}
          headerAlign="center"
          align="center"
          items={qualityHealthcare.items}
          columnsClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        />
      </FullScreenSection>

      <QualitySecurityPanels />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-orange-50/70 via-orange-50/25 to-white py-16 lg:py-20">
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="relative mx-auto max-w-2xl overflow-hidden rounded-[28px] border border-slate-200 bg-white px-8 py-12 text-center shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)] sm:px-14 sm:py-16"
          >
            <span aria-hidden className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-brand-blue-500 via-brand-blue-300 to-transparent" />
            <span aria-hidden className="absolute right-0 top-0 h-full w-1.5 bg-gradient-to-b from-orange-400 via-orange-200 to-transparent" />

            <Quote aria-hidden size={36} strokeWidth={1.5} className="mx-auto text-brand-blue-200" />

            <div className="mt-4 flex items-center justify-center gap-3">
              <span aria-hidden className="h-px w-8 bg-orange-500/50" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                {qualityBenchmarks.eyebrow}
              </span>
              <span aria-hidden className="h-px w-8 bg-orange-500/50" />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              {qualityBenchmarks.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">{qualityBenchmarks.body}</p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-slate-900 sm:text-lg">
              {qualityBenchmarks.closingLine}
            </p>
          </motion.div>
        </Container>
      </section>

      <QualityDashboardPreview />

      <FullScreenSection>
        <IconGridSection
          eyebrow={qualityWhyItMatters.eyebrow}
          heading={qualityWhyItMatters.heading}
          headerAlign="center"
          align="center"
          items={qualityWhyItMatters.items}
          columnsClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          titleSize="md"
        />
      </FullScreenSection>

      <ClosingCta
        heading={qualityBottomCta.heading}
        description={qualityBottomCta.description}
        primary={qualityBottomCta.primaryAction}
        secondary={qualityBottomCta.secondaryAction}
      />
    </main>
  );
}
