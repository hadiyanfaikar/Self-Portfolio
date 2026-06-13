"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 md:py-24 lg:py-28",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          fullWidth ? "max-w-full" : "max-w-6xl"
        )}
      >
        {children}
      </div>
    </section>
  );
}
