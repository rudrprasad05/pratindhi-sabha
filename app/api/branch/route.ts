import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { FullBranchType, FullCategoryType } from "@/types";

export async function POST(request: Request) {
  try {
    const body: FullBranchType = await request.json();
    const { branchName, headName, phone, email } = body;

    const category = await prisma.branch.create({
      data: {
        branchName,
        headName,
        phone,
        email,
      },
    });

    return NextResponse.json(category);
  } catch (error: any) {
    console.log(error, "NEW BRANCH ERROR");
    return new NextResponse("internal error", { status: 500 });
  }
}
