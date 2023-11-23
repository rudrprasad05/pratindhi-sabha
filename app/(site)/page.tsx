import Link from "next/link";

import { SignOutContext } from "../../actions/signOut";
import { useSession } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    console.log(session?.user);
    return (
        <div>
            {/* Hero */}
        </div>
    );

}
