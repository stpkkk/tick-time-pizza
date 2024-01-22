import { User } from 'firebase/auth';
import { IAddress } from './address';
import { IProduct } from './menu';
import { IOrder } from './order';

export interface ExtendedUser extends Partial<User> {
  name?: string;
  birthday?: string;
  orders?: IOrder[];
  bookmarks?: IProduct[];
  addresses?: IAddress[];
}
