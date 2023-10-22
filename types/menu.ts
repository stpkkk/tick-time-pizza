import { StaticImageData } from 'next/image';
import { Promo } from './promo';
import { IOption } from './radio-option';

export interface IPrice {
  id: number;
  price: number;
}

export interface IWeight {
  id?: number;
  weight?: number | null;
}

export interface IAdditionalIngredient {
  id: number;
  image: string | StaticImageData;
  name: string;
  weights: {
    id: number;
    value: number;
  }[];
  prices: IPrice[];
  quantity?: number;
  maxQuantity: number;
}

export interface INutritionalValue {
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
}

export interface IMenuCategory {
  id: number;
  title: string;
  image?: StaticImageData;
}

export interface IProduct {
  id: number;
  title: string;
  image: string | StaticImageData;
  group: string;
  ingredients?: string;
  prices: IPrice[];
  additionalIngredients?: IAdditionalIngredient[];
  removeIngredients?: IOption[];
  categories?: IMenuCategory[];
  sizes?: IOption[];
  dough?: IOption[];
  weights?: IWeight[];
  nutritionalValues?: INutritionalValue;
  selectedSize?: IOption;
  selectedDough?: IOption;
  removedIngredients?: IOption[];
  productQuantity?: number;
  uuid?: string;
  totalProductPrice?: number;
  promoProducts?: IProduct[];
}
