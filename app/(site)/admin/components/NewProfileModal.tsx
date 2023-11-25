import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User } from "@prisma/client";
import React from "react";
import NewProfileForm from "./NewProfileForm";

interface props {
  name?: string;
  description?: string;
  onClick?: () => void;
  user: User;
}

const NewProfileModal: React.FC<props> = ({
  name,
  description,
  onClick,
  user,
}) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-background border border-input hover:bg-gray-300 text-black px-10 rounded-md">
        {name}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Admin User</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <NewProfileForm user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default NewProfileModal;
