import { getCategories } from "@/actions/getCategories";
import { getUser } from "@/actions/getUser";
import { DataTable } from "@/components/global/data-table";

import { categoryColumns } from "../../../components/tables/categoryColumns";

export default async function Page() {
  const user = await getUser();
  const categoryData = await getCategories();

  return (
    <main className="">
      {/* category section */}

      <h1 className="text-3xl text-primary font-bold pb-10">Categories</h1>

      {categoryData && (
        <DataTable
          type="category"
          columns={categoryColumns}
          data={categoryData}
        />
      )}
    </main>
  );
}
