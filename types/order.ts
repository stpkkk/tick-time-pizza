import { IProduct } from './menu';

export interface IOrder {
  id?: string;
  time?: string;
  date?: string;
  products: IProduct[];
}
