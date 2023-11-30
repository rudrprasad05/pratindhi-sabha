import { getOnePosts, getOnePostWithComments } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import React from "react";

import PostPage from "../components/PostPage";

const page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePostWithComments(params.id);
  const user = await getUser();

  return <>{post && <PostPage data={post} user={user} />}</>;
};

export default page;
