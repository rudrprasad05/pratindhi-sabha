import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { FullCategoryType } from "@/types";

export async function POST(request: Request) {
  try {
    const body: FullCategoryType = await request.json();
    const { authorID, authorName, name } = body;

    const category = await prisma.category.create({
      data: {
        authorID,
        authorName,
        name,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    console.log(error, "NEW CAT ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
