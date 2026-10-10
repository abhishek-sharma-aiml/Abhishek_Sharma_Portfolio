import React from "react";
import { ArrowRight, Cpu, Layers, Server } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

interface ArchitectureDiagramProps {
  title: string;
  diagramDescription: string;
  steps: Step[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({
  title,
  diagramDescription,
  steps,
}) => {
  return (
    <div className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h4>
          <p className="text-xs text-slate-600 dark:text-neutral-400">{diagramDescription}</p>
        </div>
        <span className="self-start sm:self-center px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10">
          Pipeline Flow
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="h-full bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl p-5 transition-all duration-300 group-hover:border-cyan-500/40 dark:group-hover:border-cyan-400/40 group-hover:shadow-md flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-full bg-slate-900 text-white dark:bg-cyan-500 dark:text-black text-xs font-bold flex items-center justify-center font-mono">
                  0{idx + 1}
                </span>
                {idx === 0 && <Layers className="w-4 h-4 text-slate-500 dark:text-neutral-400" />}
                {idx === 1 && <Cpu className="w-4 h-4 text-slate-500 dark:text-neutral-400" />}
                {idx === 2 && <Server className="w-4 h-4 text-slate-500 dark:text-neutral-400" />}
                {idx === 3 && <ArrowRight className="w-4 h-4 text-slate-500 dark:text-neutral-400" />}
              </div>

              <div>
                <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{step.title}</h5>
                <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed">{step.description}</p>
              </div>
            </div>

            {idx < steps.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-white/30">
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
