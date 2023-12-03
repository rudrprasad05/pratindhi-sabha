import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { getSession } from "next-auth/react";

import FeaturedPosts from "./components/FeaturedPosts";
import { GetForms } from "@/actions/form";
import { Suspense } from "react";
import { FormCardSkeleton } from "@/components/FormCard";

export default async function Home() {
  const posts = await GetForms();

  return (
    <div>
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        <FeaturedPosts posts={posts} />
      </Suspense>
    </div>
  );
}
