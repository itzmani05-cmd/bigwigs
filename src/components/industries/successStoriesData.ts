import healthCareImg from "@/assests/industries/healthCare.png";
import retailImg from "@/assests/industries/Retail.png";
import automotiveImg from "@/assests/industries/Automotive.png";

export interface SuccessStory {
  industry: string;
  stat: string;
  description: string;
  image: string;
}

export const successStories: SuccessStory[] = [
  {
    industry: "Healthcare",
    stat: "40%",
    description: "Faster diagnosis support with AI annotation & NLP.",
    image: healthCareImg,
  },
  {
    industry: "Retail",
    stat: "60%",
    description: "Improvement in product recognition accuracy.",
    image: retailImg,
  },
  {
    industry: "Automotive",
    stat: "Millions",
    description: "Of LiDAR frames annotated for autonomous driving.",
    image: automotiveImg,
  },
];
