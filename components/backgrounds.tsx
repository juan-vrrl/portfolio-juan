"use client"

import { useCallback, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { VANTA_EFFECTS, type VantaVariant } from "@/components/vanta-effects"

const ROUTE_VARIANTS: Record<string, VantaVariant> = {
  "/": "birds",
  "/about": "waves",
  "/projects": "fog",
}

const VARIANTS: VantaVariant[] = ["birds", "fog", "waves"]

const MAX_PIXEL_RATIO = 2
const FADE_MS = 700
const ROUTE_SETTLE_MS = 600
const PREWARM_DELAY_MS = 2500
const PREWARM_GAP_MS = 450

type VantaEffectInstance = {
  destroy(): void
  isOnScreen?: () => boolean
  animationLoop?: () => void
  req?: number | null
}

type EffectRecord = {
  instance: VantaEffectInstance
  paused: boolean
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function runWhenIdle(callback: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout: 800 })
  } else {
    window.setTimeout(callback, 200)
  }
}

/*
 * One persistent layer per background variant. Effects are created once,
 * paused while hidden, and resumed on activation, so navigating between
 * routes never builds, compiles, or tears down a WebGL scene.
 */
export function Backgrounds() {
  const pathname = usePathname()
  const active = ROUTE_VARIANTS[pathname] ?? null

  const activeRef = useRef<VantaVariant | null>(active)
  activeRef.current = active

  const layerRefs = useRef<Record<VantaVariant, HTMLDivElement | null>>({
    birds: null,
    fog: null,
    waves: null,
  })
  const effectsRef = useRef<Partial<Record<VantaVariant, EffectRecord>>>({})
  const pendingRef = useRef<Partial<Record<VantaVariant, Promise<void>>>>({})
  const pauseTimersRef = useRef<Partial<Record<VantaVariant, number>>>({})
  const bootedRef = useRef(false)
  const routeTimerRef = useRef<number | undefined>(undefined)
  const loadHandlerRef = useRef<(() => void) | null>(null)

  const setBirdsRef = useCallback((node: HTMLDivElement | null) => {
    layerRefs.current.birds = node
  }, [])
  const setFogRef = useCallback((node: HTMLDivElement | null) => {
    layerRefs.current.fog = node
  }, [])
  const setWavesRef = useCallback((node: HTMLDivElement | null) => {
    layerRefs.current.waves = node
  }, [])

  const pause = useCallback((variant: VantaVariant) => {
    const record = effectsRef.current[variant]
    if (!record || record.paused) return

    if (record.instance.req) window.cancelAnimationFrame(record.instance.req)
    record.instance.req = null
    record.paused = true
  }, [])

  const resume = useCallback((variant: VantaVariant) => {
    const record = effectsRef.current[variant]
    if (!record || !record.paused) return

    record.paused = false
    try {
      record.instance.animationLoop?.()
    } catch (error) {
      console.warn("[vanta] failed to resume background effect", error)
    }
  }, [])

  const ensureEffect = useCallback(
    async (variant: VantaVariant) => {
      if (effectsRef.current[variant]) {
        resume(variant)
        return
      }

      const pending = pendingRef.current[variant]
      if (pending) {
        await pending
        if (activeRef.current === variant) resume(variant)
        return
      }

      if (!layerRefs.current[variant]) return

      const promise = (async () => {
        try {
          const [{ default: create }, THREE] = await Promise.all([
            VANTA_EFFECTS[variant].load(),
            import("three"),
          ])
          const container = layerRefs.current[variant]
          if (!container) return

          const baseOptions = VANTA_EFFECTS[variant].options
          const minScale = (window.devicePixelRatio || 1) / MAX_PIXEL_RATIO
          const scale = Math.max(
            typeof baseOptions.scale === "number" ? baseOptions.scale : 1,
            minScale
          )
          const scaleMobile =
            typeof baseOptions.scaleMobile === "number"
              ? Math.max(baseOptions.scaleMobile, minScale)
              : undefined

          const instance = create({
            ...baseOptions,
            el: container,
            THREE,
            scale,
            ...(scaleMobile !== undefined ? { scaleMobile } : {}),
          }) as VantaEffectInstance

          /*
           * The layer is fixed and always fills the viewport; Vanta's
           * per-frame `isOnScreen` check forces a layout read for nothing.
           */
          instance.isOnScreen = () => true

          effectsRef.current[variant] = { instance, paused: false }

          if (activeRef.current === variant) {
            resume(variant)
          } else {
            pause(variant)
          }
        } catch (error) {
          console.error(`[vanta] failed to initialize ${variant} background`, error)
        }
      })().finally(() => {
        delete pendingRef.current[variant]
      })

      pendingRef.current[variant] = promise
      await promise
    },
    [pause, resume]
  )

  /* Boot the active layer, and fade out + pause the others. */
  useEffect(() => {
    if (prefersReducedMotion()) return

    const isRouteChange = bootedRef.current
    bootedRef.current = true

    if (active) {
      const pauseTimer = pauseTimersRef.current[active]
      if (pauseTimer !== undefined) {
        window.clearTimeout(pauseTimer)
        pauseTimersRef.current[active] = undefined
      }

      if (effectsRef.current[active] || pendingRef.current[active]) {
        void ensureEffect(active)
      } else if (isRouteChange) {
        /* Not prewarmed in time — wait for the entry reveals to finish. */
        routeTimerRef.current = window.setTimeout(
          () => void ensureEffect(active),
          ROUTE_SETTLE_MS
        )
      } else if (document.readyState === "complete") {
        runWhenIdle(() => void ensureEffect(active))
      } else {
        const onLoad = () => runWhenIdle(() => void ensureEffect(active))
        window.addEventListener("load", onLoad, { once: true })
        loadHandlerRef.current = onLoad
      }
    }

    for (const variant of VARIANTS) {
      if (variant === active) continue

      const record = effectsRef.current[variant]
      if (record && !record.paused) {
        window.clearTimeout(pauseTimersRef.current[variant])
        pauseTimersRef.current[variant] = window.setTimeout(
          () => pause(variant),
          FADE_MS
        )
      }
    }

    return () => {
      if (routeTimerRef.current !== undefined) {
        window.clearTimeout(routeTimerRef.current)
        routeTimerRef.current = undefined
      }
      if (loadHandlerRef.current) {
        window.removeEventListener("load", loadHandlerRef.current)
        loadHandlerRef.current = null
      }
    }
  }, [active, ensureEffect, pause])

  /* Warm the other two layers once the first page has settled. */
  useEffect(() => {
    if (prefersReducedMotion()) return

    let cancelled = false

    const timer = window.setTimeout(async () => {
      for (const variant of VARIANTS) {
        if (cancelled) return
        if (variant === activeRef.current) continue
        if (effectsRef.current[variant] || pendingRef.current[variant]) continue

        await ensureEffect(variant)
        await new Promise((resolve) => window.setTimeout(resolve, PREWARM_GAP_MS))
      }
    }, PREWARM_DELAY_MS)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [ensureEffect])

  /* Hovering or focusing a nav link warms its layer sooner. */
  useEffect(() => {
    if (prefersReducedMotion()) return

    const handler = (event: Event) => {
      if (!(event.target instanceof Element)) return

      const anchor = event.target.closest("a[href]")
      if (!(anchor instanceof HTMLAnchorElement)) return

      const variant = ROUTE_VARIANTS[anchor.getAttribute("href") ?? ""]
      if (variant) void ensureEffect(variant)
    }

    document.addEventListener("pointerover", handler, { passive: true })
    document.addEventListener("focusin", handler)

    return () => {
      document.removeEventListener("pointerover", handler)
      document.removeEventListener("focusin", handler)
    }
  }, [ensureEffect])

  return (
    <>
      <div aria-hidden="true" className="fixed inset-0 z-0 bg-[#04121b]" />
      <div
        ref={setBirdsRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full bg-[#04121b] transition-opacity duration-700 ease-out"
        style={{ opacity: active === "birds" ? 1 : 0 }}
      />
      <div
        ref={setFogRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full bg-[#04121b] transition-opacity duration-700 ease-out"
        style={{ opacity: active === "fog" ? 1 : 0 }}
      />
      <div
        ref={setWavesRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 h-full w-full bg-[#04121b] transition-opacity duration-700 ease-out"
        style={{ opacity: active === "waves" ? 1 : 0 }}
      />
    </>
  )
}
