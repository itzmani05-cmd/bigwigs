import { Cloud, Package, Boxes, Layers, GitPullRequest, FileCode2, Settings2, type LucideIcon } from "lucide-react";

export interface PipelineStep {
  icon: LucideIcon;
  label: string;
}

export const pipelineSteps: PipelineStep[] = [
  { icon: Cloud, label: "Cloud Migration" },
  { icon: Package, label: "Containers" },
  { icon: Boxes, label: "Docker" },
  { icon: Layers, label: "Kubernetes" },
  { icon: GitPullRequest, label: "GitHub Actions" },
  { icon: FileCode2, label: "Terraform" },
  { icon: Settings2, label: "Jenkins" },
];
