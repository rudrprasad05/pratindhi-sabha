import { FullPostType, FullUserType } from "@/types";
import react from "react";
import { AiFillDelete } from "react-icons/ai";
import AvatarComponent from "./global/AvatarComponent";
import { Button } from "./ui/button";

interface props {
  user: FullUserType;
}

const AdminUserCard: React.FC<props> = async ({ user }) => {
  const fallback = user.name.slice(0, 2).toUpperCase();

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
      {/* <DelButton user={user} /> */}
    </div>
  );
};

export default AdminUserCard;
