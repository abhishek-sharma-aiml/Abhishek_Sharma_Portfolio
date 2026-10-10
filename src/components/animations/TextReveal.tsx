"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TextRevealProps {
  words: string[];
}

export const TextReveal: React.FC<TextRevealProps> = ({ words }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="inline-flex min-w-[180px] sm:min-w-[240px] h-[1.2em] overflow-hidden align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="font-extrabold whitespace-nowrap block bg-gradient-to-r from-cyan-600 via-sky-600 to-slate-900 dark:from-white dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent pr-2"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
