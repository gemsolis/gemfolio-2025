import About from "@/components/about/About";
import Contacts from "@/components/contacts/Contacts";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tools from "@/components/tools/Tools";
import React from "react";

export default function Home() {
  return (
    <div id="home" className="z-30">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contacts />
    </div>
  );
}
