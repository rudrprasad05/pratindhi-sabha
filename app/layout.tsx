import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import { getUser } from "@/actions/getUser";
import { NavBar } from "@/components/navbar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratinidhi Sabha",
  description: "Developed & Powered by Procyon",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  return (
    <html lang="en">
      <body className={`${inter.className} text-text-main`}>
        <AuthContext>
          <Toaster />
          <NavBar user={user} />
          <main className="h-full">{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
