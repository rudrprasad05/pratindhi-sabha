"use client";

import Button from "@/components/global/Button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { SignOutContext } from "../actions/signOut";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link href={"/login"}>Login</Link>
      <Button onClick={() => SignOutContext()}>Log Out</Button>
    </>
  );
}
