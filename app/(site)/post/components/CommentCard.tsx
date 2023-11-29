import AvatarComponent from "@/components/global/AvatarComponent";
import { FullCommentType, FullUserType } from "@/types";
import { comment } from "postcss";
import react from "react";

interface props {
  data: FullCommentType;
}

// TODO make it so that the comment section is not seen by default. click button to show comment section. THis is done to cut on database read costs.
// TODO make like feature. easy -> 1) add likes to db (list of user IDs)

const CommentCard: React.FC<props> = ({ data }) => {
  const user: FullUserType = data.user;
  const fallback = user.name.slice(0, 2).toUpperCase();

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
        <div>
          <h1 className="text-slate-400">Like</h1>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
