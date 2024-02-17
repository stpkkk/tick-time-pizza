import { StaticImageData } from 'next/image';

export interface IOption {
  id?: number;
  value: string | number;
  image?: StaticImageData;
}
