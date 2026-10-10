import React from "react";
import { skillCategories } from "@/data/skills";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { Cpu, Server, Cloud } from "lucide-react";

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white/70 dark:bg-black/40 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              03. Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Skills & Tech Stack
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <FadeInOnScroll key={cat.title} delay={idx * 0.1}>
              <div className="h-full bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-md hover:border-cyan-500/40 dark:hover:border-cyan-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-300 shadow-sm">
                    {idx === 0 && <Cpu className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
                    {idx === 1 && <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                    {idx === 2 && <Cloud className="w-6 h-6 text-sky-600 dark:text-sky-400" />}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-200 border border-slate-200 dark:border-white/10 shadow-sm hover:border-cyan-500/50 hover:text-cyan-800 dark:hover:border-white/25 dark:hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
