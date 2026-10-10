'use client'

import React, { useRef, useEffect, ReactNode } from 'react'

export interface InteractiveSynapseNetworkProps {
  /** Content to render on top of the network canvas */
  children?: ReactNode
  /** Color of each node (CSS color string or CSS var) */
  nodeColor?: string
  /** Color of the traveling pulse (CSS color string or CSS var) */
  pulseColor?: string
  /** How many nodes to simulate */
  nodeCount?: number
  /** Maximum distance (px) for a connection */
  connectionRadius?: number
  /** Opacity of the fading background trail (0–1) */
  trailOpacity?: number
  /** ARIA label for assistive technologies */
  ariaLabel?: string
  /** Additional CSS classes on the wrapper */
  className?: string
  /** Whether canvas should capture pointer events or let them pass through */
  pointerEventsNone?: boolean
}

interface Pulse {
  start: Node
  end: Node
  progress: number
  speed: number
  update(): void
  draw(ctx: CanvasRenderingContext2D, color: string): void
}

class PulseImpl implements Pulse {
  start: Node
  end: Node
  progress = 0
  speed = 0.02

  constructor(s: Node, e: Node) {
    this.start = s
    this.end = e
  }

  update() {
    this.progress += this.speed
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    const x = this.start.x + (this.end.x - this.start.x) * this.progress
    const y = this.start.y + (this.end.y - this.start.y) * this.progress
    const prevProgress = Math.max(0, this.progress - 0.08)
    const prevX = this.start.x + (this.end.x - this.start.x) * prevProgress
    const prevY = this.start.y + (this.end.y - this.start.y) * prevProgress

    // Draw glowing pulse tail
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(x, y)
    ctx.strokeStyle = color
    ctx.lineWidth = 1.8
    ctx.stroke()

    // Draw head of pulse
    ctx.save()
    ctx.beginPath()
    ctx.arc(x, y, 2.8, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.shadowBlur = 10
    ctx.shadowColor = color
    ctx.fill()
    ctx.restore()
  }
}

class Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: Node[] = []
  pulses: Pulse[] = []
  activation = 0
  phase: number

  constructor(width: number, height: number) {
    this.x = Math.random() * width
    this.y = Math.random() * height
    this.vx = (Math.random() - 0.5) * 0.35
    this.vy = (Math.random() - 0.5) * 0.35
    this.radius = Math.random() * 1.5 + 2
    this.phase = Math.random() * Math.PI * 2
  }

  update(width: number, height: number, mouseX: number, mouseY: number, connectionRadius: number) {
    this.x += this.vx
    this.y += this.vy
    this.phase += 0.03

    // Bounce off edges smoothly
    if (this.x < 0) { this.x = 0; this.vx *= -1 }
    if (this.x > width) { this.x = width; this.vx *= -1 }
    if (this.y < 0) { this.y = 0; this.vy *= -1 }
    if (this.y > height) { this.y = height; this.vy *= -1 }

    // Proximity to mouse cursor: activates brightness on mouse movement
    const dx = this.x - mouseX
    const dy = this.y - mouseY
    const dist = Math.hypot(dx, dy)
    const interactionRadius = connectionRadius * 1.15
    const target = dist < interactionRadius ? Math.pow(1 - dist / interactionRadius, 1.5) : 0
    this.activation += (target - this.activation) * 0.12

    // Synaptic pulses: fire frequently on mouse interaction, rarely in background
    const hoverChance = this.activation > 0.2 ? 0.04 : 0.002

    if (
      Math.random() < hoverChance &&
      this.connections.length > 0 &&
      this.pulses.length < 2
    ) {
      const to = this.connections[Math.floor(Math.random() * this.connections.length)]
      if (to) {
        this.pulses.push(new PulseImpl(this, to))
      }
    }

    this.pulses = this.pulses.filter(p => p.progress < 1)
    for (let i = 0; i < this.pulses.length; i++) {
      this.pulses[i].update()
    }
  }

  draw(ctx: CanvasRenderingContext2D, nodeColor: string, pulseColor: string) {
    // Faded in the background without mouse (alpha ~0.20-0.25), bright on mouse movement (up to 1.0)
    const baseAlpha = 0.22 + Math.sin(this.phase) * 0.05
    const alpha = Math.min(1, baseAlpha + this.activation * 0.78)
    const fillStyle = nodeColor.startsWith('rgba')
      ? nodeColor.replace(/[^,]+(?=\))/, alpha.toFixed(2))
      : nodeColor

