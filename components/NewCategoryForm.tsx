"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";
import { User } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";

const NewCategoryForm = () => {
  const data = useSession();
  const user = data.data?.user;
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.authorID = user?.id;

    axios
      .post(`/api/category`, data)
      .then((res) => {
        if (res.status == 200) toast.success("category Created Successfully");
      })
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("USER NEW - NewProfileForm.tsx", error);
      })
      .finally(() => {
        setLoading(false);
        router.refresh();
      });
  };

  return (
    <div className="">
      {loading && <SpiniJoji />}

      <form action="" onSubmit={handleSubmit(onSubmit)} className="">
        <Input
          label="Title"
          register={register}
          id="name"
          required
          errors={errors}
        />

        <DialogPrimitive.Close className="">
          <Button type="submit" className={"w-full mt-4"}>
            Save
          </Button>
        </DialogPrimitive.Close>
      </form>
    </div>
  );
};

export default NewCategoryForm;
