import React, { useEffect, useState } from "react";
import EditPostForm from "./EditPostForm";
import { getOnePostWithComments } from "@/actions/getPosts";
import Error403 from "@/components/global/Error403";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePostWithComments(params.id);

  return <main>{post && <EditPostForm post={post} />}</main>;
};

export default Page;
