"use client"

import { useMemo, useState, type CSSProperties } from "react"
import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import VantaFog from "@/components/VantaFog"

type ProjectCategory = "Full-Stack" | "Frontend" | "Backend"
type Filter = "All" | ProjectCategory

type Project = {
  title: string
  description: string
  image: string
  category: ProjectCategory
  techStack: string[]
  liveUrl?: string
  githubUrl?: string | string[]
}

const projects: Project[] = [
  {
    title: "MovixNest — Movie Catalog",
    category: "Full-Stack",
    description:
      "MovixNest is a full-stack Movie Catalog application built with Next.js, NestJS, TypeScript, and MongoDB, designed to strengthen my skills in modern web development. The frontend features a responsive UI with glassmorphism design, animated gradients, and filtering capabilities. The NestJS backend implements JWT authentication, role-based authorization, and a robust review system. Users can browse and search movies with advanced filtering, while authenticated users can submit reviews. The application follows modern best practices including secure password hashing with bcrypt, structured Mongoose relationships, strict request validation, and TMDB API integration for automatic movie data seeding. This project demonstrates comprehensive full-stack capabilities from RESTful API architecture to exceptional user experience design.",
    image: "/movix.webp",
    techStack: [
      "NestJS",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Mongoose",
    ],
    liveUrl: "https://movixnest.vercel.app/",
    githubUrl: [
      "https://github.com/juan-vrrl/next-movie-catalog",
      "https://github.com/juan-vrrl/nest-mongodb-movie-catalog",
    ],
  },
  {
    title: "PKPP ITERA",
    category: "Full-Stack",
    description:
      "A full-stack web application built for the PKPP (Pusat Kurikulum dan Pengembangan Pembelajaran) at Institut Teknologi Sumatera. This comprehensive platform serves as the digital hub for ITERA's curriculum development initiatives, offering a modern public-facing website with dynamic news management, organizational information, PKPP service offerings, and interactive contact sections. The system is supported by a secure admin dashboard that enables efficient content management, service administration, and analytics to support informed decision-making.",
    image: "/pkpp.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ShadCN UI",
      "PostgreSQL",
      "Prisma",
    ],
    liveUrl: "https://pkpp-itera.vercel.app/",
  },
  {
    title: "ITERA OBE System",
    category: "Full-Stack",
    description:
      "Primary management tool for Curriculum Evaluation and Monitoring at Institut Teknologi Sumatera. A university-grade curriculum management system for tracking student learning outcomes. The platform streamlines curriculum management and student learning outcome tracking across multiple departments, featuring comprehensive course management with CPMK (Course Learning Outcomes) and prerequisite mapping, alongside a flexible multi-template assessment framework that supports configurable evaluation criteria and weighted scoring systems with automated grade aggregation. Implemented an RPS (Rencana Pembelajaran Semester) generator that automates course syllabus creation with weekly lesson planning, assessment scheduling, and digital signature workflows for multi-level approval chains. Implemented robust grade management supporting both manual entry and Excel batch import/export with real-time validation and automatic recalculation when new entry uploaded. Built performance analytics dashboards with Chart.js for visualizing student achievement rates and curriculum effectiveness metrics. Architected a role-based access control system for seven user types integrated with the university's OAuth2 SSO. Designed curriculum mapping tools for connecting learning outcomes to program goals, portfolio generation with statistical analysis, and automated data synchronization for enrollments and faculty assignments.",
    image: "/obe.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ShadCN UI",
      "PostgreSQL",
      "Prisma",
    ],
  },
  {
    title: "Air Hopper",
    category: "Backend",
    description:
      "I work as a Backend Developer on a Flight Ticket Booking Application project 'Air Hopper'. This platform enables users to search, book, and manage flight tickets seamlessly, leveraging cutting-edge technologies to ensure an exceptional user experience. My responsibilities include developing and maintaining secure and efficient APIs using Express.js, implementing robust authentication mechanisms with JSON Web Token (JWT) and bcrypt, and integrating payment systems like Midtrans for smooth transaction processes. Additionally, I work with tools like Prisma for database management, Swagger for API documentation, and Sentry for error tracking and performance monitoring.",
    image: "/airhopper.webp",
    techStack: ["Express.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/AirHopper/BackEnd",
  },
  {
    title: "Help Desk SIPD",
    category: "Full-Stack",
    description:
      "Helpdesk SIPD (Sistem Informasi Pembangunan Daerah) is a comprehensive web-based helpdesk application designed to enhance the efficiency of problem reporting and resolution within regional government systems. Developed using Next.js for both frontend and backend, and PostgreSQL with Prisma ORM for database management, the system ensures seamless, real-time interactions among three user roles: Pelapor (Reporter), Solver, and Admin.",
    image: "/helpdesk-sipd.png",
    techStack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
  },
  {
    title: "Otak Atik — Learning for Everyone",
    category: "Full-Stack",
    description:
      "Otak Atik is a website-based online learning platform that allows users to learn and teach a variety of materials without being limited to basic subjects. With broad material flexibility, Otak Atik enables users to explore and instruct in various disciplines according to their interests and needs, providing access to more comprehensive and varied learning compared to platforms that only offer school materials. The application is built with Next.js and TypeScript as the main technologies, ensuring a dynamic and efficient user interface. It also utilizes Tailwind CSS for modern, responsive design, Prisma ORM and CockroachDB for robust and scalable database management, and Cloudinary for efficient media storage and management.",
    image: "/otakatik.png",
    techStack: ["Next.js", "TypeScript", "Tailwind", "CockroachDB", "Prisma"],
    liveUrl: "https://otak-atik.vercel.app/",
    githubUrl: "https://github.com/ryudhis/Otak-Atik",
  },
  {
    title: "ThreadTree Forum App",
    category: "Frontend",
    description:
      "ThreadTree is an innovative forum application developed using React.js, with Redux.js for efficient state management. Designed for open discussions on any topic, ThreadTree features a robust voting system and a dynamic leaderboard to highlight popular contributions. The application leverages APIs from the Dicoding Forum API to ensure seamless integration and functionality. ThreadTree emphasizes quality and reliability through the use of automated testing frameworks such as Vitest and Cypress, ensuring a robust and error-free user experience. Additionally, Storybook is utilized for creating and testing isolated components, enhancing the development process and maintaining a consistent UI/UX design.",
    image: "/threadtree.png",
    techStack: ["React.js", "Redux.js", "Vitest", "Cypress"],
    liveUrl: "https://thread-tree-forum.vercel.app/",
    githubUrl: "https://github.com/juan-vrrl/ThreadTree-Forum-App",
  },
  {
    title: "Dusun 10 Desa Giri Mulyo Village Website",
    category: "Frontend",
    description:
      "The Dusun 10 Desa Giri Mulyo Village Website is a comprehensive platform designed to showcase and inform about Dusun 10 in Desa Giri Mulyo. This website features detailed descriptions of the village, its location, and its rich cultural heritage. An interactive map, powered by the ESRI ArcGIS API, provides users with a dynamic and engaging way to explore Dusun 10. Developed with Next.js for the front end, the website ensures a seamless and responsive user experience, combining modern web development practices with robust geographical information systems.",
    image: "/girimulyo.webp",
    techStack: ["Next.js", "TypeScript", "ESRI ArcGIS"],
    liveUrl: "https://desa-girimulyo-dusun10.vercel.app/",
  },
  {
    title: "Posyandu Mawar I Way Huwi",
    category: "Full-Stack",
    description:
      "The Posyandu Mawar I Way Huwi Data Management Website is an advanced application designed to efficiently manage patient data for Posyandu Mawar I Way Huwi. Developed as a full-stack solution using Next.js, this application ensures streamlined data management and enhanced productivity. The app is powered by CockroachDB, providing a robust and scalable database solution, with Prisma serving as the ORM for seamless data handling and manipulation.",
    image: "/posyandu.jpeg",
    techStack: ["Next.js", "TypeScript", "CockroachDB", "Prisma"],
    githubUrl:
      "https://github.com/Kaben011201/TUBES_KAPITA_SELEKTA_09_2023",
  },
]

