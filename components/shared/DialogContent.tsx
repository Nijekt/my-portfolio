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
      <p className="text-gray-600 mt-4">{selectedProject?.description}</p>
      <Button variant="outline" className="mt-4">
        Подробнее
      </Button>
    </DialogContent_>
  );
};

export default DialogContent;
