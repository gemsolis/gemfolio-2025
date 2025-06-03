import { motion } from "framer-motion";
import { titleXContainer, titleXChild, titleYChild } from "@/data/animation";

const Title = ({ title, subheading }) => {
  return (
    <motion.div
      whileInView="show"
      variants={titleXContainer}
      initial="hidden"
      className="global-flex items-center justify-start gap-2 max-md:flex-col"
    >
      <motion.h2 variants={titleXChild} className="flex gap-4 items-center">
        <span className="global-title font-extrabold text-gradient leading-3 uppercase">
          {title}
        </span>
        <span className="global-title text-[50px] max-lg:hidden">/</span>
      </motion.h2>
      <motion.span
        variants={titleYChild}
        className="global-subheading custom-font leading-loose"
      >
        {subheading}
      </motion.span>
    </motion.div>
  );
};

export default Title;
