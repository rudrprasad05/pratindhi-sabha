import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, author, tags, content } = body;

    const post = await prisma.posts.create({
      data: {
        title,
        author,
        tags,
        content,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error, "POST CREATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
