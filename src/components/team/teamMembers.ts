export type Department = "Leadership" | "Engineering" | "Research";

export interface TeamMember {
  name: string;
  role: string;
  department: Department;
  initials: string;
  tint: "green" | "blue";
}

// Placeholder roster — swap in real team members before this ships.
export const teamMembers: TeamMember[] = [
  { name: "Jane Doe", role: "Chief Executive Officer", department: "Leadership", initials: "JD", tint: "green" },
  { name: "John Smith", role: "Chief Technology Officer", department: "Leadership", initials: "JS", tint: "blue" },
  { name: "Amara Bello", role: "VP of Engineering", department: "Leadership", initials: "AB", tint: "green" },
  { name: "Alex Kim", role: "Head of Computer Vision", department: "Engineering", initials: "AK", tint: "blue" },
  { name: "Maria Chen", role: "Senior ML Engineer", department: "Engineering", initials: "MC", tint: "green" },
  { name: "Sam Patel", role: "Platform Engineer", department: "Engineering", initials: "SP", tint: "blue" },
  { name: "Omar Farouk", role: "Full-Stack Engineer", department: "Engineering", initials: "OF", tint: "green" },
  { name: "Laura Gomez", role: "Lead Data Scientist", department: "Research", initials: "LG", tint: "blue" },
  { name: "David Lee", role: "Research Scientist, GIS", department: "Research", initials: "DL", tint: "green" },
  { name: "Nina Rossi", role: "Research Scientist, Medical AI", department: "Research", initials: "NR", tint: "blue" },
];

export const departments: Department[] = ["Leadership", "Engineering", "Research"];
