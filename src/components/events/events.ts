export interface EventItem {
  title: string;
  date: string;
  location: string;
  format: "In-person" | "Virtual";
  description: string;
  tint: "green" | "blue";
}

// Placeholder events — swap in real dates/venues before this ships.
export const events: EventItem[] = [
  {
    title: "BigWigs Enterprise AI Summit",
    date: "Sep 16, 2026",
    location: "San Francisco, CA",
    format: "In-person",
    description: "A day of talks on deploying AI systems enterprises can actually trust in production.",
    tint: "green",
  },
  {
    title: "Webinar: Scaling LiDAR Pipelines",
    date: "Aug 21, 2026",
    location: "Online",
    format: "Virtual",
    description: "An engineering deep-dive into processing point clouds at enterprise scale.",
    tint: "blue",
  },
  {
    title: "GeoTech Conference — Panel Talk",
    date: "Jul 30, 2026",
    location: "Austin, TX",
    format: "In-person",
    description: "Our GIS team joins a panel on real-time geospatial intelligence for logistics.",
    tint: "green",
  },
  {
    title: "Meetup: Computer Vision in Manufacturing",
    date: "Jul 3, 2026",
    location: "Chicago, IL",
    format: "In-person",
    description: "A hands-on session covering inspection models that hold up on the factory floor.",
    tint: "blue",
  },
];
