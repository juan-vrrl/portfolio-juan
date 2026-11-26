import Link from "next/link"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SocialLinks } from "@/components/social-links"
import { TechIcon } from "@/components/tech-icons"
import { TypingPhrases } from "@/components/typing-phrases"
import VantaBird from "@/components/VantaBird"

const typedPhrases = [
  "web products.",
  "scalable APIs.",
  "clean interfaces.",
  "end-to-end systems.",
]

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

        <div className="relative mx-auto w-full max-w-4xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-background/50 px-3 py-1.5 backdrop-blur-sm">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Full-stack developer
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2.7rem,7vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-balance sm:mt-6">
              Juan Verrel
              <span className="block text-gradient">Tanuwijaya</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl">
              <span className="text-foreground">I build</span>{" "}
              <span className="font-mono text-primary" aria-hidden="true">
                <TypingPhrases strings={typedPhrases} />
              </span>
              <span className="sr-only">
                web products, scalable APIs, clean interfaces, and end-to-end
                systems.
              </span>
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty">
              Full-stack developer with a Bachelor&apos;s in Informatics
              Engineering, focused on connecting thoughtful interfaces with
              reliable back-end systems.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
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
            <div className="mt-6 flex justify-center sm:mt-8">
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 border-t border-border/50 pt-6 sm:mt-14">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
              </div>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
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
