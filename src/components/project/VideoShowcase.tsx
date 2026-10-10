"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Maximize2, Volume2, VolumeX, Sparkles, Film } from "lucide-react";

interface VideoShowcaseProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
  posterImage?: string;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({
  videoUrl,
  title,
  subtitle,
  posterImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl group">
      {/* Top Header Bar inside Video Container (afternow.co style) */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 sm:p-6 flex items-center justify-between bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
            HD Demo Video
          </span>
        </div>
        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-white/10 backdrop-blur-md text-white border border-white/20">
          Original Quality
        </span>
      </div>

      {/* HTML5 Video Player */}
      <div className="relative aspect-video w-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterImage}
          playsInline
          loop
          muted={isMuted}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Big Center Play Button (Visible when paused) */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-portfolio-primary/90 text-white flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-md hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Play Video"
          >
            <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
          </button>
        )}

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end justify-between transition-opacity duration-300">
          <div className="space-y-1">
            <h4 className="text-base sm:text-xl font-bold text-white">{title}</h4>
            {subtitle && <p className="text-xs sm:text-sm text-neutral-300">{subtitle}</p>}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={togglePlay}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={handleFullscreen}
              className="p-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors"
              aria-label="Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
