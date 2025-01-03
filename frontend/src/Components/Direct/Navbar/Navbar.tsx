"use client";

import { FiMenu, FiX } from "react-icons/fi";

import { RootState } from "@/Store/store";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavbarLinks = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "Login",
    href: "/login",
  },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const { loginData } = useSelector(
    (state: RootState) => state.loginDataReducer
  );

  return (
    <div className="midLg:max-w-[850px] xl:max-w-[1050px] mx-auto flex justify-between p-4 h-[8vh] text-primaryText tracking-wide">
      <h1 className="text-xl">Find Jobs</h1>

      {/* Laptop Links Configuration */}

      <nav className="hidden w-[400px] md:flex justify-between items-center text-lg">
        {NavbarLinks.map((link, idx) => {
          if (link.title === "Login" && loginData.userName !== "") {
            return (
              <Link key={idx} href={`/details/${loginData.userId}`}>
                Dashboard
              </Link>
            );
          } else {
            return (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            );
          }
        })}
      </nav>

      {/* Mobile Links Configuration */}

      <FiMenu
        size={25}
        className="md:hidden"
        onClick={() => setToggleNav(true)}
      />

      <nav
        className={
          toggleNav
            ? "md:hidden bg-primaryText h-screen text-background absolute top-0 right-0 w-[50%] font-light"
            : "md:hidden h-screen bg-primaryText text-background absolute top-0 right-[-50%] w-[50%] font-light"
        }
      >
        <div className="flex items-center justify-end p-4">
          <FiX size={25} onClick={() => setToggleNav(false)} />
        </div>
        <div className="px-4 flex flex-col items-end justify-evenly h-[80vh] text-lg mid:text-xl">
          {NavbarLinks.map((link, idx) => {
            if (link.title === "Login" && loginData.userName !== "") {
              return (
                <Link key={idx} href={`/details/${loginData.userId}`}>
                  Dashboard
                </Link>
              );
            } else {
              return (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              );
            }
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
