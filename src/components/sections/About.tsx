import React from "react";
import { siteConfig } from "@/data/site";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { Cpu, Server, Cloud, Terminal } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white/70 dark:bg-black/40 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Header */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                01. About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Full-Stack ML Engineering.
              </h2>

              {/* Profile Card */}
              <div className="flex items-center gap-3.5 p-3.5 bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md shadow-sm">
                <img
                  src="/images/profile/abhishek-square.png"
                  alt="Abhishek Sharma"
                  className="w-12 h-12 rounded-xl object-cover object-top ring-2 ring-cyan-500/30 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    Abhishek Sharma
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5 font-mono">
                    Devexhub · AI/ML Engineer
                  </p>
                </div>
              </div>

              {/* Stack pillar badges */}
              <div className="pt-4 space-y-2.5">
                <div className="flex items-center gap-3 p-3.5 bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md shadow-sm dark:shadow-none">
                  <Cpu className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200">
                    Agentic LLMs & RAG (LangGraph, LangSmith, LoRA/QLoRA)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md shadow-sm dark:shadow-none">
                  <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200">
                    Computer Vision Pipelines (YOLO, SAM, Depth Anything)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md shadow-sm dark:shadow-none">
                  <Cloud className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-neutral-200">
                    Production Cloud & Automation (AWS EC2/Lambda, Docker, Celery)
                  </span>
                </div>
              </div>
            </div>

            {/* Right Paragraph Content */}
            <div className="lg:col-span-8 bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
                <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-neutral-400">
                  About me
                </span>
              </div>

              <div className="space-y-5 text-slate-700 dark:text-neutral-300 text-base leading-relaxed">
                {siteConfig.aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-slate-700 dark:text-neutral-300 font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Target Roles summary badge */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400">Target Roles:</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-black">
                  AI/ML Engineer
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-neutral-200">
                  Computer Vision Engineer
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-neutral-200">
                  GenAI Architect
                </span>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
};
