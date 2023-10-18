import { StaticImageData } from 'next/image';

export type Promo = {
  id: number;
  title: string;
  image: string | StaticImageData;
  isRedirect: boolean;
  maxValue?: number;
  description: string;
};
