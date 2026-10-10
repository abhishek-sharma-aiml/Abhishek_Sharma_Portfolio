"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { InteractiveSynapseNetwork } from "@/components/ui/interactive-synapse-network";

export const BackgroundNetwork: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";

  return (
    <InteractiveSynapseNetwork
      pointerEventsNone
      nodeCount={50}
      connectionRadius={180}
      nodeColor={isLight ? "rgba(2, 132, 199, 0.85)" : "rgba(0, 220, 255, 0.85)"}
      pulseColor={isLight ? "rgba(14, 165, 233, 1)" : "rgba(255, 255, 255, 1)"}
      className="w-full h-full"
    />
  );
};
