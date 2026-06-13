"use client";

import { useState, useEffect, useCallback } from "react";

export function useTypewriter(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isPaused) return;

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
      if (text.length === 1) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      setText(currentWord.substring(0, text.length + 1));
      if (text.length === currentWord.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    }
  }, [text, wordIndex, isDeleting, isPaused, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}
