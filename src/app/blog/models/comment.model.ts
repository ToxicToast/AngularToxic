import { UserModel } from '@users/models/user.model';

export class CommentModel {
  id: number;
  text: string;
  date: string;
  user: UserModel;
}

export class WriteCommentModel {
  userId: number;
  postId: number;
  comment: string;
}
