export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tint: "green" | "blue";
}

// Placeholder posts — swap in real articles before this ships.
export const blogPosts: BlogPost[] = [
  {
    title: "Scaling GIS pipelines from batch to real-time",
    excerpt:
      "How we re-architected a geospatial ingestion pipeline to process satellite feeds as they land, without sacrificing accuracy.",
    category: "GIS & Geospatial",
    date: "Jun 18, 2026",
    readTime: "6 min read",
    tint: "green",
  },
  {
    title: "LiDAR point clouds at enterprise scale",
    excerpt:
      "Lessons from processing billions of points per survey — and the tradeoffs between precision and throughput.",
    category: "LiDAR",
    date: "Jun 2, 2026",
    readTime: "8 min read",
    tint: "blue",
  },
  {
    title: "Validating medical imaging models for clinical use",
    excerpt:
      "Our approach to treating regulatory and clinical constraints as first-class requirements, not afterthoughts.",
    category: "Medical AI",
    date: "May 21, 2026",
    readTime: "7 min read",
    tint: "green",
  },
  {
    title: "Computer vision inspection: from prototype to production",
    excerpt:
      "What it actually takes to move a detection model off a notebook and onto a factory floor.",
    category: "Computer Vision",
    date: "May 9, 2026",
    readTime: "5 min read",
    tint: "blue",
  },
  {
    title: "Designing automation workflows that teams actually trust",
    excerpt:
      "Why observability and graceful failure matter more than raw automation coverage.",
    category: "Enterprise Automation",
    date: "Apr 27, 2026",
    readTime: "6 min read",
    tint: "green",
  },
  {
    title: "Turning dashboards into decisions",
    excerpt:
      "A look at how we design analytics products that leadership teams open every morning.",
    category: "Data Analytics",
    date: "Apr 11, 2026",
    readTime: "4 min read",
    tint: "blue",
  },
];
