import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AuthForm from "../../post/new/components/ProductForm";
import EditProfileForm from "./EditProfileForm";
import { User } from "@prisma/client";
import { FullUserType } from "@/types";

interface props {
  name?: string;
  description?: string;
  onClick?: () => void;
  user: User;
}

const EditProfile: React.FC<props> = ({ name, description, onClick, user }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-background border border-input hover:bg-gray-300 text-black px-10 rounded-md">
        {name}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <EditProfileForm user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
