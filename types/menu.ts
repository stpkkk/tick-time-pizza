import { StaticImageData } from "next/image";
import { Option } from "./radio-option";

export interface additionalIngredientsTypes {
  id: number;
  image: string | StaticImageData;
  name: string;
  weight: number;
  price: number;
	amount: number
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

export interface MenuItemTypes {
	id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
  price: number;
  additionalIngredients: additionalIngredientsTypes[];
	removeIngredients: Option[];
  categories?: menuCategoriesTypes[];
	sizes: Option[]
	dough: Option[];
	nutritionalValues: nutritionalValueTypes
}
