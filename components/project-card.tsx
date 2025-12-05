"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Eye } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string | string[];
}

export function ProjectCard({
  title,
  description,
  image,
  techStack,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Normalize githubUrl to always be an array for easier handling
  const githubUrls = githubUrl ? (Array.isArray(githubUrl) ? githubUrl : [githubUrl]) : [];

  // Truncate description to ensure consistent card heights
  const maxDescriptionLength = 150;
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + "..."
      : description;
  const needsReadMore = description.length > maxDescriptionLength;

  return (
    <>
      <Card className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <CardHeader className="flex-shrink-0">
          <CardTitle className="text-lg font-semibold line-clamp-2 min-h-[3.5rem]">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground mb-4 min-h-[4.5rem]">
            {truncatedDescription}
          </p>

          {needsReadMore && (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary text-sm self-start hover:cursor-pointer"
                >
                  Read more
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold mb-4">
                    {title}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="relative h-64 w-full overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
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
                        <a
                          href={liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {githubUrls.length === 1 && (
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={githubUrls[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {githubUrls.length > 1 && (
                      <>
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={githubUrls[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Frontend
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={githubUrls[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Backend
                          </a>
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {techStack.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{techStack.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2 pt-4 flex-shrink-0">
          {liveUrl && (
            <Button asChild size="sm" className="flex-1 min-w-0">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="truncate">
                <Eye className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">Live Demo</span>
              </a>
            </Button>
          )}
          {githubUrls.length === 1 && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent min-w-0"
            >
              <a href={githubUrls[0]} target="_blank" rel="noopener noreferrer" className="truncate">
                <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                <span className="truncate">GitHub</span>
              </a>
            </Button>
          )}
          {githubUrls.length > 1 && (
            <>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent min-w-0"
              >
                <a href={githubUrls[0]} target="_blank" rel="noopener noreferrer" className="truncate">
                  <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Frontend</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="flex-1 bg-transparent min-w-0"
              >
                <a href={githubUrls[1]} target="_blank" rel="noopener noreferrer" className="truncate">
                  <Github className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">Backend</span>
                </a>
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </>
  );
}
