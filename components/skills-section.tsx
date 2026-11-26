import { Code2, Layers3, ServerCog, Wrench, type LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { TechIcon } from "@/components/tech-icons"

type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "PHP", "Python", "C++"],
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind", "Figma"],
  },
  {
    title: "Backend & Data",
    icon: ServerCog,
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "AWS", "Deployment"],
  },
]

export function SkillsSection() {
  return (
    <div className="grid items-start gap-3 sm:grid-cols-2">
      {skillCategories.map((category, index) => {
        const Icon = category.icon

        return (
          <Reveal key={category.title} delay={index * 70} className="h-full">
            <div className="group/card h-full rounded-xl border border-border/60 bg-card/35 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-card/50">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border/60 bg-background/50 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] tabular-nums text-muted-foreground/70">
                  {String(category.skills.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-3.5 space-y-0.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 rounded-md px-1.5 py-1.5 text-[13px] text-muted-foreground transition-colors duration-200 hover:bg-white/[0.04] hover:text-foreground"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border/50 bg-background/50">
                      <TechIcon name={skill} className="h-4 w-4" />
                    </span>
                    <span className="truncate">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
