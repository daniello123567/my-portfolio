import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
const man = Manrope({weight:"500",subsets:["latin"]})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${man.className} bg-[#EEEEF2]`}>{children}</body>
    </html>
  );
}
