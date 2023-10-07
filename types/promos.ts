import { StaticImageData } from 'next/image';

export type Promos = {
  id: number;
  title: string;
  image: string | StaticImageData;
};
