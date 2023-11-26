import { User } from 'firebase/auth';
import { IOrder } from './order';

export interface ExtendedUser extends Partial<User> {
  name?: string;
  birthday?: string;
  orders?: IOrder[];
}
