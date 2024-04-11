import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomBanner from "@/components/BottomBanner";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Better Spotify",
  description: "A great alternative for Spotify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black p-2 text-white overflow-hidden ${inter.className}`}>
        <main className="flex gap-2 h-screen overflow-auto mt-0">
          <Sidebar />
          {children}
        </main>
        <BottomBanner />
      </body>
    </html>
  );
}
