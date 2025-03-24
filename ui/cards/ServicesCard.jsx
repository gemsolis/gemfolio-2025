import SpotlightCard from "@/ui/cards/SpotlightCard";
import { FaConnectdevelop, FaBook } from "react-icons/fa";
import { MdOutlineDesignServices, MdDeveloperBoard } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "Let’s boost your brand online with creative, engaging posts that connect with your audience. From crafting attention-grabbing content to building authentic interactions, I’m here to ensure your social media presence grows stronger and leaves a lasting impression.",
    icon: <FaConnectdevelop size={40} />, // Explicit size
  },
  {
    id: 2,
    title: "UX Design",
    description:
      "Transforming your ideas into intuitive, user-friendly digital experiences is my specialty. I focus on designs that not only look great but also provide seamless functionality, keeping your users engaged and delighted every step of the way.",
    icon: <MdOutlineDesignServices size={40} />,
  },
  {
    id: 3,
    title: "Administrative",
    description:
      "Let me handle the organization and details so you can focus on the bigger picture. From scheduling to streamlining workflows, I’m dedicated to making your day easier and your business operations smoother and stress-free.",
    icon: <FaBook size={40} />,
  },
  {
    id: 4,
    title: "Web Development",
    description:
      "Your vision deserves a website that’s both beautiful and functional. I create responsive, modern designs tailored to your goals, ensuring your online presence stands out and provides the perfect platform for your business to grow.",
    icon: <MdDeveloperBoard size={40} />,
  },
];

const ServicesCard = () => {
  return (
    <>
      <div className="w-full flex justify-center gap-4 max-lg:flex-col">
        {services.slice(0, 2).map((service, index) => (
          <div key={service.id} className="w-full flex gap-4">
            <SpotlightCard
              className="custom-spotlight-card hover:rotate-1 duration-300 cursor-pointer"
              spotlightColor="rgba(1, 78, 186, 0.424)"
            >
              <div className="w-full h-[420px] p-10 flex flex-col items-start gap-6 rounded-md ">
                <span>{service.icon}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl text-orange-500">{service.title}</h3>
                  <p className="text-gray-300 text-[12px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center gap-4 max-lg:flex-col">
        {services.slice(-2).map((service, index) => (
          <div key={service.id} className="w-full flex gap-4">
            <SpotlightCard
              className="custom-spotlight-card hover:rotate-1 duration-300 cursor-pointer "
              spotlightColor="rgba(1, 78, 186, 0.424)"
            >
              <div className="w-full h-[420px] p-10 flex flex-col items-start gap-6 rounded-md">
                <div className="relative rounded-md h-auto w-full text-[100px] text-white">
                  {service.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl text-orange-500">{service.title}</h3>
                  <p className="text-gray-300 text-[12px]">
                    {service.description}
                  </p>
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
