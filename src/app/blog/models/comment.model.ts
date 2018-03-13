import { UserModel } from '@users/models/user.model';

export interface CommentModel {
  id: number;
  text: string;
  date: string;
  user: UserModel;
}

export interface WriteCommentModel {
  userId: number;
  postId: number;
  comment: string;
}
