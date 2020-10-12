import { User } from '../models/user';

export interface State {
  isLoggedIn: boolean;
  languages: string[];
  defaultLang: string;
  user: User;
}
