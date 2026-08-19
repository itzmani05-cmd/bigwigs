import SectionDivider from "@/components/careers/SectionDivider";
import CareersHero from "@/components/careers/CareersHero";
import LifeAtBigwigs from "@/components/careers/LifeAtBigwigs";
import HiringProcess from "@/components/careers/HiringProcess";
import Testimonials from "@/components/careers/Testimonials";
import CareersFAQ from "@/components/careers/CareersFAQ";
import CareersCTA from "@/components/careers/CareersCTA";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function Careers() {
  const meta = getRouteMeta("/careers");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <CareersHero />
      <LifeAtBigwigs />
      <HiringProcess />
      <Testimonials />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
