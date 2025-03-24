"use client";
import Image from "next/image";

import {
  containerXVariants,
  childXVariants,
  containerXReverse,
  childXReverse,
} from "@/data/animation";
import { motion } from "framer-motion";
import { tools } from "@/data/dataArray";
import Title from "@/ui/title/Title";

const Tools = () => {
  return (
    <div id="tools" className="w-full mb-[200px] px-10 max-lg:px-2 flex">
      <motion.div
        whileInView="show"
        variants={containerXVariants}
        initial="hidden"
        className="w-full glass p-10 rounded-md flex flex-col gap-2 max-lg:items-center"
      >
        <div className="flex justify-center mb-10">
          <Title
            title="Tools and Tech Stack"
            subheading="I'm Using Behind My Work"
          />
        </div>
        {tools.map(({ category, items }, index) => (
          <motion.div
            key={index}
            variants={childXVariants}
            className="w-full flex justify-between items-center gap-6 border-b border-gray-500 px-10 py-4 max-lg:flex-col max-lg:items-center max-lg:px-4"
          >
            <motion.h3 variants={childXVariants} className="text-2xl">
              {category}
            </motion.h3>
            <motion.div
              variants={containerXReverse}
              className="flex items-center gap-6"
            >
              {items.map(({ src, alt, width }, i) => (
                <motion.div key={i} variants={childXReverse}>
                  <Image src={src} width={width} alt={alt} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
