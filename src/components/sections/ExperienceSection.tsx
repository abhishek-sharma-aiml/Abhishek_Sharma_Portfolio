import React from "react";
import { experienceItems } from "@/data/experience";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-100/70 dark:bg-black/50 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeInOnScroll>
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              04. Work History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Engineering Experience
            </h2>
          </div>
        </FadeInOnScroll>

        <div className="relative border-l-2 border-slate-300 dark:border-white/15 ml-3 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {experienceItems.map((item, idx) => (
            <FadeInOnScroll key={item.id} delay={idx * 0.1}>
              <div className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-neutral-900 border-2 border-cyan-500 dark:border-cyan-400 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-md group-hover:bg-cyan-500 group-hover:text-white dark:group-hover:bg-cyan-400 dark:group-hover:text-black transition-colors">
                  <Briefcase className="w-3 h-3" />
                </div>

                <div className="bg-white/90 dark:bg-neutral-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-md hover:border-cyan-500/40 dark:hover:border-cyan-400/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-neutral-400">{item.company}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-xs font-mono text-slate-500 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bullet points: "Built X using Y, which achieved Z" */}
                  <ul className="space-y-3 text-sm text-slate-700 dark:text-neutral-300">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/10"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
