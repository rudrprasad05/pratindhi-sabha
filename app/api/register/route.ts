import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email) {
      return new NextResponse("Missing Email", { status: 400 });
    }
    if (!name) {
      return new NextResponse("Missing Name", { status: 400 });
    }
    if (!password) {
      return new NextResponse("Missing Password", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
