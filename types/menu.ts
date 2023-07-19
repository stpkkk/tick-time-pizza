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

export interface menuCategoriesTypes {
  key: number;
  title: string;
  image?: StaticImageData;
}

export interface menuSizesTypes {
  id: number;
  name: number;
}

export interface menuOptionsTypes {
  id: number;
  name: string;
}

export interface MenuItemTypes {
  id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
  price: number;
  additionalIngredients: additionalIngredientsTypes[];
  removeIngredients: string[];
  categories?: menuCategoriesTypes[];
  sizes: menuSizesTypes[];
  options: menuOptionsTypes[];
  nutritionalValue: nutritionalValueTypes;
}
