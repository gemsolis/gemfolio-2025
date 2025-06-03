"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { containerVariants, childVariants } from "@/data/animation";
import { tools } from "@/data/dataArray";
import Title from "@/ui/title/Title";

const Tools = () => {
  return (
    <div
      id="tools"
      className="w-full mb-[200px] flex global-padding scroll-margin"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="w-full glass p-10 rounded-md flex flex-col gap-2 max-lg:items-center border border-t border-slate-700"
      >
        <div className="flex justify-center mb-10">
          <Title title="Tools and Tech" subheading="I'm Using Behind My Work" />
        </div>

        {tools.map(({ category, items }, index) => (
          <div
            key={index}
            className="w-full flex flex-wrap justify-center items-center gap-4 px-10 py-4  max-lg:px-2"
          >
            {items.map(({ src, alt, width }, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                className="flex items-center gap-4 px-4 py-2 glass rounded-md border-b border-slate-700"
              >
                <Image src={src} width={width} alt={alt} />
                <span className="text-lg max-md:text-sm text-slate-100 custom-font">
                  {alt}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tools;
