"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export const NavLinks = () => {
  const pathname = usePathname();
  const session = useSession();

  // Placeholder links
  const routes = [
    {
      labal: "Home",
      value: "/",
      active: pathname === "/",
    },
    {
      labal: "Blogs",
      value: "blogs",
      active: pathname === "/blogs",
    },
    {
      labal: "Schools",
      value: "schools",
      active: pathname === "/schools",
    },
    {
      labal: "History",
      value: "history",
      active: pathname === "/history",
    },
  ];

  return (
    <nav className="flex items-center justify-center gap-10">
      {routes.map((route, index) => (
        <Link
          key={index}
          href={route.value}
          className={cn(
            "opacity-50 hover:opacity-100 transition",
            route.active && "opacity-100"
          )}
        >
          {route.labal}
        </Link>
      ))}
      {session.data?.user?.email == "admin@admin.com" && (
        <Link href={"/admin"}>Admin</Link>
      )}
    </nav>
  );
};
