"use client";

import { FullCommentType, FullPostType, FullUserType } from "@/types";
import axios from "axios";
import React, { useState } from "react";

interface props {
  data: FullPostType;
  user: FullUserType;
}

const PostPage: React.FC<props> = ({ data, user }) => {
  const [commentValue, setCommentValue] = useState<string>("");

  const handlePostSubmit = async (event: any) => {
    event.preventDefault();

    const commentData = {
      message: commentValue,
      userId: user.id,
      postId: data.id,
    };

    axios
      .post("/api/comment", commentData)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <main className="w-4/5 mx-auto py-10">
      <section>
        <h1 className="text-xl ">{data.title}</h1>
        <p>author: {data.authorName}</p>
      </section>
      <form>
        <input
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          type="text"
          placeholder="Enter comment"
        />
        <button onClick={(event) => handlePostSubmit(event)} type="submit">
          Post
        </button>
      </form>
    </main>
  );
};

export default PostPage;
