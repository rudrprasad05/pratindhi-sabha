import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home</div>

      <Link href={"/login"}>Login</Link>
      {/* <Button onClick={() => SignOutContext()}>Log Out</Button> */}
    </>
  );
}
