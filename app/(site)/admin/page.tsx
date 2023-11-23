"use client";

import ProtectRoutes from "@/actions/protectRoutes";
import Error403 from "@/components/global/Error403";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const auth = ProtectRoutes();

  useEffect(() => {
    if (!auth) {
      toast.error("You are not Authenticated");
    }
  }, [auth]);

  if (!auth) return <Error403 />;

  return (
    <div>
      THIS IS ADMIN <Link href="/admin/new">New</Link>
    </div>
  );
};

export default page;
