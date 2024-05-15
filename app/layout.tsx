import { ClerkProvider, SignInButton, SignedOut } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState } from "react";

const outfit = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Move",
  description: "An Transport system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [userLoacation, serUserLocation] = useState();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NavBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
