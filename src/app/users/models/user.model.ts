import { GroupModel } from '@users/models/group.model';

export interface UserModel {
  id: number;
  username: string;
  about: string;
  date: string;
  role: string;
  comments: number;
  groups: GroupModel[];
  image: string;
  hero: string;
  streams: number;
  toasts: number;
}

export interface RegisterUserModel {
  username: string;
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginUserModel {
  email: string;
  password: string;
  remember: boolean;
}
