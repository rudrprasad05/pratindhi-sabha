"use client";

import { formatDistance } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { LuView } from "react-icons/lu";
import { FaEdit, FaWpforms } from "react-icons/fa";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { Form } from "react-hook-form";
import { Post } from "@prisma/client";
import { Skeleton } from "./ui/skeleton";
import { DeleteForm, GetForms } from "@/actions/form";
import { AiFillDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function FormCardSkeleton() {
  return (
    <Skeleton className="border-2 border-primary-/20 h-[190px] w-full mb-10" />
  );
}

export async function FormCard({ form }: { form: Post }) {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    await DeleteForm(id).then(() => {
      toast.success("Post Deleted");
      router.refresh();
    });
  };
  return (
    <Card className="bg-muted flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-between">
          <span className="truncate font">{form.name}</span>
          {form.published && (
            <Badge className="bg-green-400 hover:bg-green-400/80 text-muted">
              Published
            </Badge>
          )}
          {!form.published && (
            <Badge
              className="bg-primary hover:bg-primary/80"
              variant={"destructive"}
            >
              Draft
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="flex items-center justify-between text-muted-foreground text-sm">
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className="flex items-center gap-2">
              <LuView className="text-muted-foreground" />
              <span>{form.visits.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[20px] truncate text-sm text-muted-foreground">
        {form.description || "No description"}
      </CardContent>
      <CardFooter className="mt-auto pt-6">
        <div className="flex items-center gap-3 w-full mt-auto">
          {form.published && (
            <Button
              asChild
              className={`grow text-muted bg-muted-foreground hover:bg-muted-foreground/80 w-full text-md gap-4 `}
            >
              <Link href={`/post/${form.id}`}>
                View <BiRightArrowAlt />
              </Link>
            </Button>
          )}
          {!form.published && (
            <Button
              asChild
              className={`grow text-muted px-2 bg-muted-foreground hover:bg-muted-foreground/80 w-full text-md gap-4 `}
            >
              <Link href={`/admin/build/${form.id}`}>
                Edit form <FaEdit />
              </Link>
            </Button>
          )}
          <Button
            onClick={() => handleDelete(form.id)}
            className="p-3"
            variant={"destructive"}
          >
            <AiFillDelete />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
