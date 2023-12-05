import { FaPenFancy, FaRegComment } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings, MdOutlineLabel } from "react-icons/md";
import AdminCards from "../../../components/AdminCards";
import { CreateFormBtn } from "@/components/CreateFormBtn";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import { Suspense, useEffect, useState } from "react";
import CreateAdminButton from "@/components/CreateAdminButton";
import EditProfileButton from "@/components/EditProfileButton";
import { useSession } from "next-auth/react";
import CreateCategoryButton from "@/components/CreateCategoryButton";
import { getCategories } from "@/actions/getCategories";

export default async function Page() {
  const categories = await getCategories();
  console.log(categories);

  return (
    <>
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        <main className="grow">
          <div className="pb-20">
            <h1 className="text-3xl text-primary font-bold pb-10">
              Admin Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <AdminCards
                href={"/admin/posts"}
                name="Posts"
                Icon={FaPenFancy}
              />
              <AdminCards
                href={"/admin/categories"}
                name="Categories"
                Icon={MdOutlineLabel}
              />
              <AdminCards
                href={"/admin/users"}
                name="Admin"
                Icon={MdOutlineAdminPanelSettings}
              />
              <AdminCards
                href={"/admin/comments"}
                name="Comments"
                Icon={FaRegComment}
              />
            </div>
          </div>

          <h1 className="text-3xl text-primary font-bold pb-10">
            Quick Access
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories && <CreateFormBtn categories={categories} />}

            <CreateAdminButton />
            <EditProfileButton />
            <CreateCategoryButton />
          </div>
        </main>
      </Suspense>
    </>
  );
}
