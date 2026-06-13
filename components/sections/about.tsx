"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Microscope,
  Code2,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { aboutStats, siteConfig } from "@/lib/constants";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-muted/30">
      <SectionHeading
        title="About Me"
        subtitle="A passionate AI engineer dedicated to pushing the boundaries of technology"
      />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left column - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Turning complex problems into elegant solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Hadiyan Faikar, a Machine Learning practitioner with experience in building data processing pipelines, model training, and evaluation using Python and Machine Learning techniques.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through internship experience as an AI Developer, I have gained exposure to real-world ML workflows, technical collaboration, and project constraints. I am currently focused on Machine Learning Engineering, MLOps, and production-ready model deployment.
            </p>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Microscope, text: "Machine Learning" },
              { icon: Code2, text: "MLOps & Deployments" },
              { icon: GraduationCap, text: "Bachelor Telkom University" },
              { icon: MapPin, text: "Cianjur, Indonesia" },
            ].map((item) => (
              <Badge key={item.text} variant="secondary" className="gap-1.5 px-3 py-1">
                <item.icon className="h-3 w-3" />
                {item.text}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <button className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              Read my full story <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right column - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-4"
        >
          {aboutStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <span className="text-4xl font-bold text-gradient">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </span>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
