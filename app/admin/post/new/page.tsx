import { getUser } from "@/actions/getUser";
import React from "react";

import ProductForm from "./components/ProductForm";
import Error403 from "@/components/global/Error403";
import { getCategories } from "@/actions/getCategories";

const page = async () => {
  const user = await getUser();

  const category = await getCategories();

  return (
    <div>
      {user && category && <ProductForm user={user} categories={category} />}
    </div>
  );
};

export default page;
