import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import DropDownNav from "@/components/navbar/DropDownNav";
import Footer from "@/components/global/Footer";
import SideNav from "@/components/global/SideNav";
import LandingPageHero from "@/components/LandingPageHero";
import { NavBar } from "@/components/navbar/navBar";
import React from "react";
import { Hero } from "./components/Hero";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const posts = await getPosts();

  return (
    <div>
      {/* <NavBar /> */}
      {/* <NavigationMenuDemo /> */}
      <DropDownNav />

            <Hero />
      <div className="flex relative w-4/5 mx-auto gap-24 pt-32">
        <div className="w-8/12 py-15">
          <div className="">{children}</div>
        </div>
        <div className="w-4/12 py-15 ">
          <SideNav posts={posts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
