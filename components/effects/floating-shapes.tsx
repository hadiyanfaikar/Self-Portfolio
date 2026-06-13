"use client";

import { motion } from "framer-motion";

const shapes = [
  { size: 40, x: "10%", y: "20%", delay: 0, duration: 6, color: "from-primary/20 to-secondary/20" },
  { size: 60, x: "85%", y: "15%", delay: 1, duration: 7, color: "from-secondary/20 to-accent/20" },
  { size: 30, x: "70%", y: "70%", delay: 2, duration: 5, color: "from-accent/20 to-primary/20" },
  { size: 50, x: "20%", y: "75%", delay: 0.5, duration: 8, color: "from-primary/20 to-accent/20" },
  { size: 25, x: "50%", y: "10%", delay: 1.5, duration: 6, color: "from-secondary/20 to-primary/20" },
];

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} blur-2xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
