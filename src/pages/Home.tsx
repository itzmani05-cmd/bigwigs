import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import AboutSection from "@/components/home/AboutSection";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import GlobalDeliverySection from "@/components/home/GlobalDeliverySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GetInTouchSection from "@/components/home/GetInTouchSection";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Home() {
  const meta = getRouteMeta("/");

  return (
    <main className="w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <Hero />
      <DomainTicker />
      <AboutSection />
      <CoreServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <GlobalDeliverySection />
      <TestimonialsSection />
      <GetInTouchSection />
    </main>
  );
}
