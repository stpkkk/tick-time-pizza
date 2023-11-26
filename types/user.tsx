import { User } from 'firebase/auth';
import { IProduct } from './menu';
import { IOrder } from './order';

export interface ExtendedUser extends Partial<User> {
  name?: string;
  birthday?: string;
  orders?: IOrder[];
}
