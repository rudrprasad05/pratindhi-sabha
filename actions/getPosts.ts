import prisma from "@/app/libs/prismadb";

export async function getPosts() {
  try {
    const post = prisma.posts.findMany();

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}

export async function getOnePosts(id: string) {
  try {
    const post = prisma.posts.findUnique({
      where: { id },
    });

    if (!post) return null;

    return post;
  } catch (error) {
    console.log(error);
  }
}
