import { Button } from "@/components/ui/button"
import { MessageCircle, Facebook, Instagram, Github, Linkedin } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.link/vm689t", 
      color: "hover:text-green-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/juan.tanuwijaya", 
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/juan_vrrl/", 
      color: "hover:text-pink-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/juan-vrrl", 
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/juan-verrel-tanuwijaya-389293291/",
      color: "hover:text-blue-700",
    },
  ]

  return (
    <div className="flex items-center gap-2">
      {socialLinks.map((social) => (
        <Button key={social.name} variant="ghost" size="sm" asChild className={`transition-colors ${social.color}`}>
          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <social.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}
