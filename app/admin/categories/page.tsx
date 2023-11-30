import { getCategories } from "@/actions/getCategories";

import { getUser } from "@/actions/getUser";
import { DataTable } from "@/components/global/data-table";
import NewCategoryModal from "../components/newCategory/NewCategoryModal";
import { categoryColumns } from "../components/tables/categoryColumns";
import Error403 from "@/components/global/Error403";

export default async function Page() {
  const user = await getUser();
  const categoryData = await getCategories();

  return (
    <main className="my-10 w-4/5 mx-auto">
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
