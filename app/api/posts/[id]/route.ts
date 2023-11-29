import prisma from "@/app/libs/prismadb";
import { FullPostType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  try {
    const { id } = params;

    const posts = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    return NextResponse.json(posts);
  } catch (error: any) {
    console.log(error);
    return [];
  }
}

export async function PATCH(request: Request, { params }: any) {
  try {
    const { id } = params;
    const body: FullPostType = await request.json();
    const { title, content, authorName, tags, authorId } = body;

    const post = await prisma.post.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        authorName,
        tags,
        authorId,
      },
    });
    return NextResponse.json(post);
  } catch (error: any) {
    return [];
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const { id } = params;

    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error);
    return [];
  }
}
