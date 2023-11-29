"use client";

import AvatarComponent from "@/components/global/AvatarComponent";
import { Button } from "@/components/ui/button";
import { FullCommentType, FullUserType } from "@/types";
import axios from "axios";
import { comment } from "postcss";
import react, { useState } from "react";
import toast from "react-hot-toast";
import {
  HiCheck,
  HiMiniXMark,
  HiOutlineArchiveBoxXMark,
} from "react-icons/hi2";

interface props {
  data: FullCommentType;
}

const AdminPostsComments: React.FC<props> = ({ data }) => {
  const user: FullUserType = data.user;
  const fallback = user.name.slice(0, 2).toUpperCase();
  const [isModClient, setisModClient] = useState<boolean>(data.isModerated);

  const patchComment = async () => {
    const commentData = {
      isModerated: true,
    };
    axios
      .patch(`/api/comment/${data.id}`, commentData)
      .then((res) => {
        toast.success("Comment Approved");
        setisModClient(true);
      })
      .catch((error: any) => console.log(error));
  };

  const deleteComment = async () => {
    axios
      .delete(`/api/comment/${data.id}`)
      .then((res) => toast.success("Comment Deleted"));
  };

  return (
    <div className="flex gap-5 py-5">
      <div>
        <AvatarComponent
          fallback={fallback}
          src={user.image == null ? "/user.jpeg" : user.image}
        />
      </div>
      <div>
        <div className="flex gap-3 items-center">
          <div>{user.name}</div>
          <div className="rounded-full bg-slate-700 w-1 h-1" />
          <div>{data.createdAt.toDateString().slice(3)}</div>
        </div>
        <div className="py-2">{data.message}</div>
      </div>
      {data.isModerated || isModClient ? (
        <div className="ml-auto flex gap-3">
          <Button
            onClick={() => deleteComment()}
            variant="outline"
            className="bg-rose-500 hover:bg-rose-600 p-2"
          >
            <HiOutlineArchiveBoxXMark className="w-6 h-6 stroke-white" />
          </Button>
        </div>
      ) : (
        <div className="ml-auto flex gap-3">
          <Button
            variant="outline"
            onClick={() => patchComment()}
            className="bg-green-500 hover:bg-green-600 p-2"
          >
            <HiCheck className="w-6 h-6 fill-white" />
          </Button>
          <Button
            onClick={() => deleteComment()}
            variant="outline"
            className="bg-rose-500 hover:bg-rose-600 p-2"
          >
            <HiMiniXMark className="w-6 h-6 fill-white" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminPostsComments;
