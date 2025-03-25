"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { ProjectType } from "@/lib/types";
import { projectsData } from "@/lib/data";
import DialogContent from "./DialogContent";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <section id="portfolio" className="section bg-black text-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">My Latest Works</h2>
          <p className="text-gray-400">My projects are here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <Dialog
              key={project.id}
              onOpenChange={() => setIsDialogOpen(!isDialogOpen)}
            >
              <DialogTrigger asChild>
                <div
                  className="flex flex-col items-center text-center cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative mb-4 overflow-hidden rounded-2xl">
                    <Image
                      src={project.image[0]}
                      alt={project.title}
                      className="transition-transform duration-300 transform rounded-2xl hover:scale-110 w-[373px] h-[204px] object-cover"
                    />
                  </div>
                  <p className="text-lg font-semibold">{project.title}</p>
                </div>
              </DialogTrigger>

              <DialogContent selectedProject={selectedProject} />
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
