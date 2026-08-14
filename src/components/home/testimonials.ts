import { Building2, Briefcase, Globe2, Tag, Landmark, type LucideIcon } from "lucide-react";
import avatarRamesh from "@/assests/trusted/pic1.jpg";
import avatarAnkitha from "@/assests/trusted/pic2.jpg";
import avatarNina from "@/assests/trusted/pic4.jpg";
import avatarWayney from "@/assests/trusted/pic7.jpg";
import avatarShahjahan from "@/assests/trusted/pic5.jpg";

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
      "Great service that's on time agreed upon schedule. The communications staff and the service technicians are always willing to work around the customer's schedule. Hats off to them!",
    name: "Ramesh",
    position: "Project Manager",
    company: "Letsify Sigma4Solutions",
    companyIcon: Building2,
    avatar: avatarRamesh,
  },
  {
    id: "t-2",
    quote:
      "We were very pleased with the quality and timeliness of the services you provided. Many thanks for that. It was great to work with the BigWigs Team and we will certainly come back to you in the future if we need annotation services.",
    name: "Ankitha Prasad",
    position: "Project Head",
    company: "GTS",
    companyIcon: Briefcase,
    avatar: avatarAnkitha,
  },
  
  {
    id: "t-3",
    quote:
      "We have had a positive experience working with Bigwigs Technologies. Their team is responsive, adaptable, and committed to maintaining quality throughout project execution. Their ability to understand requirements and deliver consistently has made them a valuable service partner.",
    name: "Wayney",
    position: "Project Manager",
    company: "TicTag",
    companyIcon: Tag,
    avatar: avatarWayney,
  },
  {
    id: "t-4",
    quote:
      "I have noticed that you and your team always work late for our project and sometimes even work during weekends or holiday. Thank you very much for your continued support for our project. It is appreciated because of your support and help that our project develops so quickly. In the future, let us work together to create a better tomorrow with higher quality, faster delivery, better management, and stronger cooperation!",
    name: "Nina",
    position: "Vendor Manager",
    company: "Appen China",
    companyIcon: Globe2,
    avatar: avatarNina,
  },
  {
    id: "t-5",
    quote:
      "Bigwigs Technologies has been a very reliable partner for us. Their communication is always clear, they understand our requirements well, and they consistently deliver quality work on time. We've had a great experience working with their team and are happy to recommend them.",
    name: "Shahjahan",
    position: "CEO",
    company: "WisePL Private Limited",
    companyIcon: Landmark,
    avatar: avatarShahjahan,
  },
];
