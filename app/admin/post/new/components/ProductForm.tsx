"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SelectComponent from "@/components/global/Select";
import SpiniJoji from "@/components/global/Spinner";
import TextArea from "@/components/global/TextArea";
import { SelectItem } from "@/components/ui/select";
import { FullCategoryType } from "@/types";
import { User } from "@prisma/client";
import "react-quill/dist/quill.snow.css";

// TODO add a rich text editor but no picture included
// TODO add a picture element using s3 bucket. ONLY 1 picture per post to cut on costs

interface props {
  user?: User;
  categories: FullCategoryType[];
}

const AuthForm: React.FC<props> = ({ user, categories }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [inputTags, setInputTags] = useState("");

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
    data.authorId = user?.id;
    data.tags = inputTags;
    data.likes = 0;
    // data.content = quillValue;

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
        router.push("/admin");
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

        {categories && (
          <SelectComponent>
            {categories?.map((cat) => (
              <SelectItem
                onMouseDown={() => setInputTags(cat.name || "")}
                key={cat.id}
                value={cat?.name}
              >
                {cat.name}
              </SelectItem>
            ))}
          </SelectComponent>
        )}

        <TextArea
          label="Enter brief description"
          id="content"
          register={register}
          errors={errors}
          required
        />

        {/* <ReactQuill
          preserveWhitespace
          value={quillValue}
          onChange={setQuillValue}
        /> */}

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
