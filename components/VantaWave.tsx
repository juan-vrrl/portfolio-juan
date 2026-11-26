"use client"

import { useVantaEffect } from "@/components/use-vanta-effect"

const loadWavesEffect = () => import("vanta/dist/vanta.waves.min.js")

const wavesOptions = {
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x04121b,
  shininess: 50,
  waveHeight: 20,
  waveSpeed: 0.5,
  zoom: 1,
}

export default function VantaWave({
  children,
}: {
  children: React.ReactNode
}) {
  const vantaRef = useVantaEffect(loadWavesEffect, wavesOptions)

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
