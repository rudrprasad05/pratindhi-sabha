import { Button } from "@/components/ui/button";
import { InputClass } from "@/components/ui/input";
import { FullPostType, FullUserType } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import react, { useState } from "react";
import { toast } from "react-hot-toast";

interface props {
  data: FullPostType;
  user: FullUserType;
}

const PostComments: React.FC<props> = ({ data, user }) => {
  const [commentValue, setCommentValue] = useState<string>("");
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const router = useRouter();

  const handlePostSubmit = async (event: any) => {
    event.preventDefault();

    const commentData = {
      message: commentValue,
      userId: user.id,
      postId: data.id,
    };

    axios
      .post("/api/comment", commentData)
      .then((res) => {
        if (res.status == 200) {
          toast.success("Comment Submited");
        }
        setDisableButton(true);
        setCommentValue("");
        router.refresh();
      })
      .catch((error) => toast.success("An error occured"));
  };
  return (
    <div>
      <h1 className="py-10 text-2xl">Comments Section</h1>

      <form className="flex gap-10 pb-10">
        <input
          className={`${InputClass} grow`}
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          type="text"
          placeholder="Enter comment"
        />
        <Button
          variant={"primary"}
          disabled={disableButton}
          onClick={(event) => handlePostSubmit(event)}
          type="submit"
        >
          Post
        </Button>
      </form>
      {disableButton && (
        <div className="text-slate-600 italic">
          <p>
            Thank you for your comment. You can post another comment after it
            has been moderated
          </p>
        </div>
      )}
    </div>
  );
};

export default PostComments;
