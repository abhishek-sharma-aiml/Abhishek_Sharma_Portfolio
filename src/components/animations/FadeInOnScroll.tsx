"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({
  children,
  className = "",
  delay = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
