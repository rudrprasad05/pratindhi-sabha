"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignOutContext } from "@/actions/signOut";
import { useSession } from "next-auth/react";
import EditProfileSheet from "../global/EditProfileSheet";
import AvatarComponent from "../global/AvatarComponent";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <>
      {!session?.user ? (
        <div className="bg-orange-600 flex items-center rounded-full h-10  text-white hover:bg-orange-500 font-bold">
          <Link className="" href={"/login"}>
            <div className="my-2 mx-10">Login</div>
          </Link>
        </div>
      ) : (
        <div className="mt-auto">
          <EditProfileSheet user={session?.user}>
            <AvatarComponent fallback={"AD"} src={session?.user?.image} />
          </EditProfileSheet>
        </div>
      )}
    </>
  );
}
