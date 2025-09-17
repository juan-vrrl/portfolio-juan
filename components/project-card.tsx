"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Github, Eye } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, image, techStack, liveUrl, githubUrl }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Truncate description to ensure consistent card heights
  const maxDescriptionLength = 350
  const truncatedDescription =
    description.length > maxDescriptionLength ? description.substring(0, maxDescriptionLength) + "..." : description
  const needsReadMore = description.length > maxDescriptionLength

  return (
    <>
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="flex-shrink-0">
          <CardTitle className="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">{title}</CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground mb-4 flex-1">{truncatedDescription}</p>

          {needsReadMore && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="link" className="p-0 h-auto text-primary text-sm self-start">
                  Read more
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold mb-4">{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    {liveUrl && (
                      <Button asChild size="sm">
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {techStack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{techStack.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 pt-4 flex-shrink-0">
          {liveUrl && (
            <Button asChild size="sm" className="flex-1">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  )
}
