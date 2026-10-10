"use client";

import React, { useState, useRef, useCallback } from "react";
import { SlidersHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeLabel = "Original Image",
  afterLabel = "AI Placed Mockup (Plug Zero)",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold text-portfolio-secondary px-1">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-portfolio-secondary/60"></span>
          {beforeLabel}
        </span>
        <span className="flex items-center gap-1.5 text-portfolio-primary">
          <span className="w-2 h-2 rounded-full bg-portfolio-primary"></span>
          {afterLabel}
        </span>
      </div>

      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-portfolio-border bg-portfolio-tertiary select-none cursor-ew-resize shadow-card"
      >
        {/* AFTER IMAGE (Background - Photorealistic placement) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1E293B] via-[#0F172A] to-[#334155] flex flex-col items-center justify-center text-white p-6">
          <div className="relative w-48 h-56 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 p-4 flex flex-col items-center justify-center space-y-3 shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 font-bold text-lg shadow-inner">
              PLUG ZERO
            </div>
            <p className="text-xs font-medium text-slate-200 text-center">
              SAM + Depth Anything 3D Texture Warp & Light Blend
            </p>
          </div>
          <span className="absolute bottom-4 right-4 bg-portfolio-primary/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
            AI Placement Render
          </span>
        </div>

        {/* BEFORE IMAGE (Clipped Foreground - Plain product image) */}
        <div
          style={{ width: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 left-0 overflow-hidden bg-portfolio-tertiary border-r border-portfolio-white/80"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-stone-200 via-neutral-100 to-stone-50 flex flex-col items-center justify-center text-portfolio-primary p-6">
            <div className="w-48 h-56 bg-white rounded-xl border border-portfolio-border p-4 flex flex-col items-center justify-center space-y-3 shadow-sm">
              <div className="w-20 h-20 rounded-full border border-dashed border-portfolio-secondary flex items-center justify-center text-portfolio-secondary text-xs font-medium">
                Plain Bottle
              </div>
              <p className="text-xs text-portfolio-secondary text-center">Unbranded Product Sample</p>
            </div>
            <span className="absolute bottom-4 left-4 bg-portfolio-secondary/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              Original Base
            </span>
          </div>
        </div>

        {/* DRAG HANDLE BAR */}
        <div
          style={{ left: `${sliderPosition}%` }}
          className="absolute top-0 bottom-0 w-1 bg-portfolio-white shadow-2xl transform -translate-x-1/2 flex items-center justify-center pointer-events-none z-10"
        >
          <div className="w-8 h-8 rounded-full bg-portfolio-primary text-portfolio-white flex items-center justify-center shadow-lg border-2 border-portfolio-white">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs text-portfolio-secondary">
        Drag slider left and right to inspect zero-shot curvature warp and ambient lighting integration.
      </p>
    </div>
  );
};
