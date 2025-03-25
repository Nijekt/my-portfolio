import { StaticImageData } from "next/image";

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData[];
};
