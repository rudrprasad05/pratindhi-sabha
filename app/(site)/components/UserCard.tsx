import React from "react";
import { User } from "@prisma/client";

interface props {
  user: User;
}

const UserCard: React.FC<props> = ({ user }) => {
  return <div>{user.email}</div>;
};

export default UserCard;
