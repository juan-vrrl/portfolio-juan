import { Button } from "@/components/ui/button"
import { MessageCircle, Facebook, Instagram, Github, Linkedin } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "#", // You can replace with your actual WhatsApp link
      color: "hover:text-green-600",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "#", // You can replace with your actual Facebook link
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#", // You can replace with your actual Instagram link
      color: "hover:text-pink-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#", // You can replace with your actual GitHub link
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#", // You can replace with your actual LinkedIn link
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
