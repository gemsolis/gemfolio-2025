import Image from "next/image";
import SpotlightCard from "@/ui/cards/SpotlightCard";
import profilepic from "@/public/assets/images/main-pic.gif";
import { FaBehanceSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";

const AboutMeCard = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card glass duration-500 py-2"
      spotlightColor="rgba(1, 78, 186, 0.424)"
    >
      <div className="rounded-[1rem] h-full flex flex-col items-center justify-center py-4 p-4">
        <div className="w-[300px] h-[300px] overflow-hidden rounded-full">
          <Image
            src={profilepic}
            alt="Profile Pic"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-4 justify-center items-center py-6 p-4 w-full">
          <div className="flex flex-col gap-4">
            <span className="fade-gradient global-subheading mt-2 custom-font w-full">
              Hi there! Welcome to my portfolio!
            </span>
            <p className=" text-slate-400">
              Hi, I’m Abigael Gem—but you can just call me Gem. I help brands
              grow, connect, and stand out with content people actually want to
              engage with. From posts that spark real conversations to building
              a strong online presence, I don’t just make sure your brand is
              seen—I make sure it’s remembered.
            </p>
            <p className=" text-slate-400">
              But that’s not all. I’m also a Frontend Developer, turning ideas
              into sleek, responsive, and functional websites that leave a
              lasting impact. Whether it’s social media, UX, or web
              development—if it helps your brand shine, I’m all in.
            </p>
            <p className=" text-slate-400">
              When I’m not working, you’ll probably find me gaming, writing
              creatively, or exploring new tools and ideas. Right now, I’m
              diving into Framer, Funnel Designing, and Motion Graphics—because
              I believe that staying curious and creative is key to keeping
              things fresh and effective. Let’s build something that’s not just
              beautiful—but unforgettable.
            </p>
          </div>
          <div className="flex w-full gap-3 global-flex items-center justify-between p-4 border border-orange-500 rounded-md glass">
            <span className="text-lg custom-font">Follow Me:</span>
            <div className="flex gap-4 justify-center glass p-4 rounded-b-md text-white -z-20">
              <Link
                href="https://www.instagram.com/gem.dsgn"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
              >
                <FaSquareInstagram size={30} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/abigaelgem"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
              >
                <FaLinkedin size={30} />
              </Link>
              <Link
                href="https://www.behance.net/gemdev"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
              >
                <FaBehanceSquare size={30} />
              </Link>
              <Link
                href="https://github.com/gemsolisdev"
                target="_blank"
                className="text-xl hover:scale-110 hover:text-orange-500 duration-300"
              >
                <FaGithubSquare size={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default AboutMeCard;
