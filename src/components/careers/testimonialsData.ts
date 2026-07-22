import pic4 from "@/assests/trusted/pic4.jpg";
import pic5 from "@/assests/trusted/pic5.jpg";
import pic6 from "@/assests/trusted/pic6.jpg";

export interface Testimonial {
  name: string;
  role: string;
  department: string;
  quote: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Arjun R.",
    role: "AI Engineer",
    department: "AI & Data",
    quote:
      "Bigwigs gives me the freedom to explore new ideas and the support to turn them into impactful solutions.",
    photo: pic6,
  },
  {
    name: "Sneha M.",
    role: "Product Designer",
    department: "Design",
    quote:
      "The culture here is collaborative, inclusive, and growth-focused. I learn something new every day.",
    photo: pic5,
  },
  {
    name: "Vikram S.",
    role: "Backend Developer",
    department: "Engineering",
    quote:
      "Working on global projects here has accelerated my growth more than I ever imagined.",
    photo: pic4,
  },
];
