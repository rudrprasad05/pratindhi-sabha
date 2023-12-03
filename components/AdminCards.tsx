import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface props {
  name: string;
  Icon: IconType;
  href: string;
}

const AdminCards: React.FC<props> = ({ name, Icon, href }) => {
  return (
    <div className="duration-100 group group-hover:border-primary border rounded-md shadow-sm h-48 relative bg-muted p-5 border-primary/20 hover:border-primary hover:cursor-pointer">
      <Link href={href} className="w-full h-full">
        <div className="font-light text-2xl text-primary">{name}</div>
        <div className="absolute bottom-5 right-5">
          {/* <Icon className="group-hover:fill-primary w-16 h-16 stroke fill-muted-foreground" /> */}
          <Icon className="group-hover:h-28 group-hover:w-28 group-hover:fill-muted-foreground/20 duration-200  w-16 h-16 stroke fill-muted-foreground" />
        </div>
        <Link className=" text-muted-foreground" href={href}>
          View
        </Link>
      </Link>
    </div>
  );
};

export default AdminCards;
