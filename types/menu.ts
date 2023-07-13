import { StaticImageData } from "next/image";

export interface MenuItemTypes {
  id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
  price: number;
}
