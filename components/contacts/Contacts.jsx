"use client";
import { motion } from "framer-motion";
import Link from "next/link";

import { GoArrowDownRight } from "react-icons/go";
import {
  containerXReverse,
  childXReverse,
  childVariants,
  containerVariants,
  childXVariants,
} from "@/data/animation";
import TertiaryButton from "@/ui/buttons/TertiaryButton";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="w-full glass flex flex-col justify-center items-center global-padding pt-[100px] pb-[100px] max-md:pt-[100px] "
    >
      <motion.h2
        whileInView="show"
        variants={containerXReverse}
        initial="hidden"
        className="footer-heading uppercase flex flex-col gap-4 items-center"
      >
        {/* <motion.span
          variants={childVariants}
          transition={{ delay: 1 }}
          className="px-4 bg-orange-500 rounded-full hover:bg-black hover:text-orange-500 duration-300"
        >
          <GoArrowDownRight />
        </motion.span> */}
        <motion.span variants={childVariants} className="fade-text-title">
          LET'S GET IN TOUCH!
        </motion.span>
      </motion.h2>
      <motion.div
        whileInView="show"
        variants={containerXReverse}
        initial="hidden"
        className="w-full flex flex-col justify-center items-center gap-6"
      >
        <motion.div variants={childXVariants}>
          <Link
            href="mailto:gemsolis.dev@gmail.com"
            className="footer-email underline fade-text-title"
          >
            gemsolis.dev@gmail.com
          </Link>
        </motion.div>

        <div className="flex gap-3 items-center">
          <motion.div
            whileInView="show"
            variants={containerXReverse}
            initial="hidden"
            className="flex gap-4 text-orange-500"
          >
            <motion.div variants={childVariants}>
              <TertiaryButton
                title="Instagram"
                url="https://www.instagram.com/gem.dsgn"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <TertiaryButton
                title="Behance"
                url="https://www.behance.net/gemdev"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <TertiaryButton
                title="LinkedIn"
                url="https://www.linkedin.com/in/abigaelgem"
              />
            </motion.div>
            <motion.div variants={childVariants}>
              <TertiaryButton
                title="Github"
                url="https://github.com/gemsolisdev"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
