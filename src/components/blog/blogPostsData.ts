import healthCareImg from "@/assests/industries/healthCare.png";
import automotiveImg from "@/assests/industries/Automotive.png";
import smartCitiesImg from "@/assests/industries/SmartCities.png";
import bankingImg from "@/assests/industries/Banking.png";
import agricultureImg from "@/assests/industries/Agriculture.png";
import manufacturingImg from "@/assests/industries/Manufacturing.png";
import retailImg from "@/assests/industries/Retail.png";
import dronesImg from "@/assests/industries/Drones.png";
import aboutRightImg from "@/assests/aboutRightSide.png";
import pic1 from "@/assests/trusted/pic1.jpg";
import pic2 from "@/assests/trusted/pic2.jpg";
import pic3 from "@/assests/trusted/pic3.jpg";
import pic4 from "@/assests/trusted/pic4.jpg";
import pic5 from "@/assests/trusted/pic5.jpg";
import pic6 from "@/assests/trusted/pic6.jpg";

export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; avatar: string };
  date: string;
  readTime: string;
  height?: "tall" | "short";
}

export const editorsPicks: BlogPost[] = [
  {
    slug: "medical-image-annotation-guide",
    category: "Medical AI",
    categoryColor: "bg-brand-blue-50 text-brand-blue-600",
    title: "The Complete Guide to Medical Image Annotation",
    excerpt: "How pixel-accurate radiology and pathology labeling improves diagnostic model accuracy.",
    image: healthCareImg,
    author: { name: "Priya Nair", avatar: pic1 },
    date: "May 10, 2024",
    readTime: "8 min read",
  },
  {
    slug: "lidar-annotation-autonomous-vehicles",
    category: "Computer Vision",
    categoryColor: "bg-violet-50 text-violet-600",
    title: "Inside LiDAR Annotation for Autonomous Vehicles",
    excerpt: "A look at the 3D point-cloud labeling pipeline behind safe self-driving perception.",
    image: automotiveImg,
    author: { name: "Arun Kumar", avatar: pic2 },
    date: "May 06, 2024",
    readTime: "6 min read",
  },
  {
    slug: "smart-cities-traffic-intelligence",
    category: "Industry News",
    categoryColor: "bg-orange-50 text-orange-600",
    title: "How Smart Cities Use AI for Traffic Intelligence",
    excerpt: "GIS annotation and real-time analytics are reshaping urban mobility planning.",
    image: smartCitiesImg,
    author: { name: "Meera P.", avatar: pic3 },
    date: "Apr 28, 2024",
    readTime: "5 min read",
  },
];

export const latestArticles: BlogPost[] = [
  {
    slug: "ocr-vs-nlp-document-ai",
    category: "NLP",
    categoryColor: "bg-rose-50 text-rose-600",
    title: "OCR vs NLP: What's the Difference in Document AI?",
    excerpt: "Understanding where text extraction ends and language understanding begins.",
    image: bankingImg,
    author: { name: "Sneha R.", avatar: pic4 },
    date: "Apr 20, 2024",
    readTime: "7 min read",
    height: "tall",
  },
  {
    slug: "drone-analytics-agriculture",
    category: "Computer Vision",
    categoryColor: "bg-violet-50 text-violet-600",
    title: "Drone Analytics: The Future of Precision Agriculture",
    excerpt: "Crop health monitoring and yield prediction from annotated aerial imagery.",
    image: agricultureImg,
    author: { name: "Vikram S.", avatar: pic5 },
    date: "Apr 14, 2024",
    readTime: "6 min read",
  },
  {
    slug: "computer-vision-manufacturing-qa",
    category: "Computer Vision",
    categoryColor: "bg-violet-50 text-violet-600",
    title: "Computer Vision in Manufacturing Quality Inspection",
    excerpt: "How defect-detection models cut inspection time on the production line.",
    image: manufacturingImg,
    author: { name: "Arun Kumar", avatar: pic2 },
    date: "Apr 08, 2024",
    readTime: "5 min read",
    height: "tall",
  },
  {
    slug: "retail-recommendation-engines",
    category: "Machine Learning",
    categoryColor: "bg-brand-green-50 text-brand-green-600",
    title: "Retail AI: Recommendation Engines Explained",
    excerpt: "The annotated data behind personalization at e-commerce scale.",
    image: retailImg,
    author: { name: "Priya Nair", avatar: pic1 },
    date: "Mar 30, 2024",
    readTime: "6 min read",
  },
  {
    slug: "warehouse-automation-vision-ai",
    category: "AI Annotation",
    categoryColor: "bg-brand-blue-50 text-brand-blue-600",
    title: "Robotics & Warehouse Automation with Vision AI",
    excerpt: "Training data strategies for pick-and-place robotics at warehouse scale.",
    image: dronesImg,
    author: { name: "Meera P.", avatar: pic3 },
    date: "Mar 22, 2024",
    readTime: "7 min read",
    height: "tall",
  },
  {
    slug: "digital-publishing-editorial-stack",
    category: "Digital Publishing",
    categoryColor: "bg-cyan-50 text-cyan-600",
    title: "Digital Publishing Meets AI: The New Editorial Stack",
    excerpt: "How generative AI is reshaping content operations for modern publishers.",
    image: aboutRightImg,
    author: { name: "Sneha R.", avatar: pic6 },
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
];
