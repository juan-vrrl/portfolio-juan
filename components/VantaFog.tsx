"use client";

import { useEffect, useRef, useState } from "react";

interface VantaEffect {
  destroy(): void;
}

export default function VantaFog({
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
        const [{ default: FOGS }, THREE] = await Promise.all([
          import("vanta/dist/vanta.fog.min.js"),
          import("three")
        ]);

        if (vantaRef.current) {
          effectRef.current = FOGS({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0x5f5f61,
            midtoneColor: 0x3e3b3b,
            lowlightColor: 0xf0f2f,
            baseColor: 0x04121B,
            blurFactor: 0.5,
            speed: 0.8,
          });
        }
      } catch (error) {
        console.error("Error initializing Vanta Fog effect:", error);
      }
    };

    initVanta();

    return () => {
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (error) {
          console.warn("Error destroying Vanta Fog effect:", error);
        }
        effectRef.current = null;
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="relative h-screen w-full bg-[#04121B]">
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
