"use client";
import About from "@/components/about/About";
import Contacts from "@/components/contacts/Contacts";
import HeroV2 from "@/components/hero/HeroV2";
import Projects from "@/components/projects/Projects";
import Tools from "@/components/tools/Tools";
import ContactButton from "@/ui/buttons/ContactButton";

export default function Home() {
  return (
    <div id="home" className="z-30">
      <HeroV2 />
      <About />
      <Tools />
      <Projects />
      <Contacts />
      <ContactButton />
    </div>
  );
}
