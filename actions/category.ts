"use server";

import { CreatePostSchema, CreatePostSchemaType } from "@/schemas/form";
import { getUser } from "./getUser";
import prisma from "@/lib/prismadb";
import { FullCategoryType } from "@/types";

export async function GetCategoryById(id: string) {
  return await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
}

export async function UpdateCategory(id: string, data: FullCategoryType) {
  const { name, authorName } = data;
  return await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      authorName: authorName,
    },
  });
}

export async function DeleteCategory(id: string) {
  return await prisma.category.delete({
    where: {
      id: id,
    },
  });
}
