import { StaticImageData } from "next/image";

export interface Option {
  id: number;
  name: string | number;
  image?: StaticImageData;
}
