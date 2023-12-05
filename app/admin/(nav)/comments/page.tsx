import { GetAllComments } from "@/actions/comments";
import { GetFormById, GetForms } from "@/actions/form";
import AdminPostComments from "@/components/AdminPostComments";
import FormBuilder from "@/components/FormBuilder";
import { Button } from "@/components/ui/button";

async function BuilderPage() {
  const comments = await GetAllComments();

  return (
    <>
      <h1 className="text-3xl text-primary font-bold pb-10">
        Comment Moderation
      </h1>
      <h2 className="text-muted-foreground text-sm pb-5">
        Comment Dashboard. Click the green check mark to allow comments to be
        seen by everyone or click the red recycle bin to delete the comment.
        This action is not revesable
      </h2>
      {comments.map((i) => (
        <AdminPostComments key={i.id} data={i} />
      ))}
    </>
  );
}

export default BuilderPage;
