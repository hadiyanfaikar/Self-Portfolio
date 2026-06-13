"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Mail,
  Briefcase,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ParticleBackground } from "@/components/effects/particle-background";
import { FloatingShapes } from "@/components/effects/floating-shapes";
import { useTypewriter } from "@/hooks/use-typewriter";
import { typingTitles, siteConfig } from "@/lib/constants";

export function Hero() {
  const typedText = useTypewriter(typingTitles, 80, 50, 2000);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10 animate-gradient bg-300%" />

      {/* Particle network */}
      <ParticleBackground />

      {/* Floating shapes */}
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Badge variant="accent" className="px-4 py-1.5 text-sm gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-gradient">Hadiyan Faikar</span>
            </h1>
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="h-12 sm:h-14"
          >
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
              <span>AI Engineering & Machine Learning Engineering</span>
              <span className="ml-0.5 inline-block w-0.5 h-[1em] bg-primary animate-pulse align-middle" />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed"
          >
            Focused on Machine Learning Engineering, MLOps, and production-ready model deployment. Experienced in building data processing pipelines, model training, and evaluation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              variant="gradient"
              size="xl"
              onClick={() => scrollTo("#projects")}
            >
              <Briefcase className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollTo("#contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="ghost" size="xl">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex items-center justify-center gap-3 pt-4"
          >
            {[
              { icon: Github, href: siteConfig.links.github, label: "GitHub" },
              { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
              { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted-foreground transition-all hover:text-primary hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}
