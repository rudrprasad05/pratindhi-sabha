
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignOutContext } from "@/actions/signOut";
import { useSession } from "next-auth/react";

export default function AuthButton() {
    const { data: session } = useSession();

    return (    
        <>
            {session?.user ? (
                <Button variant="primary">
                    <Link href={"/login"}>Login</Link>
                </Button>
            ) : (
                <Button variant="primary" onClick={() => SignOutContext()}>Log Out</Button>
            )}
        </>
    );
}
