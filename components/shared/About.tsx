import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="bg-[#1c1d24] section">
      <div className="container mx-auto max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center">
        <div className="flex flex-col">
          <h2 className="text-4xl">Snizhko Nikita</h2>
          <p className="text-[#ceae7d] mb-4">Full-Stack Web Developer</p>
          <p className="mb-8 text-xl text-[#a8adb4]">
            Full-stack developer passionate about building responsive and
            dynamic applications. Skilled in creating both web and mobile
            applications, with a strong focus on delivering seamless user
            experiences. Experienced in both front-end and back-end development,
            including state management, client-side routing, and working with
            databases, ensuring scalable and efficient solutions across
            platforms
          </p>
        </div>
        <Button>
          <Link href={"/assets/resume.pdf"} target="_blank">
            Open My Resume
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default About;
