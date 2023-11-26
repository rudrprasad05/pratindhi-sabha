import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import { DataTable } from "@/components/global/data-table";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";

import EditProfile from "./components/editprofile/EditProfileModal";
import NewCategoryModal from "./components/newCategory/NewCategoryModal";
import NewProfileModal from "./components/newprofile/NewProfileModal";
import { categoryColumns } from "./components/tables/categoryColumns";
import { postColumns, User } from "./components/tables/postColumns";

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
          <Button variant={"outline"}>
            <Link href={"/admin/post/new"}>New</Link>
          </Button>
        </div>

        {postData && (
          <DataTable type="post" columns={postColumns} data={postData} />
        )}
      </section>

      {/* admin user section */}
      <section className="my-10 flex justify-between">
        <h1 className="text-3xl font-bold">Admin User</h1>
        <div className="flex gap-2">
          {user && (
            <>
              <EditProfile user={user} name="Edit Profile" />
              <NewProfileModal user={user} name="New Admin" />
            </>
          )}
        </div>
      </section>

      {/* category section */}
      <section className="my-20">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">All Categories</h1>
          {user && <NewCategoryModal user={user} name="New Category" />}
        </div>

        {categoryData && (
          <DataTable
            type="category"
            columns={categoryColumns}
            data={categoryData}
          />
        )}
      </section>
    </main>
  );
}
