"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Button from "@/components/global/Button";
import Input from "@/components/global/Input";
import SpiniJoji from "@/components/global/Spinner";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant == "LOGIN") setVariant("REGISTER");
    else setVariant("LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant == "REGISTER") {
      data.role = "user";
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => {
          toast.error("Something went wrong");
        })
        .finally(() => setIsLoading(false));
    }
    if (variant == "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          } else if (callback?.ok) {
            toast.success("Signed In Successfully");
            router.push("/admin");
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }

        toast.success("Login Successful");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="w-screen h-[90vh] relative grid items-center">
      {isLoading && <SpiniJoji />}
      {variant == "LOGIN" || variant == "REGISTER" ? (
        <div className="px-8 py-5 rounded-lg bg-secondary lg:w-1/3 w-4/5 mx-auto my-auto">
          {variant == "LOGIN" && (
            <div className="text-xl text-center">Sign into Your Account</div>
          )}
          {variant == "REGISTER" && (
            <div className="text-xl text-center">Create New Account</div>
          )}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            {variant === "REGISTER" && (
              <Input
                label="Name"
                register={register}
                id="name"
                required
                errors={errors}
                disabled={isLoading}
              />
            )}

            <Input
              label="Email Adress"
              register={register}
              id="email"
              required
              errors={errors}
              disabled={isLoading}
            />
            <Input
              label="Password"
              register={register}
              type={"password"}
              id="password"
              required
              errors={errors}
              disabled={isLoading}
            />

            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                {variant === "LOGIN" ? "Sign-In" : "Register"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-muted-foreground" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 text-muted-foreground text-sm bg-secondary">
                  Or Continue With
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-6">
            <AuthSocialButton
              onClick={() => socialAction("facebook")}
              icon={BsFacebook}
            />
            <AuthSocialButton
              onClick={() => socialAction("google")}
              icon={BsGoogle}
            />
            <AuthSocialButton
              onClick={() => socialAction("github")}
              icon={BsGithub}
            />
          </div>

          <div className="flex gap-2 justify-center text-sm mt-6 px-2">
            <div>
              {variant === "LOGIN"
                ? "New to Messenger?"
                : "Already have an Account?"}
            </div>
            <div
              onClick={toggleVariant}
              className={"text-orange-500 underline cursor-pointer"}
            >
              {variant === "LOGIN" ? "Create an Account" : "Login"}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-8 py-5 rounded-lg bg-muted w-1/3 mx-auto my-auto">
          <div className="text-xl text-center">Admin Login</div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email Adress"
              register={register}
              id="email"
              required
              errors={errors}
              disabled={isLoading}
            />
            <Input
              label="Password"
              register={register}
              type={"password"}
              id="password"
              required
              errors={errors}
              disabled={isLoading}
            />

            <div>
              <Button disabled={isLoading} fullWidth type="submit">
                Login
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
