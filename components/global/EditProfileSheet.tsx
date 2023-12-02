import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@prisma/client";

import React from "react";
import Button from "./Button";
import { SignOutContext } from "@/actions/signOut";
import SignoutPopup from "./SignoutPopup";
import ThemeSwitcher from "../ThemeSwitcher";

interface props {
  children?: React.ReactNode;
  user?: any;
}

const EditProfileSheet: React.FC<props> = ({ children, user }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            Welcome back {user && user.name.split(" ")[0]}
          </SheetTitle>
          <SheetDescription className="relative h-full">
            <SignoutPopup name="SignOut" onClick={() => SignOutContext()} />
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="absolute bottom-5">
          <div className="">
            <ThemeSwitcher />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfileSheet;
