import type { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Machine Learning Specialty",
    issuer: "Amazon Web Services",
    date: "2024-02",
    image: "/images/certs/aws-ml.png",
    credentialUrl: "https://aws.amazon.com/certification/",
  },
  {
    id: "cert-2",
    title: "Google Professional ML Engineer",
    issuer: "Google Cloud",
    date: "2023-11",
    image: "/images/certs/gcp-ml.png",
    credentialUrl: "https://cloud.google.com/certification/",
  },
  {
    id: "cert-3",
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023-08",
    image: "/images/certs/tensorflow.png",
    credentialUrl: "https://www.tensorflow.org/certificate",
  },
  {
    id: "cert-4",
    title: "Kubernetes Application Developer (CKAD)",
    issuer: "CNCF",
    date: "2023-05",
    image: "/images/certs/ckad.png",
    credentialUrl: "https://www.cncf.io/certification/ckad/",
  },
  {
    id: "cert-5",
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2022-06",
    image: "/images/certs/deeplearning.png",
    credentialUrl: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    id: "cert-6",
    title: "NVIDIA DLI Certificate - Computer Vision",
    issuer: "NVIDIA Deep Learning Institute",
    date: "2022-03",
    image: "/images/certs/nvidia-dli.png",
    credentialUrl: "https://www.nvidia.com/en-us/deep-learning-ai/",
  },
];
