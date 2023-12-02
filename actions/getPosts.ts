import prisma from "@/lib/prismadb";

export async function getPosts() {
  try {
    const post = prisma.post.findMany();

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getOnePosts(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      // include: {
      //   comments: {
      //     include: {
      //       user: true,
      //     },
      //     orderBy: {
      //       createdAt: "desc",
      //     },
      //   },
      // },
    });

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getOnePostWithComments(id: string) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        author: true,
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

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}
