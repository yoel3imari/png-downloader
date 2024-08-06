import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TheHeader from "@/components/TheHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PNG Donwloader",
  description: "Download png images for free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        <TheHeader />
        <main className="flex-1 px-2 md:px-4 lg:px-8">{children}</main>
        <footer className="pt-8 pb-4 text-center text-gray-500 mt-4 ">
          <span>{new Date().getFullYear()}&copy;PNG </span>
        </footer>
      </body>
    </html>
  );
}
