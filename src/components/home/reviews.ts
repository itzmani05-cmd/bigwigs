export interface Review {
  id: string;
  content: string;
  name: string;
  position: string;
  initials: string;
  tint: "green" | "blue";
}

export const reviews: Review[] = [
  {
    id: "review-1",
    content:
      "BigWigs rebuilt our GIS pipeline from the ground up. What used to take our analysts days now happens in minutes, and the accuracy gains have directly changed how our field teams make decisions.",
    name: "Ariana Cole",
    position: "VP of Operations, Meridian Geospatial",
    initials: "AC",
    tint: "green",
  },
  {
    id: "review-2",
    content:
      "As a founder, I needed a team that could move fast without cutting corners on the ML side. BigWigs shipped our computer vision inspection model in half the time we budgeted, and it's held up in production ever since.",
    name: "Daniel Osei",
    position: "Founder & CEO, Vantage Robotics",
    initials: "DO",
    tint: "blue",
  },
  {
    id: "review-3",
    content:
      "The LiDAR processing engine they built handles point clouds at a scale our previous vendor couldn't touch. Their engineers understood the survey domain, not just the algorithms.",
    name: "Priya Nair",
    position: "Director of Engineering, Contour Mapping Co.",
    initials: "PN",
    tint: "green",
  },
  {
    id: "review-4",
    content:
      "Working in medical imaging means there's zero room for error. BigWigs treated our clinical requirements as first-class constraints from day one, and the model they delivered passed validation on the first review.",
    name: "Dr. Marcus Webb",
    position: "Founder, Clarity Diagnostics",
    initials: "MW",
    tint: "blue",
  },
  {
    id: "review-5",
    content:
      "We came to them with a mess of manual workflows across three departments. Their automation layer cut our processing time by more than 60% and our team finally trusts the numbers.",
    name: "Sofia Alvarez",
    position: "COO, Northbridge Logistics",
    initials: "SA",
    tint: "green",
  },
  {
    id: "review-6",
    content:
      "The analytics dashboards BigWigs delivered gave our leadership visibility we simply didn't have before. It's rare to find a partner who can build both the pipeline and the story the data tells.",
    name: "James Okafor",
    position: "Founder, Lumen Retail Group",
    initials: "JO",
    tint: "blue",
  },
];
