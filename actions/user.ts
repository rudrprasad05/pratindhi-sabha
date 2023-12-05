"use server";

import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function CreateNewUser(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password, role } = body;

    if (!email || !name || !password) {
      return new NextResponse("Missing Info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
        role,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}

export async function GetAdmins() {
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "admin",
      },
    });

    return users;
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}

export async function GetCurrentUser(id: string) {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return users;
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}

export async function DeleteUser(id: string) {
  try {
    const users = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return users;
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}

// export async function UpdateUserProfile(request: Request, { params }: any) {
//   try {
//     const { id } = params;
//     const body = await request.json();
//     const user = await GetCurrentUser(id);
//     const { email, name, password } = body;
//     console.log(user);
//     var hashedPassword = null;
//     if (password != "") {
//       hashedPassword = await bcrypt.hash(password, 12);
//     } else {
//       hashedPassword = user?.hashedPassword;
//     }

//     const updatedUser = await prisma.user.update({
//       where: {
//         id,
//       },
//       data: {
//         email,
//         name,
//         hashedPassword,
//       },
//     });
//     return updatedUser;
//   } catch (error: any) {
//     return [];
//   }
// }
