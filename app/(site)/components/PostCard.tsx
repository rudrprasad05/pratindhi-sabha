import { Badge } from "@/components/ui/badge";
import { FullPostType } from "@/types";
import Link from "next/link";
import React from "react";

interface props {
  post: FullPostType;
}

const PostCard: React.FC<props> = ({ post }) => {
  return (
    <article>
      <div>
        <img src="/pic.jpg" className="rounded-md" />
      </div>
      <div>{post.title}</div>
      <div className="flex justify-between">
        {post.tags != "" ? (
          <Badge className="capitalize" variant={"outline"}>
            {post.tags}
          </Badge>
        ) : (
          <Badge className="capitalize" variant={"outline"}>
            No Tag
          </Badge>
        )}
        <Link
          href={`/post/${post.id}`}
          className="text-sm text-slate-400 ml-auto"
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
