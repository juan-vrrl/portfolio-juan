import {
  siArcgis,
  siCockroachlabs,
  siCplusplus,
  siCss,
  siCypress,
  siExpress,
  siFigma,
  siGit,
  siHtml5,
  siJavascript,
  siMongodb,
  siMongoose,
  siMysql,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedux,
  siShadcnui,
  siTailwindcss,
  siTypeorm,
  siTypescript,
  siVercel,
  siVitest,
  type SimpleIcon,
} from "simple-icons"
import { Cloud, Code2, Rocket, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const BRAND_ICONS: Record<string, SimpleIcon> = {
  javascript: siJavascript,
  typescript: siTypescript,
  node: siNodedotjs,
  php: siPhp,
  python: siPython,
  "c++": siCplusplus,
  react: siReact,
  next: siNextdotjs,
  express: siExpress,
  nestjs: siNestjs,
  html: siHtml5,
  css: siCss,
  tailwind: siTailwindcss,
  shadcnui: siShadcnui,
  mysql: siMysql,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  mongoose: siMongoose,
  monggoose: siMongoose,
  prisma: siPrisma,
  typeorm: siTypeorm,
  figma: siFigma,
  git: siGit,
  vercel: siVercel,
  redux: siRedux,
  vitest: siVitest,
  cypress: siCypress,
  cockroachdb: siCockroachlabs,
  arcgis: siArcgis,
  esriarcgis: siArcgis,
}

const FALLBACK_ICONS: Record<string, LucideIcon> = {
  aws: Cloud,
  deployment: Rocket,
}

/* Brands that render too dark need to inherit the surrounding text color. */
function isTooDark(hex: string) {
  const value = Number.parseInt(hex, 16)
  if (Number.isNaN(value)) return true

  const r = ((value >> 16) & 255) / 255
  const g = ((value >> 8) & 255) / 255
  const b = (value & 255) / 255
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

  return luminance < 0.16
}

function normalizeTechName(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\.js$/, "")
    .replace(/[\s.]/g, "")
}

type TechIconProps = {
  name: string
  className?: string
}

export function TechIcon({ name, className }: TechIconProps) {
  const key = normalizeTechName(name)
  const brand = BRAND_ICONS[key]

  if (brand) {
    const isDark = isTooDark(brand.hex)

    return (
      <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={brand.title}
        className={cn("h-4 w-4 shrink-0", className)}
        fill="currentColor"
        style={isDark ? undefined : { color: `#${brand.hex}` }}
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const Fallback = FALLBACK_ICONS[key] ?? Code2

  return <Fallback className={cn("h-4 w-4 shrink-0", className)} aria-hidden="true" />
}
