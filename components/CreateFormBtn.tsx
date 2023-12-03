"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostSchema, CreatePostSchemaType } from "@/schemas/form";
import { useForm } from "react-hook-form";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "./ui/button";
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
import SelectComponent from "./global/Select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { getCategories } from "@/actions/getCategories";
import ProductForm from "./ProductForm";
import { useEffect, useState } from "react";
import { FullCategoryType } from "@/types";

function CreateFormBtn() {
  const router = useRouter();
  const [categoriesArr, setCategoriesArr] = useState<FullCategoryType[]>([]);
  useEffect(() => {
    const getCatFunc = async () => {
      const cat = await getCategories();
      console.log(cat);
    };
    getCatFunc();
  }, []);

  const form = useForm<CreatePostSchemaType>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // const categoryType = form.watch("category");

  async function onSubmit(values: CreatePostSchemaType) {
    try {
      const formId = await CreateForm(values);
      toast({
        title: "Success",
        description: "Form created successfully",
      });
      router.push(`/admin/build/${formId}`);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong, please try again later",
        variant: "destructive",
      });
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="duration-100 group group-hover:border-primary border rounded-md shadow-sm h-48 relative bg-muted p-5 border-primary/20 hover:border-primary hover:cursor-pointer">
          <div className="font-light text-2xl text-primary">Post</div>
          <div className="absolute bottom-5 right-5">
            <BsFileEarmarkPlus className="group-hover:h-28 group-hover:w-28 group-hover:fill-muted-foreground/20 duration-200  w-16 h-16 stroke fill-muted-foreground" />
            {/* <BsFileEarmarkPlus className="group-hover:fill-primary w-16 h-16 stroke fill-muted-foreground" /> */}
          </div>
          <div className=" text-muted-foreground">New</div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create form</DialogTitle>
          <DialogDescription>
            Create a new form to start collecting responses
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={form.control}
              name="category"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">1</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            /> */}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea rows={5} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        {/* <ProductForm /> */}
        <DialogFooter>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting}
            className="mr-auto mt-4"
          >
            {!form.formState.isSubmitting && <span>Save</span>}
            {form.formState.isSubmitting && (
              <ImSpinner2 className="animate-spin" />
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormBtn;
