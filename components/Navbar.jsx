import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {useRouter} from "next/router";
import navLogo from "../public/assets/vicNav.svg"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavbg] =useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router  = useRouter();


  useEffect(()=>{
    if(
        router.asPath === '/property' ||
        router.asPath === '/crypto' || 
        router.asPath === '/netflix' ||
        router.asPath === '/twitch'
    ){
        setNavbg('transparent');
        setLinkColor('#ecf0f3') 
        console.log("Not Home")
    }else{
        setNavbg('#ecf0f3')
        setLinkColor('#1f2937')
        console.log(" home")
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
    style= {{backgroundColor: `${navbg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full p-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={navLogo}
            alt="/"
            width="125"
            height="40"
          />
        </Link>
        {/*List for displaying mobile menu*/}
        {/*hidden on larger devices above md*/}
        <ul style={{color:`${linkColor}`}} className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/#about">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/#skills">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/#projects">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/#contact">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>

        {/*Menu for smaller devices*/}
        <div  style={{color:`${linkColor}`}} onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/*Menu for smaller devices outside larger devices nav : container for the menu first*/}
      <div

        className={ 
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/*Actual Menu*/}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-200%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src={navLogo}
                alt="/"
                width="60"
                height="25"
              />
              <div 
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[100%] md:w-[90%] py-2 md:py-4 text-sm">
                Let us build something legendary together
              </p>
            </div>
          </div>
          <div className="py-2 md:py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 sm:py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 sm:py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 sm:py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 sm:py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-2 sm:py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10 sm:pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let us connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