const filters: Filter[] = ["All", "Full-Stack", "Frontend", "Backend"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const counts = useMemo(() => {
    const result: Record<Filter, number> = {
      All: projects.length,
      "Full-Stack": 0,
      Frontend: 0,
      Backend: 0,
    }

    for (const project of projects) {
      result[project.category] += 1
    }

    return result
  }, [])

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <VantaFog>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] bg-gradient-to-b from-background/45 via-background/25 to-background/70"
      />
      <main
        id="main"
        className="relative z-10 px-5 pb-32 pt-24 lg:px-8 lg:pb-20 lg:pl-28 lg:pt-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Projects"
                description="A collection of full-stack products, front-end interfaces, and back-end systems built for real users."
              />
            </Reveal>

            <Reveal delay={100}>
              <div
                className="flex flex-wrap gap-1.5 sm:gap-2"
                role="group"
                aria-label="Filter projects by type"
              >
                {filters.map((filter) => {
                  const isActive = activeFilter === filter

                  return (
                    <button
                      key={filter}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveFilter(filter)}
                      className={cn(
                        "inline-flex h-11 cursor-pointer items-center gap-2 rounded-full border px-3 text-xs font-medium transition-colors duration-200 sm:h-9 sm:px-3.5",
                        isActive
                          ? "border-primary/50 bg-primary/10 text-primary"
                          : "border-border/60 bg-card/30 text-muted-foreground hover:bg-card/60 hover:text-foreground"
                      )}
                    >
                      {filter}
                      <span className="font-mono text-[10px] tabular-nums opacity-70">
                        {counts[filter]}
                      </span>
                    </button>
                  )
                })}
              </div>
            </Reveal>
          </div>

          <p aria-live="polite" className="sr-only">
            {visibleProjects.length} projects shown
          </p>

          <div
            key={activeFilter}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visibleProjects.map((project, index) => (
              <div
                key={project.title}
                className="stagger-item"
                style={{ "--stagger": index } as CSSProperties}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col gap-4 rounded-xl border border-border/60 bg-card/35 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  More on GitHub
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Experiments, side projects, and open-source contributions.
                </p>
              </div>
              <Link
                href="https://github.com/juan-vrrl"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:bg-card sm:h-10"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub profile
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </VantaFog>
  )
}
