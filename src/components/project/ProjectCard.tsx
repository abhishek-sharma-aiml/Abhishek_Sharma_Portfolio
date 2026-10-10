"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowUpRight, Github, ExternalLink, Play, Film } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group relative backdrop-blur-md"
    >
      {/* Top Media Showcase Frame (afternow.co video & photo style) */}
      <div className="relative h-56 sm:h-64 w-full bg-slate-950 border-b border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center">
        {project.demoVideo ? (
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              src={project.demoVideo}
              poster={project.thumbnail}
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Video Play Badge overlay */}
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-white/10 backdrop-blur-md text-white border border-white/20">
              <Play className="w-3 h-3 fill-white" />
              <span>{isHovered ? "PLAYING" : "VIDEO DEMO"}</span>
            </div>
          </div>
        ) : project.thumbnail && project.thumbnail.startsWith("/images/") ? (
          <div className="relative w-full h-full overflow-hidden bg-slate-900">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ) : null}

        {/* Category Tag pill */}
        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-500/20 shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Card Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/projects/${project.slug}/`}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              {project.title}
              <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-neutral-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </h3>
          </Link>
          <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed font-normal">
            {project.oneLineOutcome}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-2">
          <Link
            href={`/projects/${project.slug}/`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 transition-colors shadow-sm"
          >
            Case Study
            {project.demoVideo && <Film className="w-3.5 h-3.5" />}
          </Link>

          <div className="flex items-center space-x-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                title="GitHub Repository"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white transition-colors"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
