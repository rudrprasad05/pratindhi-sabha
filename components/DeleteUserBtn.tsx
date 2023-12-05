"use client";

import { DeleteUser } from "@/actions/user";
import { FullUserType } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

interface props {
  user: FullUserType;
}

const DeleteUserBtn: React.FC<props> = async ({ user }) => {
  const router = useRouter();
  const handleDeleteClick = async () => {
    await DeleteUser(user.id as string).then(() => {
      toast.success("Admin Deleted");
      router.refresh();
    });
  };
  return (
    <Button
      className="bg-red-400 p-2"
      type="button"
      onClick={() => handleDeleteClick()}
    >
      Delete
    </Button>
  );
};

export default DeleteUserBtn;
