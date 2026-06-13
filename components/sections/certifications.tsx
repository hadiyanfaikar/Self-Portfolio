"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/content/data/certifications";

export function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        title="Certifications"
        subtitle="Professional certifications validating my expertise and continuous learning"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Card glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative space-y-4">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Award className="h-6 w-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Building2 className="h-3 w-3" />
                  {cert.issuer}
                </div>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {cert.date}
                </div>
              </div>

              {/* Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                >
                  View Credential <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
