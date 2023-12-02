import { GetFormById, GetForms } from "@/actions/form";
import FormBuilder from "@/components/FormBuilder";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
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
        <div className="pb-20">
          <h1 className="text-4xl text-primary font-bold pb-10">Published</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {forms.map((form) => {
              if (form.published) return <FormCard key={form.id} form={form} />;
            })}
          </div>
        </div>

        <div>
          <h1 className="text-4xl text-primary font-bold pb-10">Drafts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => {
              if (!form.published)
                return <FormCard key={form.id} form={form} />;
            })}
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default BuilderPage;
