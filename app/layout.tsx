import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "ArticleHub",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      {/* <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" />

      </Head> */}
    
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
