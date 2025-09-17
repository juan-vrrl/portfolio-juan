"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { useAOS } from "@/lib/useAOS";
import VantaFog from "@/components/VantaFog";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function ProjectsPage() {
  useAOS();

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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // compute dots safely
  const totalDots =
    instanceRef.current?.track?.details?.slides.length &&
    instanceRef.current?.options?.slides &&
    typeof instanceRef.current.options.slides === 'object' &&
    'perView' in instanceRef.current.options.slides &&
    typeof instanceRef.current.options.slides.perView === 'number'
      ? instanceRef.current.track.details.slides.length -
        instanceRef.current.options.slides.perView +
        1
      : 0;

  return (
    <VantaFog>
      <main className="relative z-10 mx-auto px-4 py-12 h-full mb-0 md:mb-12 lg:mb-12">
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

          {/* Slider */}
          <div
            ref={sliderRef}
            className="keen-slider"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="keen-slider__slide will-change-transform"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          {totalDots > 0 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalDots }, (_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === idx
                      ? "bg-primary scale-110"
                      : "bg-gray-400 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </VantaFog>
  );
}
