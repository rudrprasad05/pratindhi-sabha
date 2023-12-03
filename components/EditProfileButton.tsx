"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, CreatePostSchemaType } from "@/schemas/form";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
import { IoSettingsOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import { CreateForm } from "@/actions/form";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";
import AdminCards from "@/components/AdminCards";
import EditProfileForm from "@/components/EditProfileForm";
import { useSession } from "next-auth/react";

function EditProfileButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="duration-100 group group-hover:border-primary border rounded-md shadow-sm h-48 relative bg-muted p-5 border-primary/20 hover:border-primary hover:cursor-pointer">
          <div className="font-light text-2xl text-primary">Profile</div>
          <div className="absolute bottom-5 right-5">
            <IoSettingsOutline className="group-hover:h-28 group-hover:w-28 group-hover:stroke-muted-foreground/20 duration-200  w-16 h-16 stroke stroke-muted-foreground" />

            {/* <IoSettingsOutline className="group-hover:fill-primary group-hover:stroke-primary w-16 h-16 stroke stroke-muted-foreground" /> */}
          </div>
          <div className=" text-muted-foreground">Edit</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>

        <EditProfileForm />
      </DialogContent>
    </Dialog>
  );
}

export default EditProfileButton;
