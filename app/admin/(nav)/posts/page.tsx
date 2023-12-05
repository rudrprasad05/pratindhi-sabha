import { GetFormById, GetForms } from "@/actions/form";
import { getCategories } from "@/actions/getCategories";
import { CreateFormBtn } from "@/components/CreateFormBtn";
import DraftPosts from "@/components/DraftPosts";
import FormBuilder from "@/components/FormBuilder";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import PublishedPosts from "@/components/PublishedPosts";
import { Suspense } from "react";

async function BuilderPage() {
  const forms = await GetForms();
  const categories = await getCategories();

  if (!forms) {
    return <>No forms</>;
  }

  return (
    <>
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        <PublishedPosts data={forms} />
        <DraftPosts data={forms} />

        <h1 className="text-3xl text-primary font-bold pb-10">Actions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories && <CreateFormBtn categories={categories} />}
        </div>
      </Suspense>
    </>
  );
}

export default BuilderPage;
