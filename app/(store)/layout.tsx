import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SanityLive } from "@/sanity/lib/live";
import Header from "../components/Header";

const velaSans = localFont({
  src: "../fonts/VelaSans-GX.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body
        className={`${velaSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main>
        {children}
        </main>
        
        <SanityLive />
      </body>
    </html>
    </ClerkProvider>
  );
}
