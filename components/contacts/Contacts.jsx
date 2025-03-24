"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { FaBehanceSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GoArrowDownRight } from "react-icons/go";
import {
  containerXReverse,
  childXReverse,
  childVariants,
  containerVariants,
  childXVariants,
} from "@/data/animation";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="w-full glass  flex flex-col global-padding pt-[300px] pb-[50px] border border-t border-slate-700"
    >
      <motion.h2
        whileInView="show"
        variants={containerXReverse}
        initial="hidden"
        className="footer-heading uppercase flex gap-4 items-center"
      >
        <motion.span variants={childXReverse}>LET'S GET IN TOUCH</motion.span>
        <motion.span
          variants={childVariants}
          transition={{ delay: 1 }}
          className="px-4 bg-orange-500 rounded-full hover:bg-black hover:text-orange-500 duration-300"
        >
          <GoArrowDownRight />
        </motion.span>
      </motion.h2>
      <motion.div
        whileInView="show"
        variants={containerXReverse}
        initial="hidden"
        className="w-full flex flex-col gap-6"
      >
        <motion.div variants={childXVariants}>
          <Link
            href="mailto:gemsolis.dev@gmail.com"
            className="footer-email underline"
          >
            gemsolis.dev@gmail.com
          </Link>
        </motion.div>

        <div className="flex gap-10 items-center">
          <motion.div
            whileInView="show"
            variants={containerXReverse}
            initial="hidden"
            className="flex gap-4 text-orange-500"
          >
            <Link
              href=""
              className="text-3xl hover:scale-110 hover:text-white duration-300"
            >
              <FaSquareInstagram />
            </Link>
            <Link
              href=""
              className="text-3xl hover:scale-110 hover:text-white duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href=""
              className="text-3xl hover:scale-110 hover:text-white duration-300"
            >
              <FaBehanceSquare />
            </Link>
            <Link
              href=""
              className="text-3xl hover:scale-110 hover:text-white duration-300"
            >
              <FaGithubSquare />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
