'use client'

import React from 'react'
import InteractiveSynapseNetwork, {
  InteractiveSynapseNetworkProps,
} from '@/components/ui/interactive-synapse-network'

export const InteractiveSynapseNetworkDemo = () => {
  const glowStyle = '0 0 5px #00dcff, 0 0 10px #00dcff'
  const demoProps: InteractiveSynapseNetworkProps = {
    nodeColor: 'rgba(0,220,255,0.8)',
    pulseColor: 'rgba(255,255,255,1)',
    nodeCount: 60,
    connectionRadius: 180,
    trailOpacity: 0.15,
    className: 'flex items-center justify-center min-h-[450px]',
  }

  return (
    <InteractiveSynapseNetwork {...demoProps}>
      <div className="text-center select-none py-12 px-4">
        <div className="px-8 py-6 bg-black/40 backdrop-blur-md rounded-2xl border border-cyan-500/20 max-w-lg mx-auto shadow-2xl">
          <h1
            className="text-4xl sm:text-6xl font-bold uppercase tracking-widest text-cyan-200 font-mono"
            style={{ textShadow: glowStyle }}
          >
            Synapse
          </h1>
          <h2 className="mt-2 text-base sm:text-xl uppercase tracking-wider text-cyan-200/70 font-sans">
            Interactive Neural Network
          </h2>
        </div>
        <p className="mt-6 text-xs sm:text-sm text-cyan-200/50 font-mono">
          The cursor excites the neural pathways.
        </p>
      </div>
    </InteractiveSynapseNetwork>
  )
}

export default InteractiveSynapseNetworkDemo
