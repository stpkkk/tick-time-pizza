import { StaticImageData } from 'next/image';

export type Promo = {
  id: number;
  title: string;
  image: string | StaticImageData;
  description: string;
  isRedirect: boolean;
};
