"use client";

import { RootState } from "@/Store/store";

import { FiMenu, FiX } from "react-icons/fi";
import MainContainer from "@/Components/MainContainer";

import Link from "next/link";
import { useEffect, useState } from "react";
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
    (state: RootState) => state.loginDataReducer,
  );

  useEffect(() => {
    if (toggleNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleNav]);

  return (
    <MainContainer className="h-[8vh] w-full flex-row items-center justify-between gap-0 text-primaryText">
      <h1 className="text-xl font-bold uppercase">Find Jobs</h1>

      {/* Laptop Links Configuration */}

      <nav className="hidden w-[400px] items-center justify-between text-lg font-semibold uppercase md:flex">
        {NavbarLinks.map((link, idx) => {
          if (link.title === "Login" && loginData.userName !== "") {
            return (
              <Link key={idx} href={`/details/${loginData.userId}`}>
                Dashboard
              </Link>
            );
          } else {
            if (link.title === "Login") {
              return (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              );
            } else {
              return (
                <Link key={link.title} href={link.href}>
                  {link.title}
                </Link>
              );
            }
          }
        })}
      </nav>

      {/* Mobile Links Configuration */}

      <FiMenu
        size={25}
        className="cursor-pointer md:hidden"
        onClick={() => setToggleNav(true)}
      />

      <nav
        className={
          toggleNav
            ? "absolute right-0 top-0 z-50 h-screen w-[50%] bg-primaryText font-light text-background md:hidden"
            : "absolute right-[-50%] top-0 z-50 h-screen w-[50%] bg-primaryText font-light text-background md:hidden"
        }
      >
        <div className="flex cursor-pointer items-center justify-end p-4">
          <FiX size={25} onClick={() => setToggleNav(false)} />
        </div>
        <div className="flex h-[80vh] flex-col items-end justify-evenly px-4 text-lg mid:text-xl">
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
    </MainContainer>
  );
};

export default Navbar;
