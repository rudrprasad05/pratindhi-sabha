import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { getSession } from "next-auth/react";

import FeaturedPosts from "./components/FeaturedPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      {posts && (
        <div>
          <FeaturedPosts posts={posts} />
        </div>
      )}
    </div>
  );
}
