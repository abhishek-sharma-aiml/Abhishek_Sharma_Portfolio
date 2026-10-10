'use client'

import React, { Suspense, useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'

const Spline = dynamic(() => import('@splinetool/react-spline/next'), { ssr: false })

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (splineApp: any) => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const splineAppRef = useRef<any>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!splineAppRef.current) return
        if (entry.isIntersecting) {
          try { splineAppRef.current.play() } catch (_) {}
        } else {
          try { splineAppRef.current.stop() } catch (_) {}
        }
      },
      { threshold: 0.05, rootMargin: '120px' }
    )

    observer.observe(el)

    const handleVisibilityChange = () => {
      if (!splineAppRef.current) return
      if (document.hidden) {
        try { splineAppRef.current.stop() } catch (_) {}
      } else {
        try { splineAppRef.current.play() } catch (_) {}
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const handleSplineLoad = (app: any) => {
    splineAppRef.current = app
    if (onLoad) onLoad(app)
  }

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className || ''}`}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-transparent">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <span className="text-xs text-white/40 font-mono tracking-widest uppercase">Loading 3D Scene</span>
            </div>
          </div>
        }
      >
        <Spline
          scene={scene}
          onLoad={handleSplineLoad}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  )
}
