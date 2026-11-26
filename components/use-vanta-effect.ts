"use client"

import { useEffect, useRef } from "react"

export type VantaEffectInstance = {
  destroy(): void
}

type VantaModule = {
  default: (...args: any[]) => VantaEffectInstance
}

/* Rendering above 2x costs up to 9x the pixels for little visible gain. */
const MAX_PIXEL_RATIO = 2

/**
 * Boots a Vanta effect after the page has loaded and the main thread is idle.
 * The static background shows immediately, so deferring WebGL + three.js keeps
 * hydration and first paint free of the most expensive work.
 */
export function useVantaEffect(
  loadEffect: () => Promise<VantaModule>,
  options: Record<string, unknown>
) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const optionsRef = useRef(options)
  optionsRef.current = options

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let cancelled = false
    let effect: VantaEffectInstance | null = null
    let idleHandle: number | undefined
    let timeoutHandle: ReturnType<typeof setTimeout> | undefined

    const init = async () => {
      const el = containerRef.current
      if (cancelled || !el) return

      try {
        const [module, THREE] = await Promise.all([loadEffect(), import("three")])
        if (cancelled || !containerRef.current) return

        const baseOptions = optionsRef.current
        const minScale = (window.devicePixelRatio || 1) / MAX_PIXEL_RATIO
        const scale = Math.max(
          typeof baseOptions.scale === "number" ? baseOptions.scale : 1,
          minScale
        )
        const scaleMobile =
          typeof baseOptions.scaleMobile === "number"
            ? Math.max(baseOptions.scaleMobile, minScale)
            : undefined

        effect = module.default({
          ...baseOptions,
          el: containerRef.current,
          THREE,
          scale,
          ...(scaleMobile !== undefined ? { scaleMobile } : {}),
        })
      } catch (error) {
        console.error("[vanta] failed to initialize background effect", error)
      }
    }

    const schedule = () => {
      if (cancelled) return

      if (typeof window.requestIdleCallback === "function") {
        idleHandle = window.requestIdleCallback(init, { timeout: 800 })
      } else {
        timeoutHandle = setTimeout(init, 200)
      }
    }

    if (document.readyState === "complete") {
      schedule()
    } else {
      window.addEventListener("load", schedule, { once: true })
    }

    return () => {
      cancelled = true
      window.removeEventListener("load", schedule)
      if (idleHandle !== undefined) window.cancelIdleCallback(idleHandle)
      if (timeoutHandle !== undefined) clearTimeout(timeoutHandle)

      if (effect) {
        try {
          effect.destroy()
        } catch (error) {
          console.warn("[vanta] failed to destroy background effect", error)
        }
        effect = null
      }
    }
  }, [loadEffect])

  return containerRef
}
