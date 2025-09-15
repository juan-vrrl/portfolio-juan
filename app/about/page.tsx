import { EducationTimeline } from "@/components/education-timeline"
import { SkillsSection } from "@/components/skills-section"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-background via-card to-background overflow-hidden">
      <main className="container mx-auto px-6 py-8 h-full">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Photo and About Me */}
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Profile Photo */}
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/graduation-photo.png"
                alt="Juan Verrel Tanuwijaya"
                width={256}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>

            {/* About Me Section */}
            <div className="text-center max-w-md">
              <h1 className="text-3xl font-bold mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hello, my name is <span className="font-semibold text-foreground">Juan Verrel Tanuwijaya</span>, I have
                just graduated from <span className="font-semibold text-foreground">Institut Teknologi Sumatera</span>{" "}
                with a Bachelor's degree in{" "}
                <span className="font-semibold text-foreground">Informatics Engineering</span> and focusing as a{" "}
                <span className="font-semibold text-primary">Full-Stack Developer</span>. I am well organised and always
                meet deadlines when they have been set. I find it easy working with other people but can also work well
                independently. I am seeking a job in the industry to apply and enhance my skills, while also
                contributing to the industry's growth and success.
              </p>
            </div>
          </div>

          {/* Right Side - Skills and Education */}
          <div className="flex flex-col justify-center space-y-6">
            {/* My Education */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">My Education</h2>
              <EducationTimeline />
            </div>

            {/* Skills Sections */}
            <SkillsSection />
          </div>
        </div>
      </main>
    </div>
  )
}
