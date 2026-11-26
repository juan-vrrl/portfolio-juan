export type VantaVariant = "birds" | "fog" | "waves"

type VantaModule = {
  default: (...args: any[]) => unknown
}

type VantaEffectConfig = {
  load: () => Promise<VantaModule>
  options: Record<string, unknown>
}

export const VANTA_EFFECTS: Record<VantaVariant, VantaEffectConfig> = {
  birds: {
    load: () => import("vanta/dist/vanta.birds.min.js"),
    options: {
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
    },
  },
  fog: {
    load: () => import("vanta/dist/vanta.fog.min.js"),
    options: {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x5f5f61,
      midtoneColor: 0x3e3b3b,
      lowlightColor: 0xf0f2f,
      baseColor: 0x04121b,
      blurFactor: 0.5,
      speed: 0.8,
    },
  },
  waves: {
    load: () => import("vanta/dist/vanta.waves.min.js"),
    options: {
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
    },
  },
}
