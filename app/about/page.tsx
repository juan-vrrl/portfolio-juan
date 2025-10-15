"use client";

import { EducationTimeline } from "@/components/education-timeline";
import { SkillsSection } from "@/components/skills-section";
import Image from "next/image";
import { useAOS } from "@/lib/useAOS";
import VantaWave from "@/components/VantaWave";

export default function AboutPage() {
  useAOS();

  return (
    <VantaWave>
      <main className="relative z-10 mx-auto px-4 py-12 h-full mb-12 lg:mb-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mt-[15vh] overflow-hidden">
          {/* Left Side */}
          <div
            className="flex flex-col items-center justify-center space-y-6"
            data-aos="fade-right"
          >
            {/* Profile Photo */}
            <div
              className="w-32 h-40 lg:w-64 lg:h-80 rounded-2xl overflow-hidden shadow-lg"
              data-aos="zoom-in"
            >
              <Image
                src="/profile.jpeg"
                alt="Juan Verrel Tanuwijaya"
                width={3200}
                height={3200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* About Me Section */}
            <div
              className="text-center max-w-md backdrop-blur-sm bg-black/20 rounded-3xl p-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-3xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h1>
                <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                Hello, my name is{" "}
                <span className="font-semibold text-primary">
                  Juan Verrel Tanuwijaya
                </span>
                , I am a{" "}
                <span className="font-semibold text-primary">
                  Software Engineer
                </span>{" "}
                with a Bachelor's degree in{" "}
                <span className="font-semibold text-primary">
                  Informatics Engineering
                </span>{" "}
                from Institut Teknologi Sumatera. I specialize in{" "}
                <span className="font-semibold text-primary">
                  Full-Stack Web Development
                </span>
                , focusing on designing, developing, and maintaining scalable web applications and robust API systems. My work involves ensuring seamless integration between front-end interfaces, back-end logic, and database layers to deliver efficient, high-performance solutions.
                </p>
            </div>
          </div>

          {/* Right Side */}
          <div
            className="flex flex-col justify-center space-y-6 sm:items-center lg:items-start"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {/* Education */}
            <div data-aos="fade-up" data-aos-delay="500">
              <h2 className="text-2xl font-bold mb-4 text-primary">
                Education
              </h2>
              <EducationTimeline />
            </div>

            {/* Skills */}
            <div data-aos="fade-up" data-aos-delay="700">
              <SkillsSection />
            </div>
          </div>
        </div>
      </main>
    </VantaWave>
  );
}
