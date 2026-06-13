"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isTouch, setIsTouch] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const ringX = useSpring(cursorX, { damping: 40, stiffness: 150 });
  const ringY = useSpring(cursorY, { damping: 40, stiffness: 150 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      const isPointerElement =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button";

      const isTextElement =
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.tagName === "H4" ||
        target.tagName === "LABEL" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA";

      setIsPointer(!!isPointerElement);
      setIsText(!!isTextElement && !isPointerElement);
      setIsHidden(false);
    },
    [cursorX, cursorY]
  );

  const handleMouseLeave = useCallback(() => {
    setIsHidden(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHidden(false);
  }, []);

  useEffect(() => {
    // Check for touch device
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  if (isTouch) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          animate={{
            scale: isPointer ? 1.5 : 1,
            opacity: isHidden ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="-translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 48 : isText ? 40 : 32,
            height: isPointer ? 48 : isText ? 40 : 32,
            opacity: isHidden ? 0 : 1,
            borderColor: isPointer
              ? "rgba(59, 130, 246, 0.5)"
              : "rgba(59, 130, 246, 0.25)",
          }}
          transition={{ duration: 0.2 }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        />
      </motion.div>
    </>
  );
}
