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
import { Button } from "@/components/ui/button";
import SelectComponent from "@/components/global/Select";
import { SelectItem } from "@radix-ui/react-select";
import EditProfile from "../../components/editprofile/EditProfileModal";
import EditPostForm from "./EditPostForm";
import { getOnePostWithComments } from "@/actions/getPosts";

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getOnePostWithComments(params.id);

  return <main>{post && <EditPostForm post={post} />}</main>;
};

export default Page;
