import React from "react";
import { CountUp } from "@/components/animations/CountUp";

interface Metric {
  metric: string;
  value: string;
  description: string;
}

interface MetricsGridProps {
  results: Metric[];
}

export const MetricsGrid: React.FC<MetricsGridProps> = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {results.map((res, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-neutral-900/80 border border-slate-200 dark:border-white/10 rounded-xl p-5 flex flex-col justify-between space-y-2 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-colors shadow-sm dark:shadow-none"
        >
          <span className="text-xs font-semibold text-slate-500 dark:text-neutral-400 uppercase tracking-wider font-mono">
            {res.metric}
          </span>
          <CountUp
            value={res.value}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono"
          />
          <p className="text-xs text-slate-600 dark:text-neutral-400 leading-snug">{res.description}</p>
        </div>
      ))}
    </div>
  );
};
