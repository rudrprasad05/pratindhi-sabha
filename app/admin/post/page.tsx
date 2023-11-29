import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { DataTable } from "@/components/global/data-table";
import { Button, buttonVariants } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

import { postColumns } from "../components/tables/postColumns";

export default async function Page() {
  const postData = await getPosts();
  const user = await getUser();
  const categoryData = await getCategories();

  const userId = user?.id;

  return (
    <main className="my-10 w-4/5 mx-auto">
      {/* Post table section */}
      <section className="">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <Link
            href={"/admin/post/new"}
            className={buttonVariants({ variant: "outline" })}
          >
            New
          </Link>
        </div>

        {postData && (
          <DataTable type="post" columns={postColumns} data={postData} />
        )}
      </section>
    </main>
  );
}
