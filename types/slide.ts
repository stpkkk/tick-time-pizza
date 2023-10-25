import { StaticImageData } from 'next/image';

export type Slide = {
  id: number;
  image: string | StaticImageData;
  title: string;
};
