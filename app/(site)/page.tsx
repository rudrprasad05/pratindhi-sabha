import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import FeaturedPosts from "./components/FeaturedPosts";

export default async function Home() {
  const user = await getUser();
  const posts = await getPosts();

  return (
    <div>
      {user?.email ? "Your are logged in. " : "You are not logged in"} This is
      the hero page
      {posts && (
        <div>
          <FeaturedPosts posts={posts} />
        </div>
      )}
    </div>
  );
}
