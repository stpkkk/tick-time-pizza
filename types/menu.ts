import { StaticImageData } from "next/image";
import { IOption } from './radio-option'

export interface IPrice {
	id: number
	price: number
}

export interface IWeight {
	id?: number
	weight?: number | null
}

export interface IAdditionalIngredient {
  id: number;
  image: string | StaticImageData;
	name: string
	weights: {
		id: number
		value: number
	}[]
	prices: IPrice[]
	amount?: number
	maxAmount: number
}

export interface INutritionalValue {
  proteins: number;
  fats: number;
  carbohydrates: number;
  calories: number;
}

export interface IMenuCategory {
  key: number;
  title: string;
  image?: StaticImageData;
}

export interface IProduct {
	id: number;
  title: string;
  image: string | StaticImageData;
  ingredients: string;
	prices: IPrice[]
	additionalIngredients: IAdditionalIngredient[]
	removeIngredients: IOption[]
	categories?: IMenuCategory[]
	sizes: IOption[]
	dough: IOption[]
	weights: IWeight[]
	nutritionalValues: INutritionalValue
}