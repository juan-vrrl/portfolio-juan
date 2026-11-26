"use client"

import Image from "next/image"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TechIcon } from "@/components/tech-icons"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  category?: string
  liveUrl?: string
  githubUrl?: string | string[]
}

function GithubLinks({
  urls,
  variant,
}: {
  urls: string[]
  variant: "footer" | "dialog"
}) {
  if (urls.length === 0) return null

  if (urls.length === 1) {
    return (
      <a
        href={urls[0]}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${variant === "dialog" ? "View source on " : ""}GitHub`}
        className={
          variant === "dialog"
            ? "inline-flex h-11 items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-card sm:h-10"
            : "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:h-8 sm:w-8"
        }
      >
        <Github className="h-4 w-4" aria-hidden="true" />
        {variant === "dialog" ? "GitHub" : null}
      </a>
    )
  }

  return (
    <>
      {urls.slice(0, 2).map((url, index) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={index === 0 ? "View frontend source" : "View backend source"}
          className={
            variant === "dialog"
              ? "inline-flex h-11 items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-card sm:h-10"
              : "inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:h-8 sm:w-8"
          }
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          {variant === "dialog" ? (index === 0 ? "Frontend" : "Backend") : null}
        </a>
      ))}
    </>
  )
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  category = "Project",
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const githubUrls = githubUrl
    ? Array.isArray(githubUrl)
      ? githubUrl
      : [githubUrl]
    : []
  const visibleTech = techStack.slice(0, 4)
  const remainingTech = techStack.length - visibleTech.length

  return (
    <Dialog>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/45 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-card/60 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.9)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary/40">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent"
          />

          <span className="absolute left-3 top-3 rounded-full border border-border/60 bg-background/75 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-primary backdrop-blur">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-[17px] font-semibold leading-snug text-foreground line-clamp-2">
            {title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground line-clamp-3">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {visibleTech.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background/40 px-2 py-1 text-[11px] text-muted-foreground"
              >
                <TechIcon name={tech} className="h-3.5 w-3.5" />
                {tech}
              </li>
            ))}
            {remainingTech > 0 ? (
              <li className="inline-flex items-center rounded-md border border-border/50 bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                +{remainingTech}
              </li>
            ) : null}
          </ul>

          <div className="mt-auto flex items-center justify-between gap-3 pt-5">
            <DialogTrigger asChild>
              <button
                type="button"
                className="group/btn inline-flex min-h-11 cursor-pointer items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary sm:min-h-0"
              >
                Case study
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </DialogTrigger>

            <div className="flex items-center gap-1.5">
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title}`}
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary sm:h-8 sm:w-8"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null}
              <GithubLinks urls={githubUrls.slice(0, 1)} variant="footer" />
            </div>
          </div>
        </div>
      </article>

      <DialogContent className="max-h-[86vh] max-w-2xl gap-0 overflow-y-auto border-border/70 bg-card/95 p-0 backdrop-blur-xl">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-secondary/40">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
          />
        </div>

        <div className="shrink-0 p-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            {category}
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-md border border-border/50 bg-background/40 px-2.5 py-1.5 text-xs text-muted-foreground"
              >
                <TechIcon name={tech} className="h-3.5 w-3.5" />
                {tech}
              </li>
            ))}
          </ul>

          {liveUrl || githubUrls.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/50 pt-5">
              {liveUrl ? (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:h-10"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                </a>
              ) : null}
              <GithubLinks urls={githubUrls} variant="dialog" />
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
