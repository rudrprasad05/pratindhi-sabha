import { Branch, Category, Comment, Post, User } from "@prisma/client";

export type FullPostType = Post & {
  comments: Comment[];
  author: User;
};

export type FullBranchType = Branch;

export type FullUserType = User;

export type FullCategoryType = Category;

export type FullCommentType = Comment & {
  user: User;
};
