import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Nav = async () => {
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;