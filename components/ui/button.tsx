"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary/30",
        secondary:
          "bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary-600 hover:shadow-xl hover:shadow-secondary/30",
        accent:
          "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent/30",
        outline:
          "border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary",
        ghost: "text-foreground hover:bg-muted hover:text-primary",
        gradient:
          "text-white bg-gradient-to-r from-primary via-secondary to-accent bg-300% animate-gradient shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
