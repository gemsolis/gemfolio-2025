import Image from "next/image";
import SpotlightCard from "@/ui/cards/SpotlightCard";
import profilepic from "@/public/assets/images/profile_pic.png";

const AboutMeCard = () => {
  return (
    <SpotlightCard
      className="custom-spotlight-card duration-500"
      spotlightColor="rgba(1, 78, 186, 0.424)"
    >
      <div className="rounded-[1rem] flex flex-col items-center justify-center gap-4 py-4 px-4">
        <div className="w-[400px] h-[400px] overflow-hidden relative rounded-lg">
          <Image
            src={profilepic}
            alt="Profile Pic"
            width={400}
            height={400}
            className="object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="px-6 py-4 flex flex-col gap-2">
          <span className="text-orange-500 text-2xl custom-font">
            Hi there!
          </span>
          <p>
            I help brands grow, connect, and stand out with content that people
            actually want to engage with. Whether it’s crafting posts that spark
            conversations or building a strong online presence, I make sure your
            brand isn’t just seen—it’s remembered.
          </p>
          <p>
            On top of that, I’m a Frontend Developer who turns ideas into sleek,
            functional, and responsive websites that make an impact. Social
            media, user experience, web development. Whatever it takes to make
            your brand shine, I’m here for it.
          </p>
          <p className=" text-white">
            Let's work together and bring your vision to life!
          </p>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default AboutMeCard;
