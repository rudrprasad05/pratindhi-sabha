"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { FullUserType } from "@/types";
import Link from "next/link";
import react from "react";
import AuthButton from "../navbar/authButton";

interface props {
  user: FullUserType;
}

// TODO make this dynamic
const Branches = [
  { name: "Suva", href: "/branches/suva" },
  { name: "Lautoka", href: "/branches/lautoka" },
  { name: "Labasa", href: "/branches/labasa" },
];

const DropDownNav: React.FC<props> = ({ user }) => {
  return (
    <>
      TESTING
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div>
                  <img src={"/logo.png"} alt="Om Logo" height={40} width={40} />
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Branches</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="">
                {Branches.map((branch) => (
                  <li className="w-full" key={branch.href}>
                    <Link
                      href={branch.href}
                      className="w-full"
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} w-full`}
                      >
                        {branch.name}
                      </NavigationMenuLink>
                    </Link>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {user?.role == "admin" && (
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Admin
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          {/* <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div>{user && <AuthButton />}</div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default DropDownNav;
