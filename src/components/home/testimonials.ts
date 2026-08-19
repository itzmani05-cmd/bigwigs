import { Building2, Briefcase, Globe2, Tag, Landmark, type LucideIcon } from "lucide-react";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  position: string;
  company: string;
  companyIcon: LucideIcon;
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
  },
  {
    id: "t-2",
    quote:
      "We were very pleased with the quality and timeliness of the services you provided. Many thanks for that. It was great to work with the BigWigs Team and we will certainly come back to you in the future if we need annotation services.",
    name: "Ankitha Prasad",
    position: "Project Head",
    company: "GTS",
    companyIcon: Briefcase,
  },
  
  {
    id: "t-3",
    quote:
      "We have had a positive experience working with Bigwigs Technologies. Their team is responsive, adaptable, and committed to maintaining quality throughout project execution. Their ability to understand requirements and deliver consistently has made them a valuable service partner.",
    name: "Wayney",
    position: "Project Manager",
    company: "TicTag",
    companyIcon: Tag,
  },
  {
    id: "t-4",
    quote:
      "I have noticed that you and your team always work late for our project and sometimes even work during weekends or holiday. Thank you very much for your continued support for our project. It is appreciated because of your support and help that our project develops so quickly. In the future, let us work together to create a better tomorrow with higher quality, faster delivery, better management, and stronger cooperation!",
    name: "Nina",
    position: "Vendor Manager",
    company: "Appen China",
    companyIcon: Globe2,
  },
  {
    id: "t-5",
    quote:
      "Bigwigs Technologies has been a very reliable partner for us. Their communication is always clear, they understand our requirements well, and they consistently deliver quality work on time. We've had a great experience working with their team and are happy to recommend them.",
    name: "Shahjahan",
    position: "CEO",
    company: "WisePL Private Limited",
    companyIcon: Landmark,
  },
];
