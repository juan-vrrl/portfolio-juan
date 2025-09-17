"use client"

import { useEffect, useState } from "react"

export function useAOS() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default
        AOS.init({
          duration: 1000,
          once: true,
        })
      } catch (error) {
        console.error("Error initializing AOS:", error)
      }
    }

    initAOS()
  }, [isClient])
}
