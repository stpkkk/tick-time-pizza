import { IAddress } from './address';
import { IProduct } from './menu';

export interface IOrder {
  id?: string;
  time?: string;
  date?: string;
  products?: IProduct[];
  orderPrice?: number;
  paymentMethod?: string;
  tickets?: number;
  deliveryAddress?: IAddress | null;
  orderAccepted?: string;
  deliveryTime?: {
    hours?: string;
    minutes?: string;
  };
  deliveryDate?: string;
  cashChange?: string;
  pickPoint?: string;
  comment?: string;
  supplyMethod?: string;
}
