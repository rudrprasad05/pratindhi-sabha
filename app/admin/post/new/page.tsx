import { getUser } from "@/actions/getUser";
import React from "react";

import ProductForm from "./components/ProductForm";
import ProtectRoutes from "@/actions/protectRoutes";
import Error403 from "@/components/global/Error403";
import { getCategories } from "@/actions/getCategories";

const page = async () => {
  const user = await getUser();
  const auth = await ProtectRoutes();
  const category = await getCategories();

  if (!auth) return <Error403 />;

  return (
    <div>
      {user && category && <ProductForm user={user} categories={category} />}
    </div>
  );
};

export default page;
