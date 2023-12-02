import { GetFormById, GetForms } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import { Suspense } from "react";
import PostPage from "../components/PostPage";
import FormSubmitComponent from "@/components/PostSection";
import { FormElementInstance } from "@/components/FormElements";

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await GetFormById(id);

  console.log(post);

  if (!post) {
    return <>No forms</>;
  }

  return (
    <div className="w-full">
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        <PostPage data={post} />
      </Suspense>
    </div>
  );
}

export default page;
