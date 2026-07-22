import blogImage from "@/assests/about/blog.jpg";
import eventsImage from "@/assests/about/events.jpg";
import ourTeamImage from "@/assests/about/ourteams.jpg";
import certificationImage from "@/assests/about/certification.jpg";
import aiOpsImage from "@/assests/aboutRightSide.png";
import locationImage from "@/assests/about/location.jpg";

export interface CultureMoment {
  label: string;
  image: string;
}

export const cultureMoments: CultureMoment[] = [
  { label: "Hackathons", image: blogImage },
  { label: "Team Meetings", image: eventsImage },
  { label: "Celebrations", image: ourTeamImage },
  { label: "Training Sessions", image: certificationImage },
  { label: "AI Lab", image: aiOpsImage },
  { label: "Office Events", image: locationImage },
];
