import CareersBackground from "@/components/careers/CareersBackground";
import SectionDivider from "@/components/careers/SectionDivider";
import CareersHero from "@/components/careers/CareersHero";
import WhyJoin from "@/components/careers/WhyJoin";
import LifeAtBigwigs from "@/components/careers/LifeAtBigwigs";
import Benefits from "@/components/careers/Benefits";
import HiringProcess from "@/components/careers/HiringProcess";
import OpenPositions from "@/components/careers/OpenPositions";
import Testimonials from "@/components/careers/Testimonials";
import WorkCulture from "@/components/careers/WorkCulture";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";

export default function Careers() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <CareersBackground />
      <CareersHero />
      <SectionDivider />
      <WhyJoin />
      <SectionDivider />
      <LifeAtBigwigs />
      <SectionDivider />
      <Benefits />
      <SectionDivider />
      <HiringProcess />
      <SectionDivider />
      <OpenPositions />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <WorkCulture />
      <SectionDivider />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
