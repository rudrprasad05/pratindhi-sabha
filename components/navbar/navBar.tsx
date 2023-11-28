"use client";

import { getUser } from "@/actions/getUser";
import { User } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

import AuthButton from "./authButton";
import { NavLinks } from "./navLinks";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface props {
  user: User;
}

export const NavBar: React.FC<props> = ({ user }) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  useEffect(() => {
    setDomLoaded(true);
  }, [domLoaded]);
  return (
    <>
      <nav className="">
        <main className="flex items-center justify-between  mx-auto py-10 w-4/5">
          <div className="opacity-80">
            <Image src={"/logo.png"} alt="Om Logo" height={40} width={40} />
          </div>
          <div className="flex gap-10">
            <NavLinks />
            {user?.role == "admin" && <Link href={"/admin"}>Admin</Link>}
          </div>

          <div>
            <AuthButton />
          </div>
        </main>
      </nav>
    </>
  );
};
