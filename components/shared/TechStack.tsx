import React from "react";
import Image from "next/image";
import { techStack } from "@/lib/data";

const TechStack = () => {
  return (
    <section id="tech" className="flex items-center bg-[#1c1d24] py-12">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center pb-12">Tech Stack</h1>
        <div className="grid grid-cols-5">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center m-3"
            >
              <Image src={tech.image} alt="logo" width={96} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
