import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

export function Card({
  className,
  hover = false,
  glass = false,
  gradient = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-6 text-card-foreground",
        hover &&
          "transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/30",
        glass && "glass",
        gradient && "gradient-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
