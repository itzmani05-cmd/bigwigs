import {
  Code2,
  Cpu,
  BrainCircuit,
  Container,
  Database,
  Cloud,
  Braces,
  Server,
  Atom,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Technology {
  id: string;
  name: string;
  icon: LucideIcon;
}

export const technologies: Technology[] = [
  { id: "python", name: "Python", icon: Code2 },
  { id: "pytorch", name: "PyTorch", icon: Cpu },
  { id: "tensorflow", name: "TensorFlow", icon: BrainCircuit },
  { id: "kubernetes", name: "Kubernetes", icon: Container },
  { id: "postgis", name: "PostGIS", icon: Database },
  { id: "cloud-infra", name: "Cloud Infrastructure", icon: Cloud },
  { id: "graphql", name: "GraphQL", icon: Braces },
  { id: "microservices", name: "Microservices", icon: Server },
  { id: "react", name: "React", icon: Atom },
  { id: "apis", name: "API Integrations", icon: Network },
];
