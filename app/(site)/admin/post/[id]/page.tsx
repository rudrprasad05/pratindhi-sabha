"use client";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";
import TextArea from "@/components/global/TextArea";
import { FullPostType } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DeleteModal from "../components/DeletePostModal";

const Page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [post, setPost] = useState<FullPostType>();
  const [domLoaded, setDomLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: async () => {
      const res = await axios.get<FullPostType>(`/api/posts/${id}`, {
        params,
      });
      const data = res.data;
      setPost(data);
      setDomLoaded(true);

      return {
        title: data.title || "",
        authorID: data.authorID || "",
        tags: data.tags || "",
        content: data.content || "",
        authorName: data.authorName || "",
      };
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);
    axios
      .patch(`/api/posts/${id}`, data)
      .then((res) => {
        if (res.status == 200) toast.success("Post Edited Successfully");
      })
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("POST Edit - [id] page.tsx", error);
      })
      .finally(() => {
        setLoading(false);
        router.back();
      });
  };

  const handleDelete = () => {
    axios
      .delete<FullPostType>(`/api/posts/${id}`)
      .then((res) => {
        if (res.status == 200) toast.success("Product Deleted");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
        router.back();
      });
  };

  return (
    <div className="w-screen h-[90vh] py-10">
      {loading && <SpiniJoji />}
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
          <DeleteModal
            description="All references will be removed from our servers and backups"
            name="Delete"
            onClick={() => handleDelete()}
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
