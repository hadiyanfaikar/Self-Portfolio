"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navItems } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export function MobileNav({ open, onClose, onNavigate }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-72 glass-strong shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-semibold text-foreground">Navigation</span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-muted"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => onNavigate(item.href)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-xs font-medium text-primary">
                    {i + 1}
                  </span>
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
