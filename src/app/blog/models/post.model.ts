import { CategoryModel } from '@blog/models/category.model';
import { UserModel } from '@users/models/user.model';

export class PostModel {
  id: number;
  title: string;
  slug: string;
  intro: string;
  text: string;
  date: string;
  image: string;
  hero: string;
  comments: number;
  category: CategoryModel;
  user: UserModel;
}
