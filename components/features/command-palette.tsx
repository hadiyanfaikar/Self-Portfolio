"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Code2,
  Briefcase,
  Microscope,
  Clock,
  Mail,
  FileText,
  ExternalLink,
  ArrowRight,
  Command,
} from "lucide-react";
import { navItems } from "@/lib/constants";
import { projects } from "@/content/data/projects";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  category: string;
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const items: CommandItem[] = [
    ...navItems.map((item) => ({
      id: item.href,
      label: item.label,
      description: `Navigate to ${item.label} section`,
      icon: Home,
      category: "Navigation",
      action: () => scrollTo(item.href),
    })),
    ...projects.slice(0, 5).map((project) => ({
      id: project.id,
      label: project.title,
      description: project.description.slice(0, 60) + "...",
      icon: Briefcase,
      category: "Projects",
      action: () => {
        scrollTo("#projects");
      },
    })),
  ];

  const filtered = items.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "K" && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
        return;
      }

      if (!open) return;

      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filtered.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filtered.length - 1
        );
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    },
    [open, filtered, selectedIndex]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[15%] z-[101] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border glass-strong shadow-2xl"
          >
            {/* Search input */}
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Search sections, projects..."
                className="flex-1 bg-transparent py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                autoFocus
              />
              <kbd className="hidden sm:flex items-center gap-0.5 rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                <span>ESC</span>
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              ) : (
                filtered.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                      index === selectedIndex
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        index === selectedIndex
                          ? "bg-primary/20"
                          : "bg-muted"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {item.label}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {item.description}
                      </div>
                    </div>
                    <span className="text-[10px] text-muted-foreground shrink-0">
                      {item.category}
                    </span>
                    {index === selectedIndex && (
                      <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                    )}
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 border-t border-border px-4 py-2.5">
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <ArrowRight className="h-3 w-3 rotate-90" />
                <ArrowRight className="h-3 w-3 -rotate-90" />
                Navigate
              </span>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="text-xs">↩</span> Select
              </span>
              <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                <span className="text-xs">Esc</span> Close
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
