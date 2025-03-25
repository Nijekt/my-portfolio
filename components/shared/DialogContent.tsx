import React, { FC } from "react";
import { ProjectType } from "@/lib/types";
import {
  DialogHeader,
  DialogTitle,
  DialogContent as DialogContent_,
} from "../ui/dialog";
import { Button } from "../ui/button";
import CarouselContent from "./Carousel";

type Props = {
  selectedProject: ProjectType | null;
};

const DialogContent: FC<Props> = ({ selectedProject }) => {
  return (
    <DialogContent_ className="max-w-lg">
      <DialogHeader className="text-white">
        <DialogTitle>{selectedProject?.title}</DialogTitle>
      </DialogHeader>

      <CarouselContent selectedProject={selectedProject} />
      <p className="text-[#a8adb4] mt-4">{selectedProject?.description}</p>
      {selectedProject?.title == "Blog" ? (
        <>
          <a href={selectedProject?.github[0]} target="_blank">
            <Button variant="outline" className="w-full mt-4">
              Go to GitHub repository - Frontend
            </Button>
          </a>
          <a href={selectedProject?.github[1]} target="_blank">
            <Button variant="outline" className="w-full">
              Go to GitHub repository - Backend
            </Button>
          </a>
        </>
      ) : (
        <a href={selectedProject?.github[0]} target="_blank">
          <Button variant="outline" className="w-full mt-4">
            Go to GitHub repository
          </Button>
        </a>
      )}
    </DialogContent_>
  );
};

export default DialogContent;
