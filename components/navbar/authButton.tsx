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
          className={clsx("rounded-full", buttonVariants({ variant: "primary"  }))}
          href={"/login"}
        >
          Login
        </Link>
      ) : (
        <div className="mt-auto flex items-end">
          <EditProfileSheet user={session?.user}>
            <AvatarComponent fallback={"AD"} src={session?.user?.image} />
          </EditProfileSheet>
        </div>
      )}
    </>
  );
}
