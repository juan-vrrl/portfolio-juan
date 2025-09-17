// Vanta.js type declarations
declare module "vanta/dist/vanta.waves.min.js" {
  interface VantaWavesOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function WAVES(options: VantaWavesOptions): VantaEffect;
  export default WAVES;
}

declare module "vanta/dist/vanta.birds.min.js" {
  interface VantaBirdsOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    backgroundColor?: number;
    backgroundAlpha?: number;
    color1?: number;
    color2?: number;
    wingSpan?: number;
    separation?: number;
    alignment?: number;
    cohesion?: number;
    quantity?: number;
    birdSize?: number;
    speedLimit?: number;
  }

  interface VantaEffect {
    destroy(): void;
  }

  function BIRDS(options: VantaBirdsOptions): VantaEffect;
  export default BIRDS;
}

declare module "vanta/dist/vanta.fog.min.js" {
  interface VantaFogOptions {
    el: HTMLElement;
    THREE?: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    highlightColor?: number;
    midtoneColor?: number;
    lowlightColor?: number;
    baseColor?: number;
    blurFactor?: number;
    speed?: number;
  }
  
  interface VantaEffect {
    destroy(): void;
  }
  function FOGS(options: VantaFogOptions): VantaEffect;
  export default FOGS;
}

// Three.js type declaration
declare module "three" {
  const THREE: any;
  export = THREE;
}

// AOS (Animate On Scroll) type declarations
declare module "aos" {
  interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: boolean | string | (() => boolean);
    startEvent?: string;
    initClassName?: string;
    animatedClassName?: string;
    useClassNames?: boolean;
    disableMutationObserver?: boolean;
    throttleDelay?: number;
    debounceDelay?: number;
  }

  interface AOSInstance {
    init(options?: AOSOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOSInstance;
  export default AOS;
}
