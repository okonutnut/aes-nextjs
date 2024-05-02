import { Inter } from "next/font/google";
import "./globals.css";
import ViewContent from "@/components/Containers/ViewContent";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NVGHS - AES",
  description: "Reasearch Method Project by Franco, Cabalse and Soriano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className} style={{background: "var --bg-base-100"}}>
        <TopNav />
        <div className="flex pt-[4rem]">
          <div className="fixed bottom-0 top-[4rem] w-[18%]">
            <Sidebar />
          </div>
          <div className="container ps-[18%]">
            <ViewContent>
              {children}
            </ViewContent>
          </div>
        </div>
      </body>
    </html>
  );
}
