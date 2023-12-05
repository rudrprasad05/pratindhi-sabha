import { GetForms } from "@/actions/form";
import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { FormCardSkeleton } from "@/components/FormCard";
import { getSession } from "next-auth/react";
import { Suspense } from "react";

import CategoryCaro from "./components/CategoryCaro";
import FeaturedPosts from "./components/FeaturedPosts";

export default async function Home() {
  const posts = await GetForms();
  const categories = await getCategories();

  return (
    <div>
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        <FeaturedPosts posts={posts} />
        <CategoryCaro categories={categories} />
      </Suspense>
    </div>
  );
}
