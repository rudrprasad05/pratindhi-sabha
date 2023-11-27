import { FullPostType } from "@/types";
import Link from "next/link";
import React from "react";

interface props {
  posts: FullPostType[];
}

const FeaturedPosts: React.FC<props> = ({ posts }) => {
  return (
    <main>
      <section>
        {posts?.map((post) => (
          <div key={post.id}>
            <div>{post.title}</div>
            <div>
              <Link href={`/post/${post.id}`}>View</Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FeaturedPosts;
