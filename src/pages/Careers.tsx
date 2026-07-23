import CareersBackground from "@/components/careers/CareersBackground";
import SectionDivider from "@/components/careers/SectionDivider";
import CareersHero from "@/components/careers/CareersHero";
import LifeAtBigwigs from "@/components/careers/LifeAtBigwigs";
import HiringProcess from "@/components/careers/HiringProcess";
import OpenPositions from "@/components/careers/OpenPositions";
import Testimonials from "@/components/careers/Testimonials";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";

export default function Careers() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <CareersBackground />
      <CareersHero />
      <SectionDivider />
      <LifeAtBigwigs />
      <SectionDivider />
      <HiringProcess />
      <SectionDivider />
      <OpenPositions />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
