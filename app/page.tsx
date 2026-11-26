"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"
import { ReactTyped } from "react-typed"
import { Reveal } from "@/components/reveal"
import { SocialLinks } from "@/components/social-links"
import { TechIcon } from "@/components/tech-icons"
import VantaBird from "@/components/VantaBird"

const coreStack = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Prisma",
]

export default function HomePage() {
  return (
    <VantaBird>
      <main
        id="main"
        className="relative z-10 flex min-h-dvh items-start overflow-hidden px-5 pb-28 pt-16 sm:pt-20 lg:items-center lg:px-8 lg:pb-16 lg:pl-28 lg:pt-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/65 via-background/30 to-background/90" />
          <div className="absolute inset-0 bg-grid-fade opacity-60" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                  <span className="status-dot h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Full-stack developer
                  </span>
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="mt-5 font-display text-[clamp(2.7rem,7vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance sm:mt-6">
                  Juan Verrel
                  <span className="block text-gradient">Tanuwijaya</span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
                  <span className="text-foreground">I build</span>{" "}
                  <span className="font-mono text-primary" aria-hidden="true">
                    <ReactTyped
                      strings={[
                        "web products.",
                        "scalable APIs.",
                        "clean interfaces.",
                        "end-to-end systems.",
                      ]}
                      typeSpeed={55}
                      backSpeed={30}
                      backDelay={1600}
                      loop
                      showCursor
                      cursorChar="_"
                    />
                  </span>
                  <span className="sr-only">
                    web products, scalable APIs, clean interfaces, and
                    end-to-end systems.
                  </span>
                </p>
              </Reveal>

              <Reveal delay={220}>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty">
                  Full-stack developer with a Bachelor&apos;s in Informatics
                  Engineering, focused on connecting thoughtful interfaces with
                  reliable back-end systems.
                </p>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
                  <Link
                    href="/projects"
                    className="group inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    View projects
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                  <a
                    href="/cv.pdf"
                    download="Juan_Verrel_Tanuwijaya_CV.pdf"
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-border/80 bg-background/40 px-5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card/60"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download CV
                  </a>
                </div>
              </Reveal>

              <Reveal delay={340}>
                <div className="mt-6 sm:mt-8">
                  <SocialLinks />
                </div>
              </Reveal>
            </div>

            <Reveal delay={240} className="hidden sm:block">
              <div className="relative mx-auto w-full max-w-[330px]">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] border border-primary/15"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/70 bg-card/50 shadow-2xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Portrait of Juan Verrel Tanuwijaya"
                    fill
                    priority
                    sizes="(max-width: 1024px) 330px, 340px"
                    className="object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-border/60 bg-background/70 p-3.5 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      Full-stack developer
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      S1 Informatics Engineering · ITERA
                    </p>
                  </div>
                </div>

                <div className="absolute -right-3 top-6 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-primary shadow-lg backdrop-blur">
                  2025 graduate
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/50 pt-5 sm:mt-14">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
                Core stack
              </span>
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 text-xs text-muted-foreground/90"
                >
                  <TechIcon name={tech} className="h-4 w-4" />
                  {tech}
                </span>
              ))}
              <Link
                href="/about"
                className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary sm:ml-auto"
              >
                All skills
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </VantaBird>
  )
}
