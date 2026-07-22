import AboutBackground from "@/components/about/AboutBackground";
import SectionDivider from "@/components/about/SectionDivider";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import WhyBigwigs from "@/components/about/WhyBigwigs";
import Expertise from "@/components/about/Expertise";
import GlobalImpact from "@/components/about/GlobalImpact";
import Process from "@/components/about/Process";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <AboutBackground />
      <AboutHero />
      <SectionDivider />
      <WhoWeAre />
      <SectionDivider />
      <OurStory />
      <SectionDivider />
      <MissionVision />
      <SectionDivider />
      <CoreValues />
      <SectionDivider />
      <JourneyTimeline />
      <SectionDivider />
      <WhyBigwigs />
      <SectionDivider />
      <Expertise />
      <SectionDivider />
      <GlobalImpact />
      <SectionDivider />
      <Process />
      <AboutCTA />
    </main>
  );
}
