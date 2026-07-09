import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import BrandSection from "@/components/brand/BrandSection";
import ServiceStack from "@/components/servicestack/ServiceStack";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <DomainTicker />
      <BrandSection />
      <ServiceStack />
      <ReviewsSection />
    </>
  );
}
