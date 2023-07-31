import { StaticImageData } from "next/image";

export interface Option {
  id?: number;
	name: string | number | null;
  image?: StaticImageData;
}
