import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProtectRoutes() {
  const session = useSession();

  if (session.data?.user?.email != "admin@admin.com") {
    return false;
  }
  return true;
}
