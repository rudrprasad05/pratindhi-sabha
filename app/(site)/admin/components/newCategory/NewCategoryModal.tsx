import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@prisma/client";
import React from "react";

import NewCategoryForm from "./NewCategoryForm";

interface props {
  name?: string;
  description?: string;
  onClick?: () => void;
  user: User;
}

const NewCategoryModal: React.FC<props> = ({
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
          <DialogTitle>New Category</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <NewCategoryForm user={user} />
      </DialogContent>
    </Dialog>
  );
};

export default NewCategoryModal;
