import { getPosts } from "@/actions/getPosts";
import { DataTable } from "@/components/global/data-table";

import { columns, User } from "./columns";

export default async function Page() {
  const data = await getPosts();

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold">All Users</h1>
        {data && (
        <DataTable columns={columns} data={data} />

        )}
      </div>
    </section>
  );
}