    // Fast-path: Only enable expensive shadow blur for actively illuminated neurons
    if (this.activation > 0.05) {
      ctx.save()
      const dynamicRadius = this.radius * (1 + this.activation * 0.45)
      ctx.beginPath()
      ctx.arc(this.x, this.y, dynamicRadius, 0, Math.PI * 2)
      ctx.shadowBlur = Math.round(14 * this.activation)
      ctx.shadowColor = '#00f0ff'
      ctx.fillStyle = fillStyle
      ctx.fill()
      ctx.restore()
    } else {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = fillStyle
      ctx.fill()
    }

    for (let i = 0; i < this.pulses.length; i++) {
      this.pulses[i].draw(ctx, pulseColor)
    }
  }
}

export const InteractiveSynapseNetwork: React.FC<InteractiveSynapseNetworkProps> = ({
  children,
  nodeColor = 'rgba(0,220,255,0.85)',
  pulseColor = 'rgba(255,255,255,1)',
  nodeCount = 50,
  connectionRadius = 180,
  trailOpacity = 0.2,
  ariaLabel = 'Interactive synapse network',
  className = '',
  pointerEventsNone = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    // Device-adaptive node density & connection radius for 60fps on mobile & desktop
    const isMobile = width < 768
    const isTablet = width >= 768 && width < 1024
    const effectiveNodeCount = isMobile
      ? Math.min(22, Math.floor(nodeCount * 0.45))
      : isTablet
      ? Math.min(34, Math.floor(nodeCount * 0.65))
      : nodeCount

    const effectiveRadius = isMobile
      ? Math.min(130, connectionRadius * 0.75)
      : isTablet
      ? Math.min(155, connectionRadius * 0.88)
      : connectionRadius

    // Initialize nodes
    nodesRef.current = Array.from({ length: effectiveNodeCount }, () => new Node(width, height))

    const updatePointerPos = (clientX: number, clientY: number) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
      } else {
        mouseRef.current = { x: clientX, y: clientY }
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      updatePointerPos(e.clientX, e.clientY)
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 }
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePointerPos(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    let touchFadeTimeout: NodeJS.Timeout
    const onTouchEnd = () => {
      clearTimeout(touchFadeTimeout)
      touchFadeTimeout = setTimeout(() => {
        mouseRef.current = { x: -9999, y: -9999 }
      }, 800)
    }

    let resizeTimeout: NodeJS.Timeout
    const onResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!canvas) return
        width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
        height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
      }, 100)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchstart', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('resize', onResize)

    let lastTime = performance.now()
    const targetFpsInterval = 1000 / 60
    let isVisible = true

    const onVisibilityChange = () => {
      isVisible = !document.hidden
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate)

      if (!isVisible) return

      const elapsed = currentTime - lastTime
      if (elapsed < targetFpsInterval - 1) return
      lastTime = currentTime - (elapsed % targetFpsInterval)

      // Clean transparent clear for crisp rendering and maximum performance
      ctx.clearRect(0, 0, width, height)

      const nodes = nodesRef.current
      const mouse = mouseRef.current

      // Reset dynamic connections each frame
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = []
      }

      // Draw connection lines: faded in background, bright on mouse/touch movement
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const d = Math.hypot(dx, dy)

          if (d < effectiveRadius) {
            n1.connections.push(n2)
            n2.connections.push(n1)

            const distFactor = 1 - d / effectiveRadius
            const maxActivation = Math.max(n1.activation, n2.activation)

            // Faded baseline in background (~0.06 to 0.15)
            const baseLineAlpha = distFactor * 0.12 + 0.05
            // Bright active line on movement (up to ~0.80)
            const activeBoost = maxActivation * 0.70
            const finalAlpha = Math.min(0.9, baseLineAlpha + activeBoost)

            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = `rgba(0, 220, 255, ${finalAlpha.toFixed(3)})`
            ctx.lineWidth = 1 + maxActivation * 1.0
            ctx.stroke()
          }
        }
      }

      // Update & draw nodes
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update(width, height, mouse.x, mouse.y, effectiveRadius)
        nodes[i].draw(ctx, nodeColor, pulseColor)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      clearTimeout(resizeTimeout)
      clearTimeout(touchFadeTimeout)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchstart', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onResize)
    }
  }, [nodeColor, pulseColor, nodeCount, connectionRadius, trailOpacity])

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={ariaLabel}
      className={`relative w-full h-full overflow-hidden bg-[hsl(var(--network-bg))] ${className}`}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full block ${pointerEventsNone ? 'pointer-events-none' : ''}`}
      />
      {children && <div className="relative z-10 w-full h-full">{children}</div>}
    </div>
  )
}

export default InteractiveSynapseNetwork
