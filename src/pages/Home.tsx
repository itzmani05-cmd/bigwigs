import { Suspense, lazy } from "react";
import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import AboutSection from "@/components/home/AboutSection";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";
import { useDeferredMount } from "@/hooks/useDeferredMount";

// Below-the-fold sections: code-split out of the main bundle and only
// imported once useDeferredMount flips (a beat after first paint), so they
// don't add parse/execute weight or compete with the hero's LCP image during
// the critical initial render.
const CoreServicesSection = lazy(() => import("@/components/home/CoreServicesSection"));
const WhyChooseSection = lazy(() => import("@/components/home/WhyChooseSection"));
const IndustriesSection = lazy(() => import("@/components/home/IndustriesSection"));
const GlobalDeliverySection = lazy(() => import("@/components/home/GlobalDeliverySection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const GetInTouchSection = lazy(() => import("@/components/home/GetInTouchSection"));

export default function Home() {
  const meta = getRouteMeta("/");
  // Hero/DomainTicker/AboutSection cover the initial viewport and must commit
  // immediately. Everything below is mounted (and only then fetched) a beat
  // later so it doesn't compete with the LCP image for the first render pass.
  const deferredReady = useDeferredMount();

  return (
    <main className="w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <Hero />
      <DomainTicker />
      <AboutSection />
      {deferredReady && (
        <Suspense fallback={null}>
          <CoreServicesSection />
          <WhyChooseSection />
          <IndustriesSection />
          <GlobalDeliverySection />
          <TestimonialsSection />
          <GetInTouchSection />
        </Suspense>
      )}
    </main>
  );
}
