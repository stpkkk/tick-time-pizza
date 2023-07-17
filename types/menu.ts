import { StaticImageData } from "next/image";

export interface additionalIngredientsTypes {
  id: number;
  image: string | StaticImageData;
  name: string;
  weight: number;
  price: number;
}

export interface nutritionalValueTypes {
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
}

export interface MenuItemTypes {
  id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
  price: number;
  additionalIngredients: additionalIngredientsTypes[];
  removeIngredients: string[];
  categories?: string[];
  categoryImages?: StaticImageData[];
  sizes: number[];
  options: string[];
  nutritionalValue: nutritionalValueTypes;
}
