import { motion } from "framer-motion";
import { titleXContainer, titleXChild, titleYChild } from "@/data/animation";

const Title = ({ title, subheading }) => {
  return (
    <motion.div
      whileInView="show"
      variants={titleXContainer}
      initial="hidden"
      viewport={{ once: true }}
      className="global-flex items-center justify-start gap-2 max-md:flex-col"
    >
      <motion.h2
        variants={titleXChild}
        viewport={{ once: true }}
        className="flex gap-4 items-center"
      >
        <span className="global-title font-extrabold text-gradient leading-3 uppercase">
          {title}
        </span>
        <span className="global-title text-[50px] max-md:hidden">/</span>
      </motion.h2>
      <motion.span
        variants={titleYChild}
        viewport={{ once: true }}
        className="global-subheading custom-font leading-loose"
      >
        {subheading}
      </motion.span>
    </motion.div>
  );
};

export default Title;
