import prisma from "@/lib/prismadb";
import { FullCommentType, FullPostType } from "@/types";
import { NextResponse } from "next/server";

export async function PATCH(request: Request, { params }: any) {
  try {
    const { id } = params;
    const body: FullCommentType = await request.json();
    const { isModerated } = body;

    const comment = await prisma.comment.update({
      where: {
        id,
      },
      data: {
        isModerated,
      },
    });
    return NextResponse.json(comment);
  } catch (error: any) {
    return [];
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const { id } = params;

    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(comment);
  } catch (error: any) {
    console.log(error);
    return [];
  }
}
