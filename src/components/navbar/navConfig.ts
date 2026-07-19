import {
  Map,
  Radar,
  Stethoscope,
  ScanEye,
  Workflow,
  BarChart3,
  Users,
  Newspaper,
  CalendarDays,
  Building2,
  BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ourTeamImage from "@/assests/about/ourteams.jpg";
import blogImage from "@/assests/about/blog.jpg";
import eventsImage from "@/assests/about/events.jpg";
import locationImage from "@/assests/about/location.jpg";
import certificationImage from "@/assests/about/certification.jpg";

export interface MegaFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

export interface MegaContent {
  title: string;
  description: string;
  links: { name: string; href: string }[];
  features: MegaFeature[];
  cta: { label: string; href: string };
}

export interface NavItem {
  name: string;
  href: string;
  mega?: MegaContent;
}

export const navItems: NavItem[] = [
  { name: "Home", href: "/Home" },
  {
    name: "About",
    href: "#about",
    mega: {
      title: "About BigWigs",
      description:
        "Get to know the team, culture, and credentials behind our enterprise AI work.",
      links: [
        { name: "Our Team", href: "/team" },
        { name: "Blogs", href: "/blog" },
        { name: "Events", href: "/events" },
        { name: "Locations", href: "/locations" },
        { name: "Certifications", href: "/certifications" },
      ],
      features: [
        {
          icon: Users,
          title: "Our Team",
          description: "Meet the engineers and researchers behind BigWigs.",
          image: ourTeamImage,
        },
        {
          icon: Newspaper,
          title: "Blogs",
          description: "Insights and updates from our engineering team.",
          image: blogImage,
        },
        {
          icon: CalendarDays,
          title: "Events",
          description: "Webinars, meetups, and conferences we host or attend.",
          image: eventsImage,
        },
        {
          icon: Building2,
          title: "Locations",
          description: "Where we operate and deliver enterprise AI.",
          image: locationImage,
        },
        {
          icon: BadgeCheck,
          title: "Certifications",
          description: "Compliance and quality credentials we hold.",
          image: certificationImage,
        },
      ],
      cta: { label: "Learn more about us", href: "#about" },
    },
  },
  {
    name: "Services",
    href: "#services",
    mega: {
      title: "What we build",
      description:
        "Enterprise AI systems engineered for accuracy, security, and scale — across six core domains.",
      links: [
        { name: "GIS & Geospatial Mapping", href: "#services" },
        { name: "LiDAR (2D & 3D)", href: "#services" },
        { name: "Medical Image Annotation", href: "#services" },
        { name: "Computer Vision", href: "#services" },
        { name: "Enterprise Automation", href: "#services" },
        { name: "Data Analytics", href: "#services" },
      ],
      features: [
        {
          icon: Map,
          title: "GIS & Geospatial",
          description: "Mapped, actionable geospatial intelligence.",
        },
        {
          icon: Radar,
          title: "LiDAR Processing",
          description: "High-precision 2D/3D point-cloud pipelines.",
        },
        {
          icon: Stethoscope,
          title: "Medical AI",
          description: "Clinically-aware imaging models & workflows.",
        },
        {
          icon: ScanEye,
          title: "Computer Vision",
          description: "Production-grade detection & segmentation.",
        },
        {
          icon: Workflow,
          title: "Automation",
          description: "Intelligent workflows at enterprise scale.",
        },
        {
          icon: BarChart3,
          title: "Data Analytics",
          description: "Dashboards that turn data into decisions.",
        },
      ],
      cta: { label: "Explore all services", href: "#services" },
    },
  },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Blog", href: "/blog" },
];

export const ctaItem = { name: "Contact Us", href: "#contact" };
export const demoItem = { name: "Book a Demo", href: "#demo" };
