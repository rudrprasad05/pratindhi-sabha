"use client";

import { FullPostType, FullUserType } from "@/types";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComments from "./PostComments";
import AuthorCard from "@/components/global/AuthorCard";
import { GiSpiderWeb } from "react-icons/gi";
import { useSession } from "next-auth/react";
import { tree } from "next/dist/build/templates/app-page";

interface props {
  data: FullPostType;
}

const checkDisable = (
  data: FullPostType,
  user: any,
  setDisableCommentSubmit: any
) => {
  data.comments?.map((commentData) => {
    if (user?.id == commentData.userId && !commentData.isModerated)
      setDisableCommentSubmit(true);
  });
};

const PostPage: React.FC<props> = ({ data }) => {
  const [disableCommentSubmit, setDisableCommentSubmit] = useState(false);
  const [domLoaded, setDomLoaded] = useState(false);

  const session = useSession();
  const user = session.data?.user;

  // checkDisable(data, user, setDisableCommentSubmit);

  useEffect(() => {
    data.comments?.map((commentData) => {
      if (user?.id == commentData.userId && !commentData.isModerated)
        setDisableCommentSubmit(true);
    });
    setDomLoaded(true);
  }, []);

  return (
    <main className="">
      <section>
        <h1 className="text-5xl pb-10">{data.title}</h1>
        <img className="rounded-sm shadow-sm" src="/pic.jpg" alt="" />
        {user && <AuthorCard user={data.author} />}

        <p className="text-justify">{data.content}</p>
      </section>

      {/* <CommentSleeve>
        <div className={buttonVariants()}>Comments</div>
      </CommentSleeve> */}

      <section>
        {domLoaded && (
          <PostComments
            disableButtonProps={disableCommentSubmit}
            data={data}
            user={user}
          />
        )}

        {data.comments?.map((commentData) => {
          if (user?.id == commentData.userId && !commentData.isModerated)
            return <CommentCard key={commentData.id} data={commentData} />;
          else if (commentData.isModerated)
            return <CommentCard key={commentData.id} data={commentData} />;
        })}
      </section>

      {data.comments.length < 1 && (
        <div className="text-slate-700 flex items-center gap-5">
          <GiSpiderWeb className={"w-16 h-16"} />
          No comments yet. Start a new Converstaion
        </div>
      )}
    </main>
  );
};

export default PostPage;
