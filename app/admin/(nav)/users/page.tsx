import { GetAdmins } from "@/actions/user";
import { FormCard, FormCardSkeleton } from "@/components/FormCard";
import AdminUserCard from "@/components/AdminUserCard";
import AuthorCard from "@/components/global/AuthorCard";
import { FullUserType } from "@/types";
import { Suspense } from "react";
import CreateAdminButton from "@/components/CreateAdminButton";

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
          <h1 className="pb-10 grow text-3xl text-primary font-semibold ">
            Admin Users
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 pb-20">
          {users &&
            users?.map((user) => <AdminUserCard key={user.id} user={user} />)}
        </div>
        <h1 className="text-3xl text-primary font-bold pb-10">Actions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {<CreateAdminButton />}
        </div>
      </Suspense>
    </>
  );
}

export default UserPage;
