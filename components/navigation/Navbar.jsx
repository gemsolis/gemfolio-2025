"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect, useMemo } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaBehanceSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Image from "next/image";
import logo from "@/public/assets/images/ag_logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const MotionLink = motion(Link);

  // Auto-close menu after 10 seconds
  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => setToggle(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [toggle]);

  // ✅ Memoized logo animation so it only runs once
  const MemoizedLogo = useMemo(
    () => (
      <MotionLink
        href="#"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black-glass bg-opacity-45 px-4 py-2 rounded-md flex gap-2 items-center"
      >
        <Image src={logo} width={40} alt="Abigael Gem" />
        <h1 className="max-md:hidden">Abigael Gem</h1>
      </MotionLink>
    ),
    []
  );

  return (
    <motion.div className="w-full my-8 fixed rounded-md z-40" id="home">
      <div className="flex mx-6 justify-between items-start relative">
        {MemoizedLogo}

        <div></div>

        {/* Menu button */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.2 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-transform duration-300 ${
            toggle
              ? "translate-x-[-220px] bg-red-700 text-white"
              : "bg-white text-slate-900"
          }`}
          onClick={toggleMenu}
        >
          <div>{toggle ? <IoMdClose /> : <HiMenuAlt4 />}</div>
          <span className="custom-font max-md:hidden">
            {toggle ? "Close" : "Menu"}
          </span>
        </motion.div>

        {/* Dropdown Menu */}
        <div
          className={`custom-font absolute top-12 -right-[24px] flex flex-col w-[240px] text-[16px] bg-black-glass border border-slate-500 rounded-md transform transition-transform duration-300 ${
            toggle ? "right-[0px] translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="flex flex-col">
            {[
              { href: "#", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#tools", label: "Tools" },
              { href: "#projects", label: "Projects" },
              { href: "#contacts", label: "Contacts" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={toggleMenu}
                className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex gap-4 justify-center glass p-4 rounded-b-md text-white -z-20">
            <Link
              href="https://www.instagram.com/gem.dsgn"
              target="_blank"
              className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
            >
              <FaSquareInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abigaelgem"
              target="_blank"
              className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://www.behance.net/gemdev"
              target="_blank"
              className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
            >
              <FaBehanceSquare />
            </Link>
            <Link
              href="https://github.com/gemsolisdev"
              target="_blank"
              className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
            >
              <FaGithubSquare />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
