"use client";
import Title from "@/ui/title/Title";
import AboutMeCard from "@/ui/cards/AboutMeCard";
import ServicesCard from "@/ui/cards/ServicesCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const About = () => {
  return (
    <div id="about" className="w-full my-[100px] global-padding scroll-margin">
      <div className="w-full justify-center items-center mb-[70px]">
        <Title title="About Me" subheading="And The Services I Offer" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true }}
        className="flex max-xl:flex-col w-full h-full my-10 gap-6"
      >
        <motion.div variants={childVariants} className="w-full h-full">
          <AboutMeCard />
        </motion.div>
        <motion.div
          variants={childVariants}
          className="w-full flex flex-col justify-between gap-4"
        >
          <ServicesCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
