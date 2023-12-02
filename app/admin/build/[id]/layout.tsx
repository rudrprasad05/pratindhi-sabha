import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="my-10 w-4/5 mx-auto h-full">{children}</div>;
}

export default layout;
