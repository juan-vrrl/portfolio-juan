import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
import { EducationTimeline } from "@/components/education-timeline"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SkillsSection } from "@/components/skills-section"
import VantaWave from "@/components/VantaWave"

const quickFacts = [
  { label: "Degree", value: "S1 Informatics Engineering" },
  { label: "University", value: "Institut Teknologi Sumatera" },
  { label: "Focus", value: "Full-stack web & APIs" },
  { label: "Class of", value: "2025" },
]

const focusAreas = [
  "Full-Stack Development",
  "API Systems",
  "Database Design",
  "Interface Engineering",
]

export default function AboutPage() {
  return (
    <VantaWave>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/35 to-background/80"
      />
      <main
        id="main"
        className="relative z-10 px-5 pb-32 pt-24 lg:px-8 lg:pb-20 lg:pl-28 lg:pt-28"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="Engineering thoughtful interfaces and reliable systems."
              description="A full-stack developer's toolkit is only useful when the whole stack works together — from the first pixel to the last query."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-14">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[300px] lg:mx-0">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-2.5 rounded-[1.75rem] border border-primary/15"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/70 bg-card/40 shadow-2xl">
                    <Image
                      src="/profile.jpeg"
                      alt="Portrait of Juan Verrel Tanuwijaya"
                      fill
                      priority
                      sizes="(max-width: 1024px) 300px, 300px"
                      className="object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/5 to-transparent"
                    />
                    <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border/60 bg-background/70 px-3.5 py-3 backdrop-blur-md">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                        Software engineer
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        ITERA · 2021 — 2025
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <dl className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-border/40 [&>div]:bg-card/40">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-start justify-between gap-4 border-b border-border/40 px-4 py-3 last:border-b-0"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
                        {fact.label}
                      </dt>
                      <dd className="text-right text-[13px] font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href="/cv.pdf"
                  download="Juan_Verrel_Tanuwijaya_CV.pdf"
                  className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-border/70 bg-background/40 px-4 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card/60 sm:h-10"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </Reveal>
            </aside>

            <div className="space-y-14">
              <Reveal>
                <div className="space-y-4">
                  <p className="max-w-2xl text-lg leading-relaxed text-foreground text-pretty">
                    Hello — I&apos;m{" "}
                    <span className="font-semibold text-primary">
                      Juan Verrel Tanuwijaya
                    </span>
                    , a software engineer with a Bachelor&apos;s degree in
                    Informatics Engineering from Institut Teknologi Sumatera.
                  </p>
                  <p className="max-w-2xl text-[15px] leading-7 text-muted-foreground text-pretty">
                    I specialize in full-stack web development, designing,
                    building, and maintaining scalable web applications and
                    robust API systems. My work is about making the whole stack
                    cooperate — front-end interfaces, back-end logic, and
                    database layers — to deliver efficient, high-performance
                    solutions.
                  </p>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {focusAreas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-border/60 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <section aria-label="Education">
                <Reveal>
                  <SectionHeading
                    eyebrow="Background"
                    title="Education"
                    description="Formal study and focused programs that shaped how I build software."
                  />
                </Reveal>
                <div className="mt-6">
                  <EducationTimeline />
                </div>
              </section>

              <section aria-label="Skills">
                <Reveal>
                  <SectionHeading
                    eyebrow="Toolkit"
                    title="Technologies I work with"
                    description="The languages, frameworks, and tools I reach for when shipping a product."
                  />
                </Reveal>
                <div className="mt-6">
                  <SkillsSection />
                </div>
              </section>

              <Reveal>
                <div className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card/35 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                      Selected work
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      See how these tools come together in production.
                    </p>
                  </div>
                  <Link
                    href="/projects"
                    className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:h-10"
                  >
                    View projects
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </VantaWave>
  )
}
