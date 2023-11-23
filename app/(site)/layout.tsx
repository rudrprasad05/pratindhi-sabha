import { getUser } from "@/actions/getUser";
import { NavBar } from "@/components/navbar/navBar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  console.log(user);

  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default layout;
