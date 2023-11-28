"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { SignOutContext } from "@/actions/signOut";
import { useSession } from "next-auth/react";
import EditProfileSheet from "../global/EditProfileSheet";
import AvatarComponent from "../global/AvatarComponent";
import clsx from "clsx";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <>
      {!session?.user ? (
        <Link
          className={clsx(buttonVariants({ variant: "primary" }), "w-5")}
          href={"/login"}
        >
          <div className="my-2 mx-10">Login</div>
        </Link>
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
