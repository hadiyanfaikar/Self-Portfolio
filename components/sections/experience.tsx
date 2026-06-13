"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Microscope,
  Building2,
  MapPin,
  Calendar,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/content/data/experience";
import { cn } from "@/lib/utils";

const typeConfig: Record<string, { icon: React.ElementType; color: string; label: string }> = {
  work: { icon: Briefcase, color: "bg-primary/10 text-primary border-primary/20", label: "Work" },
  internship: { icon: Building2, color: "bg-accent/10 text-accent border-accent/20", label: "Internship" },
  research: { icon: Microscope, color: "bg-secondary/10 text-secondary border-secondary/20", label: "Research" },
  education: { icon: GraduationCap, color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20", label: "Education" },
};

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-muted/30">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey through education, research, and industry"
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex gap-6 md:gap-8",
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary ring-4 ring-background">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    "ml-12 flex-1 md:ml-0",
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                  )}
                >
                  <div className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
                    {/* Type badge */}
                    <div className={cn("mb-3 flex", isLeft ? "md:justify-end" : "")}>
                      <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium border", config.color)}>
                        <Icon className="h-3 w-3" />
                        {config.label}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>

                    <div className={cn("mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground", isLeft ? "md:justify-end" : "")}>
                      <span className="font-medium text-foreground">{exp.organization}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </div>

                    <div className={cn("mt-1 flex items-center gap-1 text-xs text-muted-foreground", isLeft ? "md:justify-end" : "")}>
                      <Calendar className="h-3 w-3" />
                      {exp.startDate} — {exp.endDate}
                    </div>

                    <p className={cn("mt-3 text-sm text-muted-foreground leading-relaxed", isLeft ? "md:text-right" : "")}>
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className={cn("mt-3 flex flex-wrap gap-1.5", isLeft ? "md:justify-end" : "")}>
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
