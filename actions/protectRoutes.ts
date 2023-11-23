import { getUser } from "./getUser";

export default async function ProtectRoutes() {
  const user = await getUser();

  if (user?.role != "admin") {
    return false;
  }
  return true;
}
