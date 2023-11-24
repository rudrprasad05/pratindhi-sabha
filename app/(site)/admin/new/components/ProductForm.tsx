"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";
import ProtectRoutes from "@/actions/protectRoutes";
import Error403 from "@/components/global/Error403";
import { User } from "@prisma/client";
import TextArea from "@/components/global/TextArea";

interface props {
  user?: User | null;
}

const AuthForm: React.FC<props> = ({ user }) => {
  const router = useRouter();
  // const auth = ProtectRoutes();

  // if (!auth) return <Error403 />;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      author: user?.name,
      tags: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.author = user?.id;
    console.log(data);
    axios.post("/api/posts", data);
  };

  return (
    <div className="w-screen h-[90vh] py-10">
      <div className="text-3xl text-center ">New Product</div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 mx-auto mt-0"
      >
        <Input
          label="Title"
          register={register}
          id="title"
          required
          errors={errors}
        />

        <Input
          label="Author"
          register={register}
          id="author"
          required
          errors={errors}
        />
        <Input
          label="Tags"
          register={register}
          type={"text"}
          id="tags"
          required
          errors={errors}
        />

        <TextArea
          label="Enter brief description"
          id="content"
          register={register}
          errors={errors}
          required
        />

        <div className="flex gap-3">
          <Button type="submit">Submit</Button>
          <Button
            type="button"
            secondary
            onClick={() => {
              router.back();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
