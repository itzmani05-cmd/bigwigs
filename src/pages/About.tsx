import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import WhyBigwigs from "@/components/about/WhyBigwigs";
import EventsGallery from "@/components/about/EventsGallery";
import Expertise from "@/components/about/Expertise";
import GlobalImpact from "@/components/about/GlobalImpact";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";

import AboutCTA from "@/components/about/AboutCTA";
import SEO from "@/components/seo/SEO";
import { getRouteMeta } from "@/lib/seo/routes";

export default function About() {
  const meta = getRouteMeta("/about");

  return (
    <main className="relative w-full overflow-x-hidden">
      <SEO title={meta.title} description={meta.description} canonical={meta.path} />
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MissionVision />
      <JourneyTimeline />
      <WhyBigwigs />
      <EventsGallery />
      <Expertise />
      <GlobalImpact />
      <CertificationsGrid />
      <AboutCTA />
    </main>
  );
}
