import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password, type } = body;

    if (!email) {
      return new NextResponse("Missing Email", { status: 400 });
    }
    if (!name) {
      return new NextResponse("Missing Name", { status: 400 });
    }
    if (!password) {
      return new NextResponse("Missing Password", { status: 400 });
    }

    console.log(body);

    const hashedPassword = await bcrypt.hash(password, 12);

    const admin = await prisma.admin.create({
      data: {
        email,
        hashedPassword,
        name,
        type,
      },
    });

    return NextResponse.json(admin);
  } catch (error: any) {
    console.log(error, "REGISTRATION ERROR");
    return new NextResponse(error, { status: 500 });
  }
}
