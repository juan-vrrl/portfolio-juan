"use client"

import { useVantaEffect } from "@/components/use-vanta-effect"

const loadFogEffect = () => import("vanta/dist/vanta.fog.min.js")

const fogOptions = {
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  highlightColor: 0x5f5f61,
  midtoneColor: 0x3e3b3b,
  lowlightColor: 0xf0f2f,
  baseColor: 0x04121b,
  blurFactor: 0.5,
  speed: 0.8,
}

export default function VantaFog({
  children,
}: {
  children: React.ReactNode
}) {
  const vantaRef = useVantaEffect(loadFogEffect, fogOptions)

  return (
    <>
      <div
        ref={vantaRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full bg-[#04121b]"
      />
      <div className="relative z-10 min-h-screen">{children}</div>
    </>
  )
}
