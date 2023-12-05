import { CreatePostSchema, CreatePostSchemaType } from "@/schemas/form";
import { getUser } from "./getUser";
import prisma from "@/lib/prismadb";

export async function GetAllComments() {
  return await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      // post: true,
    },
  });
}
