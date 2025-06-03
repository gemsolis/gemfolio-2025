import { IoSearchSharp } from "react-icons/io5";

const PrimaryButton = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-black button-text border-slate-400 border text-white py-2 px-2  rounded-md hover:scale-110 duration-300 cursor-pointer flex gap-2 items-center"
    >
      <span className="text-white">{title}</span>
      <span className="text-black bg-white rounded-md p-2">
        <IoSearchSharp />
      </span>
    </a>
  );
};

export default PrimaryButton;
