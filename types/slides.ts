import { StaticImageData } from 'next/image';

export type Slides = {
  id: number;
  image: string | StaticImageData;
  title: string;
};
