import { StaticImageData } from 'next/image';

export type Card = {
  id: number;
  name: string;
  image: StaticImageData | string;
};

export type Content = {
  id: number;
  title: string;
  text: string;
};
