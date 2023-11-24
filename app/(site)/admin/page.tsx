import { getPosts } from "@/actions/getPosts";
import ProtectRoutes from "@/actions/protectRoutes";
import Error403 from "@/components/global/Error403";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PostCard from "./post/components/PostCard";

const page = async () => {
  const auth = await ProtectRoutes();
  const posts = await getPosts();

  if (!auth) return <Error403 />;

  return (
    <div className="w-4/5 mx-auto mt-5">
      {/* TODO style admin Panel */}

      <div className="text-3xl text-center">Admin Panel</div>
      <Link href="/admin/post/new">New</Link>
      <div>
        {posts &&
          posts.map((post, index) => <PostCard key={index} post={post} />)}
      </div>
    </div>
  );
};

export default page;
