"use client";

import React from "react";
import { motion } from "framer-motion";

interface CountUpProps {
  value: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({ value, className = "" }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={className}
    >
      {value}
    </motion.span>
  );
};
