import { useSession } from "next-auth/react";
import Link from "next/link";
import react from "react";
import { IconType } from "react-icons";

interface props {
  name: string;
  Icon: IconType;
  href: string;
}

const AdminCards: React.FC<props> = ({ name, Icon, href }) => {
  return (
    <div className="rounded-md shadow-sm  h-48 relative bg-orange-100 p-5">
      <div className="font-extrabold text-3xl">{name}</div>
      <div className="absolute bottom-5 right-5">
        <Icon className="w-24 h-24 stroke opacity-50" />
      </div>
      <Link href={href}>View</Link>
    </div>
  );
};

export default AdminCards;
