import { Car, HeartPulse, MapPin, type LucideIcon } from "lucide-react";
import avatarAriana from "@/assests/trusted/pic5.jpg";
import avatarSarah from "@/assests/trusted/pic3.jpg";
import avatarMarcus from "@/assests/trusted/pic6.jpg";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  companyIcon: LucideIcon;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Bigwigs Technologies became a seamless extension of our team. Their responsiveness, quality controls, and structured delivery approach helped us meet our project goals on schedule.",
    name: "Ariana Cole",
    position: "VP of Operations",
    company: "Meridian Geospatial",
    companyIcon: MapPin,
    avatar: avatarAriana,
  },
  {
    id: "t-2",
    quote:
      "Their ability to scale quickly while maintaining consistent quality made them a valuable long-term partner for our AI data operations.",
    name: "Sarah Lee",
    position: "Head of AI Operations",
    company: "AutoDrive Inc.",
    companyIcon: Car,
    avatar: avatarSarah,
  },
  {
    id: "t-3",
    quote:
     "The team's professionalism and attention to detail significantly improved our document accessibility initiative and overall content quality.",
    name: "Dr. Marcus Webb",
    position: "Founder",
    company: "Clarity Diagnostics",
    companyIcon: HeartPulse,
    avatar: avatarMarcus,
  },
];
