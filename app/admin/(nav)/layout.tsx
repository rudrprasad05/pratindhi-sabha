import AdminCommand from "@/components/global/AdminCommand";
import Footer from "@/components/global/Footer";
import { NavBar } from "@/components/navbar/navBar";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Pratinidhi Sabha",
  description: "Developed & Powered by Procyon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />

      <main className="relative flex h-min gap-20 w-4/5 mx-auto pt-32">
        <div className="grow">{children}</div>
        <div className="top-10 sticky lg:block hidden h-full">
          <h1 className="text-2xl text-primary font-bold pb-10">
            Control Panel
          </h1>
          <AdminCommand />
        </div>
      </main>

      <Footer />
    </>
  );
}
