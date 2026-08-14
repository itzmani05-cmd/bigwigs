import { motion } from "framer-motion";
import ScrollingText from "@/components/ui/ScrollingText";
import { sectionVariants, viewportOnce } from "@/lib/motion";

const items = [
  "GIS & Geospatial Mapping",
  "LiDAR Processing",
  "Medical Image Annotation",
  "Computer Vision",
  "Enterprise Automation",
  "Data Analytics",
];

export default function DomainTicker() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={sectionVariants}
      className="relative bg-white border-y border-slate-100 py-5"
    >
      <ScrollingText items={items} direction="left" className="text-slate-500" />
    </motion.div>
  );
}
