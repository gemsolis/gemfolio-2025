"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function WordShift({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (words.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="hero-sub flex gap-2 max-md:gap-2">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        className="hero-sub custom-font"
      >
        {text}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
          className="hero-sub custom-font text-gradient"
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
