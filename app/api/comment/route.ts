import prisma from "@/app/libs/prismadb";
import { FullCommentType } from "@/types";
import { NextResponse } from "next/server";

// TODO nested comments

export async function POST(request: Request) {
  try {
    const body: FullCommentType = await request.json();
    const { message, userId, postId } = body;

    const comment = await prisma.comment.create({
      data: {
        message,
        userId,
        postId,
      },
    });

    const post = await prisma.posts.update({
      where: { id: postId },
      data: {
        comments: {
          connect: {
            id: comment.id,
          },
        },
      },
    });

    console.log(comment, post);

    return NextResponse.json(comment);
  } catch (error: any) {
    console.log(error, "COMMENT CREATION ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
