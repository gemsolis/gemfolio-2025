"use client";

import ContactButton from "@/ui/buttons/ContactButton";
import SecondaryButton from "@/ui/buttons/SecondaryButton";
import { GradualSpacing } from "@/ui/text/GradualSpacing";
import ScrollVelocity from "@/ui/text/ScrollVelocity";
import { WordShift } from "@/ui/text/WordShift";
import { motion } from "framer-motion";

const HeroV2 = () => {
  return (
    <div className="relative flex flex-col items-center w-full global-padding">
      <div className="flex flex-col gap-10 items-center justify-center relative pt-[150px] max-md:pt-[170px]">
        <motion.div className="flex flex-col w-full">
          <div className="flex flex-col gap-3 max-md:gap-1 w-full max-xl:flex-col">
            <div>
              <h1>
                <GradualSpacing text="Hello! I'm Abigael Gem!" />
                <WordShift
                  text="Your Dedicated"
                  words={[
                    "UX Designer.",
                    "Web Developer.",
                    "Social Media Wizard.",
                  ]}
                />
              </h1>
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-[1rem] max-md:text-[0.8rem] mb-4 text-slate-400 mt-2 max-l-xl:px-2 lg:w-1/2"
                >
                  I specialize in crafting engaging and results-driven social
                  media strategies, designing seamless and intuitive user
                  experiences, and building visually stunning, responsive
                  websites that captivate audiences and drive business growth.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, delay: 2.5 }}
                className="flex gap-6"
              >
                <SecondaryButton title="See Projects" url="#projects" />
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className=" w-full h-[44vh] max-md:h-[45vh] mx-20 bg-cover bg-center rounded-2xl overflow-hidden">
          <div className="h-[120%] w-full">
            <script
              type="module"
              src="https://unpkg.com/@splinetool/viewer@1.9.91/build/spline-viewer.js"
            ></script>
            <spline-viewer url="https://prod.spline.design/tHXLtW0fI8gpfx3r/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>
      <ScrollVelocity
        texts={["Web Developer •", "UX Designer •", "Social Media Manager •"]}
        className="custom-scroll-text custom-font fade-text-title text-[3.5rem] max-md:text-[1.5rem]"
      />
    </div>
  );
};

export default HeroV2;
