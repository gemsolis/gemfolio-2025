"use client";

import { useState } from "react";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { containerVariants, childVariants } from "@/data/animation";

const projects = [
  { thumbnail: "/assets/images/p1.png", modal: "/assets/images/vb1.png" },
  { thumbnail: "/assets/images/p2.png", modal: "/assets/images/vb2.png" },
  { thumbnail: "/assets/images/p3.png", modal: "/assets/images/vb3.png" },
  { thumbnail: "/assets/images/p4.png", modal: "/assets/images/vb4.png" },
  { thumbnail: "/assets/images/p5.png", modal: "/assets/images/vb5.png" },
  { thumbnail: "/assets/images/p6.png", modal: "/assets/images/vb6.png" },
  { thumbnail: "/assets/images/p7.png", modal: "/assets/images/vb7.png" },
  { thumbnail: "/assets/images/p8.png", modal: "/assets/images/vb8.png" },
];

const SocialMediaProject = () => {
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
    <div>
      {/* Image Grid */}
      <div className="global-padding py-20">
        <motion.div
          whileInView="show"
          variants={containerVariants}
          initial="hidden"
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={childVariants} // Apply child animation
              className="relative project-size cursor-pointer"
            >
              <Image
                src={project.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg transition hover:scale-105 duration-300 hover:rotate-1"
                onClick={() => openModal(project.modal)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Modal */}
      {isOpen && currentImage && (
        <div
          className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 bg-red-700 text-white p-2 rounded-full shadow-md hover:bg-red-900 transition"
            onClick={closeModal}
          >
            <MdClose size={24} />
          </button>
          <div
            className="relative w-full max-w-[70%] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}

            <div className="enterAnimation relative w-full h-[95vh] rounded-md overflow-hidden">
              <Image
                src={currentImage}
                alt="Modal View"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaProject;
