"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Dummy projects - you can replace these with your actual projects
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, product management, and payment integration.",
      image: "/modern-ecommerce-interface.png",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-dashboard.png",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.",
      image: "/preview/project4.png",
      techStack: ["React", "Chart.js", "Weather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media Analytics",
      description:
        "An analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
      image: "/analytics-dashboard.png",
      techStack: ["Vue.js", "Python", "FastAPI", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description:
        "A comprehensive LMS platform with course management, student progress tracking, and interactive learning modules.",
      image: "/lms-interface.png",
      techStack: ["React", "Node.js", "MySQL", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Restaurant Booking System",
      description:
        "A reservation system for restaurants with table management, customer notifications, and admin dashboard for operations.",
      image: "/restaurant-booking-system-interface.jpg",
      techStack: ["Next.js", "Prisma", "PostgreSQL", "Twilio API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const getCurrentProjects = () => {
    const start = currentIndex * projectsPerPage
    return projects.slice(start, start + projectsPerPage)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <main className="container mx-auto px-4 py-12 h-full">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Showcasing different aspects of my development skills.
            </p>
          </div>

          <div className="flex-1 flex flex-col min-h-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mb-6">
              {getCurrentProjects().map((project, index) => (
                <ProjectCard
                  key={currentIndex * projectsPerPage + index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  techStack={project.techStack}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>

            {/* Navigation Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === currentIndex ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentIndex === totalPages - 1}
                  className="flex items-center gap-2 bg-transparent"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
