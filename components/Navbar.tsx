"use client";

import { navigation } from "@/mocks/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuStore } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { useAuth } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { CgSpinner } from "react-icons/cg";

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);
const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(true);

  const { isSignedIn } = useAuth();

  useEffect(() => {
    setIsClient(true);
    setLoading(false);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full h-[100px] bg-primary px-[50px] items-center flex sticky top-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-[100%]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="flex items-end gap-3 group">
          <div
            className="flex items-end gap-3 group-hover:text-secondary transition-all 
          duration-300"
          >
            <LuStore size={32} className="text-secondary" />
            <p className="text-xl font-semibold">NFT Marketplace</p>
          </div>
        </Link>
        <MobileMenu />
        <ul className="hidden lg:flex items-center gap-[50px] p-2">
          {navigation.map((item) => (
            <li key={item.name} className="font-semibold font-workSans">
              <Link
                href={item.href}
                className="hover:text-secondary transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {loading ? (
            <CgSpinner className="animate-spin text-secondary text-2xl" />
          ) : (
            isClient && (
              <>
                {isSignedIn ? (
                  <UserButton />
                ) : (
                  <SignInButton mode="modal">
                    <button
                      className="rounded-[20px] bg-secondary py-[10px] px-[24px] font-workSans 
                      font-semibold flex items-center justify-center gap-3 hover:border-2 hover:border-secondary
                      hover:bg-transparent transition-all duration-300 border-2 border-secondary"
                    >
                      Sign Up
                    </button>
                  </SignInButton>
                )}
              </>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
