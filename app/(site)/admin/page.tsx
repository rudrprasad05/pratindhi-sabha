import { getPosts } from "@/actions/getPosts";
import { DataTable } from "@/components/global/data-table";

import { columns, User } from "./components/columns";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getUser } from "@/actions/getUser";
import EditProfile from "./components/EditProfileModal";
import axios from "axios";
import NewProfileModal from "./components/NewProfileModal";

export default async function Page() {
  const data = await getPosts();
  const user = await getUser();

  const userId = user?.id;

  return (
    <section className="my-10 w-4/5 mx-auto">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">All Posts</h1>
          <Button variant={"link"}>
            <Link href={"/admin/post/new"}>New</Link>
          </Button>
        </div>

        {data && <DataTable columns={columns} data={data} />}
      </div>

      <div className="my-10 flex justify-between">
        <h1 className="text-3xl font-bold">Admin User</h1>
        <div className="flex gap-2">
          <EditProfile user={user} name="Edit Profile" />
          <NewProfileModal user={user} name="New Admin" />
        </div>
      </div>
    </section>
  );
}
