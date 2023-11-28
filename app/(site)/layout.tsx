import { getUser } from "@/actions/getUser";
import { NavBar } from "@/components/navbar/navBar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();

  return <div>{children}</div>;
};

export default layout;
