"use client";

import { useEffect, useState } from "react";
import { SocialLinks } from "@/components/social-links";
import VantaBird from "@/components/VantaBird";
import { useAOS } from "@/lib/useAOS";
import { ReactTyped } from "react-typed";

export default function HomePage() {
  useAOS();

  const [age, setAge] = useState(0);

  // Calculate age dynamically
  const calculateAge = () => {
    const birthDate = new Date("2003-06-09");
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthdayThisYear =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      years -= 1;
    }

    return years;
  };

  useEffect(() => {
    setAge(calculateAge());

    // update at midnight if birthday passes
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timeout = setTimeout(() => {
      setAge(calculateAge());
    }, midnight.getTime() - Date.now());

    return () => clearTimeout(timeout);
  }, []);

  return (
    <VantaBird>
      <main className="relative z-10 container mx-auto px-4 py-24 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="flex flex-col items-center justify-center"
            data-aos="fade-up"
          >
            <h1
              className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6 text-balance"
              data-aos="zoom-in"
            >
              <span className="text-primary font-bold">
                Juan Verrel Tanuwijaya
              </span>
            </h1>

            {/* React Typed */}
            <p
              className="text-xl md:text-2xl sm:text-sm text-muted-foreground text-balance mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              I'm {" "}
              <ReactTyped
                strings={[
                  `<span class="text-[#3DB9FF]">${age} Years Old</span>`,
                  `a <span class="text-[#3DB9FF]">Full-Stack Website Developer</span>`,
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1500}
                loop
                showCursor
                cursorChar="|"
              />
            </p>

            <div data-aos="fade-up" data-aos-delay="400" className="backdrop-blur-sm bg-black/20 rounded-3xl p-2">
              <SocialLinks />
            </div>
          </div>
        </div>
      </main>
    </VantaBird>
  );
}
