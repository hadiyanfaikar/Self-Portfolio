"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/data/projects";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
  { label: "ML", value: "ml" },
  { label: "Research", value: "research" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "mobile" },
] as const;

const categoryColors: Record<string, string> = {
  ai: "bg-violet-500/10 text-violet-500 border-violet-500/20",
  ml: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  research: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  web: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  mobile: "bg-rose-500/10 text-rose-500 border-rose-500/20",
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const tiltRef = useTilt(10);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects" className="bg-muted/30">
      <SectionHeading
        title="Featured Projects"
        subtitle="A selection of my recent work across AI, web, and mobile development"
      />

      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
              activeFilter === filter.value
                ? "bg-primary text-white shadow-lg shadow-primary/25"
                : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                ref={tiltRef}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
                style={{ transformStyle: "preserve-3d", transition: "transform 0.1s ease-out" }}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20 font-mono font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="accent" className="gap-1">
                        <Sparkles className="h-3 w-3" /> Featured
                      </Badge>
                    </div>
                  )}

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
                        categoryColors[project.category]
                      )}
                    >
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-[10px]">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-[10px]">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" /> Source
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
