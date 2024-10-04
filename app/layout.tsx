import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/NavBar/navbar";



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
      
    
      <body>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
