import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Language",
      skills: ["JavaScript", "TypeScript", "Node.js", "PHP", "Python", "C++"],
      titleColor: "text-primary",
    },
    {
      title: "Framework",
      skills: ["React.js", "Next.js", "Express.js", "NestJS"],
      titleColor: "text-primary",
    },
    {
      title: "Other Skills",
      skills: ["HTML", "CSS", "MySQL", "PostgreSQL", "MongoDB", "Figma", "Git", "Prisma", "Tailwind", "AWS", "Deployment"],
      titleColor: "text-primary",
    },
  ]

  return (
    <div className="space-y-4">
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3 className={`text-xl font-bold mb-3 ${category.titleColor}`}>{category.title}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="text-xs px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
