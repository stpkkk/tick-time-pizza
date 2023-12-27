import { StaticImageData } from 'next/image';


export interface IOption {
  id?: number;
  value: string | number | null;
  image?: StaticImageData;
}