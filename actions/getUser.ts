import { useSession } from "next-auth/react";
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

export async function getUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const user = prisma.user.findUnique({
      where: {
        email: session?.user?.email as string,
      },
    });

    if (!user) return null;

    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function getAdmin() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const user = prisma.user.findMany({
      where: {
        role: "admin",
      },
    });

    if (!user) return null;

    return user;
  } catch (error) {
    console.log(error);
  }
}
