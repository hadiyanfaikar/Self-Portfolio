import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "vision-ai-platform",
    title: "VisionAI Platform",
    description:
      "Real-time computer vision platform for industrial defect detection using YOLOv8 and custom CNN architectures.",
    longDescription:
      "An end-to-end computer vision platform that enables manufacturers to detect defects in real-time on production lines. Built with PyTorch for model training, YOLOv8 for object detection, and a React dashboard for monitoring and analytics. Achieves 99.2% accuracy on benchmark datasets.",
    image: "/images/projects/vision-ai.png",
    technologies: [
      "Python",
      "PyTorch",
      "YOLOv8",
      "React",
      "FastAPI",
      "Docker",
      "PostgreSQL",
    ],
    features: [
      "Real-time inference at 60 FPS",
      "Custom model training pipeline",
      "Interactive analytics dashboard",
      "Multi-camera support",
      "Alert & notification system",
    ],
    category: "ai",
    liveUrl: "https://visionai.example.com",
    githubUrl: "https://github.com/alexchen/vision-ai",
    featured: true,
  },
  {
    id: "nlp-research-toolkit",
    title: "NLP Research Toolkit",
    description:
      "Comprehensive toolkit for NLP research with transformer-based models, evaluation metrics, and visualization tools.",
    longDescription:
      "A modular toolkit designed for NLP researchers to streamline experimentation with transformer models. Includes pre-built pipelines for text classification, named entity recognition, sentiment analysis, and text generation. Supports BERT, GPT, and T5 architectures.",
    image: "/images/projects/nlp-toolkit.png",
    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "Hugging Face",
      "FastAPI",
      "MongoDB",
    ],
    features: [
      "Multi-model support",
      "Automated evaluation",
      "Dataset management",
      "Experiment tracking",
      "REST API",
    ],
    category: "ml",
    githubUrl: "https://github.com/alexchen/nlp-toolkit",
    featured: true,
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Pipeline",
    description:
      "Production-grade MLOps pipeline for automated model training, deployment, and monitoring on Kubernetes.",
    longDescription:
      "An end-to-end MLOps solution automating the complete machine learning lifecycle. Features include automated data versioning, model training orchestration, A/B testing deployment, drift detection, and model performance monitoring. Deployed on AWS EKS.",
    image: "/images/projects/mlops.png",
    technologies: [
      "Python",
      "Kubernetes",
      "Docker",
      "MLflow",
      "Kubeflow",
      "AWS",
      "Grafana",
    ],
    features: [
      "Automated training pipelines",
      "Model versioning & registry",
      "A/B deployment strategies",
      "Drift detection & alerts",
      "Real-time monitoring dashboards",
    ],
    category: "ai",
    liveUrl: "https://mlops.example.com",
    githubUrl: "https://github.com/alexchen/mlops-pipeline",
    featured: true,
  },
  {
    id: "ai-saas-dashboard",
    title: "AI SaaS Dashboard",
    description:
      "Modern SaaS platform with AI-powered analytics, user management, and subscription billing.",
    longDescription:
      "A full-stack SaaS application featuring AI-driven analytics, team collaboration tools, and integrated payment processing. Built with Next.js 15, tRPC for type-safe APIs, and Stripe for subscription management.",
    image: "/images/projects/saas-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    features: [
      "AI analytics engine",
      "Team collaboration",
      "Subscription billing",
      "Role-based access",
      "Real-time notifications",
    ],
    category: "web",
    liveUrl: "https://saas.example.com",
    githubUrl: "https://github.com/alexchen/ai-saas",
    featured: false,
  },
  {
    id: "research-portal",
    title: "Research Collaboration Portal",
    description:
      "Web platform for research teams to collaborate, share datasets, and track experiment results.",
    longDescription:
      "A collaborative platform designed for research labs to manage experiments, share datasets, and publish findings. Integrates with Jupyter notebooks, Git repositories, and cloud storage for seamless research workflows.",
    image: "/images/projects/research-portal.png",
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "MongoDB",
      "Docker",
      "AWS S3",
    ],
    features: [
      "Dataset sharing",
      "Experiment tracking",
      "Jupyter integration",
      "Team collaboration",
      "Publication management",
    ],
    category: "research",
    githubUrl: "https://github.com/alexchen/research-portal",
    featured: false,
  },
  {
    id: "mobile-fitness-ai",
    title: "FitAI Mobile App",
    description:
      "AI-powered fitness companion with pose estimation, workout tracking, and personalized recommendations.",
    longDescription:
      "A cross-platform mobile application using computer vision for real-time exercise form correction. Leverages MediaPipe for pose estimation and TensorFlow Lite for on-device inference, providing instant feedback to users.",
    image: "/images/projects/fitai.png",
    technologies: [
      "React Native",
      "TensorFlow Lite",
      "MediaPipe",
      "Python",
      "FastAPI",
      "Firebase",
    ],
    features: [
      "Real-time pose detection",
      "Exercise form analysis",
      "Personalized workouts",
      "Progress tracking",
      "Social features",
    ],
    category: "mobile",
    liveUrl: "https://fitai.example.com",
    featured: false,
  },
];
