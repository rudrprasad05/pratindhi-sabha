"use client";

import { FullPostType, FullUserType } from "@/types";
import React, { useState } from "react";
import CommentCard from "./CommentCard";
import PostComments from "./PostComments";
import AuthorCard from "@/components/global/AuthorCard";
import { GiSpiderWeb } from "react-icons/gi";

interface props {
  data: FullPostType;
  user: FullUserType;
}

const PostPage: React.FC<props> = ({ data, user }) => {
  console.log(data.author);
  return (
    <main className="">
      <section>
        <h1 className="text-5xl pb-10">{data.title}</h1>
        <img className="rounded-sm shadow-sm" src="/pic.jpg" alt="" />
        {user && <AuthorCard user={data.author} />}

        <p>{data.content}</p>
      </section>

      {/* <CommentSleeve>
        <div className={buttonVariants()}>Comments</div>
      </CommentSleeve> */}

      <PostComments data={data} user={user} />

      {data.comments?.map((data) => (
        <CommentCard key={data.id} data={data} />
      ))}

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
