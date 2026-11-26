import { BookOpen, Code2, GraduationCap, Users, type LucideIcon } from "lucide-react"

type EducationItem = {
  title: string
  institution: string
  period: string
  kind: string
  icon: LucideIcon
}

const educationData: EducationItem[] = [
  {
    title: "S1 Informatics Engineering",
    institution: "Institut Teknologi Sumatera",
    period: "2021 — 2025",
    kind: "Degree",
    icon: GraduationCap,
  },
  {
    title: "Kampus Merdeka — Back-End JavaScript",
    institution: "Binar Academy",
    period: "2024",
    kind: "Bootcamp",
    icon: Code2,
  },
  {
    title: "Kampus Merdeka — React & Back-End Cohort",
    institution: "Dicoding Indonesia",
    period: "2024",
    kind: "Cohort",
    icon: Users,
  },
  {
    title: "Senior High School",
    institution: "SMA Immanuel Bandar Lampung",
    period: "2018 — 2021",
    kind: "Education",
    icon: BookOpen,
  },
]

export function EducationTimeline() {
  return (
    <ol className="relative space-y-3 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-border before:to-transparent">
      {educationData.map((item) => {
        const Icon = item.icon

        return (
          <li key={item.title} className="group relative flex gap-4">
            <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background/90 text-primary shadow-[0_0_0_4px_rgba(4,18,27,0.65)]">
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="flex-1 rounded-xl border border-border/60 bg-card/35 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-primary/25 hover:bg-card/50">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug text-foreground text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-border/60 bg-background/50 px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <span className="mt-3 inline-flex font-mono text-[10px] uppercase tracking-[0.16em] text-primary/80">
                {item.kind}
              </span>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
