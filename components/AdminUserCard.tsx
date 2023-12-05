"use client";

import { FullPostType, FullUserType } from "@/types";
import react from "react";
import { AiFillDelete } from "react-icons/ai";
import AvatarComponent from "./global/AvatarComponent";
import { Button } from "./ui/button";
import { DeleteUser } from "@/actions/user";
import DeleteUserBtn from "./DeleteUserBtn";
import { useSession } from "next-auth/react";

interface props {
  user: FullUserType;
}

const AdminUserCard: React.FC<props> = ({ user }) => {
  const fallback = user.name.slice(0, 2).toUpperCase();
  const currentUser = useSession();

  // const handleDeleteClick = async () => {
  //   const del = await DeleteUser(user.id);
  // };

  return (
    <div className="flex gap-5 items-center">
      <div>
        <AvatarComponent
          fallback={fallback}
          src={user.image == null ? "/user.jpeg" : user.image}
        />
      </div>
      <div>
        <h1>{user.name}</h1>
      </div>
      <div className="ml-auto">
        {/* <Button type="button" onClick={() => handleDeleteClick()}>
          Del
        </Button> */}

        {currentUser.data?.user.id != user.id && <DeleteUserBtn user={user} />}
        {currentUser.data?.user.id == user.id && <>You</>}
      </div>
    </div>
  );
};

export default AdminUserCard;
