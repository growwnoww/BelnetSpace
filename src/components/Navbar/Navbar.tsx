"use client";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";


import { IoCloseSharp, IoMenu } from "react-icons/io5";
import { useRecoilState } from "recoil";
import { hamaburgerAtom } from "@/store/atom";
import HomeHamaburger from "../hero/HamburgerMenu";

interface NavItem {
  title: string;
  link: string;
}

const navList: NavItem[] = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "About us",
    link: "#roadmap",
  },
  {
    title: "Services",
    link: "#statistics",
  },
  {
    title: "Products",
    link: "/howitworks",
  },

  {
    title: "FAQ",
    link: "#faq",
  },
  
  {
    title: "Contact us",
    link: "/contactus",
  },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<String>("#home");

  const [isOpen, setOpen] = useRecoilState(hamaburgerAtom);


  const toogleBtn = () => {
    setOpen(!isOpen);
  };

  const closeMenuOnResize = () => {
    if (window.innerWidth >= 1023) {
      setOpen(false);
    }
  };


  useEffect(() => {
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  // Add this useEffect
  

  return (
    <div className="w-full h-[70px] fixed top-0 bg-transparent shadow-lg backdrop-blur-md z-50 px-4 md:px-10 border-b border-b-gray-700">
      <div className="w-full h-full flex flex-row items-center justify-between text-xs font-semibold">
      <div className="flex items-center justify-center">
          <Link href="/" className="">
            <Image
              src="/BELIEVE-LOGO-07.png"
              alt="logo"
              loading="lazy"
              width={80}
              height={80}
            />
          </Link>
          <div className="text-white">
            <p className="text-xl">BELNET</p>
            <p className="text-xl">SPACE</p>
          </div>
        </div>

      
        <div
          className={`gap-y-4  hidden lg:flex   py-2 items-start md:flex-row md:items-start absolute md:static md:bg-transparent md:text-[15px] bg-indigo-950  w-fit px-10  rounded-tl-md rounded-bl-md right-[0%] top-[97%] md:top-0 md:w-auto `}
        >
          {navList.map((NavRoute, index) => (
            <div
              key={index}
              className={`px-3  ${
                activeNav === NavRoute.link ? "text-yellow-400" : ""
              } md:mx-2 text-[14px] text-white`}
            >
              <Link
                href={NavRoute.link}
                onClick={() => {
                  setActiveNav(NavRoute.link);
                }}
              >
                {NavRoute.title}
              </Link>
            </div>
          ))}
          {/* Wallet Connect Button */}
        </div>

     
        <div
          className="lg:hidden border border-zinc-600 p-1 rounded-md bg-zinc-800 mr-4"
          onClick={toogleBtn}
        >
          {isOpen ? (
            <IoCloseSharp className="text-xl text-stone-400" />
          ) : (
            <IoMenu className="text-xl text-stone-400 " />
          )}
        </div>

        {isOpen && <HomeHamaburger />}



      
      </div>
    </div>
  );
};

export default Navbar;
