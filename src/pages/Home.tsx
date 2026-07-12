import Hero from "@/components/Hero";
import DomainTicker from "@/components/home/DomainTicker";
import AboutVideo from "@/components/home/AboutVideo";
import Services from "@/components/home/Services";
import MissionStatement from "@/components/home/MissionStatement";
import TrustedBrands from "@/components/trusted/TrustedBrands";
import CeoMessage from "@/components/home/CeoMessage";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <DomainTicker />
      <AboutVideo />
      <Services />
      <MissionStatement />
      <TrustedBrands />
      <CeoMessage />
      <ReviewsSection />
    </main>
  );
}
