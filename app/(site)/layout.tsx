import getCurrentUser from "../actions/getCurrentUser";
import Nav from "./components/Nav/Nav";
import UserCard from "./components/UserCard";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  return (
    <Nav>
      <div className="h-full">
        <UserCard user={user} />
        {children}
      </div>
    </Nav>
  );
}
