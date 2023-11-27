import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { FullPostType } from "@/types";

export async function POST(request: Request) {
  try {
    const body: FullPostType = await request.json();
    const { title, authorID, tags, content, authorName, likes } = body;

    const post = await prisma.posts.create({
      data: {
        title,
        authorID,
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
