import { useSession } from "next-auth/react";
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import { getUser } from "./getUser";

export async function getCategories() {
  try {
    const category = prisma.category.findMany();

    if (!category) return null;

    return category;
  } catch (error) {
    console.log(error);
  }
}
