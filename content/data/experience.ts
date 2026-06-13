import type { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "AI Developer Internship",
    organization: "HUMIC Research Center",
    location: "Bandung, Indonesia",
    startDate: "2025-09",
    endDate: "2026-01",
    description:
      "Built an end-to-end image classification pipeline using ResNet-50, DenseNet-121, and DenseNet-201. Improved model performance through ANOVA feature selection and LightGBM classification. Deployed AI models into a web-based platform for real-time clinical inference. Implemented Human-in-the-Loop validation to enable expert-driven model correction. Enhanced system transparency and diagnostic reliability for medical decision support. Achieved an F1-score of up to 98% for multi-class classification (normal, benign, malignant).",
    type: "internship",
    tags: ["Computer Vision", "LightGBM", "ResNet", "DenseNet", "ANOVA", "Clinical Inference", "Human-in-the-Loop", "Python"],
  },
  {
    id: "exp-2",
    title: "Data Entry Officer",
    organization: "Maguwoharjo Village Government Office",
    location: "Yogyakarta, Indonesia",
    startDate: "2018-02",
    endDate: "2018-04",
    description:
      "Recorded and regularly updated population data to ensure the accuracy and completeness of resident information in Desa Maguwoharjo, achieving 98% data accuracy and 100% coverage of registered households. Conducted population data registration for residents, reaching 95% on-time registration compliance. Created and maintained a population database with 100% data input completion and 97% data consistency rate after verification. Managed administrative documentation and conducted program evaluation surveys.",
    type: "work",
    tags: ["Data Entry", "Database Management", "Administrative Documentation", "Data Quality", "Surveys"],
  },
  {
    id: "edu-1",
    title: "Bachelor's Degree in Computer Science",
    organization: "Telkom University",
    location: "Bandung, Indonesia",
    startDate: "2020",
    endDate: "2024",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Completed academic projects in deep learning and computer vision. Active in student organizations and technical committees.",
    type: "education",
    tags: ["Computer Science", "Artificial Intelligence", "Machine Learning", "Deep Learning"],
  },
];
