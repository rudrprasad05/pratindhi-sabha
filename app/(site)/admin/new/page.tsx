import { getUser } from "@/actions/getUser";
import React from "react";

import ProductForm from "./components/ProductForm";
import ProtectRoutes from "@/actions/protectRoutes";

const page = async () => {
  const user = await getUser();

  return (
    <div>
      <ProductForm user={user} />
    </div>
  );
};

export default page;
