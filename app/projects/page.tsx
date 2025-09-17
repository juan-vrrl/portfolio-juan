"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useAOS } from "@/lib/useAOS"; // custom hook for initializing AOS
import VantaFog from "@/components/VantaFog";

export default function ProjectsPage() {
  useAOS();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dummy projects
  const projects = [
    {
      title: "ITERA OBE System",
      description:
        "The OBE (Outcome-based Education) System is the primary management tool for Curriculum Evaluation and Monitoring at Institut Teknologi Sumatera. This application is developed with Next.js and TypeScript to guarantee precise validations, utilizing PostgreSQL as the database and Prisma as the ORM.",
      image: "/obe.png",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    },
    {
      title: "Air Hopper",
      description:
        "I work as a Backend Developer on a Flight Ticket Booking Application project 'Air Hopper'. This platform enables users to search, book, and manage flight tickets seamlessly, leveraging cutting-edge technologies to ensure an exceptional user experience. My responsibilities include developing and maintaining secure and efficient APIs using Express.js, implementing robust authentication mechanisms with JSON Web Token (JWT) and bcrypt, and integrating payment systems like Midtrans for smooth transaction processes. Additionally, I work with tools like Prisma for database management, Swagger for API documentation, and Sentry for error tracking and performance monitoring.",
      image: "/airhopper.png",
      techStack: ["Express.js", "PostgreSQL", "Prisma"],
      githubUrl: "https://github.com/AirHopper/BackEnd",
    },
    {
      title: "Help Desk SIPD",
      description:
        "Helpdesk SIPD (Sistem Informasi Pembangunan Daerah) is a comprehensive web-based helpdesk application designed to enhance the efficiency of problem reporting and resolution within regional government systems. Developed using Next.js for both frontend and backend, and PostgreSQL with Prisma ORM for database management, the system ensures seamless, real-time interactions among three user roles: Pelapor (Reporter), Solver, and Admin.",
      image: "/helpdesk-sipd.png",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    },
    {
      title: "Otak Atik : Aplikasi Belajar Untuk Semua",
      description:
        "Otak Atik is a website-based online learning platform that allows users to learn and teach a variety of materials without being limited to basic subjects. With broad material flexibility, Otak Atik enables users to explore and instruct in various disciplines according to their interests and needs, providing access to more comprehensive and varied learning compared to platforms that only offer school materials. The application is built with Next.js and TypeScript as the main technologies, ensuring a dynamic and efficient user interface. It also utilizes Tailwind CSS for modern, responsive design, Prisma ORM and CockroachDB for robust and scalable database management, and Cloudinary for efficient media storage and management.",
      image: "/otakatik.png",
      techStack: ["Next.js", "TypeScript", "CockroachDB", "Prisma"],
      liveUrl: "https://otak-atik.vercel.app/",
      githubUrl: "https://github.com/ryudhis/Otak-Atik",
    },
    {
      title: "ThreadTree Forum App",
      description:
        "ThreadTree is an innovative forum application developed using React.js, with Redux.js for efficient state management. Designed for open discussions on any topic, ThreadTree features a robust voting system and a dynamic leaderboard to highlight popular contributions. The application leverages APIs from the Dicoding Forum API to ensure seamless integration and functionality. ThreadTree emphasizes quality and reliability through the use of automated testing frameworks such as Vitest and Cypress, ensuring a robust and error-free user experience. Additionally, Storybook is utilized for creating and testing isolated components, enhancing the development process and maintaining a consistent UI/UX design.",
      image: "/threadtree.png",
      techStack: ["React.js", "Redux.js", "Vitest", "Cypress"],
      liveUrl: "https://thread-tree-forum.vercel.app/",
      githubUrl: "https://github.com/juan-vrrl/ThreadTree-Forum-App",
    },
    {
      title: "Dusun 10 Desa Giri Mulyo Village Website",
      description:
        "The Dusun 10 Desa Giri Mulyo Village Website is a comprehensive platform designed to showcase and inform about Dusun 10 in Desa Giri Mulyo. This website features detailed descriptions of the village, its location, and its rich cultural heritage. An interactive map, powered by the ESRI ArcGIS API, provides users with a dynamic and engaging way to explore Dusun 10. Developed with Next.js for the front end, the website ensures a seamless and responsive user experience, combining modern web development practices with robust geographical information systems.",
      image: "/girimulyo.png",
      techStack: ["Next.js", "TypeScript", "ESRI ArcGIS"],
      liveUrl: "https://desa-girimulyo-dusun10.vercel.app/",
    },
    {
      title: "Posyandu Mawar I Wayhuwi Data Management Website",
      description:
        "The Posyandu Mawar I Way Huwi Data Management Website is an advanced application designed to efficiently manage patient data for Posyandu Mawar I Way Huwi. Developed as a full-stack solution using Next.js, this application ensures streamlined data management and enhanced productivity. The app is powered by CockroachDB, providing a robust and scalable database solution, with Prisma serving as the ORM for seamless data handling and manipulation.",
      image: "/posyandu.jpeg",
      techStack: ["Next.js", "TypeScript", "CockroachDB", "Prisma"],
    },
  ];

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const getCurrentProjects = () => {
    const start = currentIndex * projectsPerPage;
    return projects.slice(start, start + projectsPerPage);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <VantaFog>
      <main className="relative z-10 mx-auto px-4 py-12 h-full">
        <div className="max-w-6xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div
            className="text-center mb-8"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Showcasing different aspects of my development skills.
            </p>
          </div>

          {/* Projects grid with AOS */}
          <div className="flex-1 flex flex-col min-h-0">
            <div
              key={currentIndex}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 mb-6"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              {getCurrentProjects().map((project, index) => (
                <div
                  key={currentIndex * projectsPerPage + index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    techStack={project.techStack}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">
                    Page {currentIndex + 1} of {totalPages}
                  </span>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-3 h-3 rounded-full transition-colors border ${
                        i === currentIndex
                          ? "bg-primary border-primary"
                          : "bg-background border-muted-foreground hover:bg-muted"
                      }`}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNext}
                  disabled={currentIndex === totalPages - 1}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </VantaFog>
  );
}
