"use client";

import { Toaster } from "sonner";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/features/custom-cursor";
import { CommandPalette } from "@/components/features/command-palette";
import { ScrollToTop } from "@/components/features/scroll-to-top";
import { StructuredData } from "@/components/seo/structured-data";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StructuredData />
      <CustomCursor />
      <CommandPalette />
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "hsl(var(--card))",
            color: "hsl(var(--foreground))",
            border: "1px solid hsl(var(--border))",
          },
        }}
      />
    </>
  );
}
