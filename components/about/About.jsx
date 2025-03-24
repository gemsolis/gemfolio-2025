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
    <div id="about" className="w-full my-[200px] global-padding">
      <div className="w-full global-flex justify-center items-center mb-[70px]">
        <Title title="About Me" subheading="And The Services I Offer" />
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        className="global-flex w-full my-10 gap-6 global-padding"
      >
        <motion.div variants={childVariants}>
          <AboutMeCard />
        </motion.div>
        <motion.div variants={childVariants} className="flex flex-col gap-6">
          <ServicesCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
