"use client";

import { FullPostType, FullUserType } from "@/types";
import React, { Suspense, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import PostComments from "./PostComments";
import AuthorCard from "@/components/global/AuthorCard";
import { GiSpiderWeb } from "react-icons/gi";
import { useSession } from "next-auth/react";
import { tree } from "next/dist/build/templates/app-page";
import { FormCardSkeleton } from "@/components/FormCard";
import PostSection from "@/components/PostSection";
import { FormElementInstance } from "@/components/FormElements";

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

  const postContent = JSON.parse(data.content) as FormElementInstance[];

  useEffect(() => {
    data.comments?.map((commentData) => {
      if (user?.id == commentData.userId && !commentData.isModerated)
        setDisableCommentSubmit(true);
    });

    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <main className="">
          <PostSection content={postContent} />

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
                return (
                  <CommentCard
                    key={commentData.id}
                    data={commentData}
                    user={user}
                  />
                );
              else if (commentData.isModerated)
                return (
                  <CommentCard
                    key={commentData.id}
                    data={commentData}
                    user={user}
                  />
                );
            })}
          </section>

          {data.comments.length < 1 && (
            <div className="text-slate-700 flex items-center gap-5">
              <GiSpiderWeb className={"w-16 h-16"} />
              No comments yet. Start a new Converstaion
            </div>
          )}
        </main>
      )}
    </>
  );
};

export default PostPage;
