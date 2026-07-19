import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import AboutSection from "@/components/home/AboutSection";
import CoreServicesSection from "@/components/home/CoreServicesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <DomainTicker />
      <AboutSection />
      <CoreServicesSection />
      <WhyChooseSection />
      <IndustriesSection />
      <TestimonialsSection />
    </main>
  );
}
