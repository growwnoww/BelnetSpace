"use client";
import { hamaburgerAtom } from "@/store/atom";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosLock } from "react-icons/io";
import { useRecoilState } from "recoil";

interface NavItem{
    title:string;
    link:string;
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

const HomeHamaburger = () => {

    const [activeNav, setActiveNav] = useState<String>("#home");

    
    
    const router = useRouter(); // Add this line

    const [isOpen,setOpen] = useRecoilState(hamaburgerAtom);

   
    const toogleBtn = () => {
      setOpen(!isOpen);
    };
    


    // Add this useEffect
  


    const [menuState, setMenuState] = useState<{
        [id: number]: { isOpen: boolean; isArrowUp: boolean };
    }>({});

    const toggleMenu = (menuId: number) => {
        setMenuState((prev) => {
            const isOpen = !prev[menuId]?.isOpen || false;
            const updatedMenuState = { ...prev };
            updatedMenuState[menuId] = {
                isOpen: isOpen,
                isArrowUp: !prev[menuId]?.isArrowUp,
            };
            return updatedMenuState;
        });
    };

    return (
        <>
            {isOpen ? (
                <div className="absolute top-[80%] left-[1%]   mr-3 px-4 right-[1%] bg-black py-3 my-3  w-full z-50">
                  
                  <div className="flex flex-col gap-y-4 my-2">
                

                    
                  
                  </div>

                    

                    <div className="">
                        <ul className="grid grid-cols-2 gap-2">
                            {navList.map((item,index) => (
                                <li
                                    onClick={() => setOpen(!isOpen)}
                                    key={index}
                                    className="bg-stone-800 rounded-md  flex items-center justify-center"
                                >
                                    <Link href={item.link} className=" py-2">
                                        {item.title}
                                    </Link>
                                    
                                </li>
                            ))}
                           
                        </ul>

                    
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};


export default HomeHamaburger


