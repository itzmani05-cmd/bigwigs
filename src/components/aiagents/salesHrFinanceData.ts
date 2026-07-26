import { TrendingUp, Users2, Landmark, type LucideIcon } from "lucide-react";

export interface AgentPillar {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export const salesHrFinancePillars: AgentPillar[] = [
  {
    icon: TrendingUp,
    title: "Sales Agent",
    items: ["Lead Qualification", "CRM Updates", "Email Generation", "Proposal Drafting", "Meeting Scheduling"],
  },
  {
    icon: Users2,
    title: "HR Agent",
    items: ["Resume Screening", "Candidate Matching", "Interview Scheduling", "Employee Onboarding", "Leave Management"],
  },
  {
    icon: Landmark,
    title: "Finance Agent",
    items: ["Invoice Processing", "Expense Validation", "Vendor Management", "Compliance Monitoring", "Financial Reports"],
  },
];
