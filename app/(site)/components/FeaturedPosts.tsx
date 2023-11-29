import { FullPostType } from "@/types";
import Link from "next/link";
import React from "react";
import PostCard from "./PostCard";

interface props {
  posts: FullPostType[];
}

const FeaturedPosts: React.FC<props> = ({ posts }) => {
  return (
    <main className="mx-auto">
      <h1 className="text-3xl text-orange-400 py-10">Featured Posts</h1>
      <section className="grid grid-cols-3 gap-5">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  );
};

export default FeaturedPosts;
