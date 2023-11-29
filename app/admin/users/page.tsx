import { getCategories } from "@/actions/getCategories";
import { getPosts } from "@/actions/getPosts";
import { getUser } from "@/actions/getUser";
import EditProfile from "../components/editprofile/EditProfileModal";
import NewProfileModal from "../components/newprofile/NewProfileModal";

export default async function Page() {
  const user = await getUser();

  const userId = user?.id;

  return (
    <main className="my-10 w-4/5 mx-auto">
      {/* admin user section */}
      <section className="my-10 flex justify-between">
        <h1 className="text-3xl font-bold">Admin User</h1>
        <div className="flex gap-2">
          {user && (
            <>
              <EditProfile user={user} name="Edit Profile" />
              <NewProfileModal user={user} name="New Admin" />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
