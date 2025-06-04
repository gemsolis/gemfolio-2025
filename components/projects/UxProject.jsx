"use client";

import { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

import { containerVariants, childVariants } from "@/data/animation";

import { projects } from "@/data/dataArray";

const UxProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="my-[100px]">
      <h1 className="global-cardtitle fade-gradient w-full border-b border-b-white mb-6">
        User Experience Design
      </h1>
      <div className="w-full flex flex-col gap-10 justify-center">
        <motion.div
          whileInView="show"
          variants={containerVariants}
          initial="hidden"
          viewport={{ once: true }}
          className="flex w-full gap-10  global-flex  "
        >
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              viewport={{ once: true }}
              className="relative cursor-pointer w-full h-[400px] overflow-hidden rounded-lg flex items-start gap-5"
              onClick={() => openModal(project.modal)}
            >
              <Image
                src={project.thumbnail}
                alt={`${project.title} Case Study`}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-lg transition absolute top-0 left-0 hover:scale-105 duration-300 hover:rotate-1"
              />

              <div className="absolute w-full bottom-0 px-4 py-4 gradient-container">
                <h2 className="flex flex-col gap-2">
                  <span className="global-cardtitle">{project.title}</span>
                  <div className="flex gap-2">
                    <span className="text-sm py-1 px-2 border border-orange-500 rounded-md">
                      {project.type}
                    </span>
                    <span className="text-sm py-1 px-2 border border-orange-500 rounded-md">
                      {project.category}
                    </span>
                  </div>
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView="show"
          variants={containerVariants}
          initial="hidden"
          viewport={{ once: true }}
          className="grid-container"
        >
          {projects.slice(2, 6).map((project, index) => (
            <motion.div
              key={index + 1}
              variants={childVariants}
              viewport={{ once: true }}
              className="cursor-pointer relative w-full h-[400px] overflow-hidden rounded-lg"
              onClick={() => openModal(project.modal)}
            >
              <Image
                src={project.thumbnail}
                alt={`Thumbnail ${index + 2}`}
                layout="fill"
                style={{ objectFit: "cover" }}
                className="rounded-lg transition hover:scale-105 duration-300 hover:rotate-1"
              />
              <div className="absolute w-full bottom-0 px-4 py-10 gradient-container">
                <h2 className="flex flex-col gap-2">
                  <span className="global-subheading">{project.title}</span>
                  <div className="flex gap-2">
                    <span className="text-sm py-1 px-2  border border-orange-500 rounded-md">
                      {project.type}
                    </span>
                    <span className="text-sm py-1 px-2  border border-orange-500 rounded-md">
                      {project.category}
                    </span>
                  </div>
                </h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Modal */}
      {isOpen && currentImage && (
        <div
          className="fixed bottom-0 left-0 bg-black-glass scaleUp z-50 w-full h-[100%] overflow-y-auto "
          onClick={closeModal}
        >
          <div className="sticky top-4 right-4 flex z-40 justify-end px-4">
            <button
              className=" bg-red-700 text-white p-2 rounded-full shadow-md hover:bg-red-900 hover:rotate-90 duration-500 transition"
              onClick={closeModal}
            >
              <MdClose size={24} />
            </button>
          </div>
          <div
            className="relative w-full max-w-[100%] h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {typeof currentImage === "string" ? (
              <Image
                src={currentImage}
                alt="Modal Content"
                width={1200}
                height={800}
                className="w-full h-auto rounded-md"
              />
            ) : (
              currentImage
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UxProject;
