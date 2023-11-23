import Image from "next/image"
import { NavLinks } from "./navLinks"
import AuthButton from "./authButton"

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-20 pt-5">
            <div className="opacity-80">
                <Image src={"/logo.png"} alt="Om Logo" height={40} width={40}/>
            </div>
            <div>
                <NavLinks />
            </div>
            <div>
                <AuthButton />
            </div>
        </nav>
    )
}
