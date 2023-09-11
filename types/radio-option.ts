import { StaticImageData } from 'next/image';

export interface IOption {
  id?: number;
  name: string | number | null;
  image?: StaticImageData;
}
