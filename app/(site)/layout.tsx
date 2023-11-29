import { getUser } from "@/actions/getUser";
import SideNav from "@/components/global/SideNav";
import { NavBar } from "@/components/navbar/navBar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return (
    <div className="flex">
      <div className="w-10/12 py-15">
        <div className="w-4/5 mx-auto">{children}</div>
      </div>
      <SideNav />
    </div>
  );
};

export default layout;
