import { getOnePostWithComments, getOnePosts } from "@/actions/getPosts";
import React from "react";
import PostPage from "../components/PostPage";
import { getUser } from "@/actions/getUser";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePostWithComments(params.id);
  const user = await getUser();

  return <>{post && user && <PostPage data={post} user={user} />}</>;
};

export default page;
