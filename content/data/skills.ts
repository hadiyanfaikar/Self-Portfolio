import type { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "python", level: 95 },
      { name: "TypeScript", icon: "typescript", level: 92 },
      { name: "JavaScript", icon: "javascript", level: 95 },
      { name: "Go", icon: "go", level: 75 },
      { name: "Java", icon: "java", level: 70 },
      { name: "C++", icon: "cpp", level: 65 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "PyTorch", icon: "pytorch", level: 92 },
      { name: "TensorFlow", icon: "tensorflow", level: 88 },
      { name: "OpenCV", icon: "opencv", level: 90 },
      { name: "YOLO", icon: "yolo", level: 85 },
      { name: "Scikit-Learn", icon: "scikit", level: 92 },
      { name: "Hugging Face", icon: "huggingface", level: 88 },
    ],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: [
      { name: "React", icon: "react", level: 95 },
      { name: "Next.js", icon: "nextjs", level: 93 },
      { name: "Node.js", icon: "nodejs", level: 88 },
      { name: "Express", icon: "express", level: 85 },
      { name: "Tailwind CSS", icon: "tailwind", level: 95 },
      { name: "GraphQL", icon: "graphql", level: 78 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: 90 },
      { name: "MongoDB", icon: "mongodb", level: 85 },
      { name: "MySQL", icon: "mysql", level: 82 },
      { name: "Redis", icon: "redis", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "Docker", icon: "docker", level: 88 },
      { name: "Kubernetes", icon: "kubernetes", level: 75 },
      { name: "AWS", icon: "aws", level: 82 },
      { name: "GCP", icon: "gcp", level: 72 },
      { name: "CI/CD", icon: "cicd", level: 85 },
      { name: "Linux", icon: "linux", level: 88 },
    ],
  },
];
