import { IProduct } from './menu';

export interface IOrder {
  id?: string;
  time?: string;
  date?: string;
  products: IProduct[];
  orderPrice: number;
  payMethod: string;
  tickets?: number;
  address?: string;
  orderAccepted?: string;
  deliveryTime?: string;
}
