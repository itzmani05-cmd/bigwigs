export interface Job {
  title: string;
  department: string;
  departmentColor: string;
  location: string;
  type: string;
  experience: string;
}

export const jobs: Job[] = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    departmentColor: "bg-brand-blue-50 text-brand-blue-600",
    location: "Remote / Bangalore",
    type: "Full-time",
    experience: "2-5 Yrs",
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    departmentColor: "bg-brand-blue-50 text-brand-blue-600",
    location: "Remote / Bangalore",
    type: "Full-time",
    experience: "2-5 Yrs",
  },
  {
    title: "AI Engineer",
    department: "AI & Data",
    departmentColor: "bg-orange-50 text-orange-600",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "2-6 Yrs",
  },
  {
    title: "ML Engineer",
    department: "AI & Data",
    departmentColor: "bg-orange-50 text-orange-600",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "2-6 Yrs",
  },
  {
    title: "Data Annotation Specialist",
    department: "Data Operations",
    departmentColor: "bg-brand-green-50 text-brand-green-600",
    location: "Remote",
    type: "Full-time",
    experience: "0-3 Yrs",
  },
  {
    title: "Project Manager",
    department: "Product",
    departmentColor: "bg-violet-50 text-violet-600",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "3-7 Yrs",
  },
  {
    title: "QA Engineer",
    department: "Engineering",
    departmentColor: "bg-brand-blue-50 text-brand-blue-600",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "1-4 Yrs",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    departmentColor: "bg-rose-50 text-rose-600",
    location: "Bangalore / Hybrid",
    type: "Full-time",
    experience: "2-5 Yrs",
  },
];
