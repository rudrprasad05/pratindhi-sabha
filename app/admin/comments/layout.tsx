import React, { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return <div className="h-full">{children}</div>;
}

export default layout;
