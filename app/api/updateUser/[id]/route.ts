import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getUser } from "@/actions/getUser";

export async function PATCH(request: Request, { params }: any) {
  try {
    const { id } = params;
    const body = await request.json();
    const user = await getUser();
    const { email, name, password } = body;
    var hashedPassword = null;
    if (password != "") {
      hashedPassword = await bcrypt.hash(password, 12);
    } else {
      hashedPassword = user?.hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return [];
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const { id } = params;

    const updatedUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(updatedUser);
  } catch (error: any) {
    return [];
  }
}
