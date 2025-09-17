"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, User, FolderOpen } from "lucide-react"

export function FloatingNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projects", label: "Projects", icon: FolderOpen },
  ]

  return (
    <nav className="fixed top-[90%] left-1/2 lg:top-1/2 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 z-50">
      <div className="flex lg:flex-col items-center gap-4 bg-card/80 backdrop-blur-md border border-border rounded-full px-3 py-6 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-center md:w-8 md:h-8 lg:w-12 lg:h-12 rounded-full transition-all duration-200 hover:scale-110",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
              title={item.label}
            >
              <Icon className="h-5 w-5" />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
