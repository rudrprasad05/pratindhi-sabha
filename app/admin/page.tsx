"use client";

import { FaPenFancy } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings, MdOutlineLabel } from "react-icons/md";
import AdminCards from "./components/AdminCards";
import { GetForms } from "@/actions/form";
import CreateFormBtn from "@/components/CreateFormBtn";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import { Suspense, useEffect, useState } from "react";
import { Post } from "@prisma/client";
import CreateAdminButton from "@/components/CreateAdminButton";
import EditProfileButton from "@/components/EditProfileButton";

export default function Page() {
  return (
    <>
      {/* <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      > */}
      <main className="grow">
        <div className="pb-20">
          <h1 className="text-4xl text-primary font-bold pb-10">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <AdminCards href={"/admin/posts"} name="Posts" Icon={FaPenFancy} />
            <AdminCards
              href={"/admin/users"}
              name="Admin"
              Icon={MdOutlineAdminPanelSettings}
            />
            <AdminCards
              href={"/admin/categories"}
              name="Categories"
              Icon={MdOutlineLabel}
            />
          </div>
        </div>

        <h1 className="text-4xl text-primary font-bold pb-10">Quick Access</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreateFormBtn />
          <CreateAdminButton />
          <EditProfileButton />
        </div>
      </main>
      {/* </Suspense> */}
    </>
  );
}
