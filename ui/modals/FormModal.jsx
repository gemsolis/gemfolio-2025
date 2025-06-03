"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaBehanceSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const FormModal = ({ onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        onClose?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success, onClose]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_mee5qwe", // e.g., "service_xyz123"
        "template_bhx27un", // e.g., "template_abc456"
        form.current,
        "caf5SQzJJkshFVwfr" // e.g., "user_xxx789"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          e.target.reset();
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-10 w-full h-full flex justify-start gap-10 global-flex">
      {/* Contact Info */}
      <div className="global-padding py-4 border border-slate-800 rounded-md">
        <div className="max-w-2xl">
          <h1 className="global-title text-gradient">Let's get in touch!</h1>
          <p className=" text-slate-400 mb-10">
            Let’s create something great together! Whether you’re planning a new
            project, exploring creative ideas, or just want to say hello.
          </p>
        </div>
        <div>
          <div className="flex gap-6 items-center mb-10">
            <span>
              <IoCallOutline size={30} />
            </span>
            <div className="flex flex-col gap-1 button-text">
              <span>gemsolis.dev@gmail.com</span>
              <span>abigaelgem.ux@gmail.com</span>
            </div>
          </div>
          <div className="flex gap-4 items-start justify-start mb-10">
            <div className="flex gap-4 rounded-b-md text-white">
              <Link
                href="https://www.instagram.com/gem.dsgn"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <FaSquareInstagram size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abigaelgem"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                href="https://www.behance.net/gemdev"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <FaBehanceSquare size={30} />
              </Link>
              <Link
                href="https://github.com/gemsolisdev"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300 cursor-pointer"
              >
                <FaGithubSquare size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="lg:p-20 max-md:py-10 md:py-4 max-w-[50%]">
        <h1 className="global-title">Your Ideas Start Here!</h1>
        <p className="mb-10 text-slate-400">
          Got something on your mind? Fill out the form below to reach out—
          whether it’s a project inquiry, or just a quick question.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <label className="text-sm text-slate-400 block">
            Full Name
            <input
              name="user_name"
              required
              type="text"
              className="mb-4 glass border border-slate-600 w-full p-2"
            />
          </label>
          <label className="text-sm text-slate-400 block">
            Email Address
            <input
              name="user_email"
              required
              type="email"
              className="mb-4 glass border border-slate-600 w-full p-2"
            />
          </label>
          <label className="text-sm text-slate-400 block">
            Subject
            <input
              name="subject"
              required
              type="text"
              className="mb-4 glass border border-slate-600 w-full p-2"
            />
          </label>
          <label className="text-sm text-slate-400 block">
            Your Message
            <textarea
              name="message"
              required
              className="mb-4 glass border border-slate-600 w-full p-2 h-32"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient text-white py-2 px-4 rounded-md button-text w-full"
          >
            {loading ? "Sending..." : "Send Now"}
          </button>
        </form>
        <div className="py-4">
          {success && (
            <p className="bg-green-600 border border-white text-center rounded-md text-white py-2 px-4">
              Message sent!
            </p>
          )}
          {error && (
            <p className="text-red-500 mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormModal;
