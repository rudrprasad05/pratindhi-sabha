import { Category, Comment, Post, User } from "@prisma/client";

export type FullPostType = Post & {
  comments: Comment[];
  author: User;
};

export type FullUserType = User;

export type FullCategoryType = Category;

export type FullCommentType = Comment & {
  user: User;
};
