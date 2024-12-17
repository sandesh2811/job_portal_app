"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

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
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Login",
    href: "/login",
  },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <div className="relative overflow-x-hidden midLg:max-w-[850px] xl:max-w-[1050px] mx-auto bg-blue-600 flex justify-between p-4 h-[8vh] text-primaryText tracking-wide">
      <h1 className="text-xl">Find Jobs</h1>

      {/* Laptop Links Configuration */}

      <nav className="hidden w-[400px] xl:w-[550px] md:flex justify-between items-center text-lg">
        {NavbarLinks.map((link) => {
          return (
            <Link key={link.title} href={link.href}>
              {link.title}
            </Link>
          );
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
          {NavbarLinks.map((link) => {
            return (
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
