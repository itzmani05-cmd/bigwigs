export interface ResearchItem {
  date: string;
  topic: string;
  title: string;
  preview: string;
}

export const researchItems: ResearchItem[] = [
  {
    date: "May 2024",
    topic: "Annotation Quality",
    title: "Benchmarking Annotation Quality at Scale",
    preview:
      "A study of multi-layer QA workflows across 40M+ annotated tasks and their impact on model accuracy.",
  },
  {
    date: "Apr 2024",
    topic: "Autonomous Systems",
    title: "LiDAR Point Cloud Labeling for Autonomous Systems",
    preview:
      "Comparing annotation strategies for 3D point-cloud data used in production ADAS pipelines.",
  },
  {
    date: "Mar 2024",
    topic: "Clinical NLP",
    title: "Extracting Structured Data from Physician Notes",
    preview:
      "How clinical NLP pipelines convert unstructured notes into reliable, model-ready datasets.",
  },
  {
    date: "Feb 2024",
    topic: "Generative AI",
    title: "Evaluating Generative AI for Enterprise Knowledge Bases",
    preview:
      "A framework for measuring accuracy, grounding, and hallucination rates in enterprise RAG systems.",
  },
];
