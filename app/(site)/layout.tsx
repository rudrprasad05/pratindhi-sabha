import { getPosts } from "@/actions/getPosts";
import SideNav from "@/components/global/SideNav";
import LandingPageHero from "@/components/LandingPageHero";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await getPosts();
  return (
    <div>
      <div className="flex relative w-4/5 mx-auto gap-24 pt-32">
        <div className="w-8/12 py-15">
          <div className="">{children}</div>
        </div>
        <div className="w-4/12 py-15 ">
          <SideNav posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default layout;
