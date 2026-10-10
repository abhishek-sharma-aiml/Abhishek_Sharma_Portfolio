import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { MetricsGrid } from "@/components/project/MetricsGrid";
import { BeforeAfterSlider } from "@/components/project/BeforeAfterSlider";
import { VideoShowcase } from "@/components/project/VideoShowcase";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, User, Check, Layers, FolderTree, Film } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

interface PageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050507] text-slate-900 dark:text-white flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Breadcrumb & Navigation */}
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <span className="text-xs font-mono font-medium text-slate-500 dark:text-neutral-400">
              Case Study / {project.slug}
            </span>
          </div>

          {/* Case Study Header Block */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-10 space-y-6 shadow-md dark:shadow-2xl backdrop-blur-md">
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 dark:bg-white/5 text-cyan-700 dark:text-cyan-300 border border-slate-200 dark:border-white/10">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-slate-600 dark:text-neutral-400 font-medium leading-relaxed">
                {project.oneLineOutcome}
              </p>
            </div>

            {/* Quick Link Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-white/10">
              {(project.liveDemoUrl || caseStudy.demoUrl) && (
                <a
                  href={project.liveDemoUrl || caseStudy.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Website ({project.liveDemoUrl})
                </a>
              )}
              {(project.githubUrl || caseStudy.githubUrl) && (
                <a
                  href={project.githubUrl || caseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              )}
            </div>
          </div>

          {/* Video Showcase Section (afternow.co video player reference) */}
          {project.demoVideo && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-portfolio-primary font-bold text-lg">
                <Film className="w-5 h-5 text-portfolio-primary" />
                <h3>Project Video Demonstration (Original Quality HD)</h3>
              </div>
              <VideoShowcase
                videoUrl={project.demoVideo}
                title={`${project.title} — Real-Time Demo`}
                subtitle={project.oneLineOutcome}
                posterImage={project.thumbnail}
              />
            </div>
          )}

          {/* Project Screenshot Showcase (StatCut & HR Portal) */}
          {project.slug === "statcut-ai" && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-portfolio-primary">StatCut Live Interface Preview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-portfolio-white border border-portfolio-border rounded-2xl overflow-hidden shadow-card p-2 space-y-2">
                  <img
                    src="/images/projects/statcut/hero.png"
                    alt="StatCut Landing Page"
                    className="w-full rounded-xl border border-portfolio-border"
                  />
                  <p className="text-xs text-portfolio-secondary text-center py-1 font-medium">
                    StatCut Landing Page — Performance AI for Team Sports
                  </p>
                </div>
                <div className="bg-portfolio-white border border-portfolio-border rounded-2xl overflow-hidden shadow-card p-2 space-y-2">
                  <img
                    src="/images/projects/statcut/dashboard.png"
                    alt="StatCut Analytics Dashboard"
                    className="w-full rounded-xl border border-portfolio-border"
                  />
                  <p className="text-xs text-portfolio-secondary text-center py-1 font-medium">
                    StatCut Dark Analytics Dashboard — Biometrics & Shot Accuracy
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.slug === "hr-portal" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-portfolio-primary">Devex Hub HR Portal Interface</h3>
              <div className="bg-portfolio-white border border-portfolio-border rounded-2xl overflow-hidden shadow-card p-3 space-y-2">
                <img
                  src="/images/projects/hr-portal/login.png"
                  alt="Devex Hub HR Portal Login"
                  className="w-full rounded-xl border border-portfolio-border max-h-[480px] object-cover object-top"
                />
                <p className="text-xs text-portfolio-secondary text-center py-1 font-medium">
                  Devex Hub HR Portal — Unified Operations & Secure Onboarding/Clearance
                </p>
              </div>
            </div>
          )}

          {/* Interactive Demo Block & Precision Editor (If Plug Zero) */}
          {project.slug === "plug-zero" && (
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Plug Zero Precision Editor Interface
                </h3>
                <div className="bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-lg dark:shadow-2xl p-3 sm:p-4 space-y-2 backdrop-blur-md">
                  <img
                    src="/images/projects/plugzero/precision-editor.png"
                    alt="Plug Zero Precision Editor — Interactive 2D View & AI 3D Render"
                    className="w-full rounded-xl border border-slate-200 dark:border-white/10 shadow-sm"
                  />
                  <p className="text-xs text-slate-600 dark:text-neutral-400 text-center py-1 font-medium">
                    Plug Zero Precision Editor — Interactive 2D label placement, curvature depth controls (48%), and real-time photorealistic AI 3D cylinder warp render.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg dark:shadow-2xl backdrop-blur-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  Interactive Before & After Curvature Warp Slider
                </h3>
                <BeforeAfterSlider />
              </div>
            </div>
          )}

          {/* RAG Chatbot UI Interface Showcase */}
          {project.slug === "rag-chatbot" && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Enterprise RAG Chatbot Knowledge & Chat Interface</h3>
              <div className="bg-neutral-900/80 border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-3 space-y-2 backdrop-blur-md">
                <img
                  src="/images/projects/rag-chatbot/ui-preview.jpg"
                  alt="Enterprise RAG Chatbot White & Red UI"
                  className="w-full rounded-xl border border-white/10 object-cover shadow-lg"
                />
                <p className="text-xs text-neutral-400 text-center py-1 font-medium">
                  RAG Chatbot Desktop Interface — Knowledge Ingestion, Vector Indexing & Source-Attributed Chat
                </p>
              </div>
            </div>
          )}

          {/* Special Architecture Showcase for Football Match Video Analysis */}
          {project.slug === "football-analysis" && (
            <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-neutral-800 font-mono">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <FolderTree className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">football_analytics_project/ Repository Structure</h3>
                </div>
                <span className="text-xs text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                  100% Free Stack
                </span>
              </div>

              <pre className="text-xs text-slate-300 overflow-x-auto leading-relaxed p-4 bg-black/60 rounded-xl border border-neutral-800">
{`football_analytics_project/
├── config.yaml                       # TUNABLE PARAMETERS (Pitch 105m x 68m)
├── main.py                           # 10-stage pipeline orchestrator
├── run.py                            # CLI entry point (--demo synthetic generator)
│
├── src/                              # Core pipeline modules
│   ├── scene_filter.py               # Green grass ratio scene filter
│   ├── detector.py                   # YOLO detector wrapper (best.pt / yolov8x.pt)
│   ├── tracker.py                    # ByteTrack tracker + stub caching (.pkl)
│   ├── team_assigner.py              # Torso HSV + 2-cluster K-Means color classifier
│   ├── camera_movement.py            # Lucas-Kanade Optical Flow estimator
│   ├── homography.py                 # Pixel -> meters transform (105m x 68m)
│   ├── jersey_ocr.py                 # SmolVLM2 jersey number extraction
│   ├── analytics_engine.py           # Speed, distance, possession, heatmaps
│   ├── event_detector.py             # Foul & card candidate rule engine
│   └── visualizer.py                 # Annotations, heatmaps & mini-map overlay
│
└── reports/                          # Generated analytics reports
    ├── stats_player.csv              # Player biometric exports
    ├── events.csv                    # Foul & card candidate log
    ├── heatmap.png                   # Spatial position distribution
    └── dashboard.html                # Interactive HTML dashboard`}
              </pre>
            </div>
          )}

          {/* Results & Metrics */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Proven Quantitative Results & Cost Metrics</h3>
            <MetricsGrid results={caseStudy.results} />
          </div>

          {/* 1. Overview */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-md dark:shadow-2xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              01. Overview
            </h3>
            <p className="text-base text-slate-700 dark:text-neutral-300 leading-relaxed font-normal">
              {caseStudy.overview}
            </p>
          </div>

          {/* 2. Problem */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-md dark:shadow-2xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              02. The Problem
            </h3>
            <p className="text-base text-slate-700 dark:text-neutral-300 leading-relaxed font-normal">
              {caseStudy.problem}
            </p>
          </div>

          {/* 3. My Role */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-md dark:shadow-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0 mt-1">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                03. Technical Ownership
              </h3>
              <p className="text-base font-semibold text-slate-900 dark:text-white mt-1">
                {caseStudy.myRole}
              </p>
            </div>
          </div>

          {/* 4. Architecture Diagram */}
          <ArchitectureDiagram
            title={caseStudy.architecture.title}
            diagramDescription={caseStudy.architecture.diagramDescription}
            steps={caseStudy.architecture.steps}
          />

          {/* 5. Key Features */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md dark:shadow-2xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              05. Key Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-700 dark:text-neutral-200 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Technical Challenges */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-2xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              06. Technical Challenges & Solutions
            </h3>
            <div className="space-y-4">
              {caseStudy.technicalChallenges.map((tc, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl p-5 space-y-3"
                >
                  <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider block">
                        Challenge #{idx + 1}
                      </span>
                      <p className="text-xs text-slate-900 dark:text-white font-medium mt-0.5">{tc.challenge}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-white/10">
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500 dark:text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-slate-700 dark:text-neutral-300 leading-relaxed mt-0.5">{tc.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Tech Stack Grouped */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-md dark:shadow-2xl">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              07. Grouped Tech Stack
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.techStackGrouped.map((grp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl p-4 space-y-2"
                >
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">
                    {grp.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {grp.tags.map((tg) => (
                      <span
                        key={tg}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-white/5 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-white/10"
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 8. What I'd Improve */}
          <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-3 shadow-md dark:shadow-2xl">
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                08. What I Would Improve
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-neutral-300 leading-relaxed font-normal bg-slate-50 dark:bg-white/[0.04] p-4 rounded-xl border border-slate-200 dark:border-white/10 italic">
              "{caseStudy.whatIWouldImprove}"
            </p>
          </div>

          {/* Bottom Back Button */}
          <div className="pt-6 text-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all shadow-md"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
