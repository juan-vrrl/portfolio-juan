"use client"

import { useEffect, useRef, useState } from "react"

interface VantaEffect {
  destroy(): void;
}

export default function VantaWave({
  children,
}: {
  children: React.ReactNode
}) {
  const vantaRef = useRef<HTMLDivElement | null>(null)
  const [vantaEffect, setVantaEffect] = useState<VantaEffect | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !vantaRef.current || vantaEffect) return

    const initVanta = async () => {
      try {
        const [{ default: WAVES }, THREE] = await Promise.all([
          import("vanta/dist/vanta.waves.min.js"),
          import("three")
        ])

        if (vantaRef.current) {
          const effect = WAVES({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x04121B,
            shininess: 50,
            waveHeight: 20,
            waveSpeed: 0.5,
            zoom: 0.75,
          })
          setVantaEffect(effect)
        }
      } catch (error) {
        console.error("Error initializing Vanta Waves effect:", error)
      }
    }

    initVanta()
  }, [isClient, vantaEffect])

  useEffect(() => {
    return () => {
      if (vantaEffect) {
        try {
          vantaEffect.destroy()
        } catch (error) {
          console.warn("Error destroying Vanta Waves effect:", error)
        }
        setVantaEffect(null)
      }
    }
  }, [vantaEffect])

  if (!isClient) {
    return (
      <>
        <div className="fixed inset-0 w-full h-full bg-[#04121B] z-0" />
        <div className="relative z-10 min-h-screen">{children}</div>
      </>
    )
  }

  return (
    <>
      <div ref={vantaRef} className="fixed inset-0 w-full h-full z-0" />
      <div className="relative z-10 min-h-screen">{children}</div>
    </>
  )
}
