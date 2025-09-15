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
    <nav className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-4 bg-card/80 backdrop-blur-md border border-border rounded-full px-3 py-6 shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 hover:scale-110",
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
