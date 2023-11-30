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

import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { Button } from "@/components/ui/button";

interface props {
  name?: string;
  description?: string;
  onClick?: () => void;
}

const DeleteModal: React.FC<props> = ({ description, onClick }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-red-500 hover:text-red-600 flex items-center gap-5 justify-center rounded-md px-2 py-1">
        Delete Post <HiOutlineArchiveBoxXMark size={30} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Post?</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div className="flex gap-5">
              <Button type="button" variant={"outline"}>
                Close
              </Button>
              <Button
                type="button"
                variant={"outline"}
                className="bg-rose-400 text-white"
                onClick={onClick}
              >
                Delete
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
