"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Globe,
  Database,
  Cloud,
  TrendingUp,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/content/data/skills";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Brain,
  Globe,
  Database,
  Cloud,
};

const skillIcons: Record<string, string> = {
  python: "🐍",
  typescript: "🔷",
  javascript: "🟨",
  go: "🔵",
  java: "☕",
  cpp: "⚡",
  pytorch: "🔥",
  tensorflow: "🧠",
  opencv: "👁️",
  yolo: "🎯",
  scikit: "📊",
  huggingface: "🤗",
  react: "⚛️",
  nextjs: "▲",
  nodejs: "💚",
  express: "🚂",
  tailwind: "🌊",
  graphql: "◈",
  postgresql: "🐘",
  mongodb: "🍃",
  mysql: "🐬",
  redis: "🔴",
  docker: "🐳",
  kubernetes: "☸️",
  aws: "☁️",
  gcp: "🌐",
  cicd: "🔄",
  linux: "🐧",
};

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Skills & Expertise"
        subtitle="Technologies and tools I use to build amazing products"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, catIndex) => {
          const Icon = iconMap[category.icon] || Code2;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.3,
                    }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-foreground">
                        <span className="text-base">
                          {skillIcons[skill.icon] || "•"}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={cn(
                          "h-full rounded-full",
                          skill.level >= 90
                            ? "bg-gradient-to-r from-primary to-secondary"
                            : skill.level >= 80
                            ? "bg-primary"
                            : "bg-primary/60"
                        )}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
