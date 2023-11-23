"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export const NavLinks = () => {
    const pathname = usePathname()

    // Placeholder links    
    const routes = [
        {
            labal: "Home",  
            value: "/",
            active: pathname === "/"
        },
        {
            labal: "Blogs",
            value: "blogs",
            active: pathname === "/blogs"
        },
        {
            labal: "Schools",
            value: "schools",
            active: pathname === "/schools"
        },
        {
            labal: "History",
            value: "history",
            active: pathname === "/history"
        },
    ]

    return (
        <nav className="flex items-center justify-center gap-10">
            {routes.map((route) => (
                <Link href={route.value} className={cn("opacity-50 hover:opacity-100 transition", route.active && "opacity-100")}>
                    {route.labal}
                </Link>
            ))}
        </nav>
    )
}