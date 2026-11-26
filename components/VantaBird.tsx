"use client"

import { useVantaEffect } from "@/components/use-vanta-effect"

const loadBirdsEffect = () => import("vanta/dist/vanta.birds.min.js")

const birdsOptions = {
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x04121b,
  backgroundAlpha: 1.0,
  color1: 0x373333,
  color2: 0x186fbe,
  birdSize: 0.8,
  quantity: 4.0,
  speedLimit: 7.0,
  separation: 50.0,
  alignment: 20.0,
  cohesion: 20.0,
}

export default function VantaBird({
  children,
}: {
  children: React.ReactNode
}) {
  const vantaRef = useVantaEffect(loadBirdsEffect, birdsOptions)

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
