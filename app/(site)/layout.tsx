import { getPosts } from "@/actions/getPosts";
import SideNav from "@/components/global/SideNav";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await getPosts();
  return (
    <div className="flex relative w-4/5 mx-auto gap-24">
      <div className="w-9/12 py-15">
        <div className="">{children}</div>
      </div>
      <div className="w-3/12 py-15 ">
        <SideNav posts={posts} />
      </div>
    </div>
  );
};

export default layout;
