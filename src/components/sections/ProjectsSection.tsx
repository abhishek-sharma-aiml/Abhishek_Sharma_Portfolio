import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { FadeInOnScroll } from "@/components/animations/FadeInOnScroll";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-100/70 dark:bg-black/50 backdrop-blur-sm border-b border-slate-200 dark:border-white/10 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                02. Featured Projects
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
                Production-Grade AI & Vision Systems
              </h2>
            </div>
            <p className="text-sm text-slate-600 dark:text-neutral-400 max-w-md">
              Every project includes custom model training, API backend, quantitative metrics, and detailed architecture case studies.
            </p>
          </div>
        </FadeInOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeInOnScroll key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
