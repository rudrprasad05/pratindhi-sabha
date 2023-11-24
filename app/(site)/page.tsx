import { getUser } from "@/actions/getUser";

export default async function Home() {
  const user = await getUser();

  return (
    <div>
      {user?.email ? "Your are logged in. " : "You are not logged in"} This is
      the hero page
    </div>
  );
}
