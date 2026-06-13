import type { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Sarah Johnson",
    position: "Research Director",
    company: "Stanford AI Lab",
    avatar: "/images/testimonials/sarah.jpg",
    feedback:
      "Alex is one of the most talented researchers I've had the pleasure to work with. His work on attention mechanisms for object detection was groundbreaking and has significantly influenced our lab's research direction.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Michael Chen",
    position: "CTO",
    company: "TechCorp AI",
    avatar: "/images/testimonials/michael.jpg",
    feedback:
      "Having Alex lead our computer vision team was the best decision we made. He architected our entire ML pipeline that now serves millions of inferences daily with 99.9% uptime.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Emily Rodriguez",
    position: "Senior Product Manager",
    company: "DataViz Labs",
    avatar: "/images/testimonials/emily.jpg",
    feedback:
      "Alex combines deep technical expertise with an incredible product sense. He not only built robust ML systems but also understood exactly what our users needed. A rare combination.",
    rating: 5,
  },
  {
    id: "test-4",
    name: "Dr. James Wilson",
    position: "Professor of Computer Science",
    company: "UC Berkeley",
    avatar: "/images/testimonials/james.jpg",
    feedback:
      "As Alex's undergraduate research advisor, I watched him tackle problems that would challenge PhD students. His thesis work on real-time object detection set a new standard in our department.",
    rating: 5,
  },
  {
    id: "test-5",
    name: "Lisa Thompson",
    position: "VP of Engineering",
    company: "Microsoft Azure ML",
    avatar: "/images/testimonials/lisa.jpg",
    feedback:
      "During his internship, Alex shipped features that full-time engineers would be proud of. His work on CI/CD pipelines for Azure ML Studio reduced our deployment times by 40%.",
    rating: 5,
  },
];
