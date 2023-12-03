import { GetFormById, GetForms } from "@/actions/form";
import DraftPosts from "@/components/DraftPosts";
import FormBuilder from "@/components/FormBuilder";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import PublishedPosts from "@/components/PublishedPosts";
import { Suspense } from "react";

async function BuilderPage() {
  const forms = await GetForms();

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
        {/* <div className="pb-20">
          <BoldHeader name="Published" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {forms.map((form) => {
              if (form.published) return <FormCard key={form.id} form={form} />;
            })}
          </div>
        </div> */}

        <PublishedPosts data={forms} />
        <DraftPosts data={forms} />

        {/* <div>
          <h1 className="grow pb-10 text-4xl text-primary font-semibold ">
            Drafts
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => {
              if (!form.published)
                return <FormCard key={form.id} form={form} />;
            })}
          </div>
        </div> */}
      </Suspense>
    </>
  );
}

export default BuilderPage;
