import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "@/context/AuthContext";
import { getUser } from "@/actions/getUser";
import { NavBar } from "@/components/navbar/navBar";
import Footer from "@/components/global/Footer";
import { ThemeProvider } from "./providers/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import DesignerContextProvider from "@/context/DesignerContext";
import { Toaster } from "react-hot-toast";

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
      <body className={`${inter.className} h-full bg-background`}>
        <AuthContext>
          <DesignerContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster />

              <div className="h-full">{children}</div>
            </ThemeProvider>
          </DesignerContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
