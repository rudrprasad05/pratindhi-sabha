"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";
import { User } from "@prisma/client";
import axios from "axios";
import toast from "react-hot-toast";

interface props {
  user?: User;
}

const NewCategoryForm: React.FC<props> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      authorName: user?.name,
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

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 mx-auto mt-0"
      >
        <Input
          label="Author Name"
          register={register}
          id="authorName"
          required
          errors={errors}
        />

        <Input
          label="Title"
          register={register}
          id="name"
          required
          errors={errors}
        />

        <div className="">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default NewCategoryForm;
