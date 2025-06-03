"use client";
import PrimaryButton from "@/ui/buttons/PrimaryButton";
import SecondaryButton from "@/ui/buttons/SecondaryButton";
import { GradualSpacing } from "@/ui/text/GradualSpacing";
import ScrollVelocity from "@/ui/text/ScrollVelocity";
import { WordShift } from "@/ui/text/WordShift";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="w-[98vw] max-md:w-[94vw] relative bg-hero max-lg:bg-hero-md bg-cover bg-fixed bg-opacity-20 bg-center bg-no-repeat global-padding h-[100vh] py-[200px] max-md:py-[300px] mt-6 rounded-t-lg rounded-b-3xl">
        <motion.div className="flex flex-col">
          <div className="flex flex-col gap-2 ">
            <h1 className="flex flex-col leading-snug">
              <GradualSpacing text="Hello! I'm Abigael Gem!" />
              <WordShift
                text="Your Dedicated"
                words={["UX Designer.", "Web Developer.", "Brand Strategist."]}
              />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-[1rem] text-gray-400 mb-4"
            >
              I craft engaging social media strategies, design seamless user
              experiences, and build stunning websites.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="flex gap-6"
          >
            <PrimaryButton title="Download CV" />
            <SecondaryButton title="See Projects" />
          </motion.div>
        </motion.div>
      </div>
      <ScrollVelocity
        texts={["Web Developer", "UX Designer", "Social Media Manager"]}
        className="custom-scroll-text custom-font"
      />
    </div>
  );
};

export default Hero;
