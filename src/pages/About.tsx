import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import WhyBigwigs from "@/components/about/WhyBigwigs";
import Expertise from "@/components/about/Expertise";
import GlobalImpact from "@/components/about/GlobalImpact";
import CertificationsGrid from "@/components/certifications/CertificationsGrid";

import AboutCTA from "@/components/about/AboutCTA";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function About() {
  useDocumentTitle("About Us | Bigwigs Technologies");

  return (
    <main className="relative w-full overflow-x-hidden">
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MissionVision />
      <JourneyTimeline />
      <WhyBigwigs />
      <Expertise />
      <GlobalImpact />
      <CertificationsGrid />
      <AboutCTA />
    </main>
  );
}
