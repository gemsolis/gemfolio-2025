"use client";

import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";

import Link from "next/link";
import profilepic from "@/public/assets/images/profile_pic.png";
import Image from "next/image";
import FormModal from "../modals/FormModal";

const ContactButton = () => {
  const [contactModal, setContactModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show button if user scrolls up
      if (currentScrollY < lastScrollY) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const openContactModal = () => {
    setContactModal(true);
  };

  const closeContactModal = () => {
    setContactModal(false);
  };

  return (
    <>
      {showButton && (
        <div className="w-full gap-2 justify-center items-center fixed flex bottom-2 right-0 left-0 py-4 z-40">
          <div
            className="flex gap-4 px-6 py-2 bg-black border border-white rounded-lg custom-font cursor-pointer hover:scale-105 duration-300"
            onClick={openContactModal}
          >
            <div className="rounded-full overflow-hidden bg-white">
              <Image
                src={profilepic}
                alt="Abigael Gem"
                width={24}
                height={24}
              />
            </div>
            <span>Contact Me</span>
          </div>
          <Link
            href="#home"
            className="bg-black p-2 border-white border rounded-lg"
          >
            <MdArrowUpward size={24} />
          </Link>
        </div>
      )}

      {contactModal && (
        <div
          className="fixed bottom-0 left-0 bg-black-glass scaleUp z-50 w-full h-[100%] overflow-y-auto"
          onClick={closeContactModal}
        >
          <div className="sticky top-4 right-4 flex z-50 justify-end px-4">
            <button
              className="bg-red-700 text-white p-2 rounded-full shadow-md hover:bg-red-900 transition"
              onClick={closeContactModal}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div
            className="relative w-full max-w-[100%] h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <FormModal onClose={closeContactModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;
