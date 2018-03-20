import { GroupModel } from '@users/models/group.model';

export class UserModel {
  id: number;
  username: string;
  about: string;
  date: string;
  role: string;
  comments: number;
  groups?: GroupModel[];
  image: string;
  hero: string;
  streams: number;
  toasts: number;
}

export class RegisterUserModel {
  username: string;
  email: string;
  password: string;
  remember: boolean;
}

export class LoginUserModel {
  email: string;
  password: string;
  remember: boolean;
}
