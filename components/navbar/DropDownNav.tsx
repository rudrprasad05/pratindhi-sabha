"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { NavigationMenuDemo } from "../global/DropDownNav";
import AuthButton from "./authButton";

const DropDownNav = () => {
  const { data: user } = useSession();

  return (
    <>
      <nav className=" z-50 w-screen">
        <main className="flex items-center justify-between h-[15vh]  mx-auto w-4/5">
          <div className="opacity-70">
            <Image src={"/logo.png"} alt="Om Logo" height={40} width={40} />
          </div>
          <div className="flex gap-10">
            <NavigationMenuDemo />
          </div>

          <div>
            <AuthButton />
          </div>
        </main>
      </nav>
    </>
  );
};

export default DropDownNav;
