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
import { ok } from "assert";

interface props {
  user?: User | null;
}

const AuthForm: React.FC<props> = ({ user }) => {
  const [loading, setLoading] = useState(false);
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
      authorName: user?.name,
      tags: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    data.authorID = user?.id;
    axios
      .post("/api/posts", data)
      .then((res) => {
        if (res.status == 200) toast.success("Post Created Successfully");
      })
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("POST CREATION - ProductForm.tsx", error);
      })
      .finally(() => {
        setLoading(false);
        router.back();
      });
  };

  return (
    <div className="w-screen h-[90vh] py-10">
      {loading && <SpiniJoji />}

      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-3/5 mx-auto mt-0"
      >
        <div className="text-3xl ">New Product</div>
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
          id="authorName"
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
