import prisma from "@/app/libs/prismadb";
import { FullPostType } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body: FullPostType = await request.json();
    const { title, authorId, tags, content, authorName, likes } = body;

    const post = await prisma.post.create({
      data: {
        title,
        authorId,
        authorName,
        tags,
        content,
        likes,
        comments: undefined,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error, "POST CREATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
