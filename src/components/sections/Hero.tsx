"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Send,
  CheckCircle2,
  Brain,
  Cpu,
  Cloud,
  Code2,
} from "lucide-react";

const SPLINE_ROBOT_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export const Hero: React.FC = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  const floatingBadges = [
    { icon: Brain, label: "RAG & LangGraph", delay: 0 },
    { icon: Cpu, label: "LoRA / QLoRA Fine-tuning", delay: 0.15 },
    { icon: Cloud, label: "AWS EC2 & Docker", delay: 0.3 },
    { icon: Code2, label: "YOLO & Computer Vision", delay: 0.45 },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* ─── Full-viewport dark robot hero card ─── */}
      <div className="relative w-full min-h-screen flex flex-col lg:flex-row">
        {/* Mouse-tracking spotlight glow */}
        <Spotlight
          className="absolute top-1/3 left-1/4 z-10"
          size={500}
        />

        {/* ─── LEFT: Text Content ─── */}
        <div className="relative z-20 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 pt-28 pb-12 lg:pt-0 lg:w-[56%] xl:w-[52%] 2xl:w-[48%]">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 dark:bg-white/5 border border-slate-300 dark:border-white/10 backdrop-blur-sm text-xs font-mono text-slate-800 dark:text-neutral-200 mb-8 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-lg shadow-emerald-500/50" />
            <span className="uppercase tracking-widest font-semibold text-emerald-600 dark:text-emerald-400">Open to Work</span>
            <span className="text-slate-400 dark:text-neutral-500">·</span>
            <span className="text-slate-700 dark:text-neutral-300 font-medium">AI/ML Engineer</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-slate-700 dark:text-neutral-300 text-base sm:text-lg font-medium mb-3 tracking-wide"
          >
            Hi, I'm —
          </motion.p>

          {/* Name Headline (large, like Dymas Alfin reference) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="w-fit max-w-full text-4xl sm:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-none mb-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent overflow-visible pr-6 pb-2"
          >
            <span className="block pr-4">Abhishek</span>
            <span className="block pr-4">Sharma</span>
          </motion.h1>

          {/* Animated Rotating Keyword Subline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-baseline gap-3 mb-6 text-xl sm:text-2xl font-bold text-slate-800 dark:text-neutral-200"
          >
            <span>Building</span>
            <TextReveal words={siteConfig.headlineWords} />
          </motion.div>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="text-slate-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md mb-10 font-normal"
          >
            {siteConfig.subline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.84 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-all shadow-lg hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="/resume/Abhishek_Sharma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-slate-200/80 text-slate-900 border border-slate-300 hover:bg-slate-300 dark:bg-white/5 dark:text-white dark:border-white/10 dark:hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-neutral-300 dark:hover:text-white transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Contact Me
            </a>
          </motion.div>

          {/* 3 Stat Proof Chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.96 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          >
            {siteConfig.stats.map((chip, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 backdrop-blur-md shadow-sm dark:shadow-none"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white font-mono block leading-none">
                    {chip.number}
                  </span>
                  <span className="text-[11px] text-slate-600 dark:text-neutral-300 block leading-snug mt-1 font-medium">
                    {chip.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Floating Skill Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {floatingBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + badge.delay, duration: 0.4 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-semibold bg-slate-200/70 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-neutral-200 hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-white transition-all cursor-default"
                >
                  <Icon className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                  {badge.label}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── RIGHT: Spline 3D Robot ─── */}
        <div className="relative lg:w-[44%] xl:w-[48%] 2xl:w-[52%] h-[50vh] lg:h-screen flex items-center justify-center overflow-hidden">
          {/* Radial ambient glow behind robot */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 60% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)",
            }}
          />

          {/* Secondary ambient glow top-right (matching screenshots) */}
          <div
            className="absolute top-0 right-0 w-[55%] h-[55%] pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(ellipse at top right, rgba(255,255,255,0.06) 0%, transparent 65%)",
            }}
          />

          {/* The Spline 3D interactive robot */}
          <div className="absolute inset-0 z-10 pointer-events-none lg:pointer-events-auto">
            <SplineScene
              scene={SPLINE_ROBOT_SCENE}
              className="w-full h-full"
            />
          </div>

          {/* Bottom fade for seamless blending into page */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none bg-gradient-to-t from-slate-50 dark:from-[#050507] to-transparent"
          />

          {/* Scroll hint */}
          <div className="absolute bottom-8 right-8 z-30 hidden lg:flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-12 bg-white/30" />
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.2em] rotate-90 translate-y-4">
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* ─── Background subtle noise/gradient ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 50%, rgba(255,255,255,0.02) 0%, transparent 60%),
            radial-gradient(ellipse 50% 80% at 80% 20%, rgba(255,255,255,0.015) 0%, transparent 50%)
          `,
        }}
      />
    </section>
  );
};
