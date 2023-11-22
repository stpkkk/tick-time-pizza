import { User } from 'firebase/auth';

export interface ExtendedUser extends User {
  name?: string;
  birthday?: string;
}
