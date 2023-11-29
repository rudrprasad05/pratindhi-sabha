import { FullPostType, FullUserType } from "@/types";
import react from "react";

import AvatarComponent from "./AvatarComponent";

interface props {
  user: FullUserType;
}

const AuthorCard: React.FC<props> = ({ user }) => {
  const fallback = user.name.slice(0, 2).toUpperCase();

  // const user: FullUserType = data.user;

  // const fallback = user.name.slice(0, 2).toUpperCase();
  // return <AvatarComponent fallback={fallback} src={user.image} />;
  return (
    <div className="flex gap-5 items-center py-5">
      <div>
        <AvatarComponent
          fallback={fallback}
          src={user.image == null ? "/user.jpeg" : user.image}
        />
      </div>
      <div>
        <h1>{user.name}</h1>
      </div>
    </div>
  );
};

export default AuthorCard;
