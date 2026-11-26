import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type SocialLink = {
  name: string
  icon: LucideIcon
  href: string
  hover: string
}

const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.link/vm689t",
    hover: "hover:border-emerald-400/50 hover:text-emerald-300",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/juan.tanuwijaya",
    hover: "hover:border-blue-400/50 hover:text-blue-300",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/juan_vrrl/",
    hover: "hover:border-pink-400/50 hover:text-pink-300",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/juan-vrrl",
    hover: "hover:border-slate-300/50 hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/juan-verrel-tanuwijaya-389293291/",
    hover: "hover:border-sky-400/50 hover:text-sky-300",
  },
]

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-2" aria-label="Social links">
      {socialLinks.map((social) => {
        const Icon = social.icon

        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-card/70",
                social.hover
              )}
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
