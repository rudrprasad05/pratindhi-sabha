"use client";

import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";
import TextArea from "@/components/global/TextArea";
import { FullCategoryType, FullPostType } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DeleteModal from "../components/DeletePostModal";
import { Button } from "@/components/ui/button";
import SelectComponent from "@/components/global/Select";
import { SelectItem } from "@radix-ui/react-select";
import ReactQuill from "react-quill";
import AdminPostsComments from "../components/AdminPostsComments";

interface props {
  post: FullPostType;
}

const EditPostForm: React.FC<props> = ({ post }) => {
  const id = post.id;

  const [domLoaded, setDomLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<FullCategoryType>();
  const router = useRouter();
  const [quillValue, setQuillValue] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      title: post.title,
      authorName: post.authorName,
      tags: post.tags,
      content: post.content,
      authorId: post.authorId,
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
      <div className=" flex justify-between w-3/5 mx-auto my-10">
        <div className="text-3xl text-center">Edit Post</div>
        <DeleteModal
          description="All references will be removed from our servers and backups"
          name="Delete"
          onClick={() => handleDelete()}
        />
      </div>
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
        {categories && (
          <SelectComponent>
            <SelectItem
              // onMouseDown={() => setInputTags(cat.name || "")}
              key={categories.id}
              value={categories.name}
            >
              {categories.name}
            </SelectItem>
          </SelectComponent>
        )}

        {/* <ReactQuill
          preserveWhitespace
          value={quillValue}
          onChange={setQuillValue}
        /> */}

        <TextArea
          label="Enter brief description"
          id="content"
          register={register}
          errors={errors}
          required
        />

        <div className="flex gap-3">
          <Button className="bg-green-400" variant={"outline"} type="submit">
            Submit
          </Button>
          <Button
            type="button"
            variant={"outline"}
            onClick={() => {
              router.back();
            }}
          >
            Cancel
          </Button>
        </div>
      </form>

      <div className="w-3/5 mx-auto">
        <h1 className="py-10">Edit Comments</h1>
        {post.comments.map((item) => (
          <AdminPostsComments key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default EditPostForm;
