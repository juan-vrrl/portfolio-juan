import type React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Manrope, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { FloatingNavigation } from "@/components/floating-navigation"
import "./globals.css"

/* Only the weights actually used in the UI are loaded. */
const sora = Sora({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-sora",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Juan Verrel Tanuwijaya — Full-Stack Developer",
    template: "%s — Juan Verrel Tanuwijaya",
  },
  description:
    "Full-stack developer specializing in scalable web applications, robust APIs, and thoughtful interfaces. S1 Informatics Engineering graduate from Institut Teknologi Sumatera.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Juan Verrel Tanuwijaya — Full-Stack Developer",
    description:
      "Full-stack developer specializing in scalable web applications, robust APIs, and thoughtful interfaces.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#04121b",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} font-sans`}
      >
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <FloatingNavigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
