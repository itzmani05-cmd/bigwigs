import SectionDivider from "@/components/careers/SectionDivider";
import CareersHero from "@/components/careers/CareersHero";
import LifeAtBigwigs from "@/components/careers/LifeAtBigwigs";
import HiringProcess from "@/components/careers/HiringProcess";
import Testimonials from "@/components/careers/Testimonials";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function Careers() {
  useDocumentTitle("Careers | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <CareersHero />
      <LifeAtBigwigs />
      <HiringProcess />
      <Testimonials />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
