import { Posts } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface props {
  post: Posts;
}

const PostCard: React.FC<props> = ({ post }) => {
  return (
    <div>
      <div>{post.title}</div>
      <Link href={`/admin/post/${post.id}`}>Edit</Link>
    </div>
  );
};

export default PostCard;
