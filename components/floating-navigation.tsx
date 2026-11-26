"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FolderOpen, Home, User, type LucideIcon } from "lucide-react"

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
]

export function FloatingNavigation() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:inset-x-auto lg:bottom-auto lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:px-0 lg:pb-0"
    >
      <div className="flex items-end gap-1 rounded-2xl border border-border/70 bg-background/80 p-1.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:flex-col lg:items-center lg:gap-1 lg:rounded-full lg:p-2">
        <Link
          href="/"
          aria-label="Juan Verrel — home"
          className="hidden h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/60 font-display text-[13px] font-semibold tracking-wide text-primary transition-colors hover:border-primary/50 lg:flex"
        >
          JV
        </Link>
        <span className="hidden h-px w-6 bg-border/70 lg:block" />

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative flex min-h-12 min-w-[72px] flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-[10px] font-medium transition-colors duration-200 lg:h-11 lg:w-11 lg:min-h-0 lg:min-w-0 lg:rounded-full lg:px-0 lg:py-0",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              )}
            >
              <Icon className="h-[18px] w-[18px] lg:h-5 lg:w-5" aria-hidden="true" />
              <span className="leading-none lg:sr-only">{item.label}</span>

              {/* Desktop hover label */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md border border-border/70 bg-popover px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-popover-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:block"
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
