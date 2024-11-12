import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from 'next/font/google'
const man = Manrope({weight:"500",subsets:["latin"]})
export const metadata:Metadata = {
  title:"Daniel - Programmer",
  description:"Hi, i'm a frontend developer based in Lagos,Nigeria"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="xQ0QIZu18c6Mj-uTvn3f6fWwBLEto6Y8HW5ZEtr0Wfw" />
            </head>
      <body className={`${man.className} bg-[#EEEEF2]`}>{children}</body>
    </html>
  );
}
