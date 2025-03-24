"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { FaBehanceSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      const timer = setTimeout(() => {
        setToggle(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [toggle]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5 }}
      className="w-full my-8 fixed rounded-md z-40"
    >
      <div className="flex mx-6 justify-between items-start relative">
        <Link href="#" className="bg-gradient px-4 py-2 rounded-md">
          <h1>Gem Solis</h1>
        </Link>
        {/* Menu button */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-transform duration-300 ${
            toggle
              ? "translate-x-[-220px] bg-red-700 text-white"
              : "bg-white text-slate-900"
          }`}
          onClick={toggleMenu}
        >
          <div>{toggle ? <IoMdClose /> : <HiMenuAlt4 />}</div>
          <span className="custom-font">{toggle ? "Close" : "Menu"}</span>
        </div>
        {/* Dropdown Menu */}
        <div
          className={`custom-font absolute top-0 -right-[24px] flex flex-col w-[200px] text-[16px] bg-gradient rounded-md transform transition-transform duration-300 ${
            toggle ? "right-[0px] translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="flex flex-col">
            <a
              href="#"
              onClick={toggleMenu}
              className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
            >
              <span>Home</span>
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
            >
              <span>About</span>
            </a>

            <a
              href="#tools"
              onClick={toggleMenu}
              className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
            >
              <span>Tools</span>
            </a>
            <a
              href="#projects"
              onClick={toggleMenu}
              className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
            >
              <span>Projects</span>
            </a>
            <a
              href="#contacts"
              onClick={toggleMenu}
              className="w-full text-center px-4 py-4 cursor-pointer hover:bg-white hover:text-slate-800 duration-100 hover:mr-4 hover:scale-105 rounded-md"
            >
              <span>Contacts</span>
            </a>
          </div>
          <div className="flex gap-4 justify-center glass p-4 rounded-b-md text-white -z-20">
            <Link
              href=""
              className="text-xl hover:scale-110 hover:text-black duration-300"
            >
              <FaSquareInstagram />
            </Link>
            <Link
              href=""
              className="text-xl hover:scale-110 hover:text-black duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href=""
              className="text-xl hover:scale-110 hover:text-black duration-300"
            >
              <FaBehanceSquare />
            </Link>
            <Link
              href=""
              className="text-xl hover:scale-110 hover:text-black duration-300"
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
