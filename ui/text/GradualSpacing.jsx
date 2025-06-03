"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import * as React from "react";

export function GradualSpacing({ text = "Gradual Spacing" }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex space-x-1 ">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h2
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="custom-font hero-title font-bold fade-text-title"
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h2>
        ))}
      </AnimatePresence>
    </div>
  );
}
