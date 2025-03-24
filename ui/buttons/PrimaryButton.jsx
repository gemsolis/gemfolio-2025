import Link from "next/link";

const PrimaryButton = ({ title, link }) => {
  return (
    <Link
      href="/"
      className="bg-black button-text border-white border text-white px-6 py-2 rounded-md hover:scale-105 duration-500 cursor-pointer"
    >
      {title}
    </Link>
  );
};

export default PrimaryButton;
