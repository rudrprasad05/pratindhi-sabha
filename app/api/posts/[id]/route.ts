import prisma from "@/app/libs/prismadb";
import { FullPostType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: any) {
  try {
    const { id } = params;

    const products = await prisma.posts.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(products);
  } catch (error: any) {
    console.log(error);
    return [];
  }
}

export async function PATCH(request: Request, { params }: any) {
  try {
    const { id } = params;
    const body: FullPostType = await request.json();
    const { title, content, authorName, tags, authorID } = body;

    const post = await prisma.posts.update({
      where: {
        id,
      },
      data: {
        title,
        content,
        authorName,
        tags,
        authorID,
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

    const post = await prisma.posts.delete({
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
