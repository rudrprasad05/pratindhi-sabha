import { useSession } from "next-auth/react";
import prisma from "@/app/libs/prismadb";

export async function getUser() {
  const session = useSession();
  const sessionUser = session.data?.user;

  try {
    const user = prisma.user.findUnique({
      where: {
        email: sessionUser?.email as string,
      },
    });

    return user;
  } catch (error) {
    console.log(error);
  }
}
