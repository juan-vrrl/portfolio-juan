import { GraduationCap, BookOpen, Code } from "lucide-react"

export function EducationTimeline() {
  const educationData = [
    {
      title: "S1 Informatics Engineering",
      institution: "Institut Teknologi Sumatera",
      period: "(2019-2025)",
      icon: GraduationCap,
    },
        {
      title: "Kampus Merdeka - Back-End JavaScript",
      institution: "Binar Academy",
      period: "(2024)",
      icon: Code,
    },
        {
      title: "Kampus Merdeka - React and Back-End Cohort",
      institution: "Dicoding Indonesia",
      period: "(2024)",
      icon: Code,
    },
    {
      title: "Senior Highschool",
      institution: "SMA Immanuel Bandar Lampung",
      period: "(2016-2019)",
      icon: BookOpen,
    },
  ]

  return (
    <div className="space-y-4">
      {educationData.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <item.icon className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm">
              {item.title} - <span className="text-primary">{item.institution}</span>
            </h3>
            <p className="text-xs text-muted-foreground">{item.period}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
