"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/images/ag_logo.png";

const Footer = () => {
  return (
    <div className="custom-font w-full py-6 px-6 bg-black border-t border-white uppercase global-flex max-md:gap-2 justify-between text-lg max-sm:text-sm">
      <div>
        <Link
          href="#"
          className="px-4 max-md:p-0 rounded-md flex gap-2 items-center"
        >
          <Image src={logo} width={40} alt="Abigael Gem" />
          <h1>Abigael Gem</h1>
        </Link>
      </div>
      <span>Designed & Developed by Gem Solis</span>
      <span>All Rights Reserved 2025.</span>
    </div>
  );
};

export default Footer;
