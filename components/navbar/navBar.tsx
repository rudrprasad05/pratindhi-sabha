import Image from "next/image";
import { NavLinks } from "./navLinks";
import AuthButton from "./authButton";
import { getUser } from "@/actions/getUser";
import { User } from "@prisma/client";

interface props {
  user?: User;
}

export const NavBar: React.FC<props> = ({ user }) => {
  //   const [domLoaded, setDomLoaded] = useState<boolean>(false);
  //   useEffect(() => {
  //     setDomLoaded(true);
  //   }, [domLoaded]);
  return (
    <>
      <nav className="flex items-center justify-between px-20 pt-5">
        <div className="opacity-80">
          <Image src={"/logo.png"} alt="Om Logo" height={40} width={40} />
        </div>
        <div>
          <NavLinks user={user} />
        </div>
        <div>
          <AuthButton />
        </div>
      </nav>
    </>
  );
};
