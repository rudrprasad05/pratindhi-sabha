"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button, buttonVariants } from "@/components/ui/button";
import Input from "@/components/global/Input";

import toast from "react-hot-toast";

import { FullCategoryType } from "@/types";
import { DeleteCategory, UpdateCategory } from "@/actions/category";

interface props {
  category: FullCategoryType;
}

const EditCategoryForm: React.FC<props> = ({ category }) => {
  const [loading, setLoading] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: category.name,
      author: category.authorName,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const resData = { name: data.name, author: data.name };
    const updatedCat = await UpdateCategory(category.id, resData)
      .then((res) => toast.success("category edited"))
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("USER NEW - NewProfileForm.tsx", error);
      })
      .finally(() => router.replace("/admin/categories"));
  };

  const handleDelete = async () => {
    await DeleteCategory(category.id)
      .then((res) => toast.success("category deleted"))
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("CATEGORY EDIT - EditCategoryForm.tsx", error);
      })
      .finally(() => router.replace("/admin/categories"));
  };

  return (
    <div className="">
      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <Input
          label="Name"
          register={register}
          id="name"
          required
          autoComplete={"off"}
          errors={errors}
        />

        <Input
          label="Author"
          register={register}
          id="author"
          required
          autoComplete={"off"}
          errors={errors}
        />

        <div className="">
          <Button type="submit">Submit</Button>
        </div>
        <div className="">
          <Button onClick={() => handleDelete()} type="button">
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;
