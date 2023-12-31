import { IProduct } from './menu';

export interface IOrder {
  id?: string;
  time?: string;
  date?: string;
  products?: IProduct[];
  orderPrice?: number;
  paymentMethod?: string;
  tickets?: number;
  deliveryAddress?: string;
  orderAccepted?: string;
  deliveryTime?: string;
  cashChange?: string;
  pickPoint?: string;
  comment?: string;
  supplyMethod?: string;
}
