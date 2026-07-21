import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
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
    <main className="w-full overflow-x-hidden">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <JourneyTimeline />
      <WhyBigwigs />
      <Expertise />
      <GlobalImpact />
      <Process />
      <AboutCTA />
    </main>
  );
}
