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

const EditProfileForm: React.FC<props> = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      reEnterPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.role = "admin";
    if (data.password != data.reEnterPassword) {
      setIsPasswordMatch(false);
      return;
    }
    axios
      .post(`/api/register`, data)
      .then((res) => {
        if (res.status == 200) toast.success("Admin Created Successfully");
      })
      .catch((error) => {
        toast.error("An Error Occured");
        console.log("USER NEW - NewProfileForm.tsx", error);
      })
      .finally(() => {
        setLoading(false);
        router.back();
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
          label="Name"
          register={register}
          id="name"
          required
          errors={errors}
        />

        <Input
          label="Email"
          register={register}
          id="email"
          required
          errors={errors}
        />
        <Input
          label="Password"
          register={register}
          type={"password"}
          id="password"
          required
          errors={errors}
        />

        <Input
          label="Re-enter Password"
          register={register}
          type={"password"}
          id="reEnterPassword"
          required
          errors={errors}
        />
        {!isPasswordMatch && (
          <div className="text-sm italic text-red-500 pb-5">
            Passwords do not match
          </div>
        )}
        <div className="">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
