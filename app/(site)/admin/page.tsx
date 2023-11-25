import { getPosts } from "@/actions/getPosts";
import { DataTable } from "@/components/global/data-table";

import { postColumns, User } from "./components/tables/postColumns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUser } from "@/actions/getUser";
import EditProfile from "./components/editprofile/EditProfileModal";
import axios from "axios";
import NewProfileModal from "./components/newprofile/NewProfileModal";
import { categoryColumns } from "./components/tables/categoryColumns";

export default async function Page() {
  const data = await getPosts();
  const user = await getUser();

  const userId = user?.id;

  return (
    <main className="my-10 w-4/5 mx-auto">
      {/* Post table section */}
      <section className="">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <Button variant={"link"}>
            <Link href={"/admin/post/new"}>New</Link>
          </Button>
        </div>

        {data && <DataTable columns={postColumns} data={data} />}
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
          <h1 className="text-3xl font-bold">All Posts</h1>
          <Button variant={"link"}>
            <Link href={"/admin/post/new"}>New</Link>
          </Button>
        </div>

        {data && <DataTable columns={categoryColumns} data={data} />}
      </section>
    </main>
  );
}
