import { GetAdmins } from "@/actions/user";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import AuthorCard from "@/components/global/AuthorCard";
import { FullUserType } from "@/types";
import { Suspense } from "react";

async function UserPage() {
  const users = await GetAdmins();
  return (
    <>
      <Suspense
        fallback={[1, 2, 3, 4].map((el) => (
          <FormCardSkeleton key={el} />
        ))}
      >
        {users && users?.map((user) => <AuthorCard user={user} />)}
      </Suspense>
    </>
  );
}

export default UserPage;
