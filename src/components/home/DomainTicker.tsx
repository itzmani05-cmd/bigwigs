import ScrollingText from "@/components/ui/ScrollingText";

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
    <div className="relative bg-white border-y border-slate-100 py-5">
      <ScrollingText items={items} direction="left" className="text-slate-500" />
    </div>
  );
}
