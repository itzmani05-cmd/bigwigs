import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import AboutSection from "@/components/home/AboutSection";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import GlobalDeliverySection from "@/components/home/GlobalDeliverySection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Bigwigs Technologies | Enterprise AI, Data & Software Engineering");

  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <DomainTicker />
      <AboutSection />
      <CoreServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <GlobalDeliverySection />
      <TestimonialsSection />
    </main>
  );
}
