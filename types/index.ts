import { User, Posts, Category, Comments } from "@prisma/client";

export type FullPostType = Posts;

export type FullUserType = User;

export type FullCategoryType = Category;

export type FullCommentType = Comments;
