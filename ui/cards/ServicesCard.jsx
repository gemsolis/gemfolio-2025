import SpotlightCard from "@/ui/cards/SpotlightCard";
import { FaConnectdevelop, FaBook } from "react-icons/fa";
import { MdOutlineDesignServices, MdDeveloperBoard } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "Let’s boost your brand online with creative, engaging posts that connect with your audience. From crafting attention-grabbing content to building authentic interactions, I’m here to ensure your social media presence grows stronger and leaves a lasting impression.",
    icon: <FaConnectdevelop size={80} />,
  },
  {
    id: 2,
    title: "User Experience Design",
    description:
      "Transforming your ideas into intuitive, user-friendly digital experiences is my specialty. I focus on designs that not only look great but also provide seamless functionality, keeping your users engaged and delighted every step of the way.",
    icon: <MdOutlineDesignServices size={80} />,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Your vision deserves more than just a website—it deserves a digital experience that’s both stunning and strategically built to support your goals. I specialize in creating responsive, modern web designs that not only look beautiful on every device but also function seamlessly to enhance user experience. Whether you're launching a brand, expanding your reach, or refreshing your current site, I tailor every design to reflect your unique identity and connect with your target audience.",
    icon: <MdDeveloperBoard size={80} />,
  },
];

const ServicesCard = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-4 global-flex">
        {services.slice(0, 2).map((service, index) => (
          <div key={service.id} className="w-full flex gap-4">
            <SpotlightCard
              className="custom-spotlight-card glass max-md:px-6 max-md:py-6 px-10 py-10"
              spotlightColor="rgba(255, 134, 86, 0.400)"
            >
              <div className="w-full flex flex-col items-start gap-6 rounded-md">
                <span>{service.icon}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="global-cardtitle text-orange-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-4 max-lg:flex-col">
        {services.slice(-1).map((service, index) => (
          <div key={service.id} className="w-full flex">
            <SpotlightCard
              className="custom-spotlight-card glass max-md:px-6 max-md:py-6 px-10 py-10"
              spotlightColor="rgba(255, 134, 86, 0.400)"
            >
              <div className="w-full flex flex-col items-start gap-6 rounded-md">
                <span>{service.icon}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="global-cardtitle text-orange-500">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.description}</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesCard;
