"use client";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

interface props {
  user?: User;
}

export const NavLinks: React.FC<props> = ({ user }) => {
  const pathname = usePathname();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, [domLoaded]);

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
    <>
      {" "}
      {domLoaded && (
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

          {user?.role == "admin" && <Link href={"/admin"}>Admin</Link>}
        </nav>
      )}
    </>
  );
};
