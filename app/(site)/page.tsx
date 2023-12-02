import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { getSession } from "next-auth/react";

import FeaturedPosts from "./components/FeaturedPosts";
import { GetForms } from "@/actions/form";

export default async function Home() {
  const posts = await GetForms();

  return (
    <div>
      <div>
        <FeaturedPosts posts={posts} />
      </div>
    </div>
  );
}
