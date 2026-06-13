import type { Publication } from "@/lib/types";

export const publications: Publication[] = [
  {
    id: "thesis-2024",
    title: "Deep Learning Approaches for Real-Time Object Detection in Industrial Manufacturing Environments",
    abstract:
      "This thesis presents a comprehensive study of deep learning architectures for real-time object detection in manufacturing, proposing a novel hybrid architecture that combines YOLOv8 with attention mechanisms to achieve state-of-the-art performance on industrial defect detection benchmarks. The proposed model achieves 99.2% mAP while maintaining inference speeds of 60 FPS on edge devices.",
    keywords: [
      "Deep Learning",
      "Object Detection",
      "YOLOv8",
      "Computer Vision",
      "Industry 4.0",
    ],
    date: "2024-05",
    category: "thesis",
    publisher: "Stanford University",
  },
  {
    id: "cvpr-2023",
    title: "Attention-Enhanced Feature Pyramid Networks for Multi-Scale Object Detection",
    abstract:
      "We propose a novel attention mechanism integrated with Feature Pyramid Networks (FPN) to improve multi-scale object detection performance. Our method introduces channel-wise and spatial attention modules that adaptively enhance feature representations across scales. Experiments on COCO and Pascal VOC demonstrate consistent improvements over baseline FPN architectures.",
    keywords: [
      "Object Detection",
      "Attention Mechanism",
      "Feature Pyramid Networks",
      "Computer Vision",
      "Deep Learning",
    ],
    doi: "10.1109/CVPR.2023.00123",
    date: "2023-06",
    category: "conference",
    publisher: "CVPR 2023",
    pdfUrl: "https://arxiv.org/abs/2306.00123",
  },
  {
    id: "neurips-2023",
    title: "Self-Supervised Learning for Robust Visual Representation in Low-Data Regimes",
    abstract:
      "This paper explores self-supervised learning techniques for training robust visual representations when labeled data is scarce. We propose a novel contrastive learning framework that leverages data augmentation strategies tailored for industrial imaging scenarios. Results show 15% improvement over supervised baselines with only 10% of labeled data.",
    keywords: [
      "Self-Supervised Learning",
      "Contrastive Learning",
      "Computer Vision",
      "Low-Data Learning",
    ],
    doi: "10.1109/NeurIPS.2023.00456",
    date: "2023-12",
    category: "conference",
    publisher: "NeurIPS 2023",
    pdfUrl: "https://arxiv.org/abs/2312.00456",
  },
  {
    id: "ijcv-2023",
    title: "A Survey of Deep Learning Techniques for Industrial Defect Detection: Challenges and Opportunities",
    abstract:
      "This comprehensive survey reviews over 200 papers on deep learning-based industrial defect detection. We categorize existing approaches, analyze their strengths and limitations, and identify key challenges including data imbalance, real-time requirements, and domain adaptation. The paper also outlines promising future research directions.",
    keywords: [
      "Survey",
      "Defect Detection",
      "Deep Learning",
      "Industry 4.0",
      "Computer Vision",
    ],
    doi: "10.1007/s11263-023-01789-0",
    date: "2023-09",
    category: "journal",
    publisher: "International Journal of Computer Vision",
    pdfUrl: "https://link.springer.com/article/10.1007/s11263-023-01789-0",
  },
  {
    id: "icml-2022",
    title: "Efficient Neural Architecture Search for Edge Deployment of Vision Models",
    abstract:
      "We present an efficient neural architecture search (NAS) method specifically designed for edge deployment scenarios. Our approach uses a multi-objective optimization framework that balances accuracy, latency, and memory constraints. Deployed models achieve competitive accuracy while reducing inference time by 40% compared to hand-designed architectures.",
    keywords: [
      "Neural Architecture Search",
      "Edge Computing",
      "Model Optimization",
      "Computer Vision",
    ],
    doi: "10.1109/ICML.2022.00789",
    date: "2022-07",
    category: "conference",
    publisher: "ICML 2022",
  },
];
