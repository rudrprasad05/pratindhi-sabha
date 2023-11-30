"use client";

import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import AdminCommand from "@/components/global/AdminCommand";
import Link from "next/link";
import { FaPenFancy } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings, MdOutlineLabel } from "react-icons/md";

import AdminCards from "./components/AdminCards";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: user } = useSession();

  return (
    <>
      {
        <main className="my-10 w-4/5 mx-auto grid grid-cols-4 gap-10">
          <div className="grid grid-cols-3 gap-10 grow col-span-3">
            <AdminCards href={"/admin/post"} name="Posts" Icon={FaPenFancy} />
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

          <div>
            <AdminCommand />
          </div>
        </main>
      }
      {/* // ) : (
      //   <div className="grid place-content-center w-screen h-80v">
      //     <div className="text-5xl text-orange-500">
      //       Error 403: Unauthorized Access
      //     </div>
      //   </div>
      // )} */}
    </>
  );
}
