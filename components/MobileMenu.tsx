"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { navigation } from "@/mocks/navigation";
import { useAuth } from "@clerk/nextjs";
import dynamic from "next/dynamic";

const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);
const SignInButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignInButton),
  { ssr: false }
);

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative lg:hidden overflow-hidden">
      {/* Иконка бургера */}
      <button
        aria-label="Open menu"
        className="text-secondary text-3xl"
        onClick={() => setIsMenuOpen(true)}
      >
        <LuMenu />
      </button>

      {/* Затемнение и размытие заднего фона */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={closeMenu} // Закрываем меню при клике на затемнённый фон
        />
      )}

      {/* Меню, выезжающее справа */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px]
        transform transition-transform duration-300 ease-in-out bg-black/70 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full hidden"
        }`}
      >
        {/* Иконка крестика для закрытия */}
        <button
          aria-label="Close menu"
          className="absolute top-5 right-10 text-secondary text-3xl hover:text-white 
          transition-all duration-300 z-50"
          onClick={closeMenu}
        >
          <LuX />
        </button>

        {/* Содержимое меню */}
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Список ссылок */}
          <ul className="flex flex-col items-center gap-5">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white text-lg font-semibold hover:text-secondary transition-all duration-300"
                  onClick={closeMenu} // Закрываем меню при клике на ссылку
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Кнопка Sign Up */}
          {isSignedIn ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button
                className="rounded-[20px] bg-secondary py-[10px] px-[24px] font-semibold 
              text-white flex items-center justify-center gap-3 hover:border hover:border-secondary
                hover:bg-transparent transition-all duration-300"
                onClick={closeMenu} // Закрываем меню при клике
              >
                Sign Up
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
