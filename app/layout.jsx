import { Inter } from "next/font/google";
import "./globals.css";
import ViewContent from "@/components/container/ViewContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icon: "/logo.png",
  title: "NVGHS - AES",
  description: "Reasearch Method Project by Franco, Cabalse and Soriano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className={inter.className} style={{background: "var --bg-base-100"}}>
        <ViewContent>
          {children}
        </ViewContent>
      </body>
    </html>
  );
}
