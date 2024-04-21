import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import ViewContent from "@/components/Containers/ViewContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NVGHS - AES",
  description: "Reasearch Method Project by Franco, Cabalse and Soriano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className} style={{background: "var --bg-base-100"}}>
        <Navbar/>
        <div className="flex pt-[4rem]">
          <div className="fixed w-1-2 bottom-0 top-[4rem]">
            <Sidebar />
          </div>
          <div className="w-full ps-[18%]">
            <ViewContent>
              {children}
            </ViewContent>
          </div>
        </div>
      </body>
    </html>
  );
}
