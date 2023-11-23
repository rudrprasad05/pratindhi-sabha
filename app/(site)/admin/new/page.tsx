import { getUser } from "@/actions/getUser";
import React from "react";

import ProductForm from "./components/ProductForm";
import ProtectRoutes from "@/actions/protectRoutes";
import Error403 from "@/components/global/Error403";

const page = async () => {
  const user = await getUser();
  const auth = await ProtectRoutes();

  if (!auth) return <Error403 />;

  return (
    <div>
      <ProductForm user={user} />
    </div>
  );
};

export default page;
