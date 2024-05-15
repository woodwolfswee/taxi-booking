"use client";
import Image from "next/image";
import React from "react";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/router";
function NavBar() {
  // const router: any = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    isSignedIn? (
      <div
        className="flex justify-between
     p-3 px-10 border-b-[1px] shadow-sm"
      >
        <div className="flex gap-10 items-center">
          <h1 className="text-[25px] font-semibold">Multi Move</h1>
          <div className="hidden md:flex gap-6">
            <h2
              className="hover:bg-green-500 p-2
                rounded-md cursor-pointer transition-all "
            >
              Home
            </h2>
            <h2
              className="hover:bg-green-500 p-2
                rounded-md cursor-pointer transition-all"
            >
              History
            </h2>
            <h2
              className="hover:bg-green-500 p-2
                rounded-md cursor-pointer transition-all"
            >
              Help
            </h2>
          </div>
        </div>
        <div className="hover:bg-green-500 p-2 rounded-md cursor-pointer transition-all">
        <UserButton afterSignOutUrl="/sign-in"/>
        </div>
      </div>
    ):(
      <div
        className="flex justify-between
     p-3 px-10 border-b-[1px] shadow-sm"
      >
        <div className="flex gap-10 items-center">
          <h1 className="text-[25px] font-semibold">Multi Move</h1>
          <div className="hidden md:flex gap-6">
          </div>
        </div>
        <div className="hover:bg-green-500 p-2 rounded-md cursor-pointer transition-all">
        <SignInButton/>
        </div>
      </div>
    )
  );
}

export default NavBar;
