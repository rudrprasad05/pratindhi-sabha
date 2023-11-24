import { useSession } from "next-auth/react";
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import { getUser } from "./getUser";

export async function getPosts() {
  try {
    const user = await getUser();
    if (user?.role != "admin") {
      return null;
    }
    const post = prisma.posts.findMany();

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}
