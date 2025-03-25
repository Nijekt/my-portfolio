import React, { FC } from "react";
import {
  Carousel as Carousel_,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ProjectType } from "@/lib/types";
import Image from "next/image";

type Props = {
  selectedProject: ProjectType | null;
};

const Carousel: FC<Props> = ({ selectedProject }) => {
  return (
    <Carousel_>
      <CarouselContent>
        {selectedProject?.image.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              alt="Project"
              className="rounded-xl w-full h-56 object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {Array.isArray(selectedProject?.image) &&
      selectedProject.image.length > 1 ? (
        <>
          <CarouselPrevious className="cursor-pointer left-[-15px]" />
          <CarouselNext className="cursor-pointer right-[-15px]" />
        </>
      ) : null}
    </Carousel_>
  );
};

export default Carousel;
