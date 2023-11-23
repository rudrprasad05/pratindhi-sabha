import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { User } from "@prisma/client";

import React from "react";
import Button from "./Button";
import { SignOutContext } from "@/actions/signOut";

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
          <SheetDescription>
            <Button onClick={() => SignOutContext()}>SignOut</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default EditProfileSheet;
