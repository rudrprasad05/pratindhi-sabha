import { GetAdmins } from "@/actions/user";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import AdminUserCard from "@/components/AdminUserCard";
import AuthorCard from "@/components/global/AuthorCard";
import BoldHeader from "@/components/BoldHeader";
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
        <div>
          <h1 className="pb-10 grow text-4xl text-primary font-semibold ">
            Admin Users
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 ">
          {users && users?.map((user) => <AdminUserCard user={user} />)}
        </div>
      </Suspense>
    </>
  );
}

export default UserPage;
