import { StaticImageData } from "next/image";
import { Option } from "./radio-option";

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

export interface removedIngredientsTypes {
	id: number
	name: string
	ingredient?: string
}

export interface MenuItemTypes {
  id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
  price: number;
  additionalIngredients: additionalIngredientsTypes[];
	removeIngredients: removedIngredientsTypes[];
  categories?: menuCategoriesTypes[];
  sizes: menuSizesTypes[];
  dough: menuOptionsTypes[];
	nutritionalValues: nutritionalValueTypes
}
