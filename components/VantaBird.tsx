"use client";

import { useEffect, useRef, useState } from "react";

interface VantaEffect {
  destroy(): void;
}

export default function VantaBird({
  children,
}: {
  children: React.ReactNode;
}) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<VantaEffect | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !vantaRef.current || effectRef.current) return;

    const initVanta = async () => {
      try {
        const [{ default: BIRDS }, THREE] = await Promise.all([
          import("vanta/dist/vanta.birds.min.js"),
          import("three")
        ]);

        if (vantaRef.current) {
          effectRef.current = BIRDS({
            el: vantaRef.current,
            THREE,
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
          });
        }
      } catch (error) {
        console.error("Error initializing Vanta Birds effect:", error);
      }
    };

    initVanta();

    return () => {
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (error) {
          console.warn("Error destroying Vanta Birds effect:", error);
        }
        effectRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="relative h-screen w-full bg-[#04121b]">
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  }

  return (
    <div ref={vantaRef} className="relative h-screen w-full">
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
