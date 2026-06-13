"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  BookOpen,
  Microscope,
  ExternalLink,
  ChevronDown,
  Calendar,
  Tag,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/content/data/publications";
import { cn } from "@/lib/utils";

const researchFilters = [
  { label: "All", value: "all" },
  { label: "Thesis", value: "thesis" },
  { label: "Journal", value: "journal" },
  { label: "Conference", value: "conference" },
];

const categoryConfig: Record<string, { icon: React.ElementType; color: string }> = {
  thesis: { icon: BookOpen, color: "bg-primary/10 text-primary border-primary/20" },
  journal: { icon: FileText, color: "bg-secondary/10 text-secondary border-secondary/20" },
  conference: { icon: Microscope, color: "bg-accent/10 text-accent border-accent/20" },
};

export function Research() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeFilter === "all"
    ? publications
    : publications.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="research">
      <SectionHeading
        title="Research & Publications"
        subtitle="Academic research contributions in AI, computer vision, and machine learning"
      />

      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        {researchFilters.map((filter) => (
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

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((pub, index) => {
            const config = categoryConfig[pub.category];
            const Icon = config.icon;
            const isExpanded = expandedId === pub.id;

            return (
              <motion.div
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      {/* Category + Date */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium border", config.color)}>
                          <Icon className="h-3 w-3" />
                          {pub.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {pub.date}
                        </span>
                        {pub.publisher && (
                          <span className="text-xs text-muted-foreground">
                            {pub.publisher}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {pub.title}
                      </h3>

                      {/* Abstract */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {pub.abstract}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-1.5">
                        {pub.keywords.map((kw) => (
                          <Badge key={kw} variant="outline" className="text-[10px]">
                            {kw}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 shrink-0">
                      {pub.pdfUrl && (
                        <a
                          href={pub.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : pub.id)
                        }
                        className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                    </div>
                  </div>

                  {/* DOI */}
                  {pub.doi && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        DOI:{" "}
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {pub.doi}
                        </a>
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
