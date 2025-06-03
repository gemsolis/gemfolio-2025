import { GrLinkNext } from "react-icons/gr";

const SecondaryButton = ({ title, url, link_target }) => {
  return (
    <a
      href={url}
      target={link_target}
      className="bg-gradient button-text border-slate-400 border text-white py-2 px-2  rounded-md hover:scale-110 duration-300 cursor-pointer flex gap-2 items-center"
    >
      <span className="text-white">{title}</span>
      <span className="text-white bg-black rounded-md p-2">
        <GrLinkNext />
      </span>
    </a>
  );
};

export default SecondaryButton;